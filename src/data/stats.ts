export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  kanji: string;
  status: 'PENDING_API' | 'ACTIVE';
}

export const DEVELOPER_STATS: StatItem[] = [
  {
    id: 'projects-built',
    label: 'PROJECTS BUILT',
    value: '05',
    subtext: '5 BATTLE-TESTED REPOSITORIES',
    kanji: '成果',
    status: 'ACTIVE'
  },
  {
    id: 'tech-learned',
    label: 'TECHNOLOGIES LEARNED',
    value: '15+',
    subtext: 'BACKEND • DEVOPS • SEC PROTOCOLS',
    kanji: '技術',
    status: 'ACTIVE'
  },
  {
    id: 'gh-repos',
    label: 'GITHUB REPOSITORIES',
    value: 'XX', // TODO: Connect with GitHub API: `https://api.github.com/users/tobi-bro/repos`
    subtext: 'DATA PENDING // API SYNC READY',
    kanji: '書庫',
    status: 'PENDING_API'
  },
  {
    id: 'gh-contributions',
    label: 'YEARLY CONTRIBUTIONS',
    value: 'XX', // TODO: Connect with GitHub GraphQL contribution calendar API
    subtext: 'DATA PENDING // API SYNC READY',
    kanji: '錬成',
    status: 'PENDING_API'
  },
  {
    id: 'learning-arc',
    label: 'CURRENT LEARNING ARC',
    value: 'STAGE 10',
    subtext: 'CLOUD INFRASTRUCTURE & CI/CD',
    kanji: '修練',
    status: 'ACTIVE'
  }
];

export const CURRENT_QUEST_DATA = {
  title: 'CURRENT QUEST',
  kanji: '現在の討伐指令',
  questRank: 'RANK SS // MASTER CAMPAIGN',
  progression: [
    {
      level: 'LEVEL 01',
      title: 'BACKEND ENGINEERING',
      kanji: '基幹構築',
      state: 'ACTIVE FOCUS',
      desc: 'Mastering asynchronous Python, relational query optimization, and cryptographic endpoints.'
    },
    {
      level: 'LEVEL 02',
      title: 'CLOUD + DEVOPS',
      kanji: '雲海自動',
      state: 'NEXT TARGET',
      desc: 'Container orchestration, declarative AWS infrastructure, and bulletproof CI/CD pipelines.'
    },
    {
      level: 'LEVEL 03',
      title: 'DEVSECOPS ENGINEERING',
      kanji: '電脳防衛',
      state: 'FINAL GOAL',
      desc: 'Automating security compliance directly into deployment pipelines: zero-trust, continuous SAST/DAST, and immutable infrastructure.'
    }
  ],
  questNotes: 'Protagonist Directive: Never write untested endpoints. Treat every infrastructure layer as potentially compromised.'
};
