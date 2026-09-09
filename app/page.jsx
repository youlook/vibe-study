import Link from 'next/link';

const guides = [
  ['01', '목적과 범위', '원하는 결과와 작업 범위, 완료 기준을 먼저 적습니다.'],
  ['02', '프로젝트 지침', '공통 원칙과 프로젝트별 규칙을 AGENTS.md로 나눕니다.'],
  ['03', '검증과 기록', '빌드와 테스트로 확인하고 변경 내용을 Git에 남깁니다.'],
];

export default function Home() {
  return <main className="guide-home">
    <div className="eyebrow">VIBE CODING GUIDE</div>
    <section className="guide-intro">
      <div>
        <h1>바이브코드<br/>구성 지침서</h1>
        <p>AI와 함께 프로젝트를 시작할 때 필요한 기준을<br/>짧고 반복 가능한 형태로 정리합니다.</p>
      </div>
      <div className="guide-principle"><span>기본 원칙</span><strong>작게 요청하고,<br/>바로 확인하고,<br/>규칙으로 남기기</strong></div>
    </section>
    <section className="guide-list" aria-label="구성 지침">
      {guides.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}
    </section>
    <section className="guide-start">
      <div><span>첫 번째 학습</span><h2>Codex의 AGENTS.md 구성</h2></div>
      <Link href="/codex">강의 시작 <span aria-hidden="true">↗</span></Link>
    </section>
  </main>;
}
