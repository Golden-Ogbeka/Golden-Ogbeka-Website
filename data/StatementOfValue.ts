// Homepage "Statement of value" ledger.
// English text here is the fallback; translations live in the `home` namespace:
//   home:statement.group.{groupId}
//   home:statement.row.{rowId}.label / .detail
//   home:statement.status.{status}
// Brand names (companies, certification programs, institutions) are never translated.

export type StatementStatus = 'certified' | 'completing' | 'inProgress' | 'firstClass';

export interface StatementRow {
  id: string;
  label: string;
  detail?: string;
  /** Literal value shown on the right (dates, counts). Not translated. */
  value?: string;
  /** Translated status word shown on the right instead of `value`. */
  status?: StatementStatus;
  /** Use the live number of projects in data/Projects.ts as the value. */
  projectCount?: boolean;
}

export interface StatementGroup {
  id: 'leadership' | 'governance' | 'process' | 'track';
  title: string;
  rows: StatementRow[];
}

export const STATEMENT_STATUS_LABELS: Record<StatementStatus, string> = {
  certified: 'Certified',
  completing: 'Completing',
  inProgress: 'In progress',
  firstClass: 'First Class',
};

const StatementOfValue: StatementGroup[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    rows: [
      {
        id: 'cto',
        label: 'Chief Technology Officer',
        detail: 'Kanaga Technologies · architecture, roadmap and delivery',
        value: '2023 – 2024',
      },
      {
        id: 'founder',
        label: 'Founder & CEO',
        detail: 'The Chicken Universe · grew to 1,000+ users',
        value: '2019 – 2021',
      },
      {
        id: 'tutor',
        label: 'Product management tutor',
        detail: 'Tech Skool',
        value: '2026',
      },
    ],
  },
  {
    id: 'governance',
    title: 'Governance & control',
    rows: [
      {
        id: 'coreBanking',
        label: 'Core banking migration',
        detail: 'Finacle with Entrust authentication · Abbey Bank',
        value: '2026',
      },
      {
        id: 'makerChecker',
        label: 'Maker–checker and role-based approvals',
        detail: 'Corporate banking in Nigeria and the UK · Rova (FCMB Group)',
        value: '2024 – 2026',
      },
      {
        id: 'banks',
        label: 'Banks served',
        detail: 'Abbey Bank · FCMB Group · Sterling Bank',
        value: '3',
      },
    ],
  },
  {
    id: 'process',
    title: 'Process & business',
    rows: [
      {
        id: 'yellowBelt',
        label: 'Six Sigma Yellow Belt',
        detail: 'Council for Six Sigma Certification',
        status: 'certified',
      },
      {
        id: 'greenBelt',
        label: 'Six Sigma Green Belt',
        detail: 'Council for Six Sigma Certification',
        status: 'completing',
      },
      {
        id: 'mba',
        label: 'MBA',
        detail: 'University of East London',
        status: 'inProgress',
      },
      {
        id: 'acib',
        label: 'ACIB',
        detail: 'Chartered Institute of Bankers of Nigeria',
        status: 'inProgress',
      },
    ],
  },
  {
    id: 'track',
    title: 'Track record',
    rows: [
      { id: 'years', label: 'Years in technology', value: '7+' },
      { id: 'projects', label: 'Projects shipped', projectCount: true },
      {
        id: 'degree',
        label: 'B.Sc. Computer Science',
        detail: 'Covenant University',
        status: 'firstClass',
      },
    ],
  },
];

export default StatementOfValue;
