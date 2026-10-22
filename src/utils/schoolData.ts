/**
 * Authentic Institutional Data for Sanawar Smart School Bhupal, Mansa, Punjab
 * Sourced strictly from https://sanawarsmartbhupal.com/ and official CBSE SARAS disclosure PDFs.
 */

export interface StaffMember {
  name: string;
  role: string;
  category: string;
  image: string;
}

export interface ShiningStar {
  name: string;
  classLevel: string;
  overallScore: string;
  subjectHighlights: string;
  image: string;
}

export interface SmcMember {
  srNo: number;
  memberName: string;
  fatherOrSpouseName: string;
  designation: string;
  address: string;
}

export interface PtaMember {
  srNo: number;
  name: string;
  designation: string;
}

export interface FeeRow {
  className: string;
  monthlyFee: string;
  stream: string;
}

export interface EnrollmentRow {
  className: string;
  sections: string;
  students: number;
}

export interface CalendarEvent {
  date: string;
  title: string;
  category: string;
}

export interface OfficialDocument {
  id: string;
  title: string;
  category: string;
  authority: string;
  referenceNo: string;
  description: string;
  pdfPath: string;
  pageUrl: string;
}

export interface FacilityItem {
  slug: string;
  title: string;
  kicker: string;
  shortDesc: string;
  fullDesc: string[];
  highlights: string[];
  image: string;
  secondaryImage?: string;
}

export interface GalleryPhoto {
  src: string;
  title: string;
  category: string;
  categorySlug: string;
  featured?: boolean;
}

export const SCHOOL_INFO = {
  name: 'Sanawar Smart School Bhupal',
  shortName: 'Sanawar Smart School',
  motto: 'Let Your Light Shine',
  society: 'Guru Gobind Singh Educational & Welfare Society, Mansa-151505 (Pb.)',
  societyRegNo: 'No. 420 of 2013-14 (Under Societies Registration Act, XXI of 1860)',
  affiliationNo: '1631322',
  schoolCode: '21360',
  udiseCode: '03150103007',
  rteRecognitionNo: 'Memo No. Accounts-1( )2016-7/Permanent Recognition/RTE/2848 (Code 6967)',
  nocNo: 'No. 3/54/2018-3Edu3/202052/1 Dated 13/01/2020',
  fireNocNo: 'NOC No. 311-88338-Fire/66013',
  buildingSafetyNo: 'Letter No. 534 (Provincial Division PWD B&R Branch, Mansa)',
  waterReportNo: 'DWTL/MNS/2324/00015 (ULR: TC000123000000070F)',
  principalName: 'S. Baljeet Singh Balli (Baljit Singh Sidhu)',
  principalQualification: 'B.P.Ed., D.P.Ed., M.P.Ed., M.Phil',
  chairmanName: 'S. Sandeep Singh Mann',
  specialEducator: 'Balreet Kaur',
  counsellor: 'Seema',
  addressShort: 'Sanawar Smart School Bhupal (Mansa), Mansa, Punjab',
  addressFull: 'Village Bhupal, P.O. Matti, Tehsil Mansa, District Mansa, Punjab - 151504',
  phones: ['+91-94170-94850', '+91-98764-20039'],
  emails: ['sanawarsmart.hsb@gmail.com', 'sanawarsmartschool@gmail.com'],
  facebookUrl: 'https://www.facebook.com/sssbmansa/',
  youtubeUrl: 'https://www.youtube.com/channel/UCqvI44fAwvPaoVBh2utpi2Q',
  inspectionVideoUrl: 'https://youtu.be/SYOJ29eLZhw',
  googleMapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8007535057686!2d75.44552891517245!3d30.0971383818632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910e31e669ffa51%3A0xe07a39b2e4cf046c!2sSanawar+Smart+School%2CBhupal!5e1!3m2!1sen!2sin!4v1535181340404'
};

