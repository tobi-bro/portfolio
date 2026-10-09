import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vaultx',
    caseFileNumber: 'CASE FILE #001',
    chapterNumber: 'ACT 01',
    title: 'VAULTX',
    subtitle: 'SECURE ZERO-KNOWLEDGE PASSWORD VAULT',
    kanjiTitle: '暗号保管庫',
    tagline: 'Zero-knowledge encrypted password repository with zero trust backend design',
    speechPrompt: 'Can I actually protect sensitive data against targeted exfiltration?',
    speechResponse: "Let's find out. Defense begins at the byte level.",
    problem: 'Standard credential storage solutions rely heavily on centralized master keys or transmit plaintext across volatile network boundaries. A breach on the database level often compromises sensitive user credentials if cryptographic boundaries are weak.',
    solution: 'Designed and engineered VAULTX: a zero-knowledge password vault where the master password never leaves the client device in plaintext. Client-side derivation produces master encryption keys that encrypt vault contents before transmission.',
    architecture: 'FastAPI REST backend serving stateless cryptographic operations. Client performs client-side PBKDF2/Argon2id derivation. Vault records stored as encrypted binary blobs with nonce integrity checks. Alembic handles database migrations with zero schema leaks.',
    security: [
      'Argon2id password hashing with custom memory/time cost tuning',
      'AES-256-GCM symmetric payload encryption with unique initialization vectors (IV) per entry',
      'Zero-knowledge architecture: Server never sees raw master passwords or unencrypted vault contents',
      'JWT tokens with short expiration windows and cryptographically signed refresh tokens',
      'Strict rate-limiting and brute-force lockouts on authentication endpoints'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Argon2id',
      'JWT',
      'AES-256-GCM',
      'React'
    ],
    whatILearned: 'True security is architectural, not an afterthought. Implementing cryptographic nonces, timing-attack-resistant comparisons, and understanding how data is serialized into database layers permanently altered how I write backend systems.',
    githubUrl: 'https://github.com/tobi-bro/vaultx', // TODO: Replace with your actual repository URL
    liveDemoUrl: 'https://vaultx-demo.dev', // TODO: Replace with live demo URL
    panelStyle: 'wide',
    status: 'OPERATIONAL'
  },
  {
    id: 'ai-email-threat',
    caseFileNumber: 'CASE FILE #002',
    chapterNumber: 'ACT 02',
    title: 'AI EMAIL THREAT DETECTION',
    subtitle: 'PHISHING & MALICIOUS PAYLOAD ANALYZER',
    kanjiTitle: '脅威検知',
    tagline: 'Multi-vector email forensic engine parsing RFC headers, NLP deception patterns, and anomalous sender telemetry',
    speechPrompt: 'Attackers spoof domains in milliseconds. Can we detect malicious vectors before a user clicks?',
    speechResponse: 'Forensics parsed. SPF fail, DMARC misaligned, malicious intent flagged.',
    problem: 'Sophisticated spear-phishing campaigns bypass legacy spam filters through domain lookalike squatting, spoofed authentication headers, and weaponized social engineering semantics.',
    solution: 'Engineered an automated email forensic platform that ingests raw MIME messages, evaluates email authentication records (SPF, DKIM, DMARC), correlates sender IP with threat feeds, and classifies body text deception using fine-tuned NLP heuristics.',
    architecture: 'Asynchronous message parsing pipeline in FastAPI with Celery/Redis task workers. Parses raw .eml RFC 822 format into structured forensic JSON, performs DNS TXT record lookups, queries IP geolocation databases, and executes ML text embeddings.',
    security: [
      'Automated SPF, DKIM signature validation and DMARC enforcement policy audit',
      'Heuristic URL extraction and defanging to prevent accidental execution',
      'Origin IP threat intelligence correlation against known malicious botnets',
      'Zero sandbox execution of untested attachments: metadata hashing (SHA-256) and Virustotal API cross-checks',
      'Deceptive keyword entropy scoring and urgency sentiment classification'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'PyTorch',
      'Transformers / NLP',
      'Redis',
      'Docker',
      'GeoIP2',
      'Tailwind CSS'
    ],
    whatILearned: 'Email infrastructure (RFC 5322/822) is fragile yet foundational. Writing asynchronous worker queues and coordinating threat intelligence APIs under high throughput showed me the necessity of backend caching and defensive fault tolerance.',
    githubUrl: 'https://github.com/tobi-bro/email-threat-detector', // TODO: Replace with your actual repository URL
    liveDemoUrl: 'https://email-threat.dev', // TODO: Replace with live demo URL
    panelStyle: 'asymmetric',
    status: 'OPERATIONAL'
  },
  {
    id: 'url-risk-analyzer',
    caseFileNumber: 'CASE FILE #003',
    chapterNumber: 'ACT 03',
    title: 'URL RISK ANALYZER',
    subtitle: 'REAL-TIME DOMAIN & BROWSER SECURITY SCORER',
    kanjiTitle: 'リスク解析',
    tagline: 'High-speed suspicious domain inspection tracing redirect chains, certificate anomalies, and homograph attacks',
    speechPrompt: 'A single disguised link can compromise an entire corporate perimeter.',
    speechResponse: 'Dissecting target URL: 0-day redirect chain intercepted. Risk score: 94/100.',
    problem: 'Malicious actors use URL shorteners, punycode homograph attacks, and multi-hop HTTP 302 redirect cascades to obscure malicious destination domains from casual inspection.',
    solution: 'Built an automated URL investigation daemon that dissects URL syntax, calculates Shannon entropy on subdomains, traces full HTTP redirect chains without executing client-side scripts, and queries DNS whois age.',
    architecture: 'FastAPI async engine powered by httpx with strictly constrained redirect hops, SSL/TLS certificate inspection socket hooks, Redis cache layer for repetitive query throttling, and a reactive dashboard.',
    security: [
      'Automated punycode and internationalized domain name (IDN) homograph attack detection',
      'Socket-level TLS certificate inspection (issuer reputation, validity timeframe, wildcard checks)',
      'Headless sandbox redirect crawler blocking JavaScript execution',
      'Domain registration age verification via asynchronous RDAP/WHOIS protocols',
      'Configurable risk weighting scoring engine outputting normalized 0-100 hazard scores'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'Asyncio / httpx',
      'Redis',
      'Docker',
      'React',
      'TypeScript'
    ],
    whatILearned: 'Networking sockets and async non-blocking I/O in Python are remarkably capable when configured with defensive timeouts and strict circuit breakers against slowloris and redirect loop attacks.',
    githubUrl: 'https://github.com/tobi-bro/url-risk-analyzer', // TODO: Replace with your actual repository URL
    liveDemoUrl: 'https://url-risk.dev', // TODO: Replace with live demo URL
    panelStyle: 'tall',
    status: 'OPERATIONAL'
  },
  {
    id: 'discipline-xp',
    caseFileNumber: 'CASE FILE #004',
    chapterNumber: 'ACT 04',
    title: 'DISCIPLINE XP',
    subtitle: 'GAMIFIED HABIT PROTOCOL & PROTO-RPG ENGINE',
    kanjiTitle: '鍛錬規律',
    tagline: 'Turn daily software engineering grind and discipline into a battle-tested character progression system',
    speechPrompt: 'Consistency is the hardest algorithm to optimize in life.',
    speechResponse: 'Streak: Day 42. Experience multiplier activated. Quest completed.',
    problem: 'Developers often struggle with maintaining long-term deliberate practice, LeetCode grinds, reading technical whitepapers, and healthy lifestyle habits without immediate feedback loops.',
    solution: 'Created Discipline XP, a manga-styled habit tracking and productivity engine that models real habits as RPG stat nodes (Intelligence, Stamina, Agility, DevSecOps Mastery), providing XP gains, streak mechanics, and boss battles upon milestones.',
    architecture: 'Client-side state synchronization with local encryption fallback. REST endpoints for cross-device backup, customizable quest board, and visual level-up celebration canvas.',
    security: [
      'Client-side state validation preventing offline tampering',
      'Encrypted profile sync with tokenized API authentication',
      'Zero tracker telemetry and minimal data footprint'
    ],
    techStack: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Tailwind CSS',
      'Canvas API'
    ],
    whatILearned: 'Psychological UX engineering paired with clean reactive state models. Learned how to design addictive feedback loops while keeping database models normalized and queries lightning-fast.',
    githubUrl: 'https://github.com/tobi-bro/discipline-xp', // TODO: Replace with your actual repository URL
    liveDemoUrl: 'https://discipline-xp.dev', // TODO: Replace with live demo URL
    panelStyle: 'asymmetric',
    status: 'OPERATIONAL'
  },
  {
    id: 'webtype',
    caseFileNumber: 'CASE FILE #005',
    chapterNumber: 'ACT 05',
    title: 'WEBTYPE',
    subtitle: 'MANGA-INSPIRED FAST TYPING ARENA',
    kanjiTitle: '高速タイピング',
    tagline: 'High-velocity typing accelerator featuring real-time telemetry, burst velocity analytics, and dynamic ink effects',
    speechPrompt: 'Every keystroke is an execution command. How fast can you code under pressure?',
    speechResponse: 'WPM: 118. Accuracy: 99.4%. Velocity graph surging.',
    problem: 'Most typing test applications are sterile and slow. They do not simulate code syntax, special characters (brackets, semicolons, regex), or offer tactile, visceral feedback for high-speed typists.',
    solution: 'Engineered WebType: a high-performance typing engine with dynamic ink splash feedback, syntax-highlighted programming language modes (Python, Bash, SQL, C), real-time burst WPM analytics, and manga-styled speedline visual tiers.',
    architecture: 'High-frequency event listener decoupled from React render loops via custom requestAnimationFrame canvas graphs, Web Audio synthesized mechanical switch sound effects, and persistent statistics tracking.',
    security: [
      'Strict input sanitization preventing XSS through custom snippet insertion',
      'Cryptographic hash verification of snippet completions to avoid artificial leaderboard cheating'
    ],
    techStack: [
      'React',
      'TypeScript',
      'Canvas API',
      'Web Audio API',
      'Tailwind CSS',
      'Framer Motion'
    ],
    whatILearned: 'Deep mastery over the DOM event lifecycle, input latency minimization, and rendering 60FPS telemetry charts without triggering React reconciliation lag.',
    githubUrl: 'https://github.com/tobi-bro/webtype', // TODO: Replace with your actual repository URL
    liveDemoUrl: 'https://webtype.dev', // TODO: Replace with live demo URL
    panelStyle: 'wide',
    status: 'OPERATIONAL'
  }
];
