export interface Request {
    name: string;
    role: string;
    image: string;
    company: string;
    companyType: string;
    progress: number;
    progressDetails: string;
    status: 'In progress' | 'Pending' | 'Completed';
  }