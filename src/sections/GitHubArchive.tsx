import React from 'react';
import { ChapterTitle } from '../components/ChapterTitle';
import { Star, GitFork, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { mangaSound } from '../utils/sound';

interface RepoStub {
  name: string;
  desc: string;
  language: string;
  langColor: string;
  tags: string[];
  stars: string;
  forks: string;
  url: string;
}

const REPOSITORIES: RepoStub[] = [
  {
    name: 'vaultx-core',
    desc: 'High-security zero-knowledge password vault backend. PBKDF2/Argon2id derivation, AES-256-GCM encrypted vaults.',
    language: 'Python',
    langColor: '#3572A5',
    tags: ['fastapi', 'cryptography', 'postgresql', 'alembic'],
    stars: 'XX', // TODO: Connect GitHub API `stargazers_count`
    forks: 'XX',
    url: 'https://github.com/tobi-bro/vaultx-core'
  },
  {
    name: 'ai-email-threat-detector',
    desc: 'Automated RFC 822 MIME parser and email threat intelligence engine with SPF/DKIM verification and NLP embeddings.',
    language: 'Python',
    langColor: '#3572A5',
    tags: ['pytorch', 'fastapi', 'redis', 'threat-intel'],
    stars: 'XX',
    forks: 'XX',
    url: 'https://github.com/tobi-bro/ai-email-threat-detector'
  },
  {
    name: 'url-risk-scanner',
    desc: 'High-speed async URL risk scanner tracing HTTP 302 redirect cascades and SSL certificate validity.',
    language: 'Python',
    langColor: '#3572A5',
    tags: ['asyncio', 'httpx', 'redis', 'security-scanner'],
    stars: 'XX',
    forks: 'XX',
    url: 'https://github.com/tobi-bro/url-risk-scanner'
  },
  {
    name: 'discipline-xp-engine',
    desc: 'Gamified habit protocol and proto-RPG engine with streak degradation penalties and level milestones.',
    language: 'TypeScript',
    langColor: '#3178C6',
    tags: ['react', 'typescript', 'fastapi', 'tailwind'],
    stars: 'XX',
    forks: 'XX',
    url: 'https://github.com/tobi-bro/discipline-xp'
  },
  {
    name: 'webtype-accelerator',
    desc: 'High-velocity typing accelerator featuring real-time telemetry, burst velocity analytics, and dynamic ink effects.',
    language: 'TypeScript',
    langColor: '#3178C6',
    tags: ['react', 'web-audio', 'canvas-api', 'framer-motion'],
    stars: 'XX',
    forks: 'XX',
    url: 'https://github.com/tobi-bro/webtype'
  },
  {
    name: 'devops-infra-labs',
    desc: 'Homelab infrastructure, multi-stage Dockerfiles, Linux systemd daemons, and automated GitHub Actions CI pipelines.',
    language: 'HCL / Dockerfile',
    langColor: '#844FBA',
    tags: ['docker', 'linux', 'ci-cd', 'bash'],
    stars: 'XX',
    forks: 'XX',
    url: 'https://github.com/tobi-bro/devops-infra-labs'
  }
];

export const GitHubArchive: React.FC = () => {
  return (
    <section id="github" className="relative py-16 md:py-24 bg-[#080808] overflow-hidden">
      {/* Background Screentone */}
      <div className="absolute inset-0 bg-screentone-dense opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter 06 Title */}
        <ChapterTitle
          chapter="CHAPTER 06"
          title="THE CODE ARCHIVE"
          subtitle="REPOSITORY VAULT & CONTRIBUTION TELEMETRY"
          kanji="書庫"
          description="A manga-styled interpretation of Git version control. Repositories, architectural branches, and production commits maintained with strict cryptographic commit signatures."
        />

        {/* GitHub Header Banner */}
        <div className="border-4 border-white bg-[#0F0F0F] p-6 sm:p-8 shadow-[10px_10px_0px_#000000] mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white text-black">
                <GithubIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#E10600] font-bold tracking-widest uppercase">
                  GITHUB REPOSITORY VAULT
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Cinzel',_serif]">
                  TOBI // PUBLIC ARTIFACTS
                </h3>
                <p className="text-xs font-mono text-[#888888] mt-0.5">
                  STATUS: LIVE REPOSITORIES &bull; API READY
                </p>
              </div>
            </div>

            <a
              href="https://github.com/tobi-bro"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => mangaSound.playStamp()}
              className="px-5 py-3 bg-[#E10600] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-widest transition-all shadow-[4px_4px_0px_#000000] flex items-center gap-2"
            >
              <span>FOLLOW ON GITHUB</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Manga Contribution Grid Simulation (Screentone Matrix) */}
          <div className="mt-8 pt-6 border-t border-[#262626]">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-white font-bold">
                CONTRIBUTION GRID // REPOSITORY HEATMAP
              </span>
              <span className="text-[#888888] text-[10px]">
                API NOTE: INTEGRATES WITH GITHUB GRAPHQL
              </span>
            </div>

            {/* Visual Heatmap with Screentone Manga Blocks */}
            <div className="bg-[#080808] p-4 border border-[#222222] overflow-x-auto">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
                {Array.from({ length: 52 * 7 }).map((_, i) => {
                  const level = (i * 17 + 23) % 5;
                  const getBg = () => {
                    switch (level) {
                      case 4:
                        return 'bg-[#E10600] border border-red-500';
                      case 3:
                        return 'bg-white border border-gray-300';
                      case 2:
                        return 'bg-[#555555]';
                      case 1:
                        return 'bg-[#262626]';
                      default:
                        return 'bg-[#121212]';
                    }
                  };
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-[1px] transition-colors ${getBg()}`}
                      title={`Activity index ${i}`}
                    />
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>JANUARY ➔ DECEMBER CYCLE</span>
                <div className="flex items-center gap-1.5">
                  <span>LESS</span>
                  <span className="w-2.5 h-2.5 bg-[#121212] inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#262626] inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#555555] inline-block" />
                  <span className="w-2.5 h-2.5 bg-white inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#E10600] inline-block" />
                  <span>MORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPOSITORIES.map((repo) => (
            <div
              key={repo.name}
              className="border-2 border-[#2B2B2B] hover:border-white bg-[#0C0C0C] p-5 flex flex-col justify-between transition-all duration-300 shadow-[5px_5px_0px_#000000] group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-2">
                  <div className="flex items-center gap-1.5 text-[#E10600]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold">PUBLIC REPO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[10px]">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[10px]">
                      <GitFork className="w-3 h-3" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => mangaSound.playStamp()}
                  className="text-lg font-black text-white hover:text-[#E10600] transition-colors font-mono tracking-tight block mb-2"
                >
                  {repo.name}
                </a>

                <p className="text-xs text-[#999999] leading-relaxed mb-4">
                  {repo.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#141414] text-[9px] font-mono text-[#777777] border border-[#222222]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#CCCCCC]">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => mangaSound.playStamp()}
                  className="text-[#E10600] hover:underline font-bold flex items-center gap-1"
                >
                  <span>INSPECT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
