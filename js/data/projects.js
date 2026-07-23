/**
 * Featured projects. Each entry drives one project card.
 */
window.PortfolioData = window.PortfolioData || {};

window.PortfolioData.projects = [
  {
    id: "merchant-terminal-integration",
    title: "Merchant Payment Terminal Integration",
    category: "Payments · POS",
    overview: "Led the end-to-end integration and certification of merchant payment terminals with StoreHub POS, enabling card-present transaction acceptance for enterprise merchants.",
    tech: ["Newland Terminals", "Sunmi Terminals", "StoreHub POS", "EMV L3", "Mastercard MLV"],
    role: "Senior Technical Project Manager — led vendor coordination, UAT, and production rollout.",
    challenges: [
      "Aligning three external parties (terminal manufacturer, POS provider, acquirer) on one certification timeline.",
      "Running EMV L3 and Mastercard MLV certification cycles without delaying merchant go-live."
    ],
    impact: [
      "Delivered certified terminal integrations on schedule with zero critical defects at go-live.",
      "Cut merchant onboarding cycle time with a standardized UAT and deployment playbook."
    ],
    achievements: [
      "Established a repeatable onboarding lifecycle now reused across every new terminal rollout.",
      "Directed a cross-functional team spanning Product, Engineering, QA, Compliance, and Operations."
    ]
  },
  {
    id: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    category: "Payments · E-commerce",
    overview: "Directed the integration of CyberSource as a payment gateway to support e-commerce transactions, including 3D Secure authentication, tokenization, and Dynamic Currency Conversion.",
    tech: ["CyberSource", "3D Secure (3DS)", "Tokenization", "DCC", "Electronic Invoice System"],
    role: "Project lead coordinating Engineering, Compliance, and the payment partner through certification and go-live.",
    challenges: [
      "Meeting BSP and scheme compliance requirements while keeping checkout friction-free.",
      "Sequencing tokenization and DCC rollout without disrupting live transaction volume."
    ],
    impact: [
      "Enabled secure, compliant e-commerce transaction processing for enterprise merchants.",
      "Strengthened transaction authentication via 3DS with no added checkout friction."
    ],
    achievements: [
      "Delivered production go-live with full BSP and card-scheme compliance sign-off.",
      "Built the governance model reused for every subsequent gateway integration."
    ]
  },
  {
    id: "enterprise-saas-delivery",
    title: "Enterprise SaaS Delivery",
    category: "Enterprise SaaS · GRC",
    overview: "Directed Agile delivery of a PHP 128M SaaS GRC modernization program, migrating an on-premise governance, risk & compliance platform to SaaS for a 20+ person cross-functional team.",
    tech: ["RSA Archer GRC", "Agile / Scrum", "JIRA", "SDLC Governance"],
    role: "Project Manager owning sprint planning, backlog refinement, and stakeholder governance.",
    challenges: [
      "Migrating a business-critical GRC platform to SaaS without disrupting live compliance workflows.",
      "Aligning a 20+ person cross-functional team and executives around one release cadence."
    ],
    impact: [
      "Delivered all major release milestones on schedule.",
      "Achieved zero critical post-launch defects through rigorous UAT and requirements traceability."
    ],
    achievements: [
      "Directed a parallel multi-vendor network and HCI upgrade aligned to sprint releases.",
      "Owned the executive reporting cadence for budget, status, and risk."
    ]
  },
  {
    id: "knowledge-transition-program",
    title: "Knowledge Transition Program",
    category: "Knowledge Management · IT Transition",
    overview: "Led enterprise knowledge management and IT transition programs across two organizations, raising KM maturity and stabilizing delivery across 25+ concurrent projects.",
    tech: ["Knowledge Management Systems", "ITSM", "Risk Registers", "Microsoft 365"],
    role: "Project Knowledge & Transition Manager — owned transition governance, risk registers, and vendor coordination.",
    challenges: [
      "Standardizing knowledge capture and transition processes across distributed delivery teams.",
      "Reducing delays across a large, concurrent project portfolio."
    ],
    impact: [
      "Raised knowledge management maturity from Level 1 to Level 3 across three departments in 18 months.",
      "Cut portfolio-wide transition delays by 30% across 25+ IT infrastructure and cloud projects."
    ],
    achievements: [
      "Reduced escalations from 75% to under 5%.",
      "Directed an enterprise Microsoft 365 migration, training 200+ staff with zero major disruption."
    ]
  },
  {
    id: "media-infrastructure-modernization",
    title: "Enterprise Infrastructure Modernization",
    category: "Infrastructure · Media & Entertainment",
    overview: "Directed a Hyper-Converged Infrastructure (HCI) modernization alongside a large-scale archiving storage upgrade for a media & entertainment client, improving performance, scalability, and disaster-recovery readiness.",
    tech: ["HCI (VMware vSAN)", "Dell EMC", "Fortinet", "SAN/NAS Storage"],
    role: "Project Manager — directed the infrastructure modernization and storage upgrade workstreams end-to-end.",
    challenges: [
      "Modernizing production infrastructure without disrupting 24/7 media operations.",
      "Coordinating a multi-petabyte storage migration alongside a parallel compute/network overhaul."
    ],
    impact: [
      "Delivered faster, more resilient infrastructure with headroom for growing storage demand.",
      "Completed both workstreams on schedule with no production disruption."
    ],
    achievements: [
      "Directed a multi-vendor rollout (compute, network, storage) as a single coordinated program.",
      "Established a modernization playbook reused for subsequent infrastructure upgrades."
    ]
  },
  {
    id: "financial-infra-security-upgrade",
    title: "Financial Institution Infrastructure & Security Upgrade",
    category: "Infrastructure · Financial Services",
    overview: "Directed an infrastructure and security modernization — Infrastructure-as-a-Service, Firewall-as-a-Service, and Backup-as-a-Service — for a financial institution client, strengthening resilience and regulatory readiness.",
    tech: ["IaaS (Azure/AWS)", "Firewall-as-a-Service (FWaaS)", "Backup-as-a-Service (BaaS)", "Fortinet", "Veeam"],
    role: "Project Manager — owned planning, vendor coordination, and cutover for the infrastructure and security upgrade.",
    challenges: [
      "Upgrading core infrastructure and security controls for a regulated financial institution without service interruption.",
      "Sequencing IaaS, firewall, and backup workstreams to avoid conflicting change windows."
    ],
    impact: [
      "Strengthened security posture and disaster-recovery readiness with FWaaS and BaaS in place.",
      "Delivered the infrastructure upgrade on schedule with zero unplanned downtime."
    ],
    achievements: [
      "Built a phased cutover plan adopted as the standard for subsequent client infrastructure upgrades.",
      "Coordinated multiple technology vendors into a single delivery timeline."
    ]
  },
  {
    id: "healthcare-network-expansion",
    title: "Healthcare Facility Network Expansion",
    category: "Infrastructure · Healthcare",
    overview: "Managed a network cabling and APN (access point) connectivity upgrade linking a hospital client's new building to its existing infrastructure in Tacloban.",
    tech: ["Structured Cabling", "APN / Wireless Access Points", "Fiber/Copper", "Network Switching"],
    role: "Project Manager — coordinated site works, vendor installation, and connectivity testing.",
    challenges: [
      "Delivering structured cabling and wireless connectivity for a new building without disrupting active hospital operations.",
      "Coordinating site logistics within a live healthcare facility."
    ],
    impact: [
      "Delivered reliable network connectivity to the new building, extending coverage and capacity.",
      "Completed installation and cutover on schedule with no impact to patient-facing operations."
    ],
    achievements: [
      "Delivered a fully tested, production-ready network expansion ahead of the client's operational deadline."
    ]
  }
];
