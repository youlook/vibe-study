export default function Workflow() {
  return (
    <main>
      <div className="eyebrow">CODEX / 03</div>

      <div className="example-heading">
        <h1>
          작업은 순서대로,<br />
          검증은 필요한 만큼.
        </h1>
        <p>Codex 작업 흐름을 간단하게 정리한 예시</p>
      </div>

      <section className="example-layout">
        <div className="explanation">
          <div className="eyebrow">기본 작업 흐름</div>

          <h2>1. 요청 확인</h2>
          <p>
            수정할 파일과 범위를 먼저 확인합니다.
          </p>

          <h2>2. 소스 수정</h2>
          <p>
            관련된 파일만 최소한으로 수정합니다.
          </p>

          <h2>3. 검증</h2>
          <div className="code-sample">
            <code>
              pnpm build
              <br />
              pnpm test
            </code>
          </div>

          <h2>4. Git 반영</h2>
          <div className="code-sample">
            <code>
              git add .
              <br />
              git commit -m "수정 내용"
              <br />
              git push
            </code>
          </div>

          <p className="caption">
            서버 실행이나 전체 로그 확인은 필요한 경우에만 수행합니다.
          </p>
        </div>
      </section>
    </main>
  );
}