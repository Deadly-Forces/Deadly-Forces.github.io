export interface Project {
  id: string;
  name: string;
  oneLiner: string;
  stack: string[];
  status: "Shipped" | "In progress" | "Research" | "[TODO]";
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  notes?: string; // Optional field for claims/metrics, kept empty by default
}

export interface ProfileData {
  name: string;
  title: string;
  education: {
    degree: string;
    institution: string;
    campus: string;
    graduationYear: number;
  };
  focus: string;
  objective: string;
  snapshot: {
    whatIAm: string;
    capabilities: string[];
    purpose: string;
    gapCovered: string;
  };
  projects: Project[];
  availability: {
    timezone: string;
    days: string;
    hours: string;
    notes: string;
    responseTime: string;
  };
  bookingUrl: string;
  contact: {
    email: string;
    resumeUrl: string;
    github: string;
    linkedin: string;
  };
}

export const profile: ProfileData = {
  name: "Nikunj Kaslikar",
  title: "Software & AI/ML Engineer",
  education: {
    degree: "B.Tech in Computer Science and Engineering (AI/ML)",
    institution: "SRM Institute of Science and Technology",
    campus: "Vadapalani Campus, Chennai",
    graduationYear: 2027,
  },
  focus: "Full-stack development and AI-integrated applications.",
  objective: "Looking for software engineering and AI/ML internships.",
  snapshot: {
    whatIAm:
      "CSE (AI/ML) student at SRM IST Chennai, graduating 2027. Building robust full-stack applications with integrated, production-ready AI workflows.",
    capabilities: [
      "Architect scalable full-stack products from database schemas (PostgreSQL/Supabase) and backend APIs (Node.js/WebSockets) to responsive Next.js web applications.",
      "Build custom AI tools, automated code reviewers, and intelligent developer workflows that accelerate productivity.",
      "Design real-time computer vision pipelines for live video analysis, optical flow tracking, and perceptual classification.",
      "Engineer deep learning benchmarking suites profiling hardware inference latency distributions and compute throughput.",
      "Implement systems automation utilities, real-time telemetry streaming platforms, and network vulnerability discovery scanners.",
    ],
    purpose: "[TODO: one sentence from me]",
    gapCovered:
      "AI features usually stall between the model, the backend and the UI. I cover all three.",
  },
  projects: [
    {
      id: "adaptive-control-hri-paper",
      name: "Adaptive Control Strategies for Human-Robot Interaction in Industrial Setting",
      oneLiner:
        "Peer-reviewed research paper published in IJIREEICE detailing an Adaptive Control Strategy (ACS) integrating reinforcement learning, fuzzy logic, and model predictive control (MPC) with multimodal sensory fusion achieving >96% interaction accuracy.",
      stack: ["Robotics", "Adaptive Control", "Reinforcement Learning", "Fuzzy Logic", "MPC", "IJIREEICE"],
      status: "Research",
      featured: true,
      paperUrl: "https://ijireeice.com/wp-content/uploads/2025/11/IJIREEICE.2025.131045-adaptive.pdf",
      liveUrl: "https://ijireeice.com/papers/adaptive-control-strategies-for-human-robot-interaction-in-industrial-setting/",
      notes: "IJIREEICE Vol. 13, Issue 10 • DOI: 10.17148/IJIREEICE.2025.131045",
    },
    {
      id: "ai-code-reviewer",
      name: "AI Code Reviewer",
      oneLiner:
        "Automated pull request code review engine analyzing syntax, highlighting anti-patterns, and suggesting performance and security fixes.",
      stack: ["TypeScript", "AI Automation", "Static Analysis", "GitHub Actions"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Ai-Code-Reviewer",
      liveUrl: undefined,
    },
    {
      id: "ai-benchmarking",
      name: "AI Workload Benchmarking Framework",
      oneLiner:
        "High-performance inference testing framework evaluating edge machine learning workloads, latency distributions, and runtime throughput.",
      stack: ["Python", "OpenVINO", "Inference Optimization", "Benchmarking"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/ai-workload-benchmarking-framework",
      liveUrl: undefined,
    },
    {
      id: "careershield",
      name: "CareerShield",
      oneLiner:
        "Intelligent career protection platform designed to identify fraudulent job postings, verify credentials, and protect applicant data.",
      stack: ["Full-Stack", "AI Security", "Web Platform", "Verification"],
      status: "In progress",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/careershield",
      liveUrl: undefined,
    },
    {
      id: "diskcleaner",
      name: "DiskCleaner",
      oneLiner:
        "Linux system cache cleaner and disk optimization utility written in Bash for automated junk clearing and storage reclamation.",
      stack: ["Bash", "Linux", "Shell Scripting", "System Administration"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/DiskCleaner",
      liveUrl: undefined,
    },
    {
      id: "freshmart",
      name: "FreshMart",
      oneLiner:
        "Full-stack online grocery platform featuring Supabase backend, role-based access control, product search, and responsive checkout.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/fresh-mart",
      liveUrl: undefined,
    },
    {
      id: "micro-expression",
      name: "Micro-Expression Detection System",
      oneLiner:
        "Computer vision classification system capturing subtle involuntary facial cues using MediaPipe, optical flow analysis, and SVM classifiers.",
      stack: ["Python", "MediaPipe", "OpenCV", "Optical Flow", "SVM"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Micro-Expression-Detection-System",
      liveUrl: undefined,
    },
    {
      id: "ship-tracker",
      name: "Ship-Tracker (Maritime Telemetry)",
      oneLiner:
        "Real-time vessel tracking and maritime telemetry dashboard streaming live boat locations, port coordinates, and navigation routes.",
      stack: ["Python", "WebSockets", "Telemetry", "Data Streaming"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Ship-Tracker",
      liveUrl: undefined,
    },
    {
      id: "trakerzz",
      name: "Trakerzz",
      oneLiner:
        "Lightweight network reconnaissance utility tracking IP routing, geographical coordinates, and network endpoint details.",
      stack: ["Python", "Networking", "APIs", "Geolocation"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Trakerzz",
      liveUrl: undefined,
    },
    {
      id: "upgrading-linux",
      name: "Upgrading-Linux",
      oneLiner:
        "Interactive automation tool for identifying broken Linux packages, repairing file dependencies, and upgrading system software.",
      stack: ["Shell", "Linux", "Package Management", "Automation"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Upgrading-Linux",
      liveUrl: undefined,
    },
    {
      id: "vulnerability-scanner",
      name: "Vulnerability Scanner",
      oneLiner:
        "Automated network and web security scanner testing open ports, identifying network misconfigurations, and detecting vulnerabilities.",
      stack: ["Python", "Cybersecurity", "Network Recon", "Port Scanning"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Vulnerability-Scanner",
      liveUrl: undefined,
    },
    {
      id: "zenith-os-assistant",
      name: "Zenith OS Assistant",
      oneLiner:
        "Smart operating system assistant for intelligent file categorization and automated browser workflow management built for SVCE Hackathon.",
      stack: ["Python", "Automation", "OS Management", "File System"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Zenith-OS-Assistant-Smart-File-and-Browser-Manager",
      liveUrl: undefined,
    },
  ],
  availability: {
    timezone: "Asia/Kolkata (IST, UTC+5:30)",
    days: "[TODO: e.g. Monday - Friday]",
    hours: "[TODO: e.g. 10:00 AM - 6:00 PM IST]",
    notes: "[TODO: Open for Summer/Fall 2025 internships & full-stack/AI roles]",
    responseTime: "[TODO: e.g. Within 24 hours]",
  },
  bookingUrl: "https://cal.com/nikunj-kaslikar-9kbylp",
  contact: {
    email: "nikunjravikaslikar@gmail.com",
    resumeUrl: "[TODO: link to resume PDF]",
    github: "https://github.com/Deadly-Forces",
    linkedin: "https://www.linkedin.com/in/nikunj-kaslikar-89b51928a",
  },
};
