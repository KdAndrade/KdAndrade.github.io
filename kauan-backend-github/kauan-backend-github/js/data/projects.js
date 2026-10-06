export const projects = [
  {
    name: 'Zelar.app',
    number: '01',
    type: 'Urban infrastructure',
    role: 'Backend development',
    featured: true,
    description:
      'A platform for reporting and managing urban issues — from damaged roads to street lighting and waste.',
    summary: 'Turning an urban report into a structured, maintainable backend.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JUnit', 'Mockito'],
    repo: 'https://github.com/Zelar-App/zelar.app-backend',
    architecture:
      'A layered REST API. Controllers handle HTTP requests, services hold business rules, and repositories manage persistence.',
    work: [
      'Structured the backend and its user domain, with entities, DTOs, repositories, services and controllers.',
      'Implemented the user registration endpoint and relational persistence.',
      'Added database migrations with Flyway, unit tests and controller tests.',
      'Used Git branches and GitHub to organize development with the team.',
    ],
    challenge:
      'Keeping request validation, business rules and persistence in their own layers, while testing the registration flow with an isolated H2 database.',
  },
  {
    name: 'Oriento',
    number: '02',
    type: 'Financial education',
    role: 'Backend project with a team',
    description:
      'A financial education project that uses AI to explain financial information in simpler language for small business owners.',
    summary: 'Making financial information easier to understand.',
    stack: ['Java', 'Spring Boot', 'Relational database', 'AI integration'],
    repo: 'https://github.com/Oriento-ChatBox-Educacao-Financeira/ChatBoxEducacaoFinanceira/tree/refactor/ai-config-update',
    architecture:
      'A Java and Spring Boot backend with a relational database and AI integration for financial information.',
    work: [
      'Developing the project with a team, focusing on backend and financial information.',
      'Reviewing application configuration and the handling of integration credentials.',
    ],
    challenge:
      'Connecting financial information with understandable explanations, while keeping configuration and integration concerns organized.',
  },
];
export const profile = {
  github: 'https://github.com/KdAndrade',
  linkedin: 'https://www.linkedin.com/in/kauan-de-andrade-oliveira-a20738275',
  email: 'kauand.andrade17@gmail.com',
};
