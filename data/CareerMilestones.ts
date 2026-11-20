// Labels under the homepage career waveform.
// `labelKey` points to home:signal.{labelKey}; when absent, `label` is a brand name and is not translated.

export interface CareerMilestoneType {
  year: string;
  label: string;
  labelKey?: 'founder' | 'fullStack' | 'cto';
}

const CareerMilestones: CareerMilestoneType[] = [
  { year: '2019', label: 'Founder & CEO', labelKey: 'founder' },
  { year: '2021', label: 'Full-stack', labelKey: 'fullStack' },
  { year: '2022', label: 'Sterling Bank' },
  { year: '2023', label: 'CTO', labelKey: 'cto' },
  { year: '2024', label: 'Rova / FCMB' },
  { year: '2026', label: 'Abbey Bank' },
];

export default CareerMilestones;
