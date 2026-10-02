export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isRecent?: boolean;
  points: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "IVY A. SAYONGAN",
    displayName: "Ivy A. Sayongan",
    roleTag: "Virtual Assistant & Technical Support",
    heroHeadline: "Detail-oriented & reliable professional for your business.",
    heroLead: "Detail-oriented and reliable professional with strengths in web administration, customer communication, technical troubleshooting, data handling, and day-to-day operations.",
    aboutHeadline: "Dedicated support to keep your operations running smoothly.",
    aboutLead: "I am a hardworking and detail-oriented professional with experience in web administration, customer service, technical support, and hosting solutions. Comfortable working independently, managing multiple priorities, and providing consistent, proactive support to clients and teams.",
    location: "Quezon City, Metro Manila, PH",
    email: "ivysayongan@gmail.com",
    phone: "+63 991 912 9837",
    phoneRaw: "+639919129837",
    availability: "Available for client contracts · 24h reply",
    stats: [
      { value: "150+", label: "Monthly Clients Supported" },
      { value: "95%", label: "Resolution & CSAT Rate" },
      { value: "-35%", label: "Repeat Inquiries Reduced" },
      { value: "+20%", label: "Customer CSAT Increase" }
    ]
  },

  features: [
    {
      title: "Detail-Oriented & Accurate",
      desc: "High precision across client databases, domain records, and technical troubleshooting workflows.",
      iconName: "CheckCircle"
    },
    {
      title: "Reliable & Discreet",
      desc: "Maintaining 100% data privacy compliance, high confidentiality, and transparent client communication.",
      iconName: "ShieldCheck"
    },
    {
      title: "Technical Problem-Solving",
      desc: "Resolving website errors, DNS routing, and email deliverability with a sustained 95% satisfaction record.",
      iconName: "Wrench"
    },
    {
      title: "Consistent Communication",
      desc: "Timely updates, thorough follow-ups, and clear knowledge base SOPs that cut repeat inquiries by 35%.",
      iconName: "MessageSquare"
    }
  ] as FeatureItem[],

  skillCategories: [
    {
      title: "Web Administration & Hosting",
      iconName: "Server",
      skills: [
        "cPanel Administration",
        "DNS Management",
        "FTP / SFTP",
        "SSL / TLS Setup",
        "MySQL & phpMyAdmin",
        "Domain Routing",
        "Nameservers",
        "Email Deliverability (SPF/DKIM)"
      ]
    },
    {
      title: "CMS & Technical Support",
      iconName: "Globe",
      skills: [
        "WordPress CMS",
        "Plugin Maintenance",
        "Theme Configuration",
        "Error 500 Troubleshooting",
        "Device Diagnostics",
        "Hardware & OS Support",
        "Root Cause Analysis"
      ]
    },
    {
      title: "Virtual Assistant & Operations",
      iconName: "Briefcase",
      skills: [
        "Inbox Management",
        "Client Communication",
        "Travel Logistics",
        "Supplier Liaison",
        "Refunds & Rebookings",
        "Appointment Scheduling",
        "Task Coordination",
        "Follow-ups"
      ]
    },
    {
      title: "Customer Support & Data Handling",
      iconName: "Headphones",
      skills: [
        "95% CSAT Standards",
        "Live Chat Support",
        "Email Ticket Triage",
        "Conflict De-escalation",
        "Customer Retention",
        "Database Updating",
        "Data Privacy Compliance",
        "SOP Documentation"
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "concentrix-web",
      company: "Concentrix Corporation",
      role: "Web Advisor",
      location: "Quezon City, Metro Manila, PH",
      period: "Oct 2024 – Jan 2026",
      isRecent: true,
      points: [
        "Delivered comprehensive troubleshooting support to over 150 clients monthly, resolving website errors, DNS issues, and email configuration problems with a 95% satisfaction rate, significantly reducing client downtime.",
        "Retained customers by identifying hosting-related pain points and offering tailored solutions, reducing cancellation requests.",
        "Guided clients through cPanel hosting migrations, database maintenance, and SSL certificate installation."
      ]
    },
    {
      id: "concentrix-travel",
      company: "Concentrix Corporation",
      role: "Travel Advisor",
      location: "Quezon City, Metro Manila, PH",
      period: "Feb 2024 – Sep 2024",
      points: [
        "Resolved complex customer service issues (refunds, modifications, rebookings) via chat, email, and phone, liaising between customers and 3rd party tour suppliers on a leading e-commerce travel platform.",
        "De-escalated urgent client inquiries with calm, empathetic, and clear multi-channel communication."
      ]
    },
    {
      id: "alorica-tech",
      company: "Alorica TeleServices, Inc.",
      role: "Technical Service Representative",
      location: "Quezon City, Metro Manila, PH",
      period: "Feb 2022 – Feb 2024",
      points: [
        "Resolved complex technical issues across a diverse range of devices, achieving a 35% reduction in repeat service calls and enhancing customer satisfaction scores by 20%.",
        "Documented detailed troubleshooting logs and assisted customers with patience and technical clarity."
      ]
    },
    {
      id: "alorica-csr",
      company: "Alorica TeleServices, Inc.",
      role: "Customer Service Representative",
      location: "Quezon City, Metro Manila, PH",
      period: "Jul 2021 – Feb 2022",
      points: [
        "Educated customers on product features and account management options through tailored consultations, increasing customer satisfaction scores by 20% and fostering stronger brand loyalty.",
        "Streamlined the troubleshooting process for common account concerns by documenting top issues and developing knowledge base resources, leading to a 15% faster resolution time across the frontline team."
      ]
    },
    {
      id: "ama-college",
      company: "AMA Computer College Sta. Mesa",
      role: "Database & IT Intern",
      location: "Sta. Mesa, Metro Manila, PH",
      period: "Jan 2020 – Feb 2020",
      points: [
        "Developed and maintained an up-to-date database of current student information, ensuring 100% compliance with privacy regulations and supporting seamless communication with stakeholders.",
        "Executed systematic data entry, record validation, and administrative documentation."
      ]
    }
  ] as ExperienceItem[],

  tools: [
    {
      name: "WordPress",
      category: "CMS Platform",
      description: "Core CMS updates, plugin conflict resolution, content publishing, and site maintenance.",
      iconName: "Globe"
    },
    {
      name: "cPanel & WHM",
      category: "Hosting Control Panel",
      description: "Directory management, file manager, backups, FTP accounts, and server controls.",
      iconName: "Server"
    },
    {
      name: "DNS Zone Editor",
      category: "Networking & Domains",
      description: "Managing A, CNAME, MX, TXT, SPF, and DKIM records for domains and email deliverability.",
      iconName: "Share2"
    },
    {
      name: "MySQL / phpMyAdmin",
      category: "Databases",
      description: "Database export/import, basic query maintenance, user permissions, and table backups.",
      iconName: "Database"
    },
    {
      name: "Google Workspace",
      category: "Cloud Productivity",
      description: "Docs, Sheets, Drive, Gmail, and collaborative administrative organization.",
      iconName: "FileSpreadsheet"
    },
    {
      name: "Microsoft Office 365",
      category: "Office Suite",
      description: "Excel data validation, sorting, filtering, Word documentation, and Outlook email clients.",
      iconName: "FileText"
    },
    {
      name: "Zendesk & CRM Systems",
      category: "Helpdesk & Support",
      description: "Omnichannel ticket management, customer triage, macros, and resolution metrics.",
      iconName: "Headphones"
    },
    {
      name: "OBS Studio",
      category: "Digital Media",
      description: "Live stream monitoring, audience moderation, and multimedia release scheduling.",
      iconName: "Video"
    }
  ] as ToolItem[],

  education: [
    {
      institution: "Carlos L. Albert High School",
      degree: "Secondary Education",
      track: "Technical-Vocational Education and Training: Information and Communications Technology (ICT)",
      location: "Quezon City, Metro Manila, PH",
      year: "2020"
    },
    {
      institution: "Diosdado P. Macapagal Elementary School",
      degree: "Elementary Education",
      track: "Elementary Graduate",
      location: "Quezon City, Metro Manila, PH",
      year: "2014"
    }
  ]
};
