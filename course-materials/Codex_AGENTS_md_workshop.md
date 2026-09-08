# Codex 프로젝트별 AGENTS.md 구성 실습

## 학습 목표

이 실습을 마치면 다음을 할 수 있습니다.

- Codex 앱의 프로젝트와 `AGENTS.md` 설정 범위를 구분한다.
- 모든 프로젝트에 적용할 공통 규칙을 작성한다.
- 저장소마다 다른 빌드·테스트 규칙을 분리한다.
- 긴 지침을 `docs/*.md`로 나누어 관리한다.

## 핵심 개념

Codex 앱의 왼쪽 프로젝트 목록은 작업할 폴더를 선택하는 UI입니다. 사이드바의 그룹 구조 자체가 `AGENTS.md`의 상속 구조를 만들지는 않습니다.

권장 구조는 다음과 같습니다.

```text
~/.codex/AGENTS.md
    모든 프로젝트에 공통으로 적용할 작업 원칙

~/dev/sources/git/sql-formatter/AGENTS.md
    SQL Formatter 저장소에서만 필요한 규칙

~/dev/sources/git/poreia/AGENTS.md
    poreia 저장소에서만 필요한 규칙
```

하위 디렉터리에 별도의 `AGENTS.md`를 두면 해당 영역에 더 구체적인 지침을 제공할 수 있습니다. 실제 탐색 범위와 우선순위는 사용 중인 Codex 버전의 [공식 AGENTS.md 문서](https://developers.openai.com/codex/guides/agents-md)에서 확인하세요.

## 1. 공통 규칙 만들기

`~/.codex/AGENTS.md`에는 프로젝트가 바뀌어도 유지할 규칙만 적습니다.

```markdown
# 공통 작업 원칙

- 사용자에게는 한국어로 간결하게 설명한다.
- 사용자가 요청하기 전에는 커밋하거나 푸시하지 않는다.
- 시스템 환경변수와 OS 설정을 임의로 변경하지 않는다.
- 기존 사용자 변경사항을 보존한다.
```

## 2. 프로젝트 규칙 만들기

프로젝트 루트의 `AGENTS.md`에는 기술 스택과 검증 방법처럼 저장소에 종속된 내용을 적습니다.

```markdown
# SQL Formatter 작업 규칙

- Java 21과 Gradle Wrapper를 사용한다.
- SQL Server 문법과 MyBatis XML 표현식을 보존한다.
- 수정 후 `./scripts/verify-local.sh`를 실행한다.
- 상세 정렬 규칙은 `docs/formatter-rules.md`를 확인한다.
```

## 3. 긴 규칙 분리하기

`AGENTS.md`가 지나치게 길어지면 핵심 원칙만 남기고 상세 설명을 별도 문서로 분리합니다.

```text
sql-formatter/
├── AGENTS.md
└── docs/
    ├── formatter-rules.md
    └── testing.md
```

`AGENTS.md`에는 필요한 문서를 언제 읽어야 하는지 명확하게 적습니다.

```markdown
- 포매터 동작을 변경할 때는 `docs/formatter-rules.md`를 먼저 확인한다.
- 테스트를 추가할 때는 `docs/testing.md`의 이름 규칙을 따른다.
```

## 4. 적용 확인 실습

1. 공통 `AGENTS.md`에 “응답은 한국어로 작성한다”를 추가합니다.
2. 프로젝트 `AGENTS.md`에 해당 저장소의 빌드 명령을 추가합니다.
3. Codex에서 해당 폴더를 프로젝트로 엽니다.
4. “이 프로젝트의 작업 규칙과 검증 명령을 요약해 줘”라고 요청합니다.
5. 공통 규칙과 프로젝트 규칙이 모두 반영되는지 확인합니다.

## 점검 질문

- 이 규칙은 모든 프로젝트에서 필요한가?
- 특정 저장소의 기술이나 도구에만 관련된 규칙인가?
- 특정 하위 폴더에서만 적용해야 하는가?
- 긴 예제와 예외 사항을 별도 문서로 옮길 수 있는가?

## 강의자용 메모

- 사이드바 프로젝트와 지침 탐색 계층을 혼동하지 않도록 강조합니다.
- 충돌 규칙 실습은 현재 Codex의 공식 문서에 적힌 탐색·병합 동작을 먼저 확인한 뒤 진행합니다.
- 처음부터 완벽한 규칙집을 만들기보다 반복되는 실수를 발견할 때 한 줄씩 추가하도록 안내합니다.

## 참고 자료

- [OpenAI Codex 공식 문서: AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
