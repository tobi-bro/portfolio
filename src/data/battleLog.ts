import { BattleBugItem } from '../types';

export const BATTLE_BUGS: BattleBugItem[] = [
  {
    id: 'bug-001',
    bugNumber: 'BUG #001',
    title: 'DATABASE CONNECTION POOL EXHAUSTION',
    threatLevel: 'CRITICAL',
    status: 'DEFEATED',
    enemyType: 'LEAK DEMON // CONCURRENCY ANOMALY',
    symptoms: 'FastAPI workers locked up under 500+ concurrent requests. SQLAlchemy engine raised `TimeoutError: QueuePool limit of size 10 overflow 10 reached`.',
    rootCause: 'Unclosed database sessions within background async tasks. Exceptions during payload serialization bypassed session cleanup blocks.',
    lethalFix: 'Refactored database dependency injection to use async context managers (`async with get_db() as session`). Configured PgBouncer connection pooling and added automated session-leak unit tests in CI.',
    stackInvolved: ['PostgreSQL', 'SQLAlchemy Async', 'FastAPI', 'Asyncio'],
    timestamp: 'BATTLE CLEARED'
  },
  {
    id: 'bug-002',
    bugNumber: 'BUG #002',
    title: 'AUTH TOKEN TIMING ATTACK & CORS DESYNC',
    threatLevel: 'CRITICAL',
    status: 'DEFEATED',
    enemyType: 'SPECTER // CRYPTO EXPLOIT VECTOR',
    symptoms: 'Cross-origin requests from development staging failed preflight checks, while string equality comparison on token hashes showed microsecond variance.',
    rootCause: 'Naive standard `==` string comparison on cryptographic token verification allowed hypothetical timing side-channel analysis. Wildcard `allow_origins=["*"]` clashed with `allow_credentials=True`.',
    lethalFix: 'Replaced naive string comparison with `hmac.compare_digest()` constant-time evaluation. Implemented strict explicit origin whitelists and partitioned HttpOnly cookies with SameSite=Lax enforcement.',
    stackInvolved: ['FastAPI', 'HMAC / Crypto', 'HTTP Headers', 'JWT'],
    timestamp: 'BATTLE CLEARED'
  },
  {
    id: 'bug-003',
    bugNumber: 'BUG #003',
    title: 'DOCKER MULTI-STAGE BUILD INVALIDATION',
    threatLevel: 'HIGH',
    status: 'DEFEATED',
    enemyType: 'BLOAT BEAST // CI TIME CONSUMER',
    symptoms: 'CI runner build times ballooned from 45 seconds to 7 minutes on every git push, repeatedly downloading 800MB of Python wheel dependencies.',
    rootCause: '`COPY . .` was invoked before `pip install -r requirements.txt`, causing code-level edits to invalidate the cached dependency layer on every commit.',
    lethalFix: 'Reordered Dockerfile build layers to copy dependency manifests in an isolated builder stage (`python:3.12-slim-bookworm`), compiling wheel archives before pulling application source code. Final production image size slashed from 1.1GB to 142MB.',
    stackInvolved: ['Docker', 'Linux', 'GitHub Actions', 'Python'],
    timestamp: 'BATTLE CLEARED'
  },
  {
    id: 'bug-004',
    bugNumber: 'BUG #004',
    title: 'HOMOGRAPH RECURSIVE REDIRECT EVASION',
    threatLevel: 'HIGH',
    status: 'INVESTIGATING',
    enemyType: 'SHAPESHIFTER // ZERO-DAY SIMULATION',
    symptoms: 'URL risk analyzer crawler encountered infinite HTTP 302 bounce loop with cycling Cyrillic punycode subdomains designed to exhaust async task workers.',
    rootCause: 'Target redirection engine lacked hard hop count ceilings and circular hop hash tracking when resolving obscure non-standard TLDs.',
    lethalFix: 'Actively engineering a cryptographic SHA-256 hop history graph validator with maximum 5-hop hard abort thresholds and strict socket read timeouts. Defense simulation in progress.',
    stackInvolved: ['FastAPI', 'httpx Async', 'DNS Security', 'Regex Evasion'],
    timestamp: 'IN PROGRESS'
  },
  {
    id: 'bug-005',
    bugNumber: 'BUG #005',
    title: 'SOCKET DESYNC IN HIGH-THROUGHPUT STRESS TEST',
    threatLevel: 'MEDIUM',
    status: 'DEFEATED',
    enemyType: 'GLITCH PHANTOM // MEMORY SPIKE',
    symptoms: 'Memory footprint spiked linearly during simulated 10,000 req/sec stress tests due to buffered streaming responses retained in RAM.',
    rootCause: 'Response generator loaded entire MIME payloads into memory before yielding chunks instead of streaming raw bytes via asynchronous iterators.',
    lethalFix: 'Migrated file payload streaming to chunked memory-mapped byte generators (`StreamingResponse(io.BytesIO)` with bounded 64KB chunk windows). Memory profile flattened to a steady 42MB baseline.',
    stackInvolved: ['Python Async', 'Memory Profiling', 'Linux Sockets'],
    timestamp: 'BATTLE CLEARED'
  }
];
