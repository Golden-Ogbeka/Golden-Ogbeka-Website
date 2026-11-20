// Homepage "How I add value" pillars.
// English text here is the fallback; translations live in the `home` namespace:
//   home:pillars.{id}.eyebrow / .title / .description / .points (array)

export interface ValuePillarType {
  id: 'lead' | 'govern' | 'build';
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

const ValuePillars: ValuePillarType[] = [
  {
    id: 'lead',
    eyebrow: 'Lead',
    title: 'Technology leadership',
    description: 'Setting direction, priorities and architecture, and getting teams to deliver.',
    points: [
      'CTO at Kanaga Technologies',
      'Founded and ran a 1,000+ user marketplace',
      'Diploma in Leadership Development',
    ],
  },
  {
    id: 'govern',
    eyebrow: 'Govern',
    title: 'IT governance & control',
    description: 'Building the controls regulators and customers expect into banking software.',
    points: [
      'Maker–checker and role-based workflows',
      'Entrust authentication and access control',
      'Six Sigma Green Belt certified',
    ],
  },
  {
    id: 'build',
    eyebrow: 'Build',
    title: 'Engineering depth',
    description: 'Hands-on across frontend, backend, messaging and cloud, so decisions stay grounded.',
    points: ['React, TypeScript, Node.js, Python', 'Finacle, RabbitMQ, WSO2, Alfresco', 'AWS, Azure, Docker, CI/CD'],
  },
];

export default ValuePillars;
