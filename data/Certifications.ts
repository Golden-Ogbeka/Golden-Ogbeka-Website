export interface CertificationType {
  title: string;
  organization: string;
  date: string;
  link?: string;
  featured?: boolean;
}

const Certifications: CertificationType[] = [
  {
    title: "Bachelor's Degree in Computer Science (First Class)",
    organization: 'Covenant University',
    link: 'https://drive.google.com/file/d/11LVFuyiPdHNt7EVT_YUsWz5WciG7Jkcu/view?usp=sharing',
    date: 'August 2018',
    featured: true,
  },
  {
    title: 'Management Theories and Philosophies',
    organization: 'Unicaf University',
    link: 'https://drive.google.com/file/d/18-9J5igwOIbiKQAdDaxsXUPAb25bYTA-/view?usp=sharing',
    date: 'June 2024',
    featured: true,
  },
  {
    title:
      'Organizational Leadership: Success Through Maximizing the Capabilities of the Employees',
    organization: 'University of California, Riverside Extension',
    link: 'https://www.parchment.com/u/s/rJYQ',
    date: 'May 2024',
    featured: true,
  },
  {
    title: 'AWS Technical Essentials',
    organization: 'Amazon Web Services (AWS)',
    link: 'https://drive.google.com/file/d/1F0PXGk15XQKOCwZHzOjsDTgWI9jLIo2f/view?usp=sharing',
    date: 'June 2022',
    featured: true,
  },
  {
    title: 'Javascript Beginner to Advanced Level Certification',
    organization: 'Udemy: Farda Karimov',
    link: 'https://www.udemy.com/certificate/UC-85aae5c4-8ce5-497f-bc15-36062b9b2714/',
    date: 'April 2021',
    featured: false,
  },
  {
    title: 'Fundamentals of Digital Marketing',
    organization: 'Google',
    link: 'https://drive.google.com/file/d/11tZjMymjtIKtJ01QScNF4RFsRiwp6gif/view?usp=sharing',
    date: 'April 2021',
    featured: true,
  },
  {
    title: 'Soft skills Training',
    organization: 'Jobberman Nigeria',
    link: 'https://drive.google.com/file/d/1gHhD-qnrnB0_dCMIZkbK8QxSYTlWqdxq/view?usp=sharing',
    date: 'November 2020',
    featured: false,
  },
  {
    title: 'Diploma in Leadership Development',
    organization: 'African Leadership Development Centre',
    link: 'https://drive.google.com/file/d/1J_NItIyCiA5gcULZn_uCeO6TwOyuRj4-/view?usp=sharing',
    date: 'August 2018',
    featured: true,
  },
  {
    title: 'Dante Certification Level 1',
    organization: 'Audinate',
    link: 'https://drive.google.com/file/d/10QvHVG3Q1gC96OywbSsRr3rICyyByHlJ/view?usp=sharing',
    date: 'April 2026',
    featured: false,
  },
  {
    title: 'Broadcast Mixing Masterclass',
    organization: 'Davidic Music Academy',
    link: 'https://drive.google.com/file/d/18dfckhTdNKx3rvCVc19dqM3rlY7GOSKV/view?usp=sharing',
    date: 'February 2025',
    featured: false,
  },
  {
    title: 'Mount Zion Film Academy',
    organization: 'Mount Zion Christian Academy',
    link: 'https://drive.google.com/file/d/13pg6iO788AiNRs-HakjGVLLoD5hZ23gz/view?usp=sharing',
    date: 'September 2024',
    featured: false,
  },
  {
    title: 'McKinsey Forward Program',
    organization: 'McKinsey & Company',
    link: 'https://www.credly.com/badges/8e0320cb-2746-45a6-8d4b-e956e12b64cb/linked_in_profile',
    date: 'July 2024',
    featured: false,
  },
];

export default Certifications;
