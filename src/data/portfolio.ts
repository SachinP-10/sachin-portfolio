import type { Education, Experience, NavLink, PersonalInfo, Project, Skill } from "@/types";

/* ------------------------------------------------------------------
 * Edit this file to update the site. Every section reads from here.
 * ------------------------------------------------------------------ */

export const personal: PersonalInfo = {
  name: "Sachin Pawar",
  fullName: "Sachin Y Pawar",
  designation: "Backend Developer",
  tagline:
    "I build secure REST APIs with Java, Spring Boot and .NET Core, and keep SAP, Oracle and field apps in sync.",
  about: [
    "I'm a detail-oriented backend developer working with Java, .NET Core and SQL, focused on building secure, well-integrated applications. Most of my work lives between systems: REST APIs, authentication flows, stored procedures and the sync jobs that keep business data accurate.",
    "At Shree Renuka Sugars I've built APIs that connect SAP to web portals, OTP and JWT login systems, and mobile apps used by field teams in low-connectivity rural areas. I'm a quick learner who enjoys turning complex business requirements into software that's simple for the people using it.",
  ],
  profileImage: "/profile.webp",
  email: "sachinpawar240901@gmail.com",
  phone: "+918105429531",
  address: "Belgaum, Karnataka, India",
  github: "https://github.com/Sachinp8105",
  linkedIn: "https://www.linkedin.com/in/sachin-pawar-0955521a2",
  resume: "https://drive.google.com/file/d/1IogDH46IELMj_28xnV5Fij48mhzCnFCZ/view?usp=drive_link",
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skills: Skill[] = [
  { name: "Java", category: "Languages", icon: "java" },
  { name: "C#", category: "Languages", icon: "csharp" },
  { name: "Spring Boot", category: "Backend" },
  { name: ".NET Core", category: "Backend", icon: "dotnetcore" },
  { name: "REST API", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "Kafka", category: "Backend" },
  { name: "Hibernate", category: "Backend" },
  { name: "JPA", category: "Backend" },
  { name: "JDBC", category: "Backend" },
  { name: "Oracle SQL", category: "Databases" },
  { name: "PostgreSQL", category: "Databases", icon: "postgresql" },
  { name: "SQLite", category: "Databases", icon: "sqlite" },
  { name: "Docker", category: "Tools", icon: "docker" },
  { name: "Git", category: "Tools", icon: "git" },
  { name: "Maven", category: "Tools" },
  { name: "Gradle", category: "Tools" },
  { name: "JUnit", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Android Studio", category: "Tools" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Junior Engineer",
    company: "Shree Renuka Sugars",
    location: "Belgaum, Karnataka",
    start: "Sep 2024",
    end: "Present",
    highlights: [
      "Build Java Spring Boot and .NET Core APIs that synchronize enterprise data between SAP, Oracle and web applications.",
      "Implement OTP-based authentication with JWT, refresh tokens and Spring Security.",
      "Write optimized Oracle stored procedures and scheduled jobs for real-time data accuracy.",
      "Ship Android apps for agricultural field teams, with offline storage and reliable sync.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Break Bulk",
    kind: "Backend API",
    role: "Backend Developer",
    summary: "Backend API for trip visibility and gate-out operations.",
    points: [
      "Developed a Java Spring Boot backend for trip visibility and gate-out operations using RESTful services and a layered architecture.",
      "Implemented OTP-based authentication with JWT, refresh tokens and Spring Security integration.",
      "Integrated Oracle stored procedures using Spring JDBC and JdbcTemplate for secure, reliable database operations.",
    ],
    tools: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring JDBC", "Oracle SQL"],
  },
  {
    id: 2,
    name: "Partner Portal API",
    kind: "Backend API",
    role: "Backend Developer",
    summary: "REST API that keeps SAP and the partner web portal in sync.",
    points: [
      "Developed and integrated a REST API in Java Spring Boot to synchronize enterprise data between SAP and the web application.",
      "Authored optimized Oracle SQL stored procedures and configured automated job schedulers for real-time data accuracy and continuous sync.",
    ],
    tools: ["Java", "Spring Boot", "REST API", "Oracle SQL", "SAP", "Job Scheduler"],
  },
  {
    id: 3,
    name: "Partner Portal Web App",
    kind: "Web App",
    role: "Backend Developer",
    summary: "Real-time vendor management system integrated with SAP.",
    points: [
      "Developed a real-time vendor management system integrated with SAP for live data synchronization.",
      "Built secure authentication using JWT tokens and an OTP service to ensure data integrity.",
      "Implemented data export so users can generate and download complex reports in Excel format.",
    ],
    tools: [".NET Core", "Entity Framework", "Oracle SQL", "JWT", "OTP Service", "Excel Export"],
  },
  {
    id: 4,
    name: "Drishticane",
    kind: "Mobile App",
    role: "Android & Backend Developer",
    summary: "Field-data collection tool for agricultural management.",
    points: [
      "Architected a field-data collection tool for agricultural management, improving data accuracy for field executives.",
      "Integrated Google Maps API with polygon-drawing logic to measure and record farmer land areas in acres.",
      "Developed a RESTful API backend for real-time synchronization between mobile devices and the central Oracle database.",
    ],
    tools: ["Java (Android)", "SQLite", "Oracle SQL", "Google Maps API", "REST API"],
  },
  {
    id: 5,
    name: "Samriddhi",
    kind: "Mobile App",
    role: "Android Developer",
    summary: "Secure enterprise app for plantation data and farmer reports.",
    points: [
      "Developed a secure enterprise application for the agricultural sector using MVVM architecture.",
      "Streamlined plantation data and farmer reporting with a sync engine that performs well in low-connectivity rural areas.",
      "Maintained strict data privacy through multi-layer encryption.",
    ],
    tools: ["Java (Android)", "Room DB", "Retrofit", "MVVM", "Encryption"],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    title: "BE, Electronics & Communication Engineering",
    institution: "Jain College of Engineering, Belagavi",
    duration: "Aug 2019 – May 2023",
  },
  {
    id: 2,
    title: "Pre-University College",
    institution: "Alvas Science Pre-University College, Moodbidri",
    duration: "2017 – 2019",
  },
  {
    id: 3,
    title: "High School",
    institution: "HDP High School, Hidkal Dam",
    duration: "2014 – 2017",
  },
];
