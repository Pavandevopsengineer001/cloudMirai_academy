export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  text: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    role: 'Cloud Engineer',
    course: 'AWS DevOps Mastery',
    rating: 5,
    text: 'CloudMirai Academy transformed my career. The hands-on training and real-world projects gave me the confidence to crack my dream job at a top MNC.',
    company: 'Amazon'
  },
  {
    id: '2',
    name: 'Kavya Iyer',
    role: 'DevOps Specialist',
    course: 'Multi-Cloud DevOps',
    rating: 5,
    text: 'The mentorship and placement support were exceptional. I landed a role at Microsoft within 3 months of completing my training.',
    company: 'Microsoft'
  },
  {
    id: '3',
    name: 'Rahul Singh',
    role: 'Full Stack Developer',
    course: 'Full Stack Developer',
    rating: 5,
    text: 'Best investment in my career! The curriculum is industry-relevant and the faculty is incredibly supportive. Got placed at Google.',
    company: 'Google'
  },
  {
    id: '4',
    name: 'Priyanka Das',
    role: 'Azure Solutions Architect',
    course: 'Azure Cloud Architect',
    rating: 5,
    text: 'The practical approach to learning made all the difference. I went from zero cloud knowledge to becoming a certified Azure architect.',
    company: 'TCS'
  },
  {
    id: '5',
    name: 'Vikram Joshi',
    role: 'Senior DevOps Engineer',
    course: 'AWS DevOps Mastery',
    rating: 5,
    text: 'CloudMirai Academy offers the perfect blend of theory and practice. The 24/7 lab access helped me practice extensively.',
    company: 'Infosys'
  },
  {
    id: '6',
    name: 'Anjali Gupta',
    role: 'Cloud Consultant',
    course: 'Multi-Cloud DevOps',
    rating: 5,
    text: 'The resume building and mock interviews prepared me perfectly for the job market. Highly recommend CloudMirai Academy!',
    company: 'Wipro'
  }
];
