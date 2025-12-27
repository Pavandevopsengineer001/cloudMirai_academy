export interface Course {
  id: string;
  slug: string;
  title: string;
  duration: string;
  rating: number;
  reviews: number;
  faculty: string;
  nextBatch: string;
  highlights: string;
  description: string;
  icon: 'cloud' | 'server' | 'clouds' | 'code';
  syllabus: string[];
  tools: string[];
  outcomes: string[];
}

export const courses: Course[] = [
  {
    id: 'aws-devops',
    slug: 'aws-devops-engineer',
    title: 'AWS DevOps Engineer',
    duration: '75+ Hours',
    rating: 4.9,
    reviews: 1250,
    faculty: 'Industry Experts',
    nextBatch: 'Upcoming Batch',
    highlights: 'Real-Time Projects',
    description:
      'Become a job-ready AWS DevOps Engineer by mastering cloud infrastructure, CI/CD pipelines, containerization, and automation through hands-on projects.',
    icon: 'cloud',
    syllabus: [
      'Linux & Networking Fundamentals',
      'AWS Core Services (EC2, S3, VPC, IAM)',
      'Docker & Containerization',
      'Kubernetes (EKS)',
      'CI/CD with Jenkins & GitHub Actions',
      'Terraform & Infrastructure as Code',
      'Monitoring with Prometheus & Grafana',
      'DevOps Real-Time Project',
    ],
    tools: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
    outcomes: [
      'AWS DevOps Engineer roles',
      'Hands-on production experience',
      'Strong CI/CD & automation skills',
    ],
  },

  {
    id: 'azure-cloud',
    slug: 'azure-cloud-architect',
    title: 'Azure Cloud Architect',
    duration: '70+ Hours',
    rating: 4.8,
    reviews: 980,
    faculty: 'Azure Certified Trainers',
    nextBatch: 'Upcoming Batch',
    highlights: 'Azure Labs',
    description:
      'Master Microsoft Azure cloud services and design scalable, secure, and highly available cloud architectures aligned with industry standards.',
    icon: 'server',
    syllabus: [
      'Azure Fundamentals',
      'Azure Virtual Machines & Networking',
      'Azure Storage & Databases',
      'Azure Identity & Security',
      'Azure DevOps CI/CD',
      'Monitoring with Azure Monitor',
      'High Availability & DR',
      'Azure Architecture Project',
    ],
    tools: [
      'Azure',
      'Azure DevOps',
      'ARM Templates',
      'Terraform',
      'Azure Monitor',
    ],
    outcomes: [
      'Azure Cloud Architect roles',
      'AZ-104 / AZ-305 readiness',
      'Production-grade Azure experience',
    ],
  },

  {
    id: 'multi-cloud',
    slug: 'multi-cloud-devops',
    title: 'Multi-Cloud DevOps Engineer',
    duration: '90+ Hours',
    rating: 5.0,
    reviews: 750,
    faculty: 'Senior DevOps Engineers',
    nextBatch: 'Upcoming Batch',
    highlights: 'AWS + Azure',
    description:
      'Build expertise across AWS and Azure with advanced DevOps practices, making you future-proof in multi-cloud environments.',
    icon: 'clouds',
    syllabus: [
      'AWS & Azure Core Services',
      'Multi-Cloud Networking',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Terraform Multi-Cloud',
      'Observability & Monitoring',
      'Security Best Practices',
      'Multi-Cloud Capstone Project',
    ],
    tools: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Prometheus',
      'Grafana',
    ],
    outcomes: [
      'Multi-Cloud DevOps roles',
      'Cloud migration expertise',
      'Advanced automation skills',
    ],
  },

  {
    id: 'fullstack',
    slug: 'full-stack-developer',
    title: 'Full Stack Developer (MERN)',
    duration: '300+ Hours',
    rating: 4.7,
    reviews: 2100,
    faculty: 'Senior Full Stack Developers',
    nextBatch: 'Upcoming Batch',
    highlights: 'MERN Stack',
    description:
      'Become a complete Full Stack Developer by mastering frontend, backend, databases, and deployment with real-world projects.',
    icon: 'code',
    syllabus: [
      'HTML, CSS, JavaScript',
      'React & Modern UI',
      'Node.js & Express',
      'MongoDB & Databases',
      'Authentication & Security',
      'REST APIs',
      'Deployment & DevOps Basics',
      'Full Stack Capstone Project',
    ],
    tools: [
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'Git',
      'Docker',
    ],
    outcomes: [
      'Full Stack Developer roles',
      'Strong frontend & backend skills',
      'End-to-end project experience',
    ],
  },
];
