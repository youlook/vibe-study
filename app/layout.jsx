import Link from 'next/link';
import './globals.css';
import './sidebar.css';
import Sidebar from '../components/Sidebar';

export const metadata = { title: 'Vibe Study · Codex', description: 'Codex 프로젝트와 AGENTS.md를 배우는 짧은 웹 강의' };

export default function RootLayout({ children }) {
  return <html lang="ko"><body><div className="site-shell"><Sidebar/><div className="site-content">{children}<footer>VIBE STUDY <span>Codex 학습 노트</span></footer></div></div></body></html>;
}