export const REQUIRED_PAGES: string[] = [
  'index.html',
  'about.html',
  'facilities.html',
  'sports-games.html',
  'smart-class.html',
  'computer-lab.html',
  'cultural-activities.html',
  'transport.html',
  'activity-room.html',
  'gallery.html',
  'school-festivals.html',
  'school-tour.html',
  'school-activities.html',
  'cultural-gallery.html',
  'shooting-range.html',
  'school-library.html',
  'music-room.html',
  'school-managing-committee.html',
  'school-leaving-certificate.html',
  'infrastructure-detail.html',
  'student-enrollment.html',
  'academic-calendar.html',
  'chemistry-lab.html',
  'physics-lab.html',
  'biology-lab.html',
  'teachers-training.html',
  'books-list-class-wise.html',
  'books-list-2023-24.html',
  'no-objection-certificate.html',
  'society-certificate.html',
  'recognition-certificate.html',
  'building-safety-certificate.html',
  'fire-safety-certificate.html',
  'self-certification.html',
  'water-health-sanitation.html',
  'affiliation-letter.html',
  'fee-structure.html',
  'parents-teachers-association.html',
  'result-class-10.html',
  'result-class-12.html',
  'mandatory-disclosure.html',
  'staff.html',
  'shining-star.html',
  'route.html',
  'curriculum.html',
  'downloads.html',
  'contact.html'
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: 'S. Baljeet Singh Balli',
    role: 'Principal',
    category: 'Leadership',
    image: 'assets/images/staff/principal-baljeet-singh.jpg'
  },
  {
    name: 'Navdeep Kaur',
    role: 'PGT (Computer)',
    category: 'Post Graduate Teacher',
    image: 'assets/images/staff/navdeep-kaur.jpg'
  },
  {
    name: 'Sharanjeet Kaur',
    role: 'PGT (Commerce)',
    category: 'Post Graduate Teacher',
    image: 'assets/images/staff/sharanjeet-kaur.jpg'
  },
  {
    name: 'Amarjeet Singh',
    role: 'PGT (Physical Education)',
    category: 'Post Graduate Teacher',
    image: 'assets/images/staff/amarjeet-singh.jpg'
  },
  {
    name: 'Sukhvir Kaur',
    role: 'TGT English',
    category: 'Trained Graduate Teacher',
    image: 'assets/images/staff/sukhvir-kaur.jpg'
  },
  {
    name: 'Sukhwinder Kaur',
    role: 'TGT (English)',
    category: 'Trained Graduate Teacher',
    image: 'assets/images/staff/sukhwinder-kaur.jpg'
  },
  {
    name: 'Gurdeep Singh',
    role: 'Art Teacher',
    category: 'Creative Faculty',
    image: 'assets/images/staff/gurdeep-singh.jpg'
  },
  {
    name: 'Simerjit Kaur',
    role: 'Primary Teacher',
    category: 'Primary Wing',
    image: 'assets/images/staff/simerjit-kaur.jpg'
  },
  {
    name: 'Rajdeep Kaur',
    role: 'Primary Teacher',
    category: 'Primary Wing',
    image: 'assets/images/staff/rajdeep-kaur.jpg'
  },
  {
    name: 'Amritpal Kaur',
    role: 'Primary Teacher',
    category: 'Primary Wing',
    image: 'assets/images/staff/amritpal-kaur.jpg'
  },
  {
    name: 'Amandeep Kaur',
    role: 'Primary Teacher',
    category: 'Primary Wing',
    image: 'assets/images/staff/amandeep-kaur.jpg'
  },
  {
    name: 'Sandeep Kaur',
    role: 'NTT',
    category: 'Pre-Primary Wing',
    image: 'assets/images/staff/sandeep-kaur.jpg'
  },
  {
    name: 'Sukhdeep Kaur',
    role: 'NTT',
    category: 'Pre-Primary Wing',
    image: 'assets/images/staff/sukhdeep-kaur.jpg'
  },
  {
    name: 'Kamaldeep Kaur',
    role: 'Lab Assistant',
    category: 'Science Laboratories',
    image: 'assets/images/staff/kamaldeep-kaur.jpg'
  },
  {
    name: 'Kuldeep Kaur',
    role: 'Lab Assistant (Biology)',
    category: 'Science Laboratories',
    image: 'assets/images/staff/kuldeep-kaur.jpg'
  },
  {
    name: 'Amandeep Singh',
    role: 'Clerk',
    category: 'Administration',
    image: 'assets/images/staff/amandeep-singh.jpg'
  }
];

export const SHINING_STARS: ShiningStar[] = [
  {
    name: 'Damanpreet Kaur',
    classLevel: 'Class 10th',
    overallScore: '617 / 650 (95.0%)',
    subjectHighlights: 'Mathematics 100/100 · Science 100/100 · English 97/100',
    image: 'assets/images/gallery/star-1-damanpreet.jpg'
  },
  {
    name: 'Sumanpreet Kaur',
    classLevel: 'Class 10th',
    overallScore: '613 / 650 (94.3%)',
    subjectHighlights: 'Mathematics 100/100 · Hindi 99/100 · Science 98/100',
    image: 'assets/images/gallery/star-2-sumanpreet.jpg'
  },
  {
    name: 'Sharanjeet Kaur',
    classLevel: 'Class 10th',
    overallScore: '613 / 650 (94.3%)',
    subjectHighlights: 'Science 98/100 · English 97/100 · Mathematics 95/100',
    image: 'assets/images/gallery/star-12-sharanjeet.jpg'
  },
  {
    name: 'Sandeep Kaur',
    classLevel: 'Class 10th',
    overallScore: '612 / 650 (94.2%)',
    subjectHighlights: 'Science 99/100 · English 97/100 · Hindi 93/100',
    image: 'assets/images/gallery/star-3-sandeep10.jpg'
  },
  {
    name: 'Ravinder Kaur',
    classLevel: 'Class 10th',
    overallScore: '607 / 650 (93.4%)',
    subjectHighlights: 'Science 95/100 · English 94/100 · Social Studies 93/100',
    image: 'assets/images/gallery/star-4-ravinder.jpg'
  },
  {
    name: 'Benpreet Kaur',
    classLevel: 'Class 10th',
    overallScore: '604 / 650 (93.0%)',
    subjectHighlights: 'Mathematics 100/100 · Science 99/100 · English 96/100',
    image: 'assets/images/gallery/star-5-benpreet.jpg'
  },
  {
    name: 'Gurpreet Kaur',
    classLevel: 'Class 10th',
    overallScore: '604 / 650 (93.0%)',
    subjectHighlights: 'Science 98/100 · Hindi 98/100 · English 96/100',
    image: 'assets/images/gallery/star-6-gurpreet.jpg'
  },
  {
    name: 'Harpreet Kaur',
    classLevel: 'Class 10th',
    overallScore: '600 / 650 (92.3%)',
    subjectHighlights: 'Science 97/100 · English 97/100 · Hindi 93/100',
    image: 'assets/images/gallery/star-7-harpreet.jpg'
  },
  {
    name: 'Jashandeep Kaur',
    classLevel: 'Class 12th',
    overallScore: '401 / 450',
    subjectHighlights: 'Chemistry 99/100',
    image: 'assets/images/gallery/star-8-jashandeep.jpg'
  },
  {
    name: 'Lovepreet Kaur',
    classLevel: 'Class 12th',
    overallScore: '397 / 450',
    subjectHighlights: 'Chemistry 98/100',
    image: 'assets/images/gallery/star-9-lovepreet.jpg'
  },
  {
    name: 'Sandeep Kaur',
    classLevel: 'Class 12th',
    overallScore: '397 / 450',
    subjectHighlights: 'Chemistry 94/100',
    image: 'assets/images/gallery/star-10-sandeep12.jpg'
  },
  {
    name: 'Jaspreet Kaur',
    classLevel: 'Class 12th',
    overallScore: '395 / 450',
    subjectHighlights: 'Chemistry 99/100',
    image: 'assets/images/gallery/star-11-jaspreet.jpg'
  }
];

