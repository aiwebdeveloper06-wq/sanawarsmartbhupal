import {
  SCHOOL_INFO,
  STAFF_MEMBERS,
  SHINING_STARS,
  SMC_MEMBERS,
  PTA_MEMBERS,
  FEE_STRUCTURE_ROWS,
  ENROLLMENT_ROWS,
  ACADEMIC_CALENDAR_EVENTS,
  OFFICIAL_DOCUMENTS,
  FACILITIES_DATA,
  GALLERY_PHOTOS,
  getTotalEnrollment
} from './schoolData';

export interface PageSpec {
  filename: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  breadcrumbParent?: { label: string; href: string };
  heroImage?: string;
  mainHtml: string;
}

function renderHead(spec: PageSpec): string {
  const canonicalUrl = `https://sanawarsmartbhupal.com/${spec.filename === 'index.html' ? '' : spec.filename}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${spec.title}</title>
  <meta name="description" content="${spec.description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:title" content="${spec.title}" />
  <meta property="og:description" content="${spec.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="assets/images/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${spec.title}" />
  <meta name="twitter:description" content="${spec.description}" />
  <link rel="icon" type="image/png" href="assets/images/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>`;
}

export function renderHeader(): string {
  return `
  <!-- Top Utility Bar -->
  <div class="top-utility-bar">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div class="d-flex align-items-center flex-wrap">
          <span>${SCHOOL_INFO.addressShort}</span>
          <span class="utility-divider" aria-hidden="true">·</span>
          <span>CBSE Affiliation No. ${SCHOOL_INFO.affiliationNo}</span>
          <span class="utility-divider d-none d-md-inline" aria-hidden="true">·</span>
          <span class="d-none d-md-inline">School Code: ${SCHOOL_INFO.schoolCode}</span>
        </div>
        <div class="d-flex align-items-center flex-wrap">
          <a href="tel:+919417094850">${SCHOOL_INFO.phones[0]}</a>
          <span class="utility-divider" aria-hidden="true">·</span>
          <a href="tel:+919876420039">${SCHOOL_INFO.phones[1]}</a>
          <span class="utility-divider d-none d-sm-inline" aria-hidden="true">·</span>
          <a href="mailto:${SCHOOL_INFO.emails[0]}" class="d-none d-sm-inline">${SCHOOL_INFO.emails[0]}</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Sticky Luxury Header -->
  <header class="site-header">
    <nav class="navbar navbar-expand-xl navbar-dark py-2" aria-label="Primary Navigation">
      <div class="container-xxl px-3 px-xl-4">
        <a class="navbar-brand navbar-brand-wrap" href="index.html">
          <img src="assets/images/logo.png" alt="Sanawar Smart School Bhupal Official Emblem" class="brand-logo-img" loading="eager" />
          <div>
            <span class="brand-title-main">Sanawar Smart School</span>
            <span class="brand-title-sub">Bhupal, Mansa · Let Your Light Shine</span>
          </div>
        </a>

        <button class="navbar-toggler border-0 shadow-none px-2" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav mx-auto mb-2 mb-xl-0 align-items-xl-center">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <!-- About Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="about.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="about.html">About the School</a></li>
                <li><a class="dropdown-item" href="school-managing-committee.html">School Managing Committee</a></li>
                <li><a class="dropdown-item" href="parents-teachers-association.html">Parents Teachers Association</a></li>
                <li><a class="dropdown-item" href="mandatory-disclosure.html">Mandatory Public Disclosure</a></li>
                <li><a class="dropdown-item" href="affiliation-letter.html">CBSE Affiliation Letter</a></li>
                <li><a class="dropdown-item" href="society-certificate.html">Society Registration Certificate</a></li>
                <li><a class="dropdown-item" href="no-objection-certificate.html">No Objection Certificate (NOC)</a></li>
                <li><a class="dropdown-item" href="recognition-certificate.html">RTE Recognition Certificate</a></li>
              </ul>
            </li>

            <!-- Academics Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="curriculum.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="curriculum.html">Academic Curriculum</a></li>
                <li><a class="dropdown-item" href="academic-calendar.html">Academic Calendar</a></li>
                <li><a class="dropdown-item" href="books-list-class-wise.html">List of Books Class-Wise</a></li>
                <li><a class="dropdown-item" href="books-list-2023-24.html">Books List (Session 2023-24)</a></li>
                <li><a class="dropdown-item" href="teachers-training.html">Details of Teachers Training</a></li>
                <li><a class="dropdown-item" href="result-class-10.html">Three Year Result of 10th Class</a></li>
                <li><a class="dropdown-item" href="result-class-12.html">Three Year Result of 12th Class</a></li>
                <li><a class="dropdown-item" href="fee-structure.html">Fee Structure</a></li>
              </ul>
            </li>

            <!-- Facilities Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="facilities.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Facilities</a>
              <div class="dropdown-menu dropdown-menu-wide">
                <div class="row g-2">
                  <div class="col-md-6">
                    <div class="dropdown-header-label">Academic & Labs</div>
                    <a class="dropdown-item" href="facilities.html">All Campus Facilities</a>
                    <a class="dropdown-item" href="infrastructure-detail.html">Infrastructure Detail</a>
                    <a class="dropdown-item" href="school-library.html">School Library</a>
                    <a class="dropdown-item" href="smart-class.html">Smart Classrooms</a>
                    <a class="dropdown-item" href="computer-lab.html">Computer Lab</a>
                    <a class="dropdown-item" href="chemistry-lab.html">Chemistry Lab</a>
                    <a class="dropdown-item" href="physics-lab.html">Physics Lab</a>
                    <a class="dropdown-item" href="biology-lab.html">Biology Lab</a>
                  </div>
                  <div class="col-md-6">
                    <div class="dropdown-header-label">Co-Curricular & Transit</div>
                    <a class="dropdown-item" href="sports-games.html">Sports &amp; Games</a>
                    <a class="dropdown-item" href="shooting-range.html">Shooting Range</a>
                    <a class="dropdown-item" href="cultural-activities.html">Cultural Activities</a>
                    <a class="dropdown-item" href="activity-room.html">Activity Room</a>
                    <a class="dropdown-item" href="music-room.html">Music Room</a>
                    <a class="dropdown-item" href="transport.html">School Transport</a>
                    <a class="dropdown-item" href="route.html">Bus Routes (1 to 13)</a>
                  </div>
                </div>
              </div>
            </li>

            <!-- Activities Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="school-activities.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Activities</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="school-activities.html">School Activities</a></li>
                <li><a class="dropdown-item" href="cultural-activities.html">Cultural Activities &amp; Houses</a></li>
                <li><a class="dropdown-item" href="sports-games.html">Sports &amp; Athletics</a></li>
                <li><a class="dropdown-item" href="school-festivals.html">School Festivals</a></li>
                <li><a class="dropdown-item" href="school-tour.html">Educational School Tour</a></li>
              </ul>
            </li>

            <!-- Gallery Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="gallery.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gallery</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="gallery.html">Complete Campus Gallery</a></li>
                <li><a class="dropdown-item" href="school-festivals.html">School Festivals</a></li>
                <li><a class="dropdown-item" href="school-tour.html">School Tour</a></li>
                <li><a class="dropdown-item" href="school-activities.html">School Activities</a></li>
                <li><a class="dropdown-item" href="cultural-gallery.html">Cultural Gallery</a></li>
                <li><a class="dropdown-item" href="shooting-range.html">Shooting Range</a></li>
                <li><a class="dropdown-item" href="school-library.html">School Library</a></li>
                <li><a class="dropdown-item" href="music-room.html">Music Room</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="staff.html">Our Staff</a>
            </li>

            <!-- Students Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="shining-star.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Students</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="shining-star.html">Shining Stars</a></li>
                <li><a class="dropdown-item" href="student-enrollment.html">Student Enrollment</a></li>
                <li><a class="dropdown-item" href="school-leaving-certificate.html">School Leaving Certificate</a></li>
                <li><a class="dropdown-item" href="fee-structure.html">Fee Structure</a></li>
                <li><a class="dropdown-item" href="route.html">Bus Route Guide</a></li>
              </ul>
            </li>

            <!-- Downloads Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="downloads.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Downloads</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="downloads.html">All Official Downloads</a></li>
                <li><a class="dropdown-item" href="mandatory-disclosure.html">Mandatory Disclosure</a></li>
                <li><a class="dropdown-item" href="building-safety-certificate.html">Building Safety Certificate</a></li>
                <li><a class="dropdown-item" href="fire-safety-certificate.html">Fire Safety Certificate</a></li>
                <li><a class="dropdown-item" href="water-health-sanitation.html">Water, Health &amp; Sanitation</a></li>
                <li><a class="dropdown-item" href="self-certification.html">Self Certification by School</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>

          <div class="d-flex align-items-center ms-xl-2 mt-3 mt-xl-0">
            <a href="contact.html#enquiry-form" class="btn btn-luxury-gold btn-header-cta">Admission Enquiry</a>
          </div>
        </div>
      </div>
    </nav>
  </header>`;
}

