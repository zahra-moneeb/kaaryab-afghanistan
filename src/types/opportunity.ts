export interface Opportunity {
  id: number;
  title: string;
  company: string;
  logo: string;
  opportunityType: string;
  category: string;
  type: string;
  location: string;
  isRemote: boolean;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  deadline: string;
  postedAt: string;
  applyLink: string;
  featured: boolean;
  companyDescription: string;
}