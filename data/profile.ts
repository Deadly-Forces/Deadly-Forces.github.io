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
      "Production-ready Next.js and TypeScript web platforms with structured database architectures.",
      "Automated prompt-injection and jailbreak attack evaluation pipelines benchmarked against MITRE ATLAS.",
      "Vision-AI document and poster extraction pipelines utilizing OpenRouter APIs.",
      "Local-first desktop tools executing offline small language models (Phi-3 Mini via Ollama and Electron).",
      "Edge AI benchmarking frameworks evaluating inference latency and throughput via OpenVINO.",
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
        "Full-stack grocery platform featuring LLM-driven assistance, role-based access control, and semantic vector search.",
      stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "LLM", "Vector Search"],
      status: "[TODO]",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/fresh-mart",
      liveUrl: undefined,
    },
    {
      id: "llm-redteam",
      name: "Automated LLM Red-Teaming & Defense-Evaluation Pipeline",
      oneLiner:
        "Python system generating prompt-injection and jailbreak attacks, evaluating attack success rates, and benchmarking defenses.",
      stack: ["Python", "MITRE ATLAS", "LLM Security", "Evaluation Framework"],
      status: "In progress",
      featured: true,
      repoUrl: undefined,
      liveUrl: undefined,
    },
    {
      id: "ieee-platform",
      name: "IEEE Computer Society Event Platform",
      oneLiner:
        "Security-hardened event management system with vision-AI poster detail extraction and automated workflow processing.",
      stack: ["Next.js", "TypeScript", "Vision AI", "OpenRouter", "Security Hardening"],
      status: "[TODO]",
      featured: true,
      repoUrl: undefined,
      liveUrl: undefined,
    },
    {
      id: "orbitwatch",
      name: "OrbitWatch",
      oneLiner:
        "Satellite telemetry and multi-hazard monitoring platform tracking weather anomalies, natural disasters, vessel movement, and cyber threats.",
      stack: ["Python", "Geospatial Data", "API Integration", "Real-time Monitoring"],
      status: "[TODO]",
      featured: true,
      repoUrl: undefined,
      liveUrl: undefined,
    },
    {
      id: "ai-benchmarking",
      name: "AI Workload Benchmarking Framework",
      oneLiner:
        "High-performance inference testing suite evaluating edge machine learning workloads, latency distributions, and runtime throughput.",
      stack: ["Python", "OpenVINO", "Inference Optimization", "Benchmarking"],
      status: "[TODO]",
      featured: true,
      repoUrl: "https://github.com/Deadly-Forces/ai-workload-benchmarking-framework",
      liveUrl: undefined,
    },

    // Compact Projects
    {
      id: "ai-code-reviewer",
      name: "AI Code Reviewer",
      oneLiner:
        "Automated pull request and code review engine analyzing pull requests and highlighting code smells and security risks.",
      stack: ["TypeScript", "LLMs", "Static Analysis", "GitHub Actions"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Ai-Code-Reviewer",
    },
    {
      id: "maritime-tracking",
      name: "Maritime Tracking Platform (Ship-Tracker)",
      oneLiner:
        "Real-time vessel tracking and telemetry dashboard streaming vessel location and port data.",
      stack: ["Python", "WebSockets", "Telemetry", "APIs"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Ship-Tracker",
    },
    {
      id: "micro-expression",
      name: "Facial Micro-Expression Detection System",
      oneLiner:
        "Computer vision classification system capturing subtle involuntary facial cues using optical flow and SVM.",
      stack: ["Python", "MediaPipe", "Optical Flow", "SVM"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Micro-Expression-Detection-System",
    },
    {
      id: "vulnerability-scanner",
      name: "Vulnerability Scanner",
      oneLiner:
        "Network and web vulnerability discovery tool automating security checks, open port analysis, and CVE detection.",
      stack: ["Python", "Cybersecurity", "Network Recon", "Automation"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/Vulnerability-Scanner",
    },
    {
      id: "linux-tools",
      name: "Linux Cache & Package Automation (DiskCleaner & Upgrading-Linux)",
      oneLiner:
        "Interactive system utilities automating broken package repairs, cache clearing, and Linux maintenance.",
      stack: ["Bash", "Linux", "Shell Scripting", "Automation"],
      status: "Shipped",
      featured: false,
      repoUrl: "https://github.com/Deadly-Forces/DiskCleaner",
    },
    {
      id: "voicetask",
      name: "VoiceTask",
      oneLiner:
        "Local-first voice task manager running offline SLM inference with zero cloud dependency.",
      stack: ["Electron", "Ollama", "Phi-3 Mini", "Local-first"],
      status: "[TODO]",
      featured: false,
      repoUrl: undefined,
    },
    {
      id: "deforestation-paper",
      name: "Deforestation Monitoring Research (Co-authored)",
      oneLiner:
        "Remote sensing model processing multi-spectral Sentinel-2 imagery with cloud-conditioned attention gating mechanisms.",
      stack: ["PyTorch", "Sentinel-2", "Attention Mechanisms", "Remote Sensing"],
      status: "Research",
      featured: false,
      paperUrl: undefined,
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