export const SMC_MEMBERS: SmcMember[] = [
  { srNo: 1, memberName: 'Sandeep Singh Mann', fatherOrSpouseName: 'S. Kaur Singh', designation: 'Chairman', address: '#484, Sector-16, Chandigarh' },
  { srNo: 2, memberName: 'Parampal Singh', fatherOrSpouseName: 'S. Baljinder Singh', designation: 'Member', address: 'V.P.O. Hamirgarh, Dist. Sangrur' },
  { srNo: 3, memberName: 'Ajit Kaur', fatherOrSpouseName: 'S. Chet Singh', designation: 'Lady Member', address: 'Dasmesh Nagar, Mansa' },
  { srNo: 4, memberName: 'Paramjeet Singh', fatherOrSpouseName: 'S. Kartar Singh', designation: 'Member', address: 'V.P.O. Ralla, Dist. Mansa' },
  { srNo: 5, memberName: 'Baldev Singh', fatherOrSpouseName: 'S. Pritam Singh', designation: 'Member', address: 'V.P.O. Alampur Bodla, Dist. Mansa' },
  { srNo: 6, memberName: 'Charanjeet Singh', fatherOrSpouseName: 'S. Kaur Singh', designation: 'Member', address: 'Sector-16, Chandigarh' },
  { srNo: 7, memberName: 'Ashok Kumar', fatherOrSpouseName: 'S. Bhagwan Singh', designation: 'Member', address: '380-B, Adarsh Nagar, Mandi, Khanna' },
  { srNo: 8, memberName: 'Kanwaljeet Kaur', fatherOrSpouseName: 'S. Mukhinder Singh', designation: 'Member', address: 'V.P.O. Jawaharke, Dist. Mansa' },
  { srNo: 9, memberName: 'Baljeet Singh Sidhu', fatherOrSpouseName: 'S. Gurjant Singh', designation: 'Principal / Secretary', address: '#644, Dasmesh Nagar, Mansa' },
  { srNo: 10, memberName: 'Amandeep Singh', fatherOrSpouseName: 'S. Jaswant Singh', designation: 'Member', address: 'Village Atla Khurd, Dist. Mansa' },
  { srNo: 11, memberName: 'Ranbir Singh', fatherOrSpouseName: 'S. Katar Singh', designation: 'Member', address: 'Village Ward No. 12, Bhikhi, Dist. Mansa' },
  { srNo: 12, memberName: 'Sewak Singh', fatherOrSpouseName: 'S. Ranjit Singh', designation: 'Member', address: 'V.P.O. Makha, Dist. Mansa' },
  { srNo: 13, memberName: 'Harjit Singh', fatherOrSpouseName: 'S. Pritam Singh', designation: 'Dalit Member', address: 'V.P.O. Joga, Dist. Mansa' },
  { srNo: 14, memberName: 'Parminder Singh', fatherOrSpouseName: 'Mukhtiar Singh', designation: 'Member', address: 'Street Gagowal, Mansa' },
  { srNo: 15, memberName: 'Navdeep Kaur', fatherOrSpouseName: 'S. Jaswinder Singh', designation: 'Member', address: 'Village Tamkot, Dist. Mansa' },
  { srNo: 16, memberName: 'Charnjit Kaur', fatherOrSpouseName: 'Joginder Singh', designation: 'Member', address: 'V.P.O. Joga, Dist. Mansa' }
];

export const PTA_MEMBERS: PtaMember[] = [
  { srNo: 1, name: 'Mr. Gurdeep Singh', designation: 'President' },
  { srNo: 2, name: 'Mrs. Jasvir Kaur', designation: 'Secretary' },
  { srNo: 3, name: 'Mr. Pardeep Singh', designation: 'Cashier' },
  { srNo: 4, name: 'Mr. Sarabjit Singh', designation: 'Member' },
  { srNo: 5, name: 'Mr. Ranjit Singh', designation: 'Member' },
  { srNo: 6, name: 'Mr. Harjit Singh', designation: 'Member' },
  { srNo: 7, name: 'Mr. Amandeep Singh', designation: 'Member' }
];

export const FEE_STRUCTURE_ROWS: FeeRow[] = [
  { className: 'Nursery', monthlyFee: '₹ 1,190', stream: 'Foundational / Pre-Primary' },
  { className: 'K.G.', monthlyFee: '₹ 1,365', stream: 'Foundational / Pre-Primary' },
  { className: '1st', monthlyFee: '₹ 1,365', stream: 'Primary Wing' },
  { className: '2nd', monthlyFee: '₹ 1,365', stream: 'Primary Wing' },
  { className: '3rd', monthlyFee: '₹ 1,420', stream: 'Primary Wing' },
  { className: '4th', monthlyFee: '₹ 1,420', stream: 'Primary Wing' },
  { className: '5th', monthlyFee: '₹ 1,420', stream: 'Primary Wing' },
  { className: '6th', monthlyFee: '₹ 1,495', stream: 'Middle Wing' },
  { className: '7th', monthlyFee: '₹ 1,495', stream: 'Middle Wing' },
  { className: '8th', monthlyFee: '₹ 1,495', stream: 'Middle Wing' },
  { className: '9th', monthlyFee: '₹ 1,560', stream: 'Secondary Wing (CBSE)' },
  { className: '10th', monthlyFee: '₹ 1,560', stream: 'Secondary Wing (CBSE)' },
  { className: '11th Humanities', monthlyFee: '₹ 2,160', stream: 'Senior Secondary (Arts/Humanities)' },
  { className: '11th Science', monthlyFee: '₹ 2,700', stream: 'Senior Secondary (Medical / Non-Medical)' },
  { className: '11th Commerce', monthlyFee: '₹ 2,700', stream: 'Senior Secondary (Commerce)' },
  { className: '12th Humanities', monthlyFee: '₹ 2,160', stream: 'Senior Secondary (Arts/Humanities)' },
  { className: '12th Science', monthlyFee: '₹ 2,700', stream: 'Senior Secondary (Medical / Non-Medical)' },
  { className: '12th Commerce', monthlyFee: '₹ 2,700', stream: 'Senior Secondary (Commerce)' }
];