export function renderFooter(): string {
  return `
  <!-- Luxury Multi-Column Institutional Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <!-- Column 1: Brand Identity -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center gap-3 mb-3">
            <img src="assets/images/logo.png" alt="Sanawar Smart School Bhupal Logo" class="brand-logo-img" loading="lazy" />
            <div>
              <span class="brand-title-main">Sanawar Smart School</span>
              <span class="brand-title-sub">Bhupal, Mansa (Punjab)</span>
            </div>
          </div>
          <p class="small mb-3" style="color: rgba(255,255,255,0.75);">
            Sanawar Smart School Bhupal (Mansa) provides a stress-free, intellectually stimulating learning environment from Nursery to Class XII, affiliated with CBSE New Delhi (Affiliation No. ${SCHOOL_INFO.affiliationNo}, School Code ${SCHOOL_INFO.schoolCode}).
          </p>
          <p class="font-serif-display fst-italic mb-3" style="color: var(--color-gold); font-size: 1.05rem;">
            "${SCHOOL_INFO.motto}"
          </p>
          <div class="d-flex gap-3">
            <a href="${SCHOOL_INFO.facebookUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-outline py-2 px-3" aria-label="Sanawar Smart School Facebook Page">
              <i class="bi bi-facebook me-1"></i> Facebook
            </a>
            <a href="${SCHOOL_INFO.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-outline py-2 px-3" aria-label="Sanawar Smart School YouTube Channel">
              <i class="bi bi-youtube me-1"></i> YouTube
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="col-lg-2 col-md-6">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About the School</a></li>
            <li><a href="curriculum.html">Academics</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="school-activities.html">Activities</a></li>
            <li><a href="gallery.html">Photo Gallery</a></li>
            <li><a href="staff.html">Our Staff</a></li>
            <li><a href="shining-star.html">Shining Stars</a></li>
            <li><a href="route.html">Bus Routes</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 3: Important & Statutory Links -->
        <div class="col-lg-3 col-md-6">
          <h3 class="footer-heading">Important Links</h3>
          <ul class="footer-links">
            <li><a href="mandatory-disclosure.html">Mandatory Public Disclosure</a></li>
            <li><a href="affiliation-letter.html">CBSE Affiliation Letter</a></li>
            <li><a href="recognition-certificate.html">RTE Recognition Certificate</a></li>
            <li><a href="no-objection-certificate.html">No Objection Certificate</a></li>
            <li><a href="building-safety-certificate.html">Building Safety Certificate</a></li>
            <li><a href="fire-safety-certificate.html">Fire Safety Certificate</a></li>
            <li><a href="result-class-10.html">Class 10th Board Results</a></li>
            <li><a href="result-class-12.html">Class 12th Board Results</a></li>
            <li><a href="fee-structure.html">Fee Structure</a></li>
            <li><a href="academic-calendar.html">Academic Calendar</a></li>
            <li><a href="downloads.html">Downloads &amp; Forms</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact Information -->
        <div class="col-lg-3 col-md-6">
          <h3 class="footer-heading">Contact Office</h3>
          <p class="small mb-2" style="color: rgba(255,255,255,0.85);">
            <strong>Campus Address:</strong><br />
            ${SCHOOL_INFO.addressFull}
          </p>
          <p class="small mb-2" style="color: rgba(255,255,255,0.85);">
            <strong>Telephone:</strong><br />
            <a href="tel:+919417094850" class="text-white">${SCHOOL_INFO.phones[0]}</a><br />
            <a href="tel:+919876420039" class="text-white">${SCHOOL_INFO.phones[1]}</a>
          </p>
          <p class="small mb-3" style="color: rgba(255,255,255,0.85);">
            <strong>Official Email:</strong><br />
            <a href="mailto:${SCHOOL_INFO.emails[0]}" class="text-white">${SCHOOL_INFO.emails[0]}</a><br />
            <a href="mailto:${SCHOOL_INFO.emails[1]}" class="text-white">${SCHOOL_INFO.emails[1]}</a>
          </p>
          <p class="small mb-0" style="color: rgba(230,184,74,0.9);">
            Managed by ${SCHOOL_INFO.society}
          </p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <div>
            &copy; Sanawar Smart School Bhupal. All Rights Reserved.
          </div>
          <div>
            Designed &amp; Developed by <a href="https://outdosystem.com/" target="_blank" rel="noopener noreferrer" style="color: var(--color-gold); font-weight: 600;">Outdo System</a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

function renderInnerHero(spec: PageSpec): string {
  const bgImg = spec.heroImage || 'assets/images/campus/campus-main.jpg';
  const parentCrumb = spec.breadcrumbParent
    ? `<li class="breadcrumb-item"><a href="${spec.breadcrumbParent.href}">${spec.breadcrumbParent.label}</a></li>`
    : '';
  return `
  <section class="page-hero-banner">
    <img src="${bgImg}" alt="${spec.h1} — Sanawar Smart School Bhupal" class="page-hero-bg" loading="eager" />
    <div class="page-hero-overlay"></div>
    <div class="container page-hero-content">
      <span class="eyebrow-label eyebrow-gold">${spec.kicker}</span>
      <h1 class="page-hero-title">${spec.h1}</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-luxury">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          ${parentCrumb}
          <li class="breadcrumb-item active" aria-current="page">${spec.h1}</li>
        </ol>
      </nav>
    </div>
  </section>`;
}

function renderCtaBanner(): string {
  return `
  <section class="section-padding-sm bg-navy border-top border-bottom" style="border-color: rgba(230,184,74,0.3) !important;">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-8">
          <span class="eyebrow-label eyebrow-gold">SANAWAR SMART SCHOOL BHUPAL · NURSERY TO CLASS XII</span>
          <h2 class="mb-2">Give Your Child a Brighter Beginning</h2>
          <p class="mb-0">
            Experience a stress-free, values-driven CBSE senior secondary campus where academic rigor meets holistic character development.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <div class="d-flex flex-wrap gap-3 justify-content-lg-end">
            <a href="contact.html" class="btn btn-luxury-gold">Contact School</a>
            <a href="facilities.html" class="btn btn-luxury-outline">Explore Campus</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function renderPageDocument(spec: PageSpec, isHome = false): string {
  return `${renderHead(spec)}
<body>
  ${renderHeader()}
  <main>
    ${isHome ? '' : renderInnerHero(spec)}
    ${spec.mainHtml}
    ${isHome ? '' : renderCtaBanner()}
  </main>
  ${renderFooter()}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}
