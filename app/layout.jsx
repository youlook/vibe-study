import './globals.css';
import './sidebar.css';
import Sidebar from '../components/Sidebar';

export const metadata = { title: 'Vibe Study · 바이브코드 구성 지침서', description: '바이브코드 프로젝트 구성과 Codex 활용법을 배우는 웹 지침서' };

export default function RootLayout({ children }) {
  return <html lang="ko"><body><div className="site-shell"><Sidebar/><div className="site-content">{children}<footer>VIBE STUDY <span>Codex 학습 노트</span></footer></div></div></body></html>;
}
