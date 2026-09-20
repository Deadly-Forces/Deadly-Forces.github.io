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
    // Featured Projects
    {
      id: "freshmart",
      name: "FreshMart",
      oneLiner:
        "Full-stack grocery platform featuring role-based access control, Supabase backend, and product search.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/fresh-mart",
      liveUrl: undefined,
    },
    {
      id: "ai-benchmarking",
      name: "AI Workload Benchmarking Framework",
      oneLiner:
        "High-performance inference testing suite evaluating edge machine learning workloads, latency distributions, and runtime throughput.",
      stack: ["Python", "OpenVINO", "Inference Optimization", "Benchmarking"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/ai-workload-benchmarking-framework",
      liveUrl: undefined,
    },
    {
      id: "ai-code-reviewer",
      name: "AI Code Reviewer",
      oneLiner:
        "Automated code review engine analyzing pull requests and highlighting code smells, optimizations, and syntax improvements.",
      stack: ["TypeScript", "AI Automation", "Static Analysis", "GitHub Actions"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Ai-Code-Reviewer",
      liveUrl: undefined,
    },
    {
      id: "micro-expression",
      name: "Micro-Expression Detection System",
      oneLiner:
        "Computer vision classification system capturing subtle involuntary facial cues using optical flow and machine learning.",
      stack: ["Python", "MediaPipe", "Optical Flow", "SVM", "Computer Vision"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Micro-Expression-Detection-System",
      liveUrl: undefined,
    },
    {
      id: "ship-tracker",
      name: "Ship-Tracker (Maritime Tracking)",
      oneLiner:
        "Real-time vessel tracking and maritime telemetry dashboard streaming vessel location, routes, and port coordinates.",
      stack: ["Python", "Telemetry", "WebSockets", "Data Streaming"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Ship-Tracker",
      liveUrl: undefined,
    },
    {
      id: "zenith-os-assistant",
      name: "Zenith OS Assistant",
      oneLiner:
        "Smart operating system assistant for file organization and browser workflow management built for SVCE Hackathon.",
      stack: ["Python", "Automation", "OS Management", "File System"],
      status: "Shipped",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/Zenith-OS-Assistant-Smart-File-and-Browser-Manager",
      liveUrl: undefined,
    },

    // Additional Repositories
    {
      id: "vulnerability-scanner",
      name: "Vulnerability Scanner",
      oneLiner:
        "Network and web security scanner automating open port scanning, vulnerability discovery, and security checks.",
      stack: ["Python", "Cybersecurity", "Network Recon", "Security"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Vulnerability-Scanner",
    },
    {
      id: "trakerzz",
      name: "Trakerzz",
      oneLiner:
        "Lightweight network reconnaissance tool tracking IP routing, geolocation, and network endpoint details.",
      stack: ["Python", "Networking", "APIs"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Trakerzz",
    },
    {
      id: "diskcleaner",
      name: "DiskCleaner",
      oneLiner:
        "Linux system cache cleaner and disk optimization utility written in Bash for automated system cleanup.",
      stack: ["Bash", "Linux", "Shell Scripting", "System Admin"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/DiskCleaner",
    },
    {
      id: "upgrading-linux",
      name: "Upgrading-Linux",
      oneLiner:
        "Interactive automation tool for finding broken Linux packages, repairing file dependencies, and upgrading system software.",
      stack: ["Shell", "Linux", "Package Management", "Automation"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Upgrading-Linux",
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