export const ENROLLMENT_ROWS: EnrollmentRow[] = [
  { className: 'Nursery / K.G.', sections: '04', students: 104 },
  { className: '1st', sections: '02', students: 74 },
  { className: '2nd', sections: '02', students: 62 },
  { className: '3rd', sections: '02', students: 75 },
  { className: '4th', sections: '02', students: 76 },
  { className: '5th', sections: '02', students: 67 },
  { className: '6th', sections: '02', students: 43 },
  { className: '7th', sections: '02', students: 61 },
  { className: '8th', sections: '02', students: 57 },
  { className: '9th', sections: '02', students: 61 },
  { className: '10th', sections: '02', students: 46 },
  { className: '11th', sections: '03', students: 50 },
  { className: '12th', sections: '03', students: 56 }
];

export const ACADEMIC_CALENDAR_EVENTS: CalendarEvent[] = [
  { date: '27th March', title: 'New Academic Session Begins', category: 'Academic Milestone' },
  { date: '14th April', title: 'Vaisakhi / Birthday of Dr. B.R. Ambedkar', category: 'Gazetted Holiday' },
  { date: '22nd April', title: 'Idul Fitr / Lord Parshuram Jayanti', category: 'Gazetted Holiday' },
  { date: '15th May', title: 'Periodic Assessment 1 (PA-1) Begins', category: 'Examination' },
  { date: '24th July', title: 'Periodic Assessment 2 (PA-2) Begins', category: 'Examination' },
  { date: '15th August', title: 'Independence Day Celebration & Patriotic Competitions', category: 'National Observance' },
  { date: '30th August', title: 'Raksha Bandhan & Inter-House Rakhi Making', category: 'Cultural & Holiday' },
  { date: '7th September', title: 'Janam Ashtami Observance', category: 'Cultural & Holiday' },
  { date: '18th September', title: 'Summative Assessment 1 (SA-1) Begins', category: 'Examination' },
  { date: '2nd October', title: 'Birthday of Mahatma Gandhi (Gandhi Jayanti)', category: 'National Observance' },
  { date: '24th October', title: 'Dussehra Holiday', category: 'Cultural & Holiday' },
  { date: '12th November', title: 'Diwali & Diya / Rangoli Competitions', category: 'Cultural & Holiday' },
  { date: '13th November', title: 'Vishwakarma Day', category: 'Gazetted Holiday' },
  { date: '20th November', title: 'Periodic Assessment 3 (PA-3) Begins', category: 'Examination' },
  { date: '27th November', title: 'Parkash Purab of Sri Guru Nanak Dev Ji', category: 'Gazetted Holiday' },
  { date: 'December (2nd Week)', title: 'Annual Sports Week & Track-and-Field Meet', category: 'Sports & Athletics' },
  { date: '17th December', title: 'Martyrdom Day of Sri Guru Tegh Bahadur Ji', category: 'Observance' },
  { date: '18th December', title: 'Periodic Assessment 4 (PA-4) Begins', category: 'Examination' },
  { date: '25th December', title: 'Christmas Day', category: 'Holiday' },
  { date: '13th January', title: 'Lohri Celebration on Campus', category: 'Cultural Festival' },
  { date: '14th January', title: 'Makar Sankranti', category: 'Holiday' },
  { date: '26th January', title: 'Republic Day Celebration & Speech Contest', category: 'National Observance' },
  { date: '4th March', title: 'Summative Assessment 2 (SA-2) Final Examinations Begin', category: 'Examination' },
  { date: '8th March', title: 'Maha Shivratri', category: 'Holiday' },
  { date: '23rd March', title: 'Shaheedi Diwas of Shaheed-e-Azam Bhagat Singh', category: 'Observance' },
  { date: '25th March', title: 'Holi Festival', category: 'Holiday' }
];

