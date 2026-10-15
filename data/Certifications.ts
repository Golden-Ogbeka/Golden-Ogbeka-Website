export interface CertificationBenefits {
  intro: string;
  points: string[];
}

export interface CertificationType {
  title: string;
  organization: string;
  date: string;
  link?: string;
  featured?: boolean;
  benefits: CertificationBenefits;
}

const Certifications: CertificationType[] = [
  {
    title: 'Associate of the Chartered Institute of Bankers (ACIB)',
    organization: 'Chartered Institute of Bankers of Nigeria (CIBN)',
    date: 'In Progress',
    featured: false,
    benefits: {
      intro: 'The ACIB is the flagship professional qualification of the Chartered Institute of Bankers of Nigeria (CIBN), the premier professional body for bankers in Nigeria. Completing it demonstrates a serious commitment to professional excellence in banking.',
      points: [
        "Recognised industry-wide as the benchmark professional qualification for bankers in Nigeria.",
        'Deepens expertise across banking operations, regulation, risk, ethics, and financial management.',
        "Strengthens eligibility for senior and management roles, as reflected in the industry's competency frameworks.",
        "Opens access to CIBN's community of practice, CPD programmes, mentorship, and professional networks.",
      ],
    },
  },
  {
    title: 'Six Sigma White Belt Certification',
    organization: 'Council for Six Sigma Certification (C.S.S.C)',
    link: '/certificates/six-sigma-white-belt-certification.pdf',
    date: 'October 2026',
    featured: true,
    benefits: {
      intro: 'Issued by the Council for Six Sigma Certification (C.S.S.C), this certification builds a working foundation in Lean Six Sigma methodology and continuous process improvement.',
      points: [
        'Demonstrates understanding of core Six Sigma principles, including the DMAIC improvement framework.',
        'Strengthens problem-solving and data-informed thinking applicable to software delivery and banking operations.',
        'Adds a globally recognised continuous-improvement credential that complements technical and banking skills.',
        'Provides a clear progression path to Yellow, Green, and Black Belt levels.',
      ],
    },
  },
  {
    title: "Bachelor's Degree in Computer Science (First Class)",
    organization: 'Covenant University',
    link: '/certificates/covenant-university-bsc.pdf',
    date: 'August 2018',
    featured: true,
    benefits: {
      intro: 'A First Class honours degree in Computer Science from Covenant University, providing a strong academic foundation for a career in software engineering.',
      points: [
        'First Class standing signals exceptional academic discipline, analytical ability, and intellectual rigour.',
        'Covers core software engineering foundations: algorithms, data structures, databases, and systems design.',
        'Provides the theoretical grounding behind the technologies used in day-to-day engineering work.',
        'Meets the degree requirements for graduate roles and advanced study programmes.',
      ],
    },
  },
  {
    title: 'Diploma in Leadership Development',
    organization: 'African Leadership Development Centre',
    link: '/certificates/diploma-in-leadership-development.pdf',
    date: 'August 2018',
    featured: true,
    benefits: {
      intro: "A structured leadership development programme at Covenant University's African Leadership Development Centre, focused on building principled, solution-oriented leaders.",
      points: [
        'Equips practical frameworks for leading teams, projects, and organisational change.',
        'Develops communication, collaboration, and people-management capabilities.',
        'Cultivates ethical reasoning and a service-oriented leadership mindset.',
        'Provides a network of like-minded professionals and alumni across industries.',
      ],
    },
  },
  {
    title: 'AWS Technical Essentials',
    organization: 'Amazon Web Services (AWS)',
    link: '/certificates/aws-technical-essentials.pdf',
    date: 'June 2022',
    featured: true,
    benefits: {
      intro: "Amazon Web Services' introductory certification on core AWS services, cloud concepts, and best practices for cloud operations.",
      points: [
        'Builds practical fluency with AWS compute, storage, networking, and security services.',
        'Supports designing, deploying, and operating cloud-hosted applications with cost and performance in mind.',
        'Strengthens readiness for cloud migration and architecture discussions in engineering and fintech teams.',
        'Forms the foundation for deeper AWS specialty and professional certifications.',
      ],
    },
  },
  {
    title: 'Dante Certification Level 2',
    organization: 'Audinate',
    link: '/certificates/dante-certification-level-2.pdf',
    date: 'September 2026',
    featured: true,
    benefits: {
      intro: "Audinate's advanced certification in Dante networking for professional audio, building on Level 1 with deeper networked audio design and troubleshooting skills.",
      points: [
        'Deepens expertise in designing and configuring Dante audio networks.',
        'Strengthens understanding of quality of service, clocking, latency, and network security for AV systems.',
        'Validates advanced skills sought by broadcast, live-sound, and AV integration professionals.',
        'Complements software engineering skills with specialised audio-over-IP competency.',
      ],
    },
  },
  {
    title: 'Dante Certification Level 1',
    organization: 'Audinate',
    link: '/certificates/dante-certification-level-1.pdf',
    date: 'April 2026',
    featured: false,
    benefits: {
      intro: "Audinate's foundational certification in Dante audio networking, the industry standard for digital audio transport over IP networks.",
      points: [
        'Introduces Dante Controller, device configuration, and networked audio fundamentals.',
        'Provides an industry-recognised credential in AV-over-IP technology.',
        'Bridges software and broadcast engineering with practical audio networking knowledge.',
        'Forms the prerequisite foundation for Dante Level 2 certification.',
      ],
    },
  },
  {
    title: 'Operations Management',
    organization: 'Unicaf University',
    link: '/certificates/operations-management.pdf',
    date: 'August 2026',
    featured: true,
    benefits: {
      intro: 'A university-level course covering the principles and practices of operations management: designing, running, and improving productive systems.',
      points: [
        'Builds competence in process design, capacity planning, quality control, and supply chain fundamentals.',
        'Strengthens the analytical lens for optimising workflows in engineering and banking environments.',
        'Improves the ability to balance efficiency, quality, and customer value.',
        'Complements technical skills with managerial and process-improvement insight.',
      ],
    },
  },
  {
    title: 'Management Theories and Philosophies',
    organization: 'Unicaf University',
    link: '/certificates/management-theories-and-philosophies.pdf',
    date: 'June 2024',
    featured: true,
    benefits: {
      intro: 'An academic exploration of major management theories, thinkers, and philosophies and how they shape modern organisations.',
      points: [
        'Provides a broad understanding of how management practice evolved and why it matters.',
        'Equips vocabulary and frameworks for leadership, organisational behaviour, and strategy discussions.',
        'Sharpens critical thinking about what motivates teams and drives performance.',
        'Strengthens the management dimension of a combined technical and business skill set.',
      ],
    },
  },
  {
    title:
      'Organizational Leadership: Success Through Maximizing the Capabilities of the Employees',
    organization: 'University of California, Riverside Extension',
    link: '/certificates/organizational-leadership-uc-riverside.pdf',
    date: 'May 2024',
    featured: false,
    benefits: {
      intro: 'A University of California, Riverside Extension course on unlocking organisational performance by maximising the capabilities of employees.',
      points: [
        'Develops strategies for building high-performing, engaged teams.',
        'Covers talent development, delegation, feedback, and change leadership.',
        'Improves the ability to lead through influence rather than authority alone.',
        'Applies directly to engineering leadership and people-management responsibilities.',
      ],
    },
  },
  {
    title: 'Javascript Beginner to Advanced Level Certification',
    organization: 'Udemy: Farda Karimov',
    link: '/certificates/javascript-beginner-to-advanced-udemy.pdf',
    date: 'April 2021',
    featured: false,
    benefits: {
      intro: 'An end-to-end JavaScript certification covering fundamentals through advanced language features.',
      points: [
        'Validates strong command of JavaScript, the core language of the web.',
        'Covers functions, closures, asynchronous programming, DOM manipulation, and modern patterns.',
        'Supports front-end and full-stack development with React, Next.js, and Node.js.',
        'Demonstrates commitment to continuous, structured skill development.',
      ],
    },
  },
  {
    title: 'Fundamentals of Digital Marketing',
    organization: 'Google',
    link: '/certificates/fundamentals-of-digital-marketing-google.pdf',
    date: 'April 2021',
    featured: false,
    benefits: {
      intro: "Google's certified course covering the essentials of digital marketing across search, social, display, analytics, and e-commerce.",
      points: [
        'Builds practical knowledge of SEO, SEM, social, email, and display marketing channels.',
        'Improves the ability to grow and measure the reach of digital products and portfolios.',
        'Provides a globally recognised credential from Google.',
        'Useful for engineers building user-facing products who need marketing context.',
      ],
    },
  },
  {
    title: 'Soft skills Training',
    organization: 'Jobberman Nigeria',
    link: '/certificates/jobberman-soft-skills-training.pdf',
    date: 'November 2020',
    featured: false,
    benefits: {
      intro: 'A Jobberman Nigeria training programme focused on workplace soft skills such as communication, teamwork, and professionalism.',
      points: [
        'Strengthens communication, presentation, and interpersonal skills.',
        'Builds workplace readiness: CV preparation, interviews, and professional conduct.',
        'Improves teamwork and conflict-resolution abilities.',
        'Highly regarded by employers as a signal of employability and professionalism.',
      ],
    },
  },
  {
    title: 'Broadcast Mixing Masterclass',
    organization: 'Davidic Music Academy',
    link: '/certificates/broadcast-mixing-masterclass.png',
    date: 'February 2025',
    featured: false,
    benefits: {
      intro: 'A specialised masterclass in broadcast audio mixing for live and recorded production.',
      points: [
        'Develops hands-on skills in console operation, gain staging, and broadcast mix balance.',
        'Deepens understanding of audio signal flow in live and studio environments.',
        'Complements technical software skills with creative audio production craft.',
        'Validates specialised competency valued in broadcasting and media production.',
      ],
    },
  },
  {
    title: 'Mount Zion Film Academy',
    organization: 'Mount Zion Christian Academy',
    link: '/certificates/mount-zion-film-academy.jpg',
    date: 'September 2024',
    featured: false,
    benefits: {
      intro: 'A film training programme with Mount Zion Christian Academy covering the fundamentals of Christian film production.',
      points: [
        'Builds foundational skills in film production, storytelling, and screen craft.',
        'Develops creativity and visual communication alongside a technical career.',
        'Provides experience collaborating on narrative production workflows.',
        'Enables effective contribution to faith-based media and communication projects.',
      ],
    },
  },
  {
    title: 'McKinsey Forward Program',
    organization: 'McKinsey & Company',
    link: '/certificates/mckinsey-forward-program.pdf',
    date: 'July 2024',
    featured: false,
    benefits: {
      intro: "McKinsey & Company's free online development programme building essential problem-solving, leadership, and digital skills.",
      points: [
        'Trains structured problem solving using approaches used by leading management consultants.',
        'Develops leadership, adaptability, and collaboration skills for the modern workplace.',
        'Provides a globally recognised credential from McKinsey & Company.',
        'Includes access to a community of Forward learners and ongoing resources.',
      ],
    },
  },
  {
    title: 'Content Marketing',
    organization: 'Hubspot Academy',
    link: '/certificates/content-marketing-hubspot.png',
    date: 'August 2021',
    featured: false,
    benefits: {
      intro: "HubSpot Academy's certification in content marketing strategy: planning, creating, and distributing content that drives growth.",
      points: [
        'Builds skills in content strategy, creation, promotion, and measurement.',
        'Strengthens the ability to grow an audience and support products through valuable content.',
        'Provides a free, globally recognised marketing credential.',
        'Applies directly to technical blogging, documentation, and personal branding.',
      ],
    },
  },
  {
    title: 'SEO Certification',
    organization: 'Hubspot Academy',
    link: '/certificates/seo-hubspot.pdf',
    date: 'June 2021',
    featured: false,
    benefits: {
      intro: "HubSpot Academy's SEO certification covering on-page, technical, and content optimisation for search visibility.",
      points: [
        'Develops competence in keyword research, on-page optimisation, and link strategy.',
        'Improves the ability to make websites and content discoverable in search engines.',
        'Provides a widely recognised marketing credential.',
        'Complements web development skills with search-performance expertise.',
      ],
    },
  },
  {
    title: 'Master Course in Project Management',
    organization: 'Udemy',
    link: '/certificates/master-course-in-project-management-udemy.pdf',
    date: 'January 2023',
    featured: false,
    benefits: {
      intro: 'A comprehensive project management course covering the full project lifecycle from initiation to closure.',
      points: [
        'Covers scope, schedule, cost, risk, and stakeholder management fundamentals.',
        'Strengthens the ability to plan and deliver engineering projects on time and within budget.',
        'Improves cross-functional coordination and communication.',
        'Provides a strong foundation for formal methodologies such as PMP and Agile.',
      ],
    },
  },
  {
    title: 'CUALA Mentoring Program',
    organization: 'Covenant University Alumni Association',
    link: '/certificates/cuala-mentoring-program.pdf',
    date: 'July 2021',
    featured: false,
    benefits: {
      intro: 'A mentoring programme of the Covenant University Alumni Association connecting students and young professionals with experienced alumni mentors.',
      points: [
        'Provides structured guidance from accomplished alumni across industries.',
        'Builds professional networks and community within a strong alumni association.',
        'Develops goal-setting, career-planning, and personal-development skills.',
        'Encourages a culture of giving back and mentoring others.',
      ],
    },
  },
  {
    title: 'Dev Ops Practices Principles',
    organization: 'Digital Nigeria',
    link: '/certificates/digital-nigeria-devops-practices-principles.pdf',
    date: 'July 2021',
    featured: false,
    benefits: {
      intro: 'A Digital Nigeria certification covering core DevOps practices and principles for modern software delivery.',
      points: [
        'Builds understanding of continuous integration, continuous delivery, and collaboration between development and operations.',
        'Supports faster, more reliable software releases and deployments.',
        'Aligns with in-demand industry practices for scalable software delivery.',
        'Complements software engineering skills with automation and operational discipline.',
      ],
    },
  },
  {
    title: 'HTML5 and CSS3 Fundamentals Development for Absolute Beginners',
    organization: 'Digital Nigeria',
    link: '/certificates/digital-nigeria-html5-css3-fundamentals.pdf',
    date: 'July 2021',
    featured: false,
    benefits: {
      intro: 'A Digital Nigeria certification covering the fundamentals of modern web development with HTML5 and CSS3.',
      points: [
        'Establishes solid foundations in semantic markup, layout, and responsive design.',
        'Provides essential building blocks for front-end development with modern frameworks.',
        'Offers a government-backed credential in digital skills.',
        'Supports employability in the growing Nigerian digital economy.',
      ],
    },
  },
  {
    title: 'Introduction to Data Science',
    organization: 'Digital Nigeria',
    link: '/certificates/digital-nigeria-introduction-to-data-science.pdf',
    date: 'August 2021',
    featured: false,
    benefits: {
      intro: 'A Digital Nigeria certification introducing the core concepts, tools, and applications of data science.',
      points: [
        'Builds foundational literacy in data analysis, statistics, and machine learning concepts.',
        'Strengthens data-informed decision-making across engineering and business contexts.',
        'Complements software engineering with analytical and statistical thinking.',
        'Provides a recognised credential in an in-demand digital discipline.',
      ],
    },
  },
];

export default Certifications;
