
export interface ListItem {
  value: string;
}
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
  requirements: ListItem[];
  benefits: ListItem[];
  deadline: string;
  postedAt: string;
  applyLink: string;
  featured: boolean;
  companyDescription: string;
}