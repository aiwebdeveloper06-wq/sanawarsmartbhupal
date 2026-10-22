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
import { PageSpec } from './siteBuilder';
import { buildHomePageMainHtml } from './homePageContent';

function renderDocumentCardBlock(docId: string): string {
  const doc = OFFICIAL_DOCUMENTS.find((d) => d.id === docId);
  if (!doc) return '';
  return `
  <div class="document-card">
    <div>
      <div class="meta-line mb-1">${doc.category} <span class="sep">·</span> ${doc.referenceNo}</div>
      <h3 class="h5 fw-bold mb-2">${doc.title}</h3>
      <p class="small mb-2"><strong>Issuing Authority:</strong> ${doc.authority}</p>
      <p class="small mb-4">${doc.description}</p>
    </div>
    <div class="d-flex flex-wrap gap-2">
      <a href="${doc.pdfPath}" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View Document</a>
      <a href="${doc.pdfPath}" download class="btn btn-luxury-outline-dark btn-sm">Download PDF</a>
    </div>
  </div>`;
}

function renderFacilityPageSpec(slug: string): PageSpec {
  const f = FACILITIES_DATA.find((item) => item.slug === slug)!;
  const otherFacilities = FACILITIES_DATA.filter((item) => item.slug !== slug).slice(0, 6);
  return {
    filename: f.slug,
    title: `${f.title} | Sanawar Smart School Bhupal, Mansa`,
    description: `${f.title} at Sanawar Smart School Bhupal, Mansa, Punjab — ${f.shortDesc}`,
    h1: f.title,
    kicker: `CAMPUS FACILITY · ${f.kicker.toUpperCase()}`,
    breadcrumbParent: { label: 'Facilities', href: 'facilities.html' },
    heroImage: f.image,
    mainHtml: `
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 reveal-left">
            <div class="editorial-image-frame">
              <img src="${f.image}" alt="${f.title} at Sanawar Smart School Bhupal" loading="lazy" />
              <div class="editorial-caption-bar">${f.title} — ${SCHOOL_INFO.name}</div>
            </div>
            ${
              f.secondaryImage
                ? `<div class="editorial-image-frame mt-4">
                     <img src="${f.secondaryImage}" alt="${f.title} Secondary View — Sanawar Smart School Bhupal" loading="lazy" />
                   </div>`
                : ''
            }
          </div>
          <div class="col-lg-6 reveal-right">
            <span class="eyebrow-label">${f.kicker}</span>
            <h2 class="display-6 fw-bold mb-3">${f.title}</h2>
            <div class="gold-rule"></div>
            ${f.fullDesc.map((p) => `<p>${p}</p>`).join('')}
            <div class="luxury-card p-4 mt-4 bg-light-canvas">
              <h3 class="h6 fw-bold text-uppercase mb-3" style="letter-spacing: 0.1em;">Key Highlights &amp; Specifications</h3>
              <ul class="mb-0 ps-3">
                ${f.highlights.map((h) => `<li class="mb-2 small text-dark">${h}</li>`).join('')}
              </ul>
            </div>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a href="facilities.html" class="btn btn-luxury-navy">All Facilities</a>
              <a href="contact.html#enquiry-form" class="btn btn-luxury-outline-dark">Schedule Campus Visit</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding-sm bg-light-canvas border-top">
      <div class="container">
        <span class="eyebrow-label">EXPLORE MORE ON CAMPUS</span>
        <h2 class="h3 fw-bold mb-4">Other Facilities at Sanawar Smart School Bhupal</h2>
        <div class="row g-4">
          ${otherFacilities
            .map(
              (o) => `
          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="luxury-card d-flex flex-column">
              <div class="card-img-frame">
                <img src="${o.image}" alt="${o.title}" loading="lazy" />
              </div>
              <div class="card-body-luxury d-flex flex-column flex-grow-1">
                <div class="meta-line mb-1">${o.kicker}</div>
                <h3 class="h5 fw-bold mb-2">${o.title}</h3>
                <p class="small mb-3 flex-grow-1">${o.shortDesc}</p>
                <a href="${o.slug}" class="btn btn-luxury-outline-dark btn-sm align-self-start">Explore</a>
              </div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>`
  };
}

function renderGalleryCategoryPage(
  filename: string,
  title: string,
  kicker: string,
  description: string,
  filterFn: (p: typeof GALLERY_PHOTOS[0]) => boolean,
  introCopy: string
): PageSpec {
  const matched = GALLERY_PHOTOS.filter(filterFn);
  const photos = matched.length > 0 ? matched : GALLERY_PHOTOS;
  return {
    filename,
    title: `${title} | Gallery — Sanawar Smart School Bhupal`,
    description,
    h1: title,
    kicker,
    breadcrumbParent: { label: 'Gallery', href: 'gallery.html' },
    heroImage: photos[0]?.src || 'assets/images/campus/campus-main.jpg',
    mainHtml: `
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-4">
          <div class="col-lg-8">
            <span class="eyebrow-label">${kicker}</span>
            <h2 class="display-6 fw-bold mb-2">${title}</h2>
            <div class="gold-rule"></div>
            <p class="mb-0">${introCopy}</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="gallery.html" class="btn btn-luxury-outline-dark">View Complete Gallery</a>
          </div>
        </div>

        <!-- Category Navigation Links (HTML/CSS only) -->
        <div class="d-flex flex-wrap gap-2 mb-5 pb-3 border-bottom">
          <a href="gallery.html" class="btn ${filename === 'gallery.html' ? 'btn-luxury-navy' : 'btn-luxury-outline-dark'} btn-sm">All Categories</a>
          <a href="school-festivals.html" class="btn ${filename === 'school-festivals.html' ? 'btn-luxury-navy' : 'btn-luxury-outline-dark'} btn-sm">School Festivals</a>
          <a href="school-tour.html" class="btn ${filename === 'school-tour.html' ? 'btn-luxury-navy' : 'btn-luxury-outline-dark'} btn-sm">School Tour</a>
          <a href="school-activities.html" class="btn ${filename === 'school-activities.html' ? 'btn-luxury-navy' : 'btn-luxury-outline-dark'} btn-sm">School Activities</a>
          <a href="cultural-gallery.html" class="btn ${filename === 'cultural-gallery.html' ? 'btn-luxury-navy' : 'btn-luxury-outline-dark'} btn-sm">Cultural Activities</a>
          <a href="shooting-range.html" class="btn btn-luxury-outline-dark btn-sm">Shooting Range</a>
          <a href="school-library.html" class="btn btn-luxury-outline-dark btn-sm">Library</a>
          <a href="music-room.html" class="btn btn-luxury-outline-dark btn-sm">Music Room</a>
        </div>

        <div class="row g-4">
          ${photos
            .map(
              (item, idx) => `
          <div class="${idx === 0 && photos.length > 3 ? 'col-lg-8' : 'col-md-6 col-lg-4'} reveal-up">
            <div class="gallery-item-card ${idx === 0 && photos.length > 3 ? 'gallery-featured' : ''}">
              <img src="${item.src}" alt="${item.title} — ${item.category} at Sanawar Smart School Bhupal" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-cat-kicker">${item.category}</span>
                <h3 class="gallery-title">${item.title}</h3>
              </div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>`
  };
}

function renderCertificatePage(
  filename: string,
  docId: string,
  kicker: string,
  summaryRows: Array<[string, string]>,
  additionalNotes: string[]
): PageSpec {
  const doc = OFFICIAL_DOCUMENTS.find((d) => d.id === docId)!;
  return {
    filename,
    title: `${doc.title} | Sanawar Smart School Bhupal, Mansa`,
    description: `${doc.title} (${doc.referenceNo}) of Sanawar Smart School Bhupal, Mansa, Punjab — ${doc.description}`,
    h1: doc.title,
    kicker,
    breadcrumbParent: { label: 'Mandatory Disclosure', href: 'mandatory-disclosure.html' },
    mainHtml: `
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7 reveal-left">
            <span class="eyebrow-label">${doc.category}</span>
            <h2 class="h2 fw-bold mb-2">${doc.title}</h2>
            <div class="gold-rule"></div>
            <p>${doc.description}</p>

            <div class="table-responsive my-4">
              <table class="table table-luxury">
                <thead>
                  <tr>
                    <th>Statutory Field</th>
                    <th>Verified Record Details</th>
                  </tr>
                </thead>
                <tbody>
                  ${summaryRows
                    .map(
                      ([k, v]) => `
                  <tr>
                    <td class="fw-bold">${k}</td>
                    <td>${v}</td>
                  </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>

            ${additionalNotes.map((n) => `<p class="small">${n}</p>`).join('')}
          </div>

          <div class="col-lg-5 reveal-right">
            ${renderDocumentCardBlock(docId)}

            <div class="luxury-card p-4 mt-4 bg-light-canvas">
              <span class="eyebrow-label">EMBEDDED DOCUMENT PREVIEW</span>
              <h3 class="h6 fw-bold mb-3">Official Scanned Certificate PDF</h3>
              <object data="${doc.pdfPath}" type="application/pdf" width="100%" height="380" class="border rounded-1 bg-white">
                <p class="small p-3 mb-0">
                  Your browser does not support inline PDF viewing. Please use the <a href="${doc.pdfPath}" target="_blank" rel="noopener noreferrer">View Document</a> or <a href="${doc.pdfPath}" download>Download PDF</a> buttons above.
                </p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>`
  };
}

export function getAllPageSpecs(): PageSpec[] {
  const { totalSections, totalStudents } = getTotalEnrollment();

  const specs: PageSpec[] = [
    // 1. index.html
    {
      filename: 'index.html',
      title: 'Sanawar Smart School Bhupal | Mansa, Punjab',
      description:
        'Sanawar Smart School Bhupal, Mansa, Punjab — nurturing academic excellence, character, creativity and holistic development in a modern CBSE senior secondary learning environment.',
      h1: 'Where Learning Inspires a Brighter Future',
      kicker: 'SANAWAR SMART SCHOOL BHUPAL',
      mainHtml: buildHomePageMainHtml()
    },

    // 2. about.html
    {
      filename: 'about.html',
      title: 'About Us | Sanawar Smart School Bhupal, Mansa',
      description:
        'Learn about Sanawar Smart School Bhupal (Mansa, Punjab), affiliated with CBSE New Delhi (1631322), managed by Guru Gobind Singh Educational & Welfare Society.',
      h1: 'About Sanawar Smart School Bhupal',
      kicker: 'INSTITUTIONAL HERITAGE & VISION',
      heroImage: 'assets/images/campus/campus-main.jpg',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 reveal-left">
              <div class="editorial-image-frame">
                <img src="assets/images/campus/campus-main.jpg" alt="Sanawar Smart School Bhupal Campus" loading="lazy" />
                <div class="editorial-caption-bar">Sanawar Smart School Bhupal (Mansa), Punjab — CBSE Affiliation No. 1631322</div>
              </div>
            </div>
            <div class="col-lg-6 reveal-right">
              <span class="eyebrow-label">WELCOME TO SANAWAR SMART SCHOOL</span>
              <h2 class="display-6 fw-bold mb-2">A Stress-Free Environment for Holistic Excellence</h2>
              <p class="font-serif-display fst-italic mb-3" style="color: var(--color-secondary); font-size: 1.15rem;">"${SCHOOL_INFO.motto}"</p>
              <div class="gold-rule"></div>
              <p>
                Welcome to the website of <strong>Sanawar Smart School Bhupal (Mansa)</strong>. Our primary mission is to provide a stress-free environment for children to make them intellectually, emotionally, and psychologically strong individuals.
              </p>
              <p>
                In the 21st century, we need a system of education which promises a wholesome personality of each learner. The Sanawar Smart School Bhupal (Mansa) family strives at its best level to develop the learning abilities of its students and provides experiences that enable them to explore the outside world and teaches them to find connections between these experiences and their inner selves.
              </p>
              <p class="mb-0">
                Every child is differently able, and if one is not good at something today, it is only because their potential has not yet been realized for one reason or another. The seeds of success are sown in the early years of a child's life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-light-canvas border-top border-bottom">
        <div class="container">
          <span class="eyebrow-label">INSTITUTIONAL AT A GLANCE</span>
          <h2 class="h3 fw-bold mb-4">Official School Profile &amp; Governance</h2>
          <div class="table-responsive">
            <table class="table table-luxury bg-white">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Official Details</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="fw-bold">Name of the School</td><td>Sanawar Smart School Bhupal</td></tr>
                <tr><td class="fw-bold">School Motto</td><td>"Let Your Light Shine"</td></tr>
                <tr><td class="fw-bold">CBSE Affiliation Number</td><td>1631322 (Senior Secondary Level — Class 1 to 12)</td></tr>
                <tr><td class="fw-bold">CBSE School Code</td><td>21360</td></tr>
                <tr><td class="fw-bold">U-DISE Code</td><td>03150103007</td></tr>
                <tr><td class="fw-bold">Managing Society</td><td>Guru Gobind Singh Educational &amp; Welfare Society, Mansa-151505 (Pb.) (Reg. No. 420 of 2013-14)</td></tr>
                <tr><td class="fw-bold">Chairman</td><td>S. Sandeep Singh Mann</td></tr>
                <tr><td class="fw-bold">Principal</td><td>S. Baljeet Singh Balli / Baljit Singh Sidhu (${SCHOOL_INFO.principalQualification})</td></tr>
                <tr><td class="fw-bold">Complete Campus Address</td><td>${SCHOOL_INFO.addressFull}</td></tr>
                <tr><td class="fw-bold">Contact Numbers</td><td>${SCHOOL_INFO.phones.join(', ')}</td></tr>
                <tr><td class="fw-bold">Official Email</td><td>${SCHOOL_INFO.emails.join(' / ')}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>`
    },

    // 3. facilities.html
    {
      filename: 'facilities.html',
      title: 'Campus Facilities | Sanawar Smart School Bhupal, Mansa',
      description:
        'Explore the library, smart classrooms, computer lab, physics, chemistry and biology labs, indoor shooting range, sports arena, and transport facilities at Sanawar Smart School Bhupal.',
      h1: 'Campus Facilities & Laboratories',
      kicker: '10,901 SQ. MTR. MODERN EDUCATIONAL CAMPUS',
      heroImage: 'assets/images/facilities/school-library.jpg',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">COMPREHENSIVE LEARNING INFRASTRUCTURE</span>
              <h2 class="display-6 fw-bold mb-2">Designed for Inquiry, Creativity &amp; Athletic Vitality</h2>
              <div class="gold-rule"></div>
              <p class="mb-0">
                Every facility at Sanawar Smart School Bhupal is purposefully designed to support experiential CBSE education from Nursery to Class XII.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="infrastructure-detail.html" class="btn btn-luxury-navy">CBSE Infrastructure Report</a>
            </div>
          </div>

          <div class="row g-4">
            ${FACILITIES_DATA.map(
              (f) => `
            <div class="col-md-6 col-lg-4 reveal-up">
              <article class="luxury-card d-flex flex-column">
                <div class="card-img-frame">
                  <img src="${f.image}" alt="${f.title}" loading="lazy" />
                </div>
                <div class="card-body-luxury d-flex flex-column flex-grow-1">
                  <div class="meta-line mb-1">${f.kicker}</div>
                  <h3 class="h5 fw-bold mb-2">${f.title}</h3>
                  <p class="small mb-4 flex-grow-1">${f.shortDesc}</p>
                  <a href="${f.slug}" class="btn btn-luxury-outline-dark btn-sm align-self-start">Explore Facility</a>
                </div>
              </article>
            </div>`
            ).join('')}
          </div>
        </div>
      </section>`
    },

    // 4-9 & 15-17 & 23-25: Individual Facility Pages
    renderFacilityPageSpec('sports-games.html'),
    renderFacilityPageSpec('smart-class.html'),
    renderFacilityPageSpec('computer-lab.html'),
    renderFacilityPageSpec('cultural-activities.html'),
    renderFacilityPageSpec('transport.html'),
    renderFacilityPageSpec('activity-room.html'),
    renderFacilityPageSpec('shooting-range.html'),
    renderFacilityPageSpec('school-library.html'),
    renderFacilityPageSpec('music-room.html'),
    renderFacilityPageSpec('chemistry-lab.html'),
    renderFacilityPageSpec('physics-lab.html'),
    renderFacilityPageSpec('biology-lab.html'),

    // 10-14: Gallery Pages
    renderGalleryCategoryPage(
      'gallery.html',
      'Campus Photo Gallery',
      'VISUAL ARCHIVE OF SANAWAR SMART SCHOOL BHUPAL',
      'Explore authentic photographs of school festivals, educational tours, co-curricular activities, shooting range, library, science laboratories, and sports at Sanawar Smart School Bhupal.',
      () => true,
      'Browse authentic moments from our campus life, cultural festivals, educational tours, science laboratories, indoor shooting range, and athletic competitions.'
    ),
    renderGalleryCategoryPage(
      'school-festivals.html',
      'School Festivals Gallery',
      'CULTURAL & SEASONAL CELEBRATIONS',
      'Photographs of school festivals, stage performances, and cultural celebrations at Sanawar Smart School Bhupal, Mansa.',
      (p) => p.categorySlug === 'school-festivals.html',
      'Celebrating India and Punjab’s rich cultural heritage through vibrant assemblies, patriotic observances, Lohri, Baisakhi, Diwali, and inter-house festival showcases.'
    ),
    renderGalleryCategoryPage(
      'school-tour.html',
      'Educational School Tour Gallery',
      'LEARNING BEYOND THE CLASSROOM',
      'Authentic photographs from educational tours and student excursions organized by Sanawar Smart School Bhupal, Mansa.',
      (p) => p.categorySlug === 'school-tour.html',
      'Educational tours and field excursions enable our students to explore the wider world, build lifelong friendships, and connect classroom learning with real-world experiences.'
    ),
    renderGalleryCategoryPage(
      'school-activities.html',
      'School Activities Gallery',
      'EXPERIENTIAL & CO-CURRICULAR LIFE',
      'Explore student activities, inter-house competitions, art and craft workshops, and morning assemblies at Sanawar Smart School Bhupal.',
      (p) => p.categorySlug === 'school-activities.html',
      'From science and mathematics quizzes to calligraphy, diya making, fancy dress, and group presentations, our activity calendar engages every learner from Nursery to Class XII.'
    ),
    renderGalleryCategoryPage(
      'cultural-gallery.html',
      'Cultural Activities Gallery',
      'ARTS, MUSIC, DANCE & HOUSE COMPETITIONS',
      'Cultural activities and house competition photographs from Sanawar Smart School Bhupal, Mansa, Punjab.',
      (p) => p.categorySlug === 'school-festivals.html' || p.categorySlug === 'school-activities.html',
      'Showcasing creative talent nurtured across Mother Teresa House, Bhagat Singh House, Dr. Kalam House, and Ms. Kalpana House.'
    ),

    // 18. school-managing-committee.html
    {
      filename: 'school-managing-committee.html',
      title: 'School Managing Committee (SMC) | Sanawar Smart School Bhupal',
      description:
        'Official roster of the 16-member School Managing Committee (SMC) of Sanawar Smart School Bhupal, Mansa under Guru Gobind Singh Educational & Welfare Society.',
      h1: 'School Managing Committee (SMC)',
      kicker: 'INSTITUTIONAL GOVERNANCE · CBSE AFFILIATION NO. 1631322',
      breadcrumbParent: { label: 'About', href: 'about.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">STATUTORY GOVERNING BODY</span>
              <h2 class="h3 fw-bold mb-2">List of School Managing Committee Members</h2>
              <div class="gold-rule"></div>
              <p>
                Sanawar Smart School Bhupal (Mansa) operates under the aegis of <strong>${SCHOOL_INFO.society}</strong>. Below is the complete, verified 16-member School Managing Committee roster as filed with CBSE New Delhi.
              </p>
              <div class="table-responsive mt-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Member Name</th>
                      <th>Father / Spouse Name</th>
                      <th>Designation</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${SMC_MEMBERS.map(
                      (m) => `
                    <tr>
                      <td>${m.srNo}</td>
                      <td class="fw-bold">${m.memberName}</td>
                      <td>${m.fatherOrSpouseName}</td>
                      <td>${m.designation}</td>
                      <td>${m.address}</td>
                    </tr>`
                    ).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('school-managing-committee')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 19. school-leaving-certificate.html
    {
      filename: 'school-leaving-certificate.html',
      title: 'School Leaving Certificate (SLC) | Sanawar Smart School Bhupal',
      description:
        'Official School Leaving Certificate (Transfer Certificate) specimen and verification format of Sanawar Smart School Bhupal, Mansa, Punjab.',
      h1: 'School Leaving Certificate',
      kicker: 'OFFICIAL TRANSFER CERTIFICATE FORMAT',
      breadcrumbParent: { label: 'Students', href: 'shining-star.html' },
      heroImage: 'assets/images/campus/school-leaving-certificate.jpg',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5 align-items-start">
            <div class="col-lg-6">
              <span class="eyebrow-label">TRANSFER &amp; LEAVING CERTIFICATE</span>
              <h2 class="h3 fw-bold mb-2">Official School Leaving Certificate Specimen</h2>
              <div class="gold-rule"></div>
              <p>
                In compliance with CBSE Affiliation Bye-Laws, Sanawar Smart School Bhupal maintains a standardized 23-point <strong>School Leaving Certificate (SLC)</strong> register countersigned by the Class Teacher, Checked By official, and Principal.
              </p>
              <div class="luxury-card p-4 my-4 bg-light-canvas">
                <h3 class="h6 fw-bold text-uppercase mb-3">Key Statutory Fields Recorded on the SLC</h3>
                <ol class="small mb-0 ps-3">
                  <li class="mb-1">Name of Pupil, Father's/Guardian's Name &amp; Mother's Name</li>
                  <li class="mb-1">Nationality &amp; Category (SC/ST/OBC/General)</li>
                  <li class="mb-1">Date of First Admission in the School with Class</li>
                  <li class="mb-1">Date of Birth according to Admission Register (in figures and words)</li>
                  <li class="mb-1">Class in which the pupil last studied &amp; Annual Examination Result</li>
                  <li class="mb-1">Subjects Studied (1 to 8) &amp; Promotion Qualification to Higher Class</li>
                  <li class="mb-1">Month up to which school dues are paid &amp; any fee concessions availed</li>
                  <li class="mb-1">Total number of working days &amp; total number of working days present</li>
                  <li class="mb-1">Games played / Extra-curricular activities &amp; General Conduct</li>
                  <li class="mb-0">Date of application, Date of issue, and Reason for leaving the school</li>
                </ol>
              </div>
              <div class="d-flex flex-wrap gap-3">
                <a href="assets/images/campus/school-leaving-certificate.jpg" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy">View Full Certificate Image</a>
                <a href="assets/images/campus/school-leaving-certificate.jpg" download="Sanawar-Smart-School-Leaving-Certificate.jpg" class="btn btn-luxury-outline-dark">Download Specimen</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="editorial-image-frame">
                <img src="assets/images/campus/school-leaving-certificate.jpg" alt="Official School Leaving Certificate Format of Sanawar Smart School Bhupal" loading="lazy" />
                <div class="editorial-caption-bar">Official School Leaving Certificate Specimen — Sanawar Smart School Bhupal (Mansa)</div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    },

    // 20. infrastructure-detail.html
    {
      filename: 'infrastructure-detail.html',
      title: 'Infrastructure Detail | Sanawar Smart School Bhupal, Mansa',
      description:
        'Verified CBSE campus infrastructure details of Sanawar Smart School Bhupal: 10,901.218 Sq. Mtr. campus, 10,051.218 Sq. Mtr. playground, 30 classrooms, and 5 laboratories.',
      h1: 'Infrastructure Detail',
      kicker: 'CBSE SARAS 4.0 & INSPECTION INFRASTRUCTURE REPORT',
      breadcrumbParent: { label: 'Facilities', href: 'facilities.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">SECTION E · MANDATORY PUBLIC DISCLOSURE &amp; CBSE AFFILIATION REPORT</span>
              <h2 class="h3 fw-bold mb-2">Verified School Campus &amp; Infrastructure Specifications</h2>
              <div class="gold-rule"></div>
              <p>
                Below are the official physical infrastructure dimensions and room capacities of <strong>Sanawar Smart School Bhupal (Mansa)</strong> as recorded in the CBSE Mandatory Public Disclosure (Appendix-IX) and CBSE Affiliation Inspection Report.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Infrastructure Parameter</th>
                      <th>Count / Units</th>
                      <th>Verified Area / Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td class="fw-bold">Total Campus Area of the School</td><td>Single Contiguous Plot</td><td>10,901.218 Sq. Meters</td></tr>
                    <tr><td>2</td><td class="fw-bold">Built-Up Area</td><td>Main Academic Block (G+3)</td><td>850.00 Sq. Meters</td></tr>
                    <tr><td>3</td><td class="fw-bold">Area of Playground</td><td>Main Athletic &amp; Sports Ground</td><td>10,051.218 Sq. Meters</td></tr>
                    <tr><td>4</td><td class="fw-bold">Occupied Classrooms</td><td>30 Classrooms</td><td>47 Sq. Meters (484.37 Sq. Ft.) each</td></tr>
                    <tr><td>5</td><td class="fw-bold">Additional / Vacant Classrooms</td><td>30 Classrooms</td><td>484.37 Sq. Ft. each</td></tr>
                    <tr><td>6</td><td class="fw-bold">School Library Media Center</td><td>01 Hall</td><td>1,300.50 Sq. Feet</td></tr>
                    <tr><td>7</td><td class="fw-bold">Composite Science Lab</td><td>01 Lab</td><td>56 Sq. Meters (775.64 Sq. Ft.)</td></tr>
                    <tr><td>8</td><td class="fw-bold">Physics Laboratory</td><td>01 Lab</td><td>56 Sq. Meters (775.64 Sq. Ft.)</td></tr>
                    <tr><td>9</td><td class="fw-bold">Chemistry Laboratory</td><td>01 Lab</td><td>56 Sq. Meters (775.64 Sq. Ft.)</td></tr>
                    <tr><td>10</td><td class="fw-bold">Biology Laboratory</td><td>01 Lab</td><td>56 Sq. Meters (775.64 Sq. Ft.)</td></tr>
                    <tr><td>11</td><td class="fw-bold">Computer Laboratory</td><td>01 Lab</td><td>56 Sq. Meters (775.64 Sq. Ft.)</td></tr>
                    <tr><td>12</td><td class="fw-bold">Mathematics Laboratory</td><td>01 Lab</td><td>510.00 Sq. Feet</td></tr>
                    <tr><td>13</td><td class="fw-bold">Broadband Internet Facility</td><td>Campus-Wide</td><td>YES (Always-On Broadband)</td></tr>
                    <tr><td>14</td><td class="fw-bold">Sanitation Facilities (Girls Toilets)</td><td>06 Dedicated Units</td><td>Hygienic &amp; Separate</td></tr>
                    <tr><td>15</td><td class="fw-bold">Sanitation Facilities (Boys Toilets)</td><td>06 Dedicated Units</td><td>Hygienic &amp; Separate</td></tr>
                    <tr><td>16</td><td class="fw-bold">Drinking Water Facility</td><td>RO / CWPP Purifier Plant</td><td>Certified Safe (IS-10500:2012)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="document-card mb-4">
                <div>
                  <div class="meta-line mb-1">INSPECTION VIDEO</div>
                  <h3 class="h5 fw-bold mb-2">CBSE Infrastructure Inspection Video</h3>
                  <p class="small mb-3">
                    Official YouTube inspection video covering the campus buildings, classrooms, laboratories, and infrastructure of Sanawar Smart School Bhupal as listed in Appendix-IX.
                  </p>
                </div>
                <a href="${SCHOOL_INFO.inspectionVideoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm align-self-start">
                  <i class="bi bi-youtube me-1"></i> Watch Inspection Video
                </a>
              </div>
              ${renderDocumentCardBlock('mandatory-disclosure')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 21. student-enrollment.html
    {
      filename: 'student-enrollment.html',
      title: 'Student Enrollment | Sanawar Smart School Bhupal, Mansa',
      description:
        'Class-wise section and student enrollment details of Sanawar Smart School Bhupal, Mansa from Nursery/KG to Class 12th.',
      h1: 'Student Enrollment Details',
      kicker: 'CLASS-WISE SECTIONS & STUDENT STRENGTH',
      breadcrumbParent: { label: 'Students', href: 'shining-star.html' },
      heroImage: 'assets/images/campus/student-enrollment.jpg',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5 align-items-start">
            <div class="col-lg-7">
              <span class="eyebrow-label">OFFICIAL ENROLLMENT REGISTER</span>
              <h2 class="h3 fw-bold mb-2">Detail of Sections and Students (Nursery to Class 12th)</h2>
              <div class="gold-rule"></div>
              <p>
                Below is the class-wise section and student enrollment record of <strong>Sanawar Smart School Bhupal (Mansa)</strong> across all ${totalSections} sections.
              </p>

              <div class="table-responsive mt-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>No. of Sections</th>
                      <th>No. of Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${ENROLLMENT_ROWS.map(
                      (r) => `
                    <tr>
                      <td class="fw-bold">${r.className}</td>
                      <td>${r.sections}</td>
                      <td>${r.students}</td>
                    </tr>`
                    ).join('')}
                    <tr class="table-dark">
                      <td class="fw-bold text-white">Total Active Strength</td>
                      <td class="fw-bold text-white">${totalSections} Sections</td>
                      <td class="fw-bold text-white">${totalStudents} Students</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="editorial-image-frame">
                <img src="assets/images/campus/student-enrollment.jpg" alt="Official Detail of Section and Students Chart — Sanawar Smart School Bhupal" loading="lazy" />
                <div class="editorial-caption-bar d-flex justify-content-between align-items-center">
                  <span>Official Enrollment Statement</span>
                  <a href="assets/images/campus/student-enrollment.jpg" download class="text-warning small fw-bold">Download Chart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    },

    // 22. academic-calendar.html
    {
      filename: 'academic-calendar.html',
      title: 'Academic Calendar | Sanawar Smart School Bhupal, Mansa',
      description:
        'Official Annual Academic Calendar, examination dates (PA-1 to PA-4, SA-1, SA-2), holidays, and 51 inter-house competitions at Sanawar Smart School Bhupal.',
      h1: 'Annual Academic Calendar',
      kicker: 'EXAMINATIONS, HOLIDAYS & CO-CURRICULAR SCHEDULE',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">SESSION SCHEDULE &amp; EXAMINATIONS</span>
              <h2 class="h3 fw-bold mb-2">Academic Calendar — Examinations &amp; Gazetted Observances</h2>
              <div class="gold-rule"></div>
              <p>
                The annual academic calendar of <strong>Sanawar Smart School Bhupal (Mansa)</strong> structures the academic year around four Periodic Assessments (PA-1 to PA-4), two Summative Assessments (SA-1 and SA-2), national observances, and 51 age-appropriate co-curricular competitions from Nursery to Class XII.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury">
                  <thead>
                    <tr>
                      <th>Date / Schedule</th>
                      <th>Holiday / Examination / Observance</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${ACADEMIC_CALENDAR_EVENTS.map(
                      (e) => `
                    <tr>
                      <td class="fw-bold whitespace-nowrap">${e.date}</td>
                      <td>${e.title}</td>
                      <td><span class="meta-line">${e.category}</span></td>
                    </tr>`
                    ).join('')}
                  </tbody>
                </table>
              </div>

              <h3 class="h4 fw-bold mt-5 mb-3">Annual Co-Curricular Competitions &amp; Guidelines</h3>
              <div class="luxury-card p-4 bg-light-canvas mb-4">
                <p class="small mb-2"><strong>Dear Parents (Official Competition Guidelines):</strong></p>
                <ol class="small mb-0 ps-3">
                  <li class="mb-1">There is no entrance fee for any school competition.</li>
                  <li class="mb-1">Participation is encouraged according to each student's interest and aptitude.</li>
                  <li class="mb-0">Detailed rules for each competition are shared with students prior to the scheduled date.</li>
                </ol>
              </div>
            </div>

            <div class="col-lg-4">
              ${renderDocumentCardBlock('academic-calendar')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 26. teachers-training.html
    {
      filename: 'teachers-training.html',
      title: 'Details of Teachers Training | Sanawar Smart School Bhupal',
      description:
        'Faculty professional development, CBSE capacity building, and teacher qualifications at Sanawar Smart School Bhupal, Mansa.',
      h1: 'Details of Teachers Training',
      kicker: 'FACULTY CAPACITY BUILDING & CBSE NORMS',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">CONTINUOUS PROFESSIONAL DEVELOPMENT</span>
              <h2 class="h3 fw-bold mb-2">Teacher Qualifications, Ratio &amp; Training Standards</h2>
              <div class="gold-rule"></div>
              <p>
                In accordance with <strong>CBSE Affiliation Bye-Laws Rule 3.3(h)(vi)</strong> and Section D of our Mandatory Public Disclosure, Sanawar Smart School Bhupal conducts regular faculty capacity-building programs, Smart Class digital pedagogy workshops, and inclusive education training.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Faculty Cadre / Metric</th>
                      <th>Verified Strength / Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="fw-bold">Principal</td><td>S. Baljit Singh Sidhu (${SCHOOL_INFO.principalQualification})</td></tr>
                    <tr><td class="fw-bold">Total Number of Teachers</td><td>45 Teachers</td></tr>
                    <tr><td class="fw-bold">Post Graduate Teachers (PGT)</td><td>11 Faculty Members</td></tr>
                    <tr><td class="fw-bold">Trained Graduate Teachers (TGT)</td><td>09 Faculty Members</td></tr>
                    <tr><td class="fw-bold">Primary Teachers (PRT)</td><td>11 Faculty Members</td></tr>
                    <tr><td class="fw-bold">Teachers-to-Section Ratio</td><td>1.28</td></tr>
                    <tr><td class="fw-bold">Special Educator</td><td>${SCHOOL_INFO.specialEducator}</td></tr>
                    <tr><td class="fw-bold">Counsellor &amp; Wellness Teacher</td><td>${SCHOOL_INFO.counsellor}</td></tr>
                    <tr><td class="fw-bold">Annual Training Mandate</td><td>Minimum 1-week annual training programme in association with recognized teacher training institutes &amp; CBSE COE</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('mandatory-disclosure')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 27. books-list-class-wise.html
    {
      filename: 'books-list-class-wise.html',
      title: 'List of Books Class-Wise | Sanawar Smart School Bhupal, Mansa',
      description:
        'Class-wise prescribed NCERT and CBSE textbooks from Nursery to Class XII at Sanawar Smart School Bhupal, Mansa, Punjab.',
      h1: 'List of Books Class-Wise',
      kicker: 'NCERT & CBSE PRESCRIBED TEXTBOOKS',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">CBSE AFFILIATION BYE-LAWS RULE 15.1(d)</span>
              <h2 class="h3 fw-bold mb-2">Class-Wise Curriculum &amp; Textbook Framework</h2>
              <div class="gold-rule"></div>
              <p>
                As mandated by <strong>Rule 15.1(d) of the CBSE Affiliation Bye-Laws</strong>, Sanawar Smart School Bhupal follows the syllabus on the basis of curriculum prescribed by NCERT/CBSE and uses NCERT/CBSE textbooks for Middle, Secondary, and Senior Secondary classes. All supplementary learning materials are vetted by the Principal and Management to ensure educational quality and suitability.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury">
                  <thead>
                    <tr>
                      <th>Academic Wing</th>
                      <th>Classes</th>
                      <th>Core Prescribed Subjects &amp; Publications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bold">Pre-Primary Wing</td>
                      <td>Nursery &amp; K.G.</td>
                      <td>Foundational English Phonetics, Punjabi Alphabet, Numeracy Readiness, Art &amp; Craft, Story Sacks &amp; Rhymes</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Primary Wing</td>
                      <td>Class I to Class V</td>
                      <td>NCERT/CBSE aligned English, Punjabi, Hindi, Mathematics, Environmental Studies (EVS), Computer Literacy &amp; General Knowledge</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Middle Wing</td>
                      <td>Class VI to Class VIII</td>
                      <td>NCERT English, Punjabi, Hindi, Mathematics, Integrated Science, Social Science (History, Civics, Geography), Computer Education &amp; Art</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Secondary Wing</td>
                      <td>Class IX &amp; Class X</td>
                      <td>NCERT English Language &amp; Literature (184), Punjabi (004), Hindi Course-B (085), Mathematics (041), Science (086), Social Science (087)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Senior Secondary (Science)</td>
                      <td>Class XI &amp; Class XII</td>
                      <td>NCERT English Core (301), Punjabi (104), Physics (042), Chemistry (043), Biology (044) / Mathematics (041), Physical Education (048), Computer Science (083)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Senior Secondary (Commerce)</td>
                      <td>Class XI &amp; Class XII</td>
                      <td>NCERT English Core (301), Punjabi (104), Accountancy (055), Business Studies (054), Economics (030), Mathematics (041) / Physical Education (048)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">Senior Secondary (Humanities)</td>
                      <td>Class XI &amp; Class XII</td>
                      <td>NCERT English Core (301), Punjabi (104), History (027), Political Science (028), Geography (029), Economics (030), Physical Education (048)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('affiliation-letter')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 28. books-list-2023-24.html
    {
      filename: 'books-list-2023-24.html',
      title: 'Books List for Session 2023-24 | Sanawar Smart School Bhupal',
      description:
        'Prescribed NCERT/CBSE textbook schedule and subject codes for Session 2023-24 at Sanawar Smart School Bhupal, Mansa.',
      h1: 'Books List for Session 2023-24',
      kicker: 'PRESCRIBED NCERT / CBSE TEXTBOOKS & SUBJECT CODES',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">ACADEMIC SESSION BOOK SCHEDULE</span>
              <h2 class="h3 fw-bold mb-2">Prescribed Books &amp; CBSE Subject Codes (Session 2023-24)</h2>
              <div class="gold-rule"></div>
              <p>
                Sanawar Smart School Bhupal prescribes authentic NCERT textbooks across Middle, Secondary, and Senior Secondary classes in strict compliance with CBSE directives. Below is the subject-code-mapped book list for the academic session.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>CBSE Code</th>
                      <th>Subject Name</th>
                      <th>Classes</th>
                      <th>Prescribed Publisher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>184</td><td class="fw-bold">English Language &amp; Literature</td><td>IX – X</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>004</td><td class="fw-bold">Punjabi</td><td>IX – X</td><td>PSEB / CBSE Prescribed</td></tr>
                    <tr><td>085</td><td class="fw-bold">Hindi Course-B</td><td>IX – X</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>041</td><td class="fw-bold">Mathematics</td><td>IX – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>086</td><td class="fw-bold">Science (Theory &amp; Practical)</td><td>IX – X</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>087</td><td class="fw-bold">Social Science</td><td>IX – X</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>301</td><td class="fw-bold">English Core</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>104</td><td class="fw-bold">Punjabi (Sr. Secondary)</td><td>XI – XII</td><td>CBSE / NCERT Prescribed</td></tr>
                    <tr><td>042</td><td class="fw-bold">Physics</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>043</td><td class="fw-bold">Chemistry</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>044</td><td class="fw-bold">Biology</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>054</td><td class="fw-bold">Business Studies</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>055</td><td class="fw-bold">Accountancy</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>030</td><td class="fw-bold">Economics</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>027</td><td class="fw-bold">History</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>028</td><td class="fw-bold">Political Science</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>029</td><td class="fw-bold">Geography</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                    <tr><td>048</td><td class="fw-bold">Physical Education</td><td>XI – XII</td><td>CBSE Prescribed</td></tr>
                    <tr><td>083</td><td class="fw-bold">Computer Science</td><td>XI – XII</td><td>NCERT, New Delhi</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="luxury-card p-4 bg-light-canvas mb-4">
                <span class="eyebrow-label">STATUTORY DECLARATION</span>
                <h3 class="h5 fw-bold mb-2">Rule 15.1(d) Compliance</h3>
                <p class="small mb-3">
                  The Principal and Management of Sanawar Smart School Bhupal certify that all textbooks prescribed for students have been thoroughly verified to ensure complete alignment with NCERT/CBSE standards and constitutional values.
                </p>
                <a href="books-list-class-wise.html" class="btn btn-luxury-navy btn-sm">View Class-Wise Overview</a>
              </div>
              ${renderDocumentCardBlock('affiliation-letter')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 29-36: Official Certificate Pages
    renderCertificatePage(
      'no-objection-certificate.html',
      'no-objection-certificate',
      'GOVERNMENT OF PUNJAB · DEPARTMENT OF SCHOOL EDUCATION',
      [
        ['Document Title', 'No Objection Certificate (NOC) for CBSE Affiliation'],
        ['Memo Number', 'No. 3/54/2018-3Edu3/202052/1 & 202053/1'],
        ['Date of Issuance', '13 January 2020 (Chandigarh)'],
        ['Issuing Authority', 'Special Secretary School Education, Govt. of Punjab (Education-3 Branch)'],
        ['Recommended By', 'District Education Officer (S.E.) Mansa & Director Education Dept. (S.E.) Punjab, Mohali'],
        ['Key Mandates', 'Compulsory teaching of Punjabi up to Class 10th, compliance with RTE Act 2009, and statutory staff reserve fund deposit']
      ],
      [
        'The State Government No Objection Certificate (NOC) was granted after verification of land ownership, reserve fund deposits, and physical inspection by the District Education Officer (S.E.), Mansa.'
      ]
    ),

    renderCertificatePage(
      'society-certificate.html',
      'society-certificate',
      'REGISTRAR OF FIRMS & SOCIETIES, PUNJAB',
      [
        ['Certificate Title', 'Certificate of Registration of Societies (Act XXI of 1860)'],
        ['Registration Number', 'No. 420 of 2013-14'],
        ['Registered Society Name', 'Guru Gobind Singh Educational & Welfare Society'],
        ['Registered Office', 'No. 644, Ward No. 6, Dashmesh Nagar, Mansa, Punjab - 151505'],
        ['Date of Registration', '6th February 2014 (Chandigarh)'],
        ['Issuing Authority', 'Registrar of Firms & Societies, Punjab, Chandigarh']
      ],
      [
        'Guru Gobind Singh Educational & Welfare Society is a non-proprietary registered educational society dedicated to operating Sanawar Smart School Bhupal as a community educational service.'
      ]
    ),

    renderCertificatePage(
      'recognition-certificate.html',
      'recognition-certificate',
      'RIGHT TO EDUCATION ACT, 2009 (SECTION 18)',
      [
        ['Certificate Title', 'Permanent Recognition Certificate under RTE Act, 2009'],
        ['Memo Number', 'Memo No. Accounts-1( )2016-7/Permanent Recognition/RTE/2848'],
        ['Inspection Reference', 'DGSE/RTE/2016/8005 Dated 19.05.2016'],
        ['Date of Issue', '29 June 2016 (Effective from 01.04.2016)'],
        ['Allotted Recognition Code', '6967'],
        ['Issuing Authority', 'Office of District Education Officer (Elementary Education), Mansa']
      ],
      [
        'Grants permanent recognition under Section 15(4) and Section 18 of the Right of Children to Free and Compulsory Education Act, 2009 and Punjab RTE Rules, 2011.'
      ]
    ),

    renderCertificatePage(
      'building-safety-certificate.html',
      'building-safety-certificate',
      'PUBLIC WORKS DEPARTMENT (B&R BRANCH), MANSA',
      [
        ['Certificate Title', 'School Building Safety Certificate'],
        ['Letter Number', 'Letter No. 534 (Ref No. 1219/55/22)'],
        ['Date of Inspection / Issue', '19 April 2023 / 25 April 2023'],
        ['Issuing Authority', 'Executive Engineer, Provincial Division PWD B&R Branch, Mansa'],
        ['Structural Status', 'Inspected by Sub-Divisional Engineer and certified structurally safe for running a school as per National Building Code']
      ],
      [
        'The school building has been inspected by the Sub-Divisional Engineer and Executive Engineer, Provincial Division PWD (B&R), Mansa, confirming structural soundness and safe classroom occupancy.'
      ]
    ),

    renderCertificatePage(
      'fire-safety-certificate.html',
      'fire-safety-certificate',
      'DIRECTORATE OF PUNJAB FIRE & EMERGENCY SERVICES',
      [
        ['Certificate Title', 'Fire Safety Certificate (NOC)'],
        ['NOC Number', '311-88338-Fire/66013 (Renewal)'],
        ['Date of Issue', '03 April 2024 (Verified on 02 April 2024)'],
        ['Building Configuration', '0 Basements + Ground + 3 Upper Floors'],
        ['NBC Occupancy Classification', 'Occupancy Group B, Subdivision B-1 (Educational Building)'],
        ['Issuing Authority', 'Punjab Fire Services (Mansa)']
      ],
      [
        'Certified that Sanawar Smart School Bhupal at Bhupal, Mansa has complied with the fire prevention and fire safety requirements of the National Building Code of India.'
      ]
    ),

    renderCertificatePage(
      'self-certification.html',
      'self-certification',
      'APPENDIX-III · DISTRICT EDUCATION OFFICER VERIFICATION',
      [
        ['Document Title', 'Self Certification / DEO Certificate for Extension & Upgradation'],
        ['CBSE Affiliation Number', '1631322'],
        ['U-DISE Code', '03150103007'],
        ['DEO File Number & Date', 'File No. 2023159257 Dated 08-06-2023'],
        ['Total Land Area', '10,901.218 Sq. Meters (Single Contiguous Compound with Pucca Boundary Wall)'],
        ['Verifying Authority', 'Counter-signed by District Education Officer (Mansa) & Principal']
      ],
      [
        'Verifies that all original supporting documents, land lease/ownership records, Building Safety (19.04.2023), Fire Safety, and Water Testing (03.05.2023) certificates were physically inspected and found authentic.'
      ]
    ),

    renderCertificatePage(
      'water-health-sanitation.html',
      'water-health-sanitation',
      'DISTRICT WATER TESTING LABORATORY, MANSA',
      [
        ['Test Report Number', 'DWTL/MNS/2324/00015 (Reg. No. DWTL/MNS/REG2324/00058)'],
        ['ULR Number', 'TC000123000000070F'],
        ['Date of Analysis & Issue', '04 May 2023 – 10 May 2023'],
        ['Collection Point', 'RO / CWPP / ARP / HH Purifier Treatment Plant on Campus'],
        ['TDS / Alkalinity / Hardness', 'TDS: 70 mg/l (Limit 500) · Alkalinity: 40 mg/l (Limit 200) · Hardness: 32 mg/l (Limit 200)'],
        ['Calcium / Magnesium / Chloride', 'Calcium: 3 mg/l · Magnesium: 6 mg/l · Chloride: 16 mg/l · Colour/Odour/Taste: Agreeable']
      ],
      [
        'Tested by the District Water Testing Laboratory, Water Supply and Sanitation Division No. 1 Complex, Jawaharke, Mansa, confirming all chemical parameters meet IS-10500:2012 drinking water standards.'
      ]
    ),

    renderCertificatePage(
      'affiliation-letter.html',
      'affiliation-letter',
      'CENTRAL BOARD OF SECONDARY EDUCATION, NEW DELHI',
      [
        ['Grant Letter Number', 'NO. CBSE/AFF/SS-00283-2122/2021-22/ Dated 08/12/2020'],
        ['Affiliation Number', '1631322'],
        ['School Code', '21360'],
        ['Affiliated For', 'Senior Secondary School Examination (Class 1 to 12)'],
        ['Languages Allowed', 'English Core, Punjabi'],
        ['Elective Subjects Allowed', 'Physics, Chemistry, Biology, Mathematics, History, Geography, Business Studies, Accountancy, Economics, Computer Science, Physical Education, Political Science']
      ],
      [
        'Sanctions Senior Secondary affiliation to Sanawar Smart School Bhupal, Village Bhupal, P.O. Matti, Tehsil & District Mansa, Punjab - 151504.'
      ]
    ),

    // 37. fee-structure.html
    {
      filename: 'fee-structure.html',
      title: 'Fee Structure | Sanawar Smart School Bhupal, Mansa',
      description:
        'Official Monthly Fee Structure of Sanawar Smart School Bhupal, Mansa from Nursery to Class 12th (Science, Commerce, and Humanities).',
      h1: 'Monthly Fee Structure',
      kicker: 'TRANSPARENT TUITION SCHEDULE · NURSERY TO CLASS XII',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">OFFICIAL FEE SCHEDULE (SESSION 2023-24)</span>
              <h2 class="h3 fw-bold mb-2">Class-Wise Monthly Fee Structure</h2>
              <div class="gold-rule"></div>
              <p>
                In adherence to CBSE Affiliation Bye-Laws Rule 11.1, Sanawar Smart School Bhupal maintains a transparent, published monthly fee structure with zero capitation fee or voluntary donations required for admission.
              </p>

              <div class="table-responsive mt-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Academic Wing / Stream</th>
                      <th>Monthly Fee (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${FEE_STRUCTURE_ROWS.map(
                      (r) => `
                    <tr>
                      <td class="fw-bold">${r.className}</td>
                      <td>${r.stream}</td>
                      <td class="fw-bold">${r.monthlyFee}</td>
                    </tr>`
                    ).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('fee-structure')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 38. parents-teachers-association.html
    {
      filename: 'parents-teachers-association.html',
      title: 'Parents Teachers Association (PTA) | Sanawar Smart School Bhupal',
      description:
        'Official list of Parents Teachers Association (PTA) Committee Members of Sanawar Smart School Bhupal, Mansa, Punjab.',
      h1: 'Parents Teachers Association (PTA)',
      kicker: 'SCHOOL-COMMUNITY PARTNERSHIP · CBSE AFFILIATION 1631322',
      breadcrumbParent: { label: 'About', href: 'about.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">EXECUTIVE PTA COMMITTEE</span>
              <h2 class="h3 fw-bold mb-2">List of P.T.A. Committee Members</h2>
              <div class="gold-rule"></div>
              <p>
                The <strong>Parents Teachers Association (PTA)</strong> of Sanawar Smart School Bhupal fosters continuous dialogue between parents and faculty to support student well-being, academic progress, and campus initiatives.
              </p>
              <div class="table-responsive mt-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Member Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${PTA_MEMBERS.map(
                      (m) => `
                    <tr>
                      <td>${m.srNo}</td>
                      <td class="fw-bold">${m.name}</td>
                      <td>${m.designation}</td>
                    </tr>`
                    ).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('parents-teachers-association')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 39. result-class-10.html
    {
      filename: 'result-class-10.html',
      title: 'Three Year Result of 10th Class | Sanawar Smart School Bhupal',
      description:
        'Official Three-Year Board Examination Result Gazette and summary for Class 10th at Sanawar Smart School Bhupal, Mansa (93.33% Pass Percentage).',
      h1: 'Three Year Result of 10th Class',
      kicker: 'SECONDARY SCHOOL BOARD EXAMINATION RECORD',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">CBSE &amp; BOARD RESULT SUMMARY</span>
              <h2 class="h3 fw-bold mb-2">Secondary School Examination (Class X) Result Record</h2>
              <div class="gold-rule"></div>
              <p>
                Sanawar Smart School Bhupal (CBSE School Code 21360) has consistently delivered strong board results in Class X. Below is the official CBSE Mandatory Disclosure summary alongside our top Class 10th Shining Stars and downloadable 16-page Board Gazette PDF.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>No. of Registered Students</th>
                      <th>No. of Students Passed</th>
                      <th>Pass Percentage</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bold">2023 (CBSE Class X)</td>
                      <td>61</td>
                      <td>56</td>
                      <td class="fw-bold">93.33%</td>
                      <td>One Student Absent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 class="h4 fw-bold mt-5 mb-3">Class 10th Board Toppers (Shining Stars)</h3>
              <div class="row g-4">
                ${SHINING_STARS.filter((s) => s.classLevel === 'Class 10th')
                  .map(
                    (star) => `
                <div class="col-sm-6 col-md-4">
                  <div class="portrait-card">
                    <div class="portrait-img-wrap">
                      <img src="${star.image}" alt="${star.name}" loading="lazy" />
                    </div>
                    <div class="portrait-info">
                      <h4 class="portrait-name">${star.name}</h4>
                      <p class="fw-bold mb-1 tabular-nums" style="color: var(--color-secondary); font-size: 0.9rem;">${star.overallScore}</p>
                      <p class="small mb-0 text-muted">${star.subjectHighlights}</p>
                    </div>
                  </div>
                </div>`
                  )
                  .join('')}
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('result-class-10')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 40. result-class-12.html
    {
      filename: 'result-class-12.html',
      title: 'Three Year Result of 12th Class | Sanawar Smart School Bhupal',
      description:
        'Official Three-Year Board Examination Result Gazette and summary for Class 12th at Sanawar Smart School Bhupal, Mansa (92.59% Pass Percentage).',
      h1: 'Three Year Result of 12th Class',
      kicker: 'SENIOR SECONDARY CERTIFICATE EXAMINATION RECORD',
      breadcrumbParent: { label: 'Academics', href: 'curriculum.html' },
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">CBSE &amp; BOARD RESULT SUMMARY</span>
              <h2 class="h3 fw-bold mb-2">Senior Secondary Examination (Class XII) Result Record</h2>
              <div class="gold-rule"></div>
              <p>
                Sanawar Smart School Bhupal (CBSE School Code 21360) prepares Senior Secondary students across Science, Commerce, and Humanities streams. Below is the verified CBSE Mandatory Disclosure summary, our Class 12th Chemistry &amp; Science achievers, and the complete 22-page official Board Result Gazette PDF.
              </p>

              <div class="table-responsive my-4">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>No. of Registered Students</th>
                      <th>No. of Students Passed</th>
                      <th>Pass Percentage</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bold">2023 (CBSE Class XII)</td>
                      <td>82</td>
                      <td>75</td>
                      <td class="fw-bold">92.59%</td>
                      <td>One Student Absent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 class="h4 fw-bold mt-5 mb-3">Class 12th Board Toppers (Shining Stars)</h3>
              <div class="row g-4">
                ${SHINING_STARS.filter((s) => s.classLevel === 'Class 12th')
                  .map(
                    (star) => `
                <div class="col-sm-6">
                  <div class="portrait-card">
                    <div class="portrait-img-wrap">
                      <img src="${star.image}" alt="${star.name}" loading="lazy" />
                    </div>
                    <div class="portrait-info">
                      <h4 class="portrait-name">${star.name}</h4>
                      <p class="fw-bold mb-1 tabular-nums" style="color: var(--color-secondary); font-size: 0.9rem;">${star.overallScore}</p>
                      <p class="small mb-0 text-muted">${star.subjectHighlights}</p>
                    </div>
                  </div>
                </div>`
                  )
                  .join('')}
              </div>
            </div>
            <div class="col-lg-4">
              ${renderDocumentCardBlock('result-class-12')}
            </div>
          </div>
        </div>
      </section>`
    },

    // 41. mandatory-disclosure.html
    {
      filename: 'mandatory-disclosure.html',
      title: 'Mandatory Public Disclosure (Appendix-IX) | Sanawar Smart School Bhupal',
      description:
        'CBSE SARAS 4.0 Mandatory Public Disclosure (Appendix-IX) of Sanawar Smart School Bhupal, Mansa — Affiliation No. 1631322, School Code 21360.',
      h1: 'Mandatory Public Disclosure',
      kicker: 'APPENDIX-IX · CBSE SARAS 4.0 COMPLIANCE',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
            <div>
              <span class="eyebrow-label">STATUTORY CBSE PUBLIC DISCLOSURE</span>
              <h2 class="h3 fw-bold mb-0">Appendix-IX — Mandatory Public Disclosure</h2>
            </div>
            <div class="d-flex gap-2">
              <a href="assets/documents/mandatory-disclosure.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View SARAS PDF</a>
              <a href="assets/documents/mandatory-disclosure.pdf" download class="btn btn-luxury-outline-dark btn-sm">Download PDF</a>
            </div>
          </div>
          <div class="gold-rule"></div>

          <!-- A: GENERAL INFORMATION -->
          <h3 class="h5 fw-bold mt-4 mb-3">A. General Information</h3>
          <div class="table-responsive mb-5">
            <table class="table table-luxury tabular-nums">
              <thead>
                <tr><th>Sl. No.</th><th>Information</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td class="fw-bold">NAME OF THE SCHOOL</td><td>SANAWAR SMART SCHOOL BHUPAL</td></tr>
                <tr><td>2</td><td class="fw-bold">AFFILIATION NO. (IF APPLICABLE)</td><td>1631322</td></tr>
                <tr><td>3</td><td class="fw-bold">SCHOOL CODE (IF APPLICABLE)</td><td>21360</td></tr>
                <tr><td>4</td><td class="fw-bold">COMPLETE ADDRESS WITH PIN CODE</td><td>VILLAGE-BHUPAL, P.O.-MATTI, TEHSIL-MANSA, DISTRICT-MANSA, MANSA, PUNJAB - 151504</td></tr>
                <tr><td>5</td><td class="fw-bold">PRINCIPAL NAME</td><td>BALJIT SINGH SIDHU (S. Baljeet Singh Balli)</td></tr>
                <tr><td>6</td><td class="fw-bold">PRINCIPAL QUALIFICATION</td><td>B.P.Ed., D.P.Ed., M.P.Ed., M.Phil</td></tr>
                <tr><td>7</td><td class="fw-bold">SCHOOL EMAIL ID</td><td>sanawarsmart.hsb@gmail.com</td></tr>
                <tr><td>8</td><td class="fw-bold">CONTACT DETAILS (LANDLINE/MOBILE)</td><td>9417094850, 9876420039</td></tr>
              </tbody>
            </table>
          </div>

          <!-- B: DOCUMENTS AND INFORMATION -->
          <h3 class="h5 fw-bold mb-3">B. Documents and Information</h3>
          <div class="table-responsive mb-5">
            <table class="table table-luxury tabular-nums">
              <thead>
                <tr><th>Sl. No.</th><th>Documents / Information</th><th>Page / Direct PDF Actions</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                  <td><a href="affiliation-letter.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/affiliation-letter.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                  <td><a href="society-certificate.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/society-certificate.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                  <td><a href="no-objection-certificate.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/no-objection-certificate.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE</td>
                  <td><a href="recognition-certificate.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/recognition-certificate.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                  <td><a href="building-safety-certificate.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/building-safety-certificate.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                  <td><a href="fire-safety-certificate.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/fire-safety-certificate.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION</td>
                  <td><a href="self-certification.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/self-certification.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                  <td><a href="water-health-sanitation.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/water-health-sanitation.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- C: RESULT AND ACADEMICS -->
          <h3 class="h5 fw-bold mb-3">C. Result and Academics</h3>
          <div class="table-responsive mb-4">
            <table class="table table-luxury tabular-nums">
              <thead>
                <tr><th>Sl. No.</th><th>Documents / Information</th><th>Page / Direct PDF Actions</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>FEE STRUCTURE OF THE SCHOOL</td>
                  <td><a href="fee-structure.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/fee-structure.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ANNUAL ACADEMIC CALENDAR</td>
                  <td><a href="academic-calendar.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/academic-calendar.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                  <td><a href="school-managing-committee.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/school-managing-committee.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                  <td><a href="parents-teachers-association.html" class="fw-bold me-3">View Page</a> <a href="assets/documents/parents-teachers-association.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td>
                  <td><a href="result-class-10.html" class="fw-bold me-3">Class X Result</a> <a href="result-class-12.html" class="fw-bold">Class XII Result</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- D: STAFF (TEACHING) -->
          <h3 class="h5 fw-bold mb-3">D. Staff (Teaching) &amp; Board Results Summary</h3>
          <div class="row g-4 mb-5">
            <div class="col-lg-6">
              <div class="table-responsive">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr><th>Sl. No.</th><th>Information</th><th>Details</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td class="fw-bold">PRINCIPAL</td><td>BALJIT SINGH SIDHU</td></tr>
                    <tr><td>2</td><td class="fw-bold">TOTAL NO. OF TEACHERS</td><td>45 (PGT: 11 · TGT: 09 · PRT: 11)</td></tr>
                    <tr><td>3</td><td class="fw-bold">TEACHERS SECTION RATIO</td><td>1.28</td></tr>
                    <tr><td>4</td><td class="fw-bold">DETAILS OF SPECIAL EDUCATOR</td><td>Balreet Kaur</td></tr>
                    <tr><td>5</td><td class="fw-bold">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Seema</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="table-responsive">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr><th>Board Class</th><th>Year</th><th>Registered</th><th>Passed</th><th>Pass %</th><th>Remarks</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="fw-bold">Class X</td><td>2023</td><td>61</td><td>56</td><td class="fw-bold">93.33%</td><td>ONE STUDENT ABSENT</td></tr>
                    <tr><td class="fw-bold">Class XII</td><td>2023</td><td>82</td><td>75</td><td class="fw-bold">92.59%</td><td>ONE STUDENT ABSENT</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- E: SCHOOL INFRASTRUCTURE -->
          <h3 class="h5 fw-bold mb-3">E. School Infrastructure</h3>
          <div class="table-responsive">
            <table class="table table-luxury tabular-nums">
              <thead>
                <tr><th>Sl. No.</th><th>Information</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td class="fw-bold">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>10901.218</td></tr>
                <tr><td>2</td><td class="fw-bold">NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td><td>30 &amp; 47</td></tr>
                <tr><td>3</td><td class="fw-bold">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>05 &amp; 56</td></tr>
                <tr><td>4</td><td class="fw-bold">INTERNET FACILITY</td><td>YES</td></tr>
                <tr><td>5</td><td class="fw-bold">NO. OF GIRLS TOILETS</td><td>06</td></tr>
                <tr><td>6</td><td class="fw-bold">NO. OF BOYS TOILETS</td><td>06</td></tr>
                <tr><td>7</td><td class="fw-bold">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td><td><a href="${SCHOOL_INFO.inspectionVideoUrl}" target="_blank" rel="noopener noreferrer">${SCHOOL_INFO.inspectionVideoUrl}</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>`
    },

    // 42. staff.html
    {
      filename: 'staff.html',
      title: 'Our Staff | Sanawar Smart School Bhupal, Mansa',
      description:
        'Meet the Principal, PGT, TGT, Primary, NTT faculty, lab assistants, and administrative staff of Sanawar Smart School Bhupal, Mansa, Punjab.',
      h1: 'Our Faculty & Staff',
      kicker: 'DEDICATED EDUCATORS & ACADEMIC MENTORS',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">FACULTY DIRECTORY</span>
              <h2 class="display-6 fw-bold mb-2">Meet the Educators of Sanawar Smart School Bhupal</h2>
              <div class="gold-rule"></div>
              <p class="mb-0">
                Led by Principal <strong>S. Baljeet Singh Balli</strong>, our faculty combines academic mastery with compassionate mentorship across Senior Secondary, Secondary, Primary, and Pre-Primary wings.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="teachers-training.html" class="btn btn-luxury-outline-dark">Teachers Training Details</a>
            </div>
          </div>

          <div class="row g-4">
            ${STAFF_MEMBERS.map(
              (s) => `
            <div class="col-sm-6 col-md-4 col-lg-3 reveal-up">
              <div class="portrait-card">
                <div class="portrait-img-wrap">
                  <img src="${s.image}" alt="${s.name} — ${s.role}" loading="lazy" />
                </div>
                <div class="portrait-info">
                  <div class="meta-line mb-1">${s.category}</div>
                  <h3 class="portrait-name">${s.name}</h3>
                  <p class="portrait-role">${s.role}</p>
                </div>
              </div>
            </div>`
            ).join('')}
          </div>
        </div>
      </section>`
    },

    // 43. shining-star.html
    {
      filename: 'shining-star.html',
      title: 'Shining Stars | Student Achievers — Sanawar Smart School Bhupal',
      description:
        'Celebrate the Class 10th and Class 12th Board Examination Shining Stars of Sanawar Smart School Bhupal, Mansa, including 100/100 scorers in Mathematics and Science.',
      h1: 'Our Shining Stars',
      kicker: 'BOARD EXAMINATION MERIT ACHIEVERS',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">HONOUR ROLL OF ACADEMIC DISTINCTION</span>
              <h2 class="display-6 fw-bold mb-2">Student Achievers of Sanawar Smart School Bhupal</h2>
              <div class="gold-rule"></div>
              <p class="mb-0">
                We take immense pride in our Class 10th and Class 12th board examination toppers who have achieved up to <strong>100/100 in Mathematics and Science</strong> and <strong>99/100 in Senior Secondary Chemistry</strong>.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <div class="d-flex flex-wrap gap-2 justify-content-lg-end">
                <a href="result-class-10.html" class="btn btn-luxury-navy btn-sm">Class 10 Result</a>
                <a href="result-class-12.html" class="btn btn-luxury-outline-dark btn-sm">Class 12 Result</a>
              </div>
            </div>
          </div>

          <div class="row g-4">
            ${SHINING_STARS.map(
              (star) => `
            <div class="col-sm-6 col-md-4 col-lg-3 reveal-up">
              <div class="portrait-card">
                <div class="portrait-img-wrap">
                  <img src="${star.image}" alt="${star.name} (${star.classLevel}) — ${star.overallScore}" loading="lazy" />
                </div>
                <div class="portrait-info">
                  <div class="meta-line mb-1">${star.classLevel}</div>
                  <h3 class="portrait-name">${star.name}</h3>
                  <p class="fw-bold mb-1 tabular-nums" style="color: var(--color-secondary); font-size: 0.92rem;">${star.overallScore}</p>
                  <p class="small mb-0 text-muted">${star.subjectHighlights}</p>
                </div>
              </div>
            </div>`
            ).join('')}
          </div>
        </div>
      </section>`
    },

    // 44. route.html
    {
      filename: 'route.html',
      title: 'Our Bus Routes (Bus No. 1 to 13) | Sanawar Smart School Bhupal',
      description:
        'View all 13 official school bus routes (Bus No. 1 to Bus No. 13) connecting Bhupal, Mansa, and surrounding villages to Sanawar Smart School Bhupal.',
      h1: 'School Bus Route List',
      kicker: 'SAFE CAMPUS CONNECTIVITY · BUS NO. 1 TO BUS NO. 13',
      breadcrumbParent: { label: 'Facilities', href: 'transport.html' },
      heroImage: 'assets/images/facilities/transport.jpg',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">TRANSPORT NETWORK</span>
              <h2 class="display-6 fw-bold mb-2">Official Route Charts (Bus No. 1 to Bus No. 13)</h2>
              <div class="gold-rule"></div>
              <p class="mb-0">
                Select any bus number below to view the official route chart for Sanawar Smart School Bhupal's 13 school buses.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="transport.html" class="btn btn-luxury-outline-dark">Transport Facility Overview</a>
            </div>
          </div>

          <div class="row g-4">
            <div class="col-lg-3">
              <div class="list-group" id="busRouteTabList" role="tablist">
                ${Array.from({ length: 13 }, (_, idx) => {
                  const n = idx + 1;
                  return `<button class="list-group-item list-group-item-action d-flex justify-content-between align-items-center fw-bold ${
                    n === 1 ? 'active' : ''
                  }" id="bus-tab-${n}" data-bs-toggle="list" data-bs-target="#bus-pane-${n}" type="button" role="tab" aria-controls="bus-pane-${n}" aria-selected="${
                    n === 1 ? 'true' : 'false'
                  }">
                    <span>Bus No. ${n}</span>
                    <i class="bi bi-bus-front"></i>
                  </button>`;
                }).join('')}
              </div>
            </div>

            <div class="col-lg-9">
              <div class="tab-content" id="busRouteTabContent">
                ${Array.from({ length: 13 }, (_, idx) => {
                  const n = idx + 1;
                  return `<div class="tab-pane fade ${
                    n === 1 ? 'show active' : ''
                  }" id="bus-pane-${n}" role="tabpanel" aria-labelledby="bus-tab-${n}">
                    <div class="luxury-card p-4">
                      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 pb-2 border-bottom">
                        <div>
                          <span class="eyebrow-label mb-0">OFFICIAL TRANSPORT ROUTE CHART</span>
                          <h3 class="h4 fw-bold mb-0">Bus No. ${n} Route</h3>
                        </div>
                        <a href="assets/images/facilities/bus-no${n}.jpg" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-outline-dark btn-sm">Open Full Image</a>
                      </div>
                      <div class="editorial-image-frame">
                        <img src="assets/images/facilities/bus-no${n}.jpg" alt="Bus No. ${n} Official Route Chart — Sanawar Smart School Bhupal" loading="lazy" />
                      </div>
                    </div>
                  </div>`;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>`
    },

    // 45. curriculum.html
    {
      filename: 'curriculum.html',
      title: 'Academic Curriculum | Sanawar Smart School Bhupal, Mansa',
      description:
        'Explore the CBSE curriculum from Nursery to Class XII (Science, Commerce, and Humanities), assessment structure, and statutory documents at Sanawar Smart School Bhupal.',
      h1: 'Academic Curriculum',
      kicker: 'NCERT & CBSE CURRICULUM · NURSERY TO CLASS XII',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">CBSE AFFILIATION NO. 1631322 · SCHOOL CODE 21360</span>
              <h2 class="h3 fw-bold mb-2">Holistic Academic Structure &amp; Subject Pathways</h2>
              <div class="gold-rule"></div>
              <p>
                Sanawar Smart School Bhupal follows the curriculum and examination scheme prescribed by the <strong>Central Board of Secondary Education (CBSE), New Delhi</strong> and the <strong>National Council of Educational Research and Training (NCERT)</strong>.
              </p>

              <div class="row g-4 my-3">
                <div class="col-md-6">
                  <div class="luxury-card p-4">
                    <div class="meta-line mb-1">STAGE 1 · NURSERY TO CLASS V</div>
                    <h3 class="h5 fw-bold mb-2">Foundational &amp; Primary Wing</h3>
                    <p class="small mb-0">
                      Activity-led learning in our Activity Room and Smart Classrooms focusing on trilingual literacy (English, Punjabi, Hindi), numeracy, environmental awareness, arts, and foundational computer skills from Class 1st.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="luxury-card p-4">
                    <div class="meta-line mb-1">STAGE 2 · CLASS VI TO CLASS X</div>
                    <h3 class="h5 fw-bold mb-2">Middle &amp; Secondary Wing</h3>
                    <p class="small mb-0">
                      Rigorous NCERT curriculum in English Language &amp; Literature, Punjabi, Hindi, Mathematics, Integrated Science (with Composite Lab practicals), Social Science, and Information Technology.
                    </p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="luxury-card p-4">
                    <div class="meta-line mb-1">STAGE 3 · CLASS XI &amp; CLASS XII</div>
                    <h3 class="h5 fw-bold mb-2">Senior Secondary Streams (Science, Commerce &amp; Humanities)</h3>
                    <p class="small mb-2">
                      Approved by CBSE for Senior Secondary School Certificate Examination across 14 core and elective subjects:
                    </p>
                    <p class="small mb-0">
                      <strong>Languages:</strong> English Core (301), Punjabi (104) &nbsp;|&nbsp;
                      <strong>Electives:</strong> Physics (042), Chemistry (043), Biology (044), Mathematics (041), Accountancy (055), Business Studies (054), Economics (030), History (027), Geography (029), Political Science (028), Computer Science (083), Physical Education (048).
                    </p>
                  </div>
                </div>
              </div>

              <h3 class="h4 fw-bold mt-5 mb-3">Curriculum &amp; Statutory Documents Table</h3>
              <div class="table-responsive">
                <table class="table table-luxury tabular-nums">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Document Title</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td class="fw-bold">Annual Academic Calendar &amp; Assessment Schedule</td>
                      <td>Academic Schedule</td>
                      <td><a href="assets/documents/academic-calendar.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View PDF</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td class="fw-bold">CBSE Official Affiliation &amp; Approved Subjects Letter</td>
                      <td>Board Affiliation</td>
                      <td><a href="assets/documents/affiliation-letter.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View PDF</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td class="fw-bold">Fire Safety Certificate (Curriculum &amp; Statutory Archive)</td>
                      <td>Campus Safety</td>
                      <td><a href="assets/documents/fire-safety-certificate.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View PDF</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-lg-4">
              ${renderDocumentCardBlock('academic-calendar')}
              <div class="mt-4">
                ${renderDocumentCardBlock('affiliation-letter')}
              </div>
            </div>
          </div>
        </div>
      </section>`
    },

    // 46. downloads.html
    {
      filename: 'downloads.html',
      title: 'Downloads & Official Documents | Sanawar Smart School Bhupal',
      description:
        'Download the Teaching Staff Application Form, Mandatory Public Disclosure, Fee Structure, Academic Calendar, Board Results, and statutory certificates of Sanawar Smart School Bhupal.',
      h1: 'Downloads & Official Documents',
      kicker: 'APPLICATION FORMS, CERTIFICATES & ACADEMIC RECORDS',
      mainHtml: `
      <section class="section-padding bg-white">
        <div class="container">
          <div class="row justify-content-between align-items-end mb-5">
            <div class="col-lg-8">
              <span class="eyebrow-label">PUBLIC DOCUMENT REPOSITORY</span>
              <h2 class="display-6 fw-bold mb-2">Official Forms, Disclosures &amp; Certificates</h2>
              <div class="gold-rule"></div>
              <p class="mb-0">
                All official documents, application forms, board result gazettes, and statutory certificates of <strong>Sanawar Smart School Bhupal (Mansa)</strong> are available below for viewing and direct PDF download.
              </p>
            </div>
          </div>

          <div class="row g-4">
            ${OFFICIAL_DOCUMENTS.map(
              (doc) => `
            <div class="col-md-6 col-lg-4 reveal-up">
              <div class="document-card">
                <div>
                  <div class="meta-line mb-1">${doc.category}</div>
                  <h3 class="h5 fw-bold mb-2"><a href="${doc.pageUrl}" class="text-dark">${doc.title}</a></h3>
                  <p class="small text-muted mb-2">${doc.referenceNo}</p>
                  <p class="small mb-4">${doc.description}</p>
                </div>
                <div class="d-flex flex-wrap gap-2">
                  <a href="${doc.pdfPath}" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-navy btn-sm">View Document</a>
                  <a href="${doc.pdfPath}" download class="btn btn-luxury-outline-dark btn-sm">Download PDF</a>
                </div>
              </div>
            </div>`
            ).join('')}
          </div>
        </div>
      </section>`
    },

    // 47. contact.html
    {
      filename: 'contact.html',
      title: 'Contact Us | Sanawar Smart School Bhupal, Mansa, Punjab',
      description:
        'Contact Sanawar Smart School Bhupal, Village Bhupal, District Mansa, Punjab — Phone: +91-94170-94850, +91-98764-20039, Email: sanawarsmart.hsb@gmail.com.',
      h1: 'Contact Us',
      kicker: 'ADMISSIONS, PARENT SUPPORT & CAMPUS LOCATION',
      mainHtml: `
      <section class="section-padding bg-white" id="enquiry-form">
        <div class="container">
          <div class="row g-4 mb-5">
            <div class="col-md-4 reveal-up">
              <div class="luxury-card p-4 text-center">
                <div class="card-icon-circle mx-auto"><i class="bi bi-geo-alt fs-5"></i></div>
                <div class="meta-line mb-1">CAMPUS ADDRESS</div>
                <h2 class="h5 fw-bold mb-2">Visit Our Campus</h2>
                <p class="small mb-0">${SCHOOL_INFO.addressFull}</p>
              </div>
            </div>
            <div class="col-md-4 reveal-up">
              <div class="luxury-card p-4 text-center">
                <div class="card-icon-circle mx-auto"><i class="bi bi-telephone fs-5"></i></div>
                <div class="meta-line mb-1">DIRECT TELEPHONE</div>
                <h2 class="h5 fw-bold mb-2">Call the School Office</h2>
                <p class="small mb-0">
                  <a href="tel:+919417094850" class="fw-bold">${SCHOOL_INFO.phones[0]}</a><br />
                  <a href="tel:+919876420039" class="fw-bold">${SCHOOL_INFO.phones[1]}</a>
                </p>
              </div>
            </div>
            <div class="col-md-4 reveal-up">
              <div class="luxury-card p-4 text-center">
                <div class="card-icon-circle mx-auto"><i class="bi bi-envelope fs-5"></i></div>
                <div class="meta-line mb-1">OFFICIAL EMAIL</div>
                <h2 class="h5 fw-bold mb-2">Write to Us</h2>
                <p class="small mb-0">
                  <a href="mailto:${SCHOOL_INFO.emails[0]}" class="fw-bold">${SCHOOL_INFO.emails[0]}</a><br />
                  <a href="mailto:${SCHOOL_INFO.emails[1]}">${SCHOOL_INFO.emails[1]}</a>
                </p>
              </div>
            </div>
          </div>

          <div class="row g-5 align-items-stretch">
            <div class="col-lg-6 reveal-left">
              <div class="luxury-card p-4 p-md-5">
                <span class="eyebrow-label">LEAVE A MESSAGE</span>
                <h2 class="h3 fw-bold mb-3">Admission &amp; Parent Enquiry Form</h2>
                <p class="small mb-4">
                  Please complete the form below for admission enquiries (Nursery to Class XII), transport route questions, or official correspondence.
                </p>
                <form class="js-school-enquiry-form" novalidate>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="contactName" class="form-label small fw-bold">Full Name *</label>
                      <input type="text" id="contactName" name="name" class="form-control form-control-luxury" placeholder="Enter your full name" required />
                    </div>
                    <div class="col-md-6">
                      <label for="contactEmail" class="form-label small fw-bold">Email Address *</label>
                      <input type="email" id="contactEmail" name="email" class="form-control form-control-luxury" placeholder="name@example.com" required />
                    </div>
                    <div class="col-md-6">
                      <label for="contactPhone" class="form-label small fw-bold">Phone Number *</label>
                      <input type="tel" id="contactPhone" name="phone" class="form-control form-control-luxury" placeholder="+91 98765 43210" required />
                    </div>
                    <div class="col-md-6">
                      <label for="contactSubject" class="form-label small fw-bold">Subject *</label>
                      <input type="text" id="contactSubject" name="subject" class="form-control form-control-luxury" placeholder="Admission / Fee / Transport Query" required />
                    </div>
                    <div class="col-12">
                      <label for="contactMessage" class="form-label small fw-bold">Message *</label>
                      <textarea id="contactMessage" name="message" rows="5" class="form-control form-control-luxury" placeholder="Write your message here..." required></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-luxury-navy w-100">Send Message</button>
                    </div>
                  </div>
                  <div class="js-form-status" role="status" aria-live="polite" hidden></div>
                </form>
              </div>
            </div>

            <div class="col-lg-6 reveal-right">
              <div class="editorial-image-frame h-100 d-flex flex-column">
                <iframe
                  src="${SCHOOL_INFO.googleMapEmbed}"
                  width="100%"
                  height="100%"
                  style="border:0; min-height: 440px; flex-grow: 1;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Google Map of Sanawar Smart School Bhupal, Mansa"
                ></iframe>
                <div class="editorial-caption-bar">
                  Sanawar Smart School Bhupal — Village Bhupal, P.O. Matti, District Mansa, Punjab - 151504
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
    }
  ];

  return specs;
}