export const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: 'mandatory-disclosure',
    title: 'Mandatory Public Disclosure (Appendix-IX)',
    category: 'CBSE SARAS 4.0 Compliance',
    authority: 'Central Board of Secondary Education (CBSE)',
    referenceNo: 'Affiliation No. 1631322 · School Code 21360',
    description: 'Complete statutory disclosure covering school profile, uploaded certificates, academic results, teaching staff strength (45 teachers), and campus infrastructure.',
    pdfPath: 'assets/documents/mandatory-disclosure.pdf',
    pageUrl: 'mandatory-disclosure.html'
  },
  {
    id: 'affiliation-letter',
    title: 'CBSE Official Affiliation Letter',
    category: 'Board Affiliation',
    authority: 'Central Board of Secondary Education, New Delhi',
    referenceNo: 'CBSE/AFF/SS-00283-2122/2021-22 (1631322)',
    description: 'Official sanction for Senior Secondary School Examination (Class 1 to 12) affiliation along with approved subjects and inspection infrastructure report.',
    pdfPath: 'assets/documents/affiliation-letter.pdf',
    pageUrl: 'affiliation-letter.html'
  },
  {
    id: 'society-certificate',
    title: 'Certificate of Registration of Societies',
    category: 'Trust & Society Registration',
    authority: 'Registrar of Firms & Societies, Punjab (Chandigarh)',
    referenceNo: 'No. 420 of 2013-14 (Act XXI of 1860)',
    description: 'Official registration certificate of Guru Gobind Singh Educational & Welfare Society, No. 644, Ward No. 6, Dashmesh Nagar, Mansa.',
    pdfPath: 'assets/documents/society-certificate.pdf',
    pageUrl: 'society-certificate.html'
  },
  {
    id: 'no-objection-certificate',
    title: 'No Objection Certificate (NOC)',
    category: 'State Government NOC',
    authority: 'Department of School Education (Education-3 Branch), Govt. of Punjab',
    referenceNo: 'Memo No. 3/54/2018-3Edu3/202052/1',
    description: 'State Government No Objection Certificate issued at Chandigarh for CBSE New Delhi affiliation, including verified English translation and reserve fund records.',
    pdfPath: 'assets/documents/no-objection-certificate.pdf',
    pageUrl: 'no-objection-certificate.html'
  },
  {
    id: 'recognition-certificate',
    title: 'RTE Permanent Recognition Certificate',
    category: 'Right to Education Act, 2009',
    authority: 'Office of District Education Officer (Elementary Education), Mansa',
    referenceNo: 'Memo No. Accounts-1( )2016-7/RTE/2848 · Code 6967',
    description: 'Permanent recognition certificate under Section 18 of the Right of Children to Free and Compulsory Education Act, 2009.',
    pdfPath: 'assets/documents/recognition-certificate.pdf',
    pageUrl: 'recognition-certificate.html'
  },
  {
    id: 'building-safety-certificate',
    title: 'Building Safety Certificate',
    category: 'Structural Safety Compliance',
    authority: 'Executive Engineer, Provincial Division PWD B&R Branch, Mansa',
    referenceNo: 'Letter No. 534 · Ref 1219/55/22',
    description: 'Official structural inspection and Building Safety Certificate verifying that the school campus building meets National Building Code safety standards.',
    pdfPath: 'assets/documents/building-safety-certificate.pdf',
    pageUrl: 'building-safety-certificate.html'
  },
  {
    id: 'fire-safety-certificate',
    title: 'Fire Safety Certificate',
    category: 'Fire & Emergency Services',
    authority: 'Punjab Fire Services (Mansa)',
    referenceNo: 'NOC No. 311-88338-Fire/66013',
    description: 'Fire prevention and life safety compliance certificate issued by Punjab Fire Services for Ground + 3 Upper Floors under NBC Subdivision B-1.',
    pdfPath: 'assets/documents/fire-safety-certificate.pdf',
    pageUrl: 'fire-safety-certificate.html'
  },
  {
    id: 'self-certification',
    title: 'Self Certification / DEO Certificate (Appendix-III)',
    category: 'Statutory Verification',
    authority: 'District Education Officer, Mansa & School Management',
    referenceNo: 'File No. 2023159257 · U-DISE 03150103007',
    description: 'Appendix-III certificate counter-signed by the District Education Officer (Mansa) verifying land ownership, safety inspections, and CBSE norms.',
    pdfPath: 'assets/documents/self-certification.pdf',
    pageUrl: 'self-certification.html'
  },
  {
    id: 'water-health-sanitation',
    title: 'Water, Health & Sanitation Certificates',
    category: 'Public Health & Lab Testing',
    authority: 'District Water Testing Laboratory, Water Supply & Sanitation Dept., Mansa',
    referenceNo: 'Report No. DWTL/MNS/2324/00015',
    description: 'Chemical testing report confirming RO/CWPP purified drinking water meets IS-10500:2012 acceptable limits across TDS, pH, Alkalinity, Hardness, Calcium, and Chloride.',
    pdfPath: 'assets/documents/water-health-sanitation.pdf',
    pageUrl: 'water-health-sanitation.html'
  },
  {
    id: 'fee-structure',
    title: 'Official Monthly Fee Structure',
    category: 'Academic & Fee Schedule',
    authority: 'Sanawar Smart School Bhupal (Mansa)',
    referenceNo: 'Session 2023-24 Schedule (Nursery to Class XII)',
    description: 'Class-wise transparent monthly tuition fee schedule from Nursery to Class XII (Humanities, Science, and Commerce streams).',
    pdfPath: 'assets/documents/fee-structure.pdf',
    pageUrl: 'fee-structure.html'
  },
  {
    id: 'academic-calendar',
    title: 'Annual Academic Calendar & Competitions Schedule',
    category: 'Academic Planning',
    authority: 'Office of the Principal, Sanawar Smart School Bhupal',
    referenceNo: 'Academic Session Calendar & 51 Activity Milestones',
    description: 'Complete schedule of Periodic Assessments (PA-1 to PA-4), Summative Assessments (SA-1 & SA-2), Gazetted Holidays, and Inter-House Competitions.',
    pdfPath: 'assets/documents/academic-calendar.pdf',
    pageUrl: 'academic-calendar.html'
  },
  {
    id: 'school-managing-committee',
    title: 'School Managing Committee (SMC) List',
    category: 'Governance',
    authority: 'Guru Gobind Singh Educational & Welfare Society, Mansa',
    referenceNo: '16-Member Statutory Governance Body',
    description: 'Official roster of the 16 members of the School Managing Committee including Chairman, Principal/Secretary, parent representatives, and educationists.',
    pdfPath: 'assets/documents/school-managing-committee.pdf',
    pageUrl: 'school-managing-committee.html'
  },
  {
    id: 'parents-teachers-association',
    title: 'Parents Teachers Association (PTA) List',
    category: 'Community Governance',
    authority: 'Sanawar Smart School Bhupal (CBSE Affiliation 1631322)',
    referenceNo: '7-Member Executive PTA Committee',
    description: 'Official list of Parents Teachers Association (PTA) office bearers and executive members fostering collaborative parent-school partnership.',
    pdfPath: 'assets/documents/parents-teachers-association.pdf',
    pageUrl: 'parents-teachers-association.html'
  },
  {
    id: 'result-class-10',
    title: 'Three Year Result of 10th Class',
    category: 'Board Examination Gazette',
    authority: 'CBSE (Region: Chandigarh) & PSEB',
    referenceNo: 'School Code 21360 · 93.33% CBSE Pass Record',
    description: 'Official Three-Year Board Examination Result Gazette and summary for Secondary School Examination (Class X).',
    pdfPath: 'assets/documents/result-class-10.pdf',
    pageUrl: 'result-class-10.html'
  },
  {
    id: 'result-class-12',
    title: 'Three Year Result of 12th Class',
    category: 'Board Examination Gazette',
    authority: 'CBSE (Region: Chandigarh) & PSEB',
    referenceNo: 'School Code 21360 · 92.59% CBSE Pass Record',
    description: 'Official Three-Year Board Examination Result Gazette and summary for Senior Secondary School Certificate Examination (Class XII).',
    pdfPath: 'assets/documents/result-class-12.pdf',
    pageUrl: 'result-class-12.html'
  },
  {
    id: 'application-form',
    title: 'Application Form for Teaching Staff (PGT / TGT / PRT)',
    category: 'Recruitment & Downloads',
    authority: 'Sanawar Smart School Bhupal (Mansa)',
    referenceNo: 'Official 4-Page Faculty Application Dossier',
    description: 'Official printable application form for candidates applying for PGT, TGT, and PRT teaching positions at Sanawar Smart School Bhupal.',
    pdfPath: 'assets/documents/application-form.pdf',
    pageUrl: 'downloads.html'
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    slug: 'school-library.html',
    title: 'School Library & Media Center',
    kicker: '1,300.50 Sq. Ft. Reading Sanctuary',
    shortDesc:
      'The goal of the school library media center is to ensure that all members of the school community have equitable access to books, reading, reference periodicals, and information literacy.',
    fullDesc: [
      'The goal of the Sanawar Smart School Bhupal Library Media Center is to ensure that all members of the school community have equitable access to books, reading, and scholarly information.',
      'Spanning 1,300.50 square feet as verified in our CBSE inspection report, the library houses age-appropriate literature, NCERT and CBSE reference volumes, encyclopedias, periodicals, and quiet reading zones for Primary, Middle, and Senior Secondary students.'
    ],
    highlights: [
      '1,300.50 Sq. Ft. dedicated reading & reference hall',
      'Curated NCERT/CBSE academic & general reference collection',
      'Structured library periods for every class from Primary to Class XII',
      'Quiet reading environment fostering independent research habits'
    ],
    image: 'assets/images/facilities/school-library.jpg',
    secondaryImage: 'assets/images/facilities/library-home.jpg'
  },
  {
    slug: 'smart-class.html',
    title: 'Digital Smart Classrooms',
    kicker: 'Interactive Audio-Visual Pedagogy',
    shortDesc:
      'Smart Class empowers teachers with well-researched, curriculum-mapped digital modules projected right in the classrooms to elucidate and explain complex concepts.',
    fullDesc: [
      'Smart Class at Sanawar Smart School Bhupal empowers teachers with well-researched, curriculum-mapped digital modules projected directly inside the classroom to elucidate and explain concepts clearly.',
      'It inspires active learning across the entire classroom, improves teaching effectiveness and productivity, and brings abstract and challenging curriculum topics to life through visual storytelling. It makes learning an enjoyable experience for students while enabling teachers to instantly assess and evaluate student comprehension.'
    ],
    highlights: [
      'Curriculum-mapped digital modules aligned with CBSE syllabus',
      'Visual 3D & multimedia elucidation of abstract science and math concepts',
      'Enhanced classroom engagement and interactive discussion',
      'Immediate formative assessment and concept reinforcement'
    ],
    image: 'assets/images/facilities/smart-class.jpg',
    secondaryImage: 'assets/images/facilities/smart-class-home.jpg'
  },
  {
    slug: 'computer-lab.html',
    title: 'Computer Technology Laboratory',
    kicker: '775.64 Sq. Ft. Digital Computing Center',
    shortDesc:
      'Equipped with advanced computer systems and broadband internet, imparting foundational to senior-secondary computer education right from Class 1st.',
    fullDesc: [
      'We live in a fast-changing era defined by computer technology. Technology-induced changes and evolving global communication have created new opportunities for every learner.',
      'In this paradigm, every student at Sanawar Smart School Bhupal is provided with hands-on opportunity to master computing. Advanced computer systems with always-on broadband internet are installed in our 775.64 Sq. Ft. Computer Lab, and students are imparted structured computer knowledge starting right from Class 1st up to Class 12th Computer Science.'
    ],
    highlights: [
      '775.64 Sq. Ft. dedicated Computer Lab with broadband connectivity',
      'Hands-on practical computing education beginning from Class 1st',
      'CBSE Senior Secondary Computer Science (083) practical workstation support',
      'Guided supervision by qualified PGT Computer Science faculty'
    ],
    image: 'assets/images/facilities/computer-lab.jpg',
    secondaryImage: 'assets/images/facilities/computer-lab-home.jpg'
  },
  {
    slug: 'chemistry-lab.html',
    title: 'Chemistry Laboratory',
    kicker: '775.64 Sq. Ft. Analytical Science Lab',
    shortDesc:
      'Spacious, well-ventilated analytical chemistry laboratory where secondary and senior secondary students conduct titration, salt analysis, and organic experiments.',
    fullDesc: [
      'The Chemistry Laboratory at Sanawar Smart School Bhupal spans 775.64 square feet and is engineered with safety workstations, reagent shelves, and analytical apparatus required by CBSE Senior Secondary examination standards.',
      'Under the supervision of faculty and dedicated laboratory assistants, students bridge theoretical equations with real-world chemical reactions—developing precision that has helped our Class 12th Shining Stars achieve 99/100 and 98/100 in CBSE Chemistry.'
    ],
    highlights: [
      '775.64 Sq. Ft. CBSE-compliant laboratory space',
      'Complete apparatus for volumetric titration and qualitative salt analysis',
      'Strict adherence to laboratory safety and chemical handling protocols',
      'Proven track record of 99/100 board scores in Class XII Chemistry'
    ],
    image: 'assets/images/facilities/chemistry-lab.jpg'
  },
  {
    slug: 'physics-lab.html',
    title: 'Physics Laboratory',
    kicker: '775.64 Sq. Ft. Experimental Physics Lab',
    shortDesc:
      'Equipped with optical benches, electrical circuit boards, galvanometers, and mechanics apparatus for experiential CBSE Physics practicals.',
    fullDesc: [
      'Our 775.64 square-foot Physics Laboratory provides an inquiry-driven environment where students verify physical laws through direct experimentation and measurement.',
      'From vernier calipers, screw gauges, and pendulum mechanics to optics, semiconductors, and potentiometer circuits, every student performs individual practical work aligned with the NCERT/CBSE laboratory manual.'
    ],
    highlights: [
      '775.64 Sq. Ft. dedicated Physics experimental hall',
      'Full suite of optics, electricity, magnetism, and mechanics instruments',
      'Individual practical stations for Classes IX to XII',
      'Guided inquiry reinforcing conceptual clarity and quantitative accuracy'
    ],
    image: 'assets/images/facilities/physics-lab.jpg'
  },
  {
    slug: 'biology-lab.html',
    title: 'Biology & Life Sciences Laboratory',
    kicker: '775.64 Sq. Ft. Microscopy & Specimen Lab',
    shortDesc:
      'Compound microscopes, anatomical models, permanent slides, and botanical specimens supporting hands-on biological investigation.',
    fullDesc: [
      'The Biology Laboratory at Sanawar Smart School Bhupal (775.64 Sq. Ft.) is curated to inspire curiosity about living systems, cellular architecture, plant physiology, and human anatomy.',
      'Supported by our dedicated Biology Lab Assistant (Kuldeep Kaur) and science faculty, students work with high-precision microscopes, histological slides, and ecological models in full compliance with CBSE guidelines.'
    ],
    highlights: [
      '775.64 Sq. Ft. Life Sciences & Microscopy laboratory',
      'Compound microscopes, anatomical models, and botanical charts',
      'Dedicated Lab Assistant (Biology) supporting student practicals',
      'Full compliance with CBSE Wildlife Protection & ethical specimen guidelines'
    ],
    image: 'assets/images/facilities/biology-lab.jpg'
  },
  {
    slug: 'sports-games.html',
    title: 'Sports & Games Arena',
    kicker: '10,051.218 Sq. Mtrs. Campus Playground',
    shortDesc:
      'Annual Sports Meet, track-and-field athletics, relay, long jump, yoga, gymnastics, skating, karate, Kho-Kho, and Kabaddi across our expansive playground.',
    fullDesc: [
      'Every year, the Annual Sports Meet is held on the Sanawar Smart School Bhupal campus with a vibrant opening ceremony and disciplined march past of athletes. Respected dignitaries declare the meet open, and medals and trophies are awarded by our Chairman.',
      'Across our 10,051.218 square meter playground, young athletes prove their mettle in track and field events including heats, relay, and long jump. Regular classes in Yoga, Gymnastics, Skating, and Karate nurture physical fitness, while indigenous sports like Kho-Kho and Kabaddi remain an integral part of school life.'
    ],
    highlights: [
      '10,051.218 Sq. Mtrs. expansive outdoor sports ground',
      'Annual Sports Meet featuring house march past, track heats, relay & long jump',
      'Regular training in Yoga, Gymnastics, Skating & Karate',
      'Indigenous sports excellence in Kho-Kho and Kabaddi guided by PGT Physical Education'
    ],
    image: 'assets/images/facilities/sports-games.jpg'
  },
  {
    slug: 'shooting-range.html',
    title: 'Indoor Shooting Range',
    kicker: 'Precision Marksmanship & Concentration',
    shortDesc:
      'Dedicated school shooting range cultivating focus, posture, discipline, and competitive marksmanship under trained supervision.',
    fullDesc: [
      'Sanawar Smart School Bhupal features a dedicated indoor Shooting Range designed to introduce students to the discipline and mental poise of target shooting.',
      'Under strict safety protocols and expert supervision, student marksmen develop breath control, concentration, steadiness, and sporting temperament.'
    ],
    highlights: [
      'Dedicated indoor target shooting lanes on campus',
      'Builds mental focus, posture, and competitive composure',
      'Supervised practice adhering to strict range safety norms',
      'Prepares students for inter-school and district marksmanship events'
    ],
    image: 'assets/images/facilities/shooting-range.jpg'
  },
  {
    slug: 'cultural-activities.html',
    title: 'Cultural Activities & House System',
    kicker: 'Four-House Leadership & Creative Expression',
    shortDesc:
      'Four-house system (Mother Teresa, Bhagat Singh, Dr. Kalam, Ms. Kalpana), student council elections, music, dance, quizzes, and fine arts.',
    fullDesc: [
      'Our school has always kept in mind the need of forming good learners by providing opportunities to bring out their leadership qualities. Every year elections are organized to form the Student Council.',
      'The entire school is divided into four houses named after Mother Teresa, Shaheed Bhagat Singh, Dr. A.P.J. Abdul Kalam, and Kalpana Chawla. House-wise competitions are held regularly—including Song, Dance, Art & Craft, Science Quiz, Mathematics Quiz, Mehandi, Diya Making, Fancy Dress, and Calligraphy—supported by regular classes in Music and Art & Craft by trained teachers.'
    ],
    highlights: [
      'Four Houses: Mother Teresa, Bhagat Singh, Dr. Kalam & Ms. Kalpana',
      'Annual democratic Student Council elections',
      'Inter-house Song, Dance, Science Quiz, Math Quiz & Calligraphy contests',
      'Festival workshops including Diya Making, Rangoli, Mehandi & Fancy Dress'
    ],
    image: 'assets/images/facilities/cultural-activities.jpg'
  },
  {
    slug: 'activity-room.html',
    title: 'Activity Room',
    kicker: 'Small-Group Experiential Learning',
    shortDesc:
      'A nurturing space where children gather in small groups for interactive games, arts and crafts, story sacks, and collaborative discovery.',
    fullDesc: [
      'The Activity Room at Sanawar Smart School Bhupal is where children come in small groups to experience hands-on activities, peer interaction, and guided creative exploration.',
      'Equipped with educational games, arts and crafts materials, and story sacks, this quiet extension gives children every opportunity to experience small-group teamwork alongside individual and whole-class learning.'
    ],
    highlights: [
      'Dedicated small-group experiential activity studio',
      'Educational games, story sacks, and tactile arts & crafts materials',
      'Supports NTT & Primary wing foundational literacy and motor skills',
      'Encourages peer communication, curiosity, and confidence'
    ],
    image: 'assets/images/facilities/activity-room.jpg'
  },
  {
    slug: 'music-room.html',
    title: 'Music & Performing Arts Room',
    kicker: 'Rhythm, Vocal Training & Cultural Heritage',
    shortDesc:
      'Dedicated music instruction where trained faculty guide students in vocal recitation, traditional instruments, patriotic songs, and stage performance.',
    fullDesc: [
      'Regular classes in Music and Art & Craft by trained teachers have proved to be a great boon for creative development at Sanawar Smart School Bhupal.',
      'In the Music Room, students practice vocal harmony, patriotic songs, folk melodies of Punjab, and morning assembly hymns—preparing for inter-house festivals and annual cultural showcases.'
    ],
    highlights: [
      'Regular scheduled music instruction across classes',
      'Vocal training, patriotic songs, and folk heritage performances',
      'Preparation for Baisakhi, Independence Day, and Annual Function stages',
      'Nurtures aesthetic sensibility, confidence, and stage presence'
    ],
    image: 'assets/images/activities/activity-1.jpg'
  },
  {
    slug: 'transport.html',
    title: 'School Transport Fleet',
    kicker: '13 Dedicated Bus Routes Across Mansa Region',
    shortDesc:
      'Safe, well-monitored school bus connectivity covering Bhupal and surrounding villages across 13 structured transport routes.',
    fullDesc: [
      'Sanawar Smart School Bhupal operates a dedicated fleet of school buses covering 13 documented routes connecting Bhupal, Mansa, and neighboring villages safely and punctually.',
      'Every bus route is planned to ensure safe boarding, comfortable transit, and reliable connectivity for students from Nursery to Class XII.'
    ],
    highlights: [
      '13 documented school bus routes serving Bhupal and Mansa district',
      'Supervised boarding and disembarkation on campus',
      'Experienced drivers and attendants committed to student safety',
      'Detailed route charts available for Bus No. 1 through Bus No. 13'
    ],
    image: 'assets/images/facilities/transport.jpg'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { src: 'assets/images/gallery/festival-1.jpg', title: 'School Festival Celebration', category: 'School Festivals', categorySlug: 'school-festivals.html', featured: true },
  { src: 'assets/images/gallery/festival-2.jpg', title: 'Cultural Stage Presentation', category: 'School Festivals', categorySlug: 'school-festivals.html' },
  { src: 'assets/images/gallery/festival-3.jpg', title: 'Traditional Festival Assembly', category: 'School Festivals', categorySlug: 'school-festivals.html' },
  { src: 'assets/images/gallery/festival-4.jpg', title: 'Student Festival Showcase', category: 'School Festivals', categorySlug: 'school-festivals.html' },
  { src: 'assets/images/gallery/tour-1.jpg', title: 'Educational Excursion Group', category: 'School Tour', categorySlug: 'school-tour.html', featured: true },
  { src: 'assets/images/gallery/tour-2.jpg', title: 'Outdoor Learning & Heritage Visit', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/gallery/tour-3.jpg', title: 'Student Tour Memories', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/gallery/tour-4.jpg', title: 'Guided School Excursion', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/gallery/tour-5.jpg', title: 'Peer Camaraderie on Tour', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/gallery/tour-6.jpg', title: 'Experiential Field Visit', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/gallery/tour-7.jpg', title: 'Educational Tour Highlight', category: 'School Tour', categorySlug: 'school-tour.html' },
  { src: 'assets/images/activities/activity-1.jpg', title: 'Co-Curricular Student Activity', category: 'School Activities', categorySlug: 'school-activities.html', featured: true },
  { src: 'assets/images/activities/activity-2.jpg', title: 'Creative Classroom Workshop', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-3.jpg', title: 'Inter-House Competition', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-4.jpg', title: 'Student Leadership & Teamwork', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-5.jpg', title: 'Art & Craft Exhibition', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-6.jpg', title: 'Campus Celebration', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-7.jpg', title: 'Morning Assembly & Presentation', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-8.jpg', title: 'Holistic Student Engagement', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-9.jpg', title: 'Group Activity Session', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/activities/activity-10.jpg', title: 'Young Learners in Action', category: 'School Activities', categorySlug: 'school-activities.html' },
  { src: 'assets/images/facilities/shooting-range.jpg', title: 'Indoor Marksmanship Range', category: 'Shooting Range', categorySlug: 'shooting-range.html' },
  { src: 'assets/images/facilities/school-library.jpg', title: 'School Library Media Center', category: 'School Library', categorySlug: 'school-library.html' },
  { src: 'assets/images/facilities/chemistry-lab.jpg', title: 'Chemistry Practical Session', category: 'Science Labs', categorySlug: 'chemistry-lab.html' },
  { src: 'assets/images/facilities/physics-lab.jpg', title: 'Physics Experimental Lab', category: 'Science Labs', categorySlug: 'physics-lab.html' },
  { src: 'assets/images/facilities/biology-lab.jpg', title: 'Biology Microscopy Lab', category: 'Science Labs', categorySlug: 'biology-lab.html' },
  { src: 'assets/images/facilities/sports-games.jpg', title: 'Annual Sports Meet & Athletics', category: 'Sports & Games', categorySlug: 'sports-games.html' },
  { src: 'assets/images/campus/campus-main.jpg', title: 'Sanawar Smart School Bhupal Campus', category: 'Campus', categorySlug: 'infrastructure-detail.html' }
];

export function getTotalEnrollment(): { totalSections: number; totalStudents: number } {
  return ENROLLMENT_ROWS.reduce(
    (acc, row) => ({
      totalSections: acc.totalSections + parseInt(row.sections, 10),
      totalStudents: acc.totalStudents + row.students
    }),
    { totalSections: 0, totalStudents: 0 }
  );
}
