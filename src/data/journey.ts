import { JourneyMilestone } from '../types';

export const JOURNEY_STEPS: JourneyMilestone[] = [
  {
    step: 1,
    stageName: 'THE FIRST LINE: HTML & CSS',
    kanji: '初動',
    techNodes: ['HTML5', 'CSS3', 'Semantic Web'],
    rank: 'STAGE 01 // GENESIS',
    quote: 'The first spark. Understanding how pixels render and documents structure.'
  },
  {
    step: 2,
    stageName: 'CLIENT LOGIC: JAVASCRIPT',
    kanji: '覚醒',
    techNodes: ['JavaScript (ES6+)', 'DOM API', 'Event Loop'],
    rank: 'STAGE 02 // DYNAMICS',
    quote: 'Bringing static pages to life. Realizing computation runs on event cycles.'
  },
  {
    step: 3,
    stageName: 'THE PIVOT TO BACKEND: PYTHON',
    kanji: '転機',
    techNodes: ['Python 3', 'OOP', 'Data Structures', 'Algorithmic Thinking'],
    rank: 'STAGE 03 // LOGIC CORE',
    quote: 'Discovered the true love for system internals, algorithms, and server-side logic.'
  },
  {
    step: 4,
    stageName: 'ASYNC VELOCITY: FASTAPI',
    kanji: '突風',
    techNodes: ['FastAPI', 'Starlette', 'Pydantic', 'Asyncio'],
    rank: 'STAGE 04 // ASYNC SPEED',
    quote: 'Constructing high-throughput REST APIs and understanding non-blocking I/O.'
  },
  {
    step: 5,
    stageName: 'DATA ARCHITECTURE: SQL & POSTGRESQL',
    kanji: '深層',
    techNodes: ['SQL', 'PostgreSQL', 'SQLAlchemy', 'ACID Transactions', 'Alembic'],
    rank: 'STAGE 05 // PERSISTENCE',
    quote: 'Designing normalized schemas, indexes, and mastering data integrity at scale.'
  },
  {
    step: 6,
    stageName: 'THE FOUNDATIONAL OS: LINUX',
    kanji: '基盤',
    techNodes: ['Linux Kernel', 'Bash Scripting', 'Systemd', 'POSIX Sockets'],
    rank: 'STAGE 06 // BARE METAL',
    quote: 'Leaving the comfort of GUI behind. Controlling the machine from the shell.'
  },
  {
    step: 7,
    stageName: 'THE WIRE: NETWORKING PROTOCOLS',
    kanji: '電路',
    techNodes: ['TCP/IP', 'DNS', 'HTTP/TLS', 'Sockets', 'Routing'],
    rank: 'STAGE 07 // WIRES & BYTES',
    quote: 'Tracing packets across the wire. Understanding latency, handshakes, and transport layers.'
  },
  {
    step: 8,
    stageName: 'DEFENSIVE AWAKENING: CYBERSECURITY',
    kanji: '防衛',
    techNodes: ['Cryptographic Primitives', 'AES-256', 'Argon2id', 'OWASP Top 10', 'Zero Trust'],
    rank: 'STAGE 08 // GUARDIAN',
    quote: 'Realizing every line of code is an attack surface. Security cannot be bolted on later.'
  },
  {
    step: 9,
    stageName: 'ISOLATION & REPEATABILITY: DOCKER',
    kanji: '封印',
    techNodes: ['Docker', 'Multi-Stage Builds', 'Container Networking', 'Compose'],
    rank: 'STAGE 09 // CONTAINMENT',
    quote: 'Reproducible runtimes. Packaging services into isolated, immutable artifacts.'
  },
  {
    step: 10,
    stageName: 'EXPANSION: CLOUD & DEVOPS',
    kanji: '雲海',
    techNodes: ['AWS', 'GitHub Actions CI/CD', 'Automated Testing', 'Telemetry'],
    rank: 'STAGE 10 // AUTOMATION',
    quote: 'Bridging code from local development to production pipelines reliably.',
    isCurrent: true
  },
  {
    step: 11,
    stageName: 'THE ULTIMATE HORIZON: DEVSECOPS',
    kanji: '到達',
    techNodes: ['Security as Code', 'Kubernetes Security', 'IaC Scanning', 'Zero-Trust Infra'],
    rank: 'STAGE 11 // DESTINATION',
    quote: 'The destination: Embedding automated security testing directly into infrastructure and CI/CD pipelines.'
  }
];
