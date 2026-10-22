import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  REQUIRED_PAGES,
  STAFF_MEMBERS,
  SHINING_STARS,
  SMC_MEMBERS,
  PTA_MEMBERS,
  FEE_STRUCTURE_ROWS,
  ENROLLMENT_ROWS,
  OFFICIAL_DOCUMENTS,
  getTotalEnrollment
} from './schoolData';
import { getAllPageSpecs } from './innerPagesContent';
import { renderPageDocument } from './siteBuilder';

test('enrollment calculation matches official CBSE disclosure', () => {
  const totals = getTotalEnrollment();
  assert.equal(totals.totalSections, 30);
  assert.equal(totals.totalStudents, 832);
});

test('authentic rosters contain verified counts with zero hacked entries', () => {
  assert.equal(STAFF_MEMBERS.length, 16);
  assert.equal(SHINING_STARS.length, 12);
  assert.equal(SMC_MEMBERS.length, 16);
  assert.equal(PTA_MEMBERS.length, 7);
  assert.equal(FEE_STRUCTURE_ROWS.length, 18);
  assert.equal(ENROLLMENT_ROWS.length, 13);
  assert.equal(OFFICIAL_DOCUMENTS.length, 16);

  for (const staff of STAFF_MEMBERS) {
    assert.ok(!staff.name.toLowerCase().includes('emorah4ck'));
    assert.ok(!staff.role.toLowerCase().includes('hacker'));
  }
});

test('all 47 required HTML pages are specified with unique titles and descriptions', () => {
  const specs = getAllPageSpecs();
  const specFilenames = specs.map((s) => s.filename);

  assert.equal(specs.length, REQUIRED_PAGES.length);
  for (const reqPage of REQUIRED_PAGES) {
    assert.ok(specFilenames.includes(reqPage), `Missing required page: ${reqPage}`);
  }

  const titles = new Set(specs.map((s) => s.title));
  const descriptions = new Set(specs.map((s) => s.description));
  assert.equal(titles.size, specs.length, 'Every page must have a unique <title>');
  assert.equal(descriptions.size, specs.length, 'Every page must have a unique meta description');
});

test('all 47 rendered HTML files exist on disk, contain zero spam/hacked text, and have valid local links and assets', () => {
  const rootDir = process.cwd();
  const specs = getAllPageSpecs();

  for (const spec of specs) {
    const html = renderPageDocument(spec, spec.filename === 'index.html');
    const filePath = path.join(rootDir, spec.filename);
    fs.writeFileSync(filePath, html, 'utf-8');
  }

  const bannedPhrases = [
    'emorah4ck',
    'this website hacked',
    'lorem ipsum',
    'denouncing pleasure',
    'prsing pain',
    '9/99/9999'
  ];

  for (const pageFile of REQUIRED_PAGES) {
    const fullPath = path.join(rootDir, pageFile);
    assert.ok(fs.existsSync(fullPath), `File missing on disk: ${pageFile}`);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const lower = content.toLowerCase();

    for (const banned of bannedPhrases) {
      assert.ok(!lower.includes(banned), `Banned phrase "${banned}" found in ${pageFile}`);
    }

    // Semantic tags check
    assert.ok(content.includes('<header class="site-header">'), `<header> missing in ${pageFile}`);
    assert.ok(content.includes('<nav '), `<nav> missing in ${pageFile}`);
    assert.ok(content.includes('<main>'), `<main> missing in ${pageFile}`);
    assert.ok(content.includes('<section '), `<section> missing in ${pageFile}`);
    assert.ok(content.includes('<footer class="site-footer">'), `<footer> missing in ${pageFile}`);

    // Single H1 check
    const h1Matches = content.match(/<h1[\s>]/g) || [];
    assert.equal(h1Matches.length, 1, `Expected exactly 1 <h1> in ${pageFile}, found ${h1Matches.length}`);

    // No <script> inside <main>
    const mainMatch = content.match(/<main>([\s\S]*?)<\/main>/);
    assert.ok(mainMatch, `<main> block not found in ${pageFile}`);
    assert.ok(!mainMatch[1].includes('<script'), `Inline <script> found inside <main> in ${pageFile}`);

    // Check all local image and asset references exist on disk
    const assetRefs = [...content.matchAll(/(?:src|href|data)=["'](assets\/[^"'#?]+)["']/g)].map((m) => m[1]);
    for (const relAsset of assetRefs) {
      const assetDiskPath = path.join(rootDir, relAsset);
      assert.ok(fs.existsSync(assetDiskPath), `Missing asset "${relAsset}" referenced in ${pageFile}`);
      const stat = fs.statSync(assetDiskPath);
      assert.ok(stat.size > 0, `Empty asset file "${relAsset}" referenced in ${pageFile}`);
    }

    // Check all local .html links resolve to a valid page
    const pageLinks = [...content.matchAll(/href=["']([a-z0-9-]+\.html)(?:#[^"']*)?["']/g)].map((m) => m[1]);
    for (const targetHtml of pageLinks) {
      assert.ok(
        REQUIRED_PAGES.includes(targetHtml),
        `Broken internal page link "${targetHtml}" found in ${pageFile}`
      );
    }
  }
});
