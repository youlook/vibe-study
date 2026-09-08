'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function CodexIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.1 3.6a7.8 7.8 0 0 1 11.2 4.8m-3.4 12a7.8 7.8 0 0 1-11.2-4.8M4.7 8.4A7.8 7.8 0 0 1 16 3.6m3.3 12A7.8 7.8 0 0 1 8 20.4M4.2 15.6A7.8 7.8 0 0 1 4.7 8.4m14.6 0a7.8 7.8 0 0 1 .5 7.2M8.2 8.7l3.8-2.2 3.8 2.2v4.5L12 15.5l-3.8-2.3Z"/></svg>;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem('vibe-study-sidebar-expanded');
    if (saved !== null) setExpanded(saved === 'true');
  }, []);

  function toggle() {
    setExpanded((current) => {
      const next = !current;
      window.localStorage.setItem('vibe-study-sidebar-expanded', String(next));
      return next;
    });
  }

  const conceptActive = pathname === '/codex';
  const projectsActive = pathname === '/codex/projects';

  return <aside className={`course-sidebar ${expanded ? 'is-expanded' : 'is-collapsed'}`}>
    <div className="sidebar-top">
      <Link href="/codex" className="sidebar-brand" aria-label="Vibe Study 홈">
        <span className="brand-mark">V</span>
        {expanded && <span className="brand-copy">vibe<strong>study</strong><small>개발 학습 노트</small></span>}
      </Link>
      <button className="sidebar-toggle" type="button" onClick={toggle} aria-label={expanded ? '메뉴 접기' : '메뉴 펼치기'} aria-expanded={expanded}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={expanded ? 'm14 6-6 6 6 6' : 'm10 6 6 6-6 6'}/></svg>
      </button>
    </div>

    <nav className="sidebar-nav" aria-label="강의 메뉴">
      <div className={`nav-group ${pathname.startsWith('/codex') ? 'group-active' : ''}`}>
        <Link href="/codex" className="nav-parent" title={expanded ? undefined : 'Codex'}>
          <span className="nav-icon"><CodexIcon /></span>
          {expanded && <><span>Codex</span><span className="nav-chevron">⌄</span></>}
        </Link>
        {expanded && <div className="sub-menu">
          <Link href="/codex" className={conceptActive ? 'active' : ''} aria-current={conceptActive ? 'page' : undefined}><span>01</span>AGENTS.md 개념</Link>
          <Link href="/codex/projects" className={projectsActive ? 'active' : ''} aria-current={projectsActive ? 'page' : undefined}><span>02</span>프로젝트 예시</Link>
        </div>}
      </div>
    </nav>

    {expanded && <div className="sidebar-foot">공통 규칙과 프로젝트 규칙을<br/>한 단계씩 정리합니다.</div>}
  </aside>;
}
