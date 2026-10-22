import {
  SCHOOL_INFO,
  STAFF_MEMBERS,
  SHINING_STARS,
  FACILITIES_DATA,
  GALLERY_PHOTOS,
  ACADEMIC_CALENDAR_EVENTS
} from './schoolData';

export function buildHomePageMainHtml(): string {
  const featuredFacilities = FACILITIES_DATA.slice(0, 9);
  const featuredStaff = STAFF_MEMBERS.slice(0, 8);
  const featuredStars = SHINING_STARS.slice(0, 8);
  const featuredGallery = GALLERY_PHOTOS.slice(0, 9);
  const upcomingEvents = ACADEMIC_CALENDAR_EVENTS.slice(0, 6);

  return `
    <!-- 1. HERO / PREMIUM FULL-SCREEN SLIDER -->
    <section class="hero-slider-section" aria-label="Campus Highlights Slider">
      <div id="heroLuxuryCarousel" class="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel" data-bs-interval="6000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#heroLuxuryCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1: Where Learning Inspires a Brighter Future"></button>
          <button type="button" data-bs-target="#heroLuxuryCarousel" data-bs-slide-to="1" aria-label="Slide 2: Let Your Light Shine"></button>
          <button type="button" data-bs-target="#heroLuxuryCarousel" data-bs-slide-to="2" aria-label="Slide 3: Building Knowledge, Character and Confidence"></button>
        </div>

        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <img src="assets/images/campus/campus-main.jpg" class="hero-slide-bg" alt="Sanawar Smart School Bhupal Main Campus Building and Students" loading="eager" />
            <div class="hero-slide-overlay"></div>
            <div class="container hero-slide-content">
              <div class="col-lg-9 col-xl-8">
                <span class="hero-kicker">SANAWAR SMART SCHOOL BHUPAL · CBSE AFFILIATION NO. 1631322</span>
                <h1 class="hero-headline">Where Learning Inspires a Brighter Future</h1>
                <span class="hero-motto-line">"Let Your Light Shine"</span>
                <p class="hero-subtext">
                  Located in Bhupal, Mansa (Punjab), Sanawar Smart School provides a stress-free, intellectually enriching CBSE education from Nursery to Class XII—forming emotionally and psychologically strong individuals prepared for the 21st century.
                </p>
                <div class="d-flex flex-wrap gap-3">
                  <a href="about.html" class="btn btn-luxury-gold">Explore Our School</a>
                  <a href="contact.html#enquiry-form" class="btn btn-luxury-outline">Admission Enquiry</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <img src="assets/images/hero/slider1.jpg" class="hero-slide-bg" alt="Sanawar Smart School Bhupal Academic and Cultural Excellence" loading="eager" />
            <div class="hero-slide-overlay"></div>
            <div class="container hero-slide-content">
              <div class="col-lg-9 col-xl-8">
                <span class="hero-kicker">SANAWAR SMART SCHOOL BHUPAL · MANSA, PUNJAB</span>
                <h2 class="hero-headline">Let Your Light Shine</h2>
                <p class="hero-subtext">
                  Empowering every student through curriculum-mapped Smart Classrooms, specialized Physics, Chemistry, Biology and Computer Laboratories, a 1,300+ Sq. Ft. Library Media Center, and dedicated faculty mentorship.
                </p>
                <div class="d-flex flex-wrap gap-3">
                  <a href="facilities.html" class="btn btn-luxury-gold">Explore Our School</a>
                  <a href="contact.html#enquiry-form" class="btn btn-luxury-outline">Admission Enquiry</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item">
            <img src="assets/images/facilities/sports-games.jpg" class="hero-slide-bg" alt="Sanawar Smart School Bhupal Holistic Sports and Student Leadership" loading="eager" />
            <div class="hero-slide-overlay"></div>
            <div class="container hero-slide-content">
              <div class="col-lg-9 col-xl-8">
                <span class="hero-kicker">SANAWAR SMART SCHOOL BHUPAL · SCHOOL CODE 21360</span>
                <h2 class="hero-headline">Building Knowledge, Character &amp; Confidence</h2>
                <p class="hero-subtext">
                  Through our Four-House leadership system, Annual Sports Meet, indoor Shooting Range, cultural festivals, and experiential learning, we help every child realize their distinct potential.
                </p>
                <div class="d-flex flex-wrap gap-3">
                  <a href="curriculum.html" class="btn btn-luxury-gold">Explore Our School</a>
                  <a href="contact.html#enquiry-form" class="btn btn-luxury-outline">Admission Enquiry</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#heroLuxuryCarousel" data-bs-slide="prev" aria-label="Previous Slide">
          <span class="hero-control-btn"><i class="bi bi-chevron-left"></i></span>
        </button>
        <button class="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#heroLuxuryCarousel" data-bs-slide="next" aria-label="Next Slide">
          <span class="hero-control-btn"><i class="bi bi-chevron-right"></i></span>
        </button>
      </div>
    </section>

    <!-- 2. WELCOME / INTRODUCTION (PREMIUM SPLIT LAYOUT) -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 reveal-left">
            <div class="editorial-image-frame">
              <img src="assets/images/campus/campus-main.jpg" alt="Sanawar Smart School Bhupal Main Campus" loading="lazy" />
              <div class="editorial-caption-bar d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span>Sanawar Smart School Bhupal, Mansa (Punjab)</span>
                <span style="color: var(--color-gold);">"Let Your Light Shine"</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 reveal-right">
            <span class="eyebrow-label">WELCOME TO SANAWAR SMART SCHOOL</span>
            <h2 class="display-6 fw-bold mb-2">Nurturing Wholesome Personalities for the 21st Century</h2>
            <p class="font-serif-display fst-italic mb-3" style="color: var(--color-secondary); font-size: 1.15rem;">
              "Let Your Light Shine"
            </p>
            <div class="gold-rule"></div>
            <p>
              Welcome to the official website of <strong>Sanawar Smart School Bhupal (Mansa)</strong>. Our foundational commitment is to provide a stress-free environment for children to make them intellectually, emotionally, and psychologically strong individuals.
            </p>
            <p>
              In the 21st century, we need a system of education that promises a wholesome personality for each learner. The Sanawar Smart School Bhupal (Mansa) family strives at its best level to develop the learning abilities of its students and provides experiences that enable them to explore the outside world and find meaningful connections between the world around them and their inner selves.
            </p>
            <p class="mb-4">
              Every child is differently able, and if one has not yet excelled in a particular area, it is only because their potential is waiting to be realized. The seeds of lifelong success are sown in the early years of a child's life.
            </p>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <a href="about.html" class="btn btn-luxury-navy">Read More</a>
              <a href="mandatory-disclosure.html" class="btn btn-luxury-outline-dark">Mandatory Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SCHOOL HIGHLIGHTS (4 PREMIUM BLOCKS) -->
    <section class="section-padding-sm bg-light-canvas border-top border-bottom">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-xl-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="card-icon-circle"><i class="bi bi-mortarboard fs-5"></i></div>
              <div class="meta-line mb-1">01 · CBSE AFFILIATED</div>
              <h3 class="h5 fw-bold mb-2">Academic Excellence</h3>
              <p class="small mb-0">
                Affiliated with CBSE New Delhi (No. 1631322) offering structured education from Nursery to Class XII across Science, Commerce, and Humanities streams.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="card-icon-circle"><i class="bi bi-display fs-5"></i></div>
              <div class="meta-line mb-1">02 · DIGITAL PEDAGOGY</div>
              <h3 class="h5 fw-bold mb-2">Smart Learning</h3>
              <p class="small mb-0">
                Curriculum-mapped Smart Class digital modules and modern Computer, Physics, Chemistry, and Biology laboratories that bring abstract concepts to life.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="card-icon-circle"><i class="bi bi-award fs-5"></i></div>
              <div class="meta-line mb-1">03 · CHARACTER &amp; LEADERSHIP</div>
              <h3 class="h5 fw-bold mb-2">Holistic Development</h3>
              <p class="small mb-0">
                Annual Student Council elections, four-house competitions, cultural arts, music, indoor shooting range, and track-and-field athletics.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="card-icon-circle"><i class="bi bi-shield-check fs-5"></i></div>
              <div class="meta-line mb-1">04 · CERTIFIED CAMPUS</div>
              <h3 class="h5 fw-bold mb-2">Safe &amp; Supportive Environment</h3>
              <p class="small mb-0">
                Stress-free campus backed by certified Building &amp; Fire Safety, lab-tested RO water, and 13 dedicated school bus routes across Mansa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. ABOUT THE SCHOOL (VISION & EDUCATIONAL PILLARS) -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">OUR EDUCATIONAL PHILOSOPHY</span>
            <h2 class="display-6 fw-bold mb-0">Educating Mind, Heart &amp; Character Beyond Textbooks</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <span class="meta-line">Managed by ${SCHOOL_INFO.society}</span>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="luxury-card p-4">
              <span class="eyebrow-label">PILLAR I</span>
              <h3 class="h5 fw-bold mb-3">Stress-Free Learning Environment</h3>
              <p class="small mb-0">
                We cultivate an encouraging, fear-free classroom atmosphere where students ask questions freely, build genuine curiosity, and grow into emotionally balanced learners.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="luxury-card p-4">
              <span class="eyebrow-label">PILLAR II</span>
              <h3 class="h5 fw-bold mb-3">Intellectual, Emotional &amp; Psychological Strength</h3>
              <p class="small mb-0">
                True 21st-century education balances rigorous academic inquiry with emotional resilience, ethical grounding, and psychological well-being supported by dedicated faculty.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="luxury-card p-4">
              <span class="eyebrow-label">PILLAR III</span>
              <h3 class="h5 fw-bold mb-3">Realizing Every Child's Distinct Potential</h3>
              <p class="small mb-0">
                Recognizing that every child is uniquely gifted, we connect classroom concepts with real-world experiences, sports, arts, and leadership so each student's light shines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. PRINCIPAL MESSAGE (DARK NAVY LUXURY SECTION) -->
    <section class="section-padding bg-navy">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-4 reveal-left">
            <div class="editorial-image-frame">
              <img src="assets/images/staff/principal-baljeet-singh.jpg" alt="S. Baljeet Singh Balli (Baljit Singh Sidhu) — Principal, Sanawar Smart School Bhupal" loading="lazy" />
              <div class="editorial-caption-bar text-center">
                <strong class="d-block text-white">S. Baljeet Singh Balli</strong>
                <span class="small" style="color: var(--color-gold);">Principal (${SCHOOL_INFO.principalQualification})</span>
              </div>
            </div>
          </div>
          <div class="col-lg-8 reveal-right">
            <span class="eyebrow-label eyebrow-gold">MESSAGE FROM THE PRINCIPAL</span>
            <h2 class="display-6 fw-bold mb-3">Guiding Young Minds Toward Academic &amp; Moral Distinction</h2>
            <div class="editorial-quote-box">
              <p class="editorial-quote-text">
                "At Sanawar Smart School Bhupal, our endeavour is to nurture intellectually capable, emotionally balanced, and socially responsible citizens in a stress-free learning environment where every child's unique talent is discovered and honoured."
              </p>
            </div>
            <p>
              Under the guidance of <strong>Principal S. Baljeet Singh Balli (Baljit Singh Sidhu)</strong> and the <strong>Guru Gobind Singh Educational &amp; Welfare Society, Mansa</strong>, Sanawar Smart School Bhupal integrates the national CBSE curriculum with modern Smart Class pedagogy, well-equipped scientific laboratories, library resources, and structured sports training.
            </p>
            <p class="mb-4">
              With a dedicated team of qualified Post Graduate Teachers (PGT), Trained Graduate Teachers (TGT), Primary Teachers (PRT), and Nursery Trained Teachers (NTT), we remain committed to our guiding motto—<em>"Let Your Light Shine."</em>
            </p>
            <div class="d-flex flex-wrap gap-4 pt-2">
              <div>
                <div class="small text-uppercase" style="color: var(--color-gold); letter-spacing: 0.12em;">Principal</div>
                <div class="fw-bold text-white">S. Baljeet Singh Balli / Baljit Singh Sidhu</div>
              </div>
              <div>
                <div class="small text-uppercase" style="color: var(--color-gold); letter-spacing: 0.12em;">Qualifications</div>
                <div class="fw-bold text-white">${SCHOOL_INFO.principalQualification}</div>
              </div>
              <div>
                <div class="small text-uppercase" style="color: var(--color-gold); letter-spacing: 0.12em;">CBSE Affiliation</div>
                <div class="fw-bold text-white">${SCHOOL_INFO.affiliationNo} (Code ${SCHOOL_INFO.schoolCode})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FACILITIES (LARGE PREMIUM GRID) -->
    <section class="section-padding bg-light-canvas">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">WORLD-CLASS CAMPUS INFRASTRUCTURE</span>
            <h2 class="display-6 fw-bold mb-0">Our Campus Facilities &amp; Laboratories</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="facilities.html" class="btn btn-luxury-navy">View All 12 Facilities</a>
          </div>
        </div>

        <div class="row g-4">
          ${featuredFacilities
            .map(
              (f) => `
          <div class="col-md-6 col-lg-4 reveal-up">
            <article class="luxury-card d-flex flex-column">
              <div class="card-img-frame">
                <img src="${f.image}" alt="${f.title} — Sanawar Smart School Bhupal" loading="lazy" />
              </div>
              <div class="card-body-luxury d-flex flex-column flex-grow-1">
                <div class="meta-line mb-1">${f.kicker}</div>
                <h3 class="h5 fw-bold mb-2">${f.title}</h3>
                <p class="small mb-4 flex-grow-1">${f.shortDesc}</p>
                <div>
                  <a href="${f.slug}" class="btn btn-luxury-outline-dark btn-sm">Explore Facility</a>
                </div>
              </div>
            </article>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- 7. ACADEMICS / CURRICULUM -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">CBSE SENIOR SECONDARY ACADEMICS</span>
            <h2 class="display-6 fw-bold mb-0">Academic Framework &amp; Student Resources</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="curriculum.html" class="btn btn-luxury-outline-dark">View Complete Curriculum</a>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">NURSERY TO CLASS XII</div>
                <h3 class="h5 fw-bold mb-2">CBSE Curriculum &amp; Streams</h3>
                <p class="small">
                  Follows NCERT/CBSE syllabus across Pre-Primary, Primary, Middle, Secondary, and Senior Secondary levels (Science, Commerce &amp; Humanities).
                </p>
              </div>
              <a href="curriculum.html" class="btn btn-luxury-navy btn-sm align-self-start">Explore Curriculum</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">ANNUAL SCHEDULE</div>
                <h3 class="h5 fw-bold mb-2">Academic Calendar</h3>
                <p class="small">
                  Structured timetable of Periodic Assessments (PA-1 to PA-4), Summative Assessments (SA-1 &amp; SA-2), holidays, and 51 co-curricular competitions.
                </p>
              </div>
              <a href="academic-calendar.html" class="btn btn-luxury-navy btn-sm align-self-start">View Calendar</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">NCERT &amp; PRESCRIBED TEXTS</div>
                <h3 class="h5 fw-bold mb-2">Books List (Class-Wise &amp; 2023-24)</h3>
                <p class="small">
                  Class-wise prescribed NCERT/CBSE books and verified declaration in compliance with CBSE Affiliation Bye-Laws Rule 15.1(d).
                </p>
              </div>
              <div class="d-flex flex-wrap gap-2">
                <a href="books-list-class-wise.html" class="btn btn-luxury-navy btn-sm">Class-Wise List</a>
                <a href="books-list-2023-24.html" class="btn btn-luxury-outline-dark btn-sm">Session 2023-24</a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">SECTION &amp; STUDENT STRENGTH</div>
                <h3 class="h5 fw-bold mb-2">Student Enrollment</h3>
                <p class="small">
                  Complete class-wise section and enrollment breakdown from Nursery/K.G. to Class 12th across 30 active sections.
                </p>
              </div>
              <a href="student-enrollment.html" class="btn btn-luxury-navy btn-sm align-self-start">View Enrollment</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">TRANSPARENT FEE SCHEDULE</div>
                <h3 class="h5 fw-bold mb-2">Monthly Fee Structure</h3>
                <p class="small">
                  Official monthly tuition schedule from Nursery to Senior Secondary Science, Commerce, and Humanities classes.
                </p>
              </div>
              <a href="fee-structure.html" class="btn btn-luxury-navy btn-sm align-self-start">View Fee Structure</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 reveal-up">
            <div class="document-card">
              <div>
                <div class="meta-line mb-2">BOARD EXAMINATIONS</div>
                <h3 class="h5 fw-bold mb-2">Class 10th &amp; 12th Board Results</h3>
                <p class="small">
                  Official three-year board examination result gazettes for Class X (93.33% pass rate) and Class XII (92.59% pass rate).
                </p>
              </div>
              <div class="d-flex flex-wrap gap-2">
                <a href="result-class-10.html" class="btn btn-luxury-navy btn-sm">10th Result</a>
                <a href="result-class-12.html" class="btn btn-luxury-outline-dark btn-sm">12th Result</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. ACTIVITIES (EDITORIAL-STYLE SECTION) -->
    <section class="section-padding bg-light-canvas">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 reveal-left">
            <span class="eyebrow-label">LEADERSHIP, CULTURE &amp; CREATIVITY</span>
            <h2 class="display-6 fw-bold mb-3">Four-House System &amp; Co-Curricular Life</h2>
            <div class="gold-rule"></div>
            <p>
              Sanawar Smart School Bhupal places deep emphasis on forming confident leaders. Every year, democratic elections are organized to constitute the <strong>Student Council</strong>, and the entire student body is organized into four distinguished Houses:
            </p>
            <div class="row g-3 my-3">
              <div class="col-sm-6">
                <div class="p-3 bg-white border rounded-1">
                  <div class="meta-line">HOUSE I</div>
                  <div class="fw-bold text-dark">Mother Teresa House</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 bg-white border rounded-1">
                  <div class="meta-line">HOUSE II</div>
                  <div class="fw-bold text-dark">Bhagat Singh House</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 bg-white border rounded-1">
                  <div class="meta-line">HOUSE III</div>
                  <div class="fw-bold text-dark">Dr. Kalam House</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 bg-white border rounded-1">
                  <div class="meta-line">HOUSE IV</div>
                  <div class="fw-bold text-dark">Ms. Kalpana House</div>
                </div>
              </div>
            </div>
            <p class="small">
              Regular inter-house competitions include <strong>Song, Dance, Art &amp; Craft, Science Quiz, Mathematics Quiz, Mehandi, Diya Making, Fancy Dress, Calligraphy, Rangoli, Spelling Contests, and Best Out of Waste</strong>, alongside educational tours and seasonal school festivals.
            </p>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a href="cultural-activities.html" class="btn btn-luxury-navy">Cultural Activities</a>
              <a href="school-activities.html" class="btn btn-luxury-outline-dark">School Activities</a>
              <a href="school-tour.html" class="btn btn-luxury-outline-dark">School Tours</a>
            </div>
          </div>

          <div class="col-lg-6 reveal-right">
            <div class="row g-3">
              <div class="col-12">
                <div class="editorial-image-frame">
                  <img src="assets/images/facilities/cultural-activities.jpg" alt="Cultural Activities at Sanawar Smart School Bhupal" loading="lazy" style="max-height: 300px;" />
                </div>
              </div>
              <div class="col-6">
                <div class="editorial-image-frame">
                  <img src="assets/images/gallery/festival-1.jpg" alt="School Festivals at Sanawar Smart School Bhupal" loading="lazy" style="height: 210px;" />
                </div>
              </div>
              <div class="col-6">
                <div class="editorial-image-frame">
                  <img src="assets/images/gallery/tour-1.jpg" alt="School Tour at Sanawar Smart School Bhupal" loading="lazy" style="height: 210px;" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. SPORTS (DEDICATED SPORTS HIGHLIGHT AREA) -->
    <section class="section-padding bg-navy">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 order-lg-2 reveal-right">
            <div class="editorial-image-frame">
              <img src="assets/images/facilities/sports-games.jpg" alt="Annual Sports Meet and Athletics at Sanawar Smart School Bhupal" loading="lazy" />
              <div class="editorial-caption-bar">
                Annual Sports Meet · 10,051.218 Sq. Mtrs. Playground · Indoor Shooting Range
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 reveal-left">
            <span class="eyebrow-label eyebrow-gold">ATHLETICS, FITNESS &amp; INDIGENOUS GAMES</span>
            <h2 class="display-6 fw-bold mb-3">Annual Sports Meet &amp; Physical Education</h2>
            <div class="gold-rule"></div>
            <p>
              Every year, the <strong>Annual Sports Meet</strong> is held on the school campus with a colourful opening ceremony. Respected dignitaries are invited as the Chief Guest to declare the meet open, followed by a skilled march past of house athletes.
            </p>
            <p>
              Our young athletes demonstrate their talent in track and field events including <strong>heats, relay, and long jump</strong>, with medals and trophies presented to winners by our Chairman. Regular classes in <strong>Yoga, Gymnastics, Skating, and Karate</strong> nurture physical fitness, while indigenous sports like <strong>Kho-Kho and Kabaddi</strong> are a proud routine part of our school and have won prizes at various levels.
            </p>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a href="sports-games.html" class="btn btn-luxury-gold">Explore Sports &amp; Games</a>
              <a href="shooting-range.html" class="btn btn-luxury-outline">Shooting Range</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. CAMPUS / INFRASTRUCTURE -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">CBSE VERIFIED CAMPUS DIMENSIONS</span>
            <h2 class="display-6 fw-bold mb-0">Campus &amp; Infrastructure Overview</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="infrastructure-detail.html" class="btn btn-luxury-navy">Full Infrastructure Report</a>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-sm-6 col-lg-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line">TOTAL CAMPUS AREA</div>
              <div class="h3 fw-bold my-2 tabular-nums" style="color: var(--color-primary);">10,901.22 m²</div>
              <p class="small mb-0">Single contiguous compound bounded by pucca boundary walls on all sides in Village Bhupal, Mansa.</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line">PLAYGROUND AREA</div>
              <div class="h3 fw-bold my-2 tabular-nums" style="color: var(--color-primary);">10,051.22 m²</div>
              <p class="small mb-0">Expansive athletic track, Kho-Kho and Kabaddi courts, and outdoor sports assembly arena.</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line">CLASSROOMS &amp; LIBRARY</div>
              <div class="h3 fw-bold my-2 tabular-nums" style="color: var(--color-primary);">30 Rooms</div>
              <p class="small mb-0">Occupied classrooms (47 Sq. Mtrs. / 484.37 Sq. Ft. each) plus a 1,300.50 Sq. Ft. Library Media Center.</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line">SCIENCE &amp; IT LABS</div>
              <div class="h3 fw-bold my-2 tabular-nums" style="color: var(--color-primary);">05 Labs</div>
              <p class="small mb-0">Physics, Chemistry, Biology, Composite Science &amp; Computer Labs (56 Sq. Mtrs. / 775.64 Sq. Ft. each) + Math Lab.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. GALLERY PREVIEW (MASONRY-INSPIRED GRID) -->
    <section class="section-padding bg-light-canvas">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">VISUAL ARCHIVE</span>
            <h2 class="display-6 fw-bold mb-0">Life at Sanawar Smart School Bhupal</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="gallery.html" class="btn btn-luxury-navy">View Full Gallery</a>
          </div>
        </div>

        <div class="row g-4">
          ${featuredGallery
            .map(
              (item) => `
          <div class="col-md-6 col-lg-4 reveal-up">
            <a href="${item.categorySlug}" class="gallery-item-card">
              <img src="${item.src}" alt="${item.title} — ${item.category}" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-cat-kicker">${item.category}</span>
                <h3 class="gallery-title">${item.title}</h3>
              </div>
            </a>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- 12. OUR STAFF PREVIEW -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">DEDICATED EDUCATORS &amp; MENTORS</span>
            <h2 class="display-6 fw-bold mb-0">Our Faculty &amp; Staff</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="staff.html" class="btn btn-luxury-navy">View All Staff</a>
          </div>
        </div>

        <div class="row g-4">
          ${featuredStaff
            .map(
              (s) => `
          <div class="col-sm-6 col-md-4 col-lg-3 reveal-up">
            <div class="portrait-card">
              <div class="portrait-img-wrap">
                <img src="${s.image}" alt="${s.name} — ${s.role} at Sanawar Smart School Bhupal" loading="lazy" />
              </div>
              <div class="portrait-info">
                <h3 class="portrait-name">${s.name}</h3>
                <p class="portrait-role">${s.role}</p>
              </div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- 13. SHINING STARS (STUDENT ACHIEVEMENTS) -->
    <section class="section-padding bg-light-canvas">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">ACADEMIC MERIT ROLL</span>
            <h2 class="display-6 fw-bold mb-0">Our Shining Stars</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="shining-star.html" class="btn btn-luxury-navy">View All 12 Shining Stars</a>
          </div>
        </div>

        <div class="row g-4">
          ${featuredStars
            .map(
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
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- 14. RESULTS SECTION (CLASS 10TH & 12TH) -->
    <section class="section-padding bg-navy">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label eyebrow-gold">OFFICIAL BOARD EXAMINATION RECORDS</span>
            <h2 class="display-6 fw-bold mb-0">Three-Year Board Examination Results</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
          <div class="col-lg-4 text-lg-end mt-3 mt-lg-0 reveal-up">
            <a href="mandatory-disclosure.html" class="btn btn-luxury-outline">Mandatory Disclosure</a>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-6 reveal-up">
            <div class="luxury-card-navy p-4 p-md-5">
              <span class="eyebrow-label eyebrow-gold">SECONDARY SCHOOL EXAMINATION</span>
              <h3 class="h3 fw-bold mb-3">Three Year Result of 10th Class</h3>
              <p class="mb-4">
                Official Class X Board Examination result gazette for Sanawar Smart School Bhupal (CBSE School Code 21360). In the 2023 CBSE Class X examination, 56 of 60 appearing students passed, achieving a <strong>93.33%</strong> pass percentage.
              </p>
              <div class="d-flex flex-wrap gap-3">
                <a href="result-class-10.html" class="btn btn-luxury-gold">View Result Page</a>
                <a href="assets/documents/result-class-10.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-outline">View Document</a>
                <a href="assets/documents/result-class-10.pdf" download class="btn btn-luxury-outline">Download PDF</a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 reveal-up">
            <div class="luxury-card-navy p-4 p-md-5">
              <span class="eyebrow-label eyebrow-gold">SENIOR SECONDARY CERTIFICATE EXAMINATION</span>
              <h3 class="h3 fw-bold mb-3">Three Year Result of 12th Class</h3>
              <p class="mb-4">
                Official Class XII Board Examination result gazette for Sanawar Smart School Bhupal (CBSE School Code 21360). In the 2023 CBSE Class XII examination, 75 of 81 appearing students passed, achieving a <strong>92.59%</strong> pass percentage.
              </p>
              <div class="d-flex flex-wrap gap-3">
                <a href="result-class-12.html" class="btn btn-luxury-gold">View Result Page</a>
                <a href="assets/documents/result-class-12.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-luxury-outline">View Document</a>
                <a href="assets/documents/result-class-12.pdf" download class="btn btn-luxury-outline">Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 15. LATEST NEWS, UPCOMING EVENTS & STUDENT WISHES -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row g-5">
          <!-- Latest News & Student Wishes -->
          <div class="col-lg-5 reveal-left">
            <span class="eyebrow-label">INSTITUTIONAL ANNOUNCEMENTS</span>
            <h2 class="h3 fw-bold mb-2">Latest News &amp; Circulars</h2>
            <div class="gold-rule"></div>

            <div class="luxury-card p-4 mb-4">
              <div class="meta-line mb-2">OFFICIAL NOTICE BOARD</div>
              <h3 class="h5 fw-bold mb-2">School Updates &amp; Academic Circulars</h3>
              <p class="small mb-3">
                School updates will be published here. Parents and students may consult the official Academic Calendar, Mandatory Public Disclosure, and Fee Structure for verified session details.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <a href="academic-calendar.html" class="btn btn-luxury-outline-dark btn-sm">Academic Calendar</a>
                <a href="downloads.html" class="btn btn-luxury-outline-dark btn-sm">Official Downloads</a>
              </div>
            </div>

            <!-- Birthday / Student Wishes -->
            <div class="luxury-card p-4">
              <span class="eyebrow-label">STUDENT BIRTHDAY WISHES</span>
              <div class="d-flex align-items-center gap-3 mt-2">
                <img src="assets/images/gallery/student-rajat-bansal.jpg" alt="Student Birthday Wishes — Rajat Bansal, Class 4th" class="rounded-circle border" style="width: 76px; height: 76px; object-fit: cover; border-color: var(--color-gold) !important;" loading="lazy" />
                <div>
                  <h3 class="h5 fw-bold mb-1">Rajat Bansal</h3>
                  <div class="meta-line">Class 4th <span class="sep">·</span> Age: 10 Years</div>
                  <p class="small mb-0 mt-1">
                    Warmest birthday wishes from the Principal, staff, and students of Sanawar Smart School Bhupal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcoming Events / Academic Schedule -->
          <div class="col-lg-7 reveal-right">
            <div class="d-flex justify-content-between align-items-end mb-2">
              <div>
                <span class="eyebrow-label">ACADEMIC &amp; CO-CURRICULAR SCHEDULE</span>
                <h2 class="h3 fw-bold mb-0">Upcoming Events &amp; Session Milestones</h2>
              </div>
              <a href="academic-calendar.html" class="small fw-bold">Full Calendar &rarr;</a>
            </div>
            <div class="gold-rule"></div>

            <div class="row g-3">
              ${upcomingEvents
                .map(
                  (ev) => `
              <div class="col-md-6">
                <div class="luxury-card p-3">
                  <div class="meta-line mb-1">${ev.date} <span class="sep">·</span> ${ev.category}</div>
                  <h3 class="h6 fw-bold mb-0">${ev.title}</h3>
                </div>
              </div>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 16. PARENTS / SCHOOL COMMUNITY -->
    <section class="section-padding bg-light-canvas border-top">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">COLLABORATIVE GOVERNANCE</span>
            <h2 class="display-6 fw-bold mb-0">Parents &amp; School Community</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line mb-2">16 STATUTORY MEMBERS</div>
              <h3 class="h5 fw-bold mb-2">School Managing Committee (SMC)</h3>
              <p class="small mb-3">
                Chaired by S. Sandeep Singh Mann with Principal S. Baljeet Singh Sidhu as Secretary, guiding institutional policy under Guru Gobind Singh Educational &amp; Welfare Society, Mansa.
              </p>
              <a href="school-managing-committee.html" class="btn btn-luxury-outline-dark btn-sm">View SMC Roster</a>
            </div>
          </div>

          <div class="col-md-4 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line mb-2">PARENT-TEACHER PARTNERSHIP</div>
              <h3 class="h5 fw-bold mb-2">Parents Teachers Association (PTA)</h3>
              <p class="small mb-3">
                Led by President Mr. Gurdeep Singh and Secretary Mrs. Jasvir Kaur, strengthening transparent communication between families and educators.
              </p>
              <a href="parents-teachers-association.html" class="btn btn-luxury-outline-dark btn-sm">View PTA Committee</a>
            </div>
          </div>

          <div class="col-md-4 reveal-up">
            <div class="luxury-card p-4">
              <div class="meta-line mb-2">13 DEDICATED BUS ROUTES</div>
              <h3 class="h5 fw-bold mb-2">Regional Connectivity &amp; Transport</h3>
              <p class="small mb-3">
                Connecting students across Bhupal, Mansa, and neighbouring villages with 13 documented bus routes and supervised transit.
              </p>
              <a href="route.html" class="btn btn-luxury-outline-dark btn-sm">Explore Bus Routes</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 17. CALL TO ACTION -->
    <section class="section-padding-sm bg-navy border-top border-bottom" style="border-color: rgba(230,184,74,0.35) !important;">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-8 reveal-left">
            <span class="eyebrow-label eyebrow-gold">ADMISSIONS &amp; CAMPUS VISITS</span>
            <h2 class="display-6 fw-bold mb-2">Give Your Child a Brighter Beginning</h2>
            <p class="mb-0">
              Connect with the Admissions Office at Sanawar Smart School Bhupal, Mansa to learn about Nursery to Class XII programs, campus facilities, and transport routes.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end reveal-right">
            <div class="d-flex flex-wrap gap-3 justify-content-lg-end">
              <a href="contact.html" class="btn btn-luxury-gold">Contact School</a>
              <a href="facilities.html" class="btn btn-luxury-outline">Explore Campus</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 18. CONTACT SECTION -->
    <section class="section-padding bg-white" id="contact-home">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-7 reveal-up">
            <span class="eyebrow-label">GET IN TOUCH</span>
            <h2 class="display-6 fw-bold mb-0">Contact Sanawar Smart School Bhupal</h2>
            <div class="gold-rule mb-0 mt-3"></div>
          </div>
        </div>

        <div class="row g-5">
          <div class="col-lg-5 reveal-left">
            <div class="luxury-card p-4 mb-4">
              <div class="meta-line mb-1">CAMPUS ADDRESS</div>
              <h3 class="h5 fw-bold mb-2">${SCHOOL_INFO.addressShort}</h3>
              <p class="small mb-3">${SCHOOL_INFO.addressFull}</p>

              <div class="meta-line mb-1">TELEPHONE NUMBERS</div>
              <p class="fw-bold mb-3">
                <a href="tel:+919417094850">${SCHOOL_INFO.phones[0]}</a> &nbsp;|&nbsp;
                <a href="tel:+919876420039">${SCHOOL_INFO.phones[1]}</a>
              </p>

              <div class="meta-line mb-1">OFFICIAL EMAIL</div>
              <p class="fw-bold mb-0">
                <a href="mailto:${SCHOOL_INFO.emails[0]}">${SCHOOL_INFO.emails[0]}</a><br />
                <a href="mailto:${SCHOOL_INFO.emails[1]}" class="small fw-normal">${SCHOOL_INFO.emails[1]}</a>
              </p>
            </div>

            <div class="editorial-image-frame" style="height: 270px;">
              <iframe
                src="${SCHOOL_INFO.googleMapEmbed}"
                width="100%"
                height="270"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Sanawar Smart School Bhupal Location Map"
              ></iframe>
            </div>
          </div>

          <div class="col-lg-7 reveal-right">
            <div class="luxury-card p-4 p-md-5">
              <span class="eyebrow-label">ADMISSION &amp; GENERAL ENQUIRY</span>
              <h3 class="h4 fw-bold mb-3">Send Us a Message</h3>
              <form class="js-school-enquiry-form" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="homeName" class="form-label small fw-bold">Full Name *</label>
                    <input type="text" id="homeName" name="name" class="form-control form-control-luxury" placeholder="Enter parent or student name" required />
                  </div>
                  <div class="col-md-6">
                    <label for="homeEmail" class="form-label small fw-bold">Email Address *</label>
                    <input type="email" id="homeEmail" name="email" class="form-control form-control-luxury" placeholder="name@example.com" required />
                  </div>
                  <div class="col-md-6">
                    <label for="homePhone" class="form-label small fw-bold">Phone Number *</label>
                    <input type="tel" id="homePhone" name="phone" class="form-control form-control-luxury" placeholder="+91 98765 43210" required />
                  </div>
                  <div class="col-md-6">
                    <label for="homeSubject" class="form-label small fw-bold">Subject *</label>
                    <input type="text" id="homeSubject" name="subject" class="form-control form-control-luxury" placeholder="Admission Enquiry / General Query" required />
                  </div>
                  <div class="col-12">
                    <label for="homeMessage" class="form-label small fw-bold">Message *</label>
                    <textarea id="homeMessage" name="message" rows="4" class="form-control form-control-luxury" placeholder="Please share the student's class and your enquiry..." required></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-luxury-navy">Send Enquiry</button>
                  </div>
                </div>
                <div class="js-form-status" role="status" aria-live="polite" hidden></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
