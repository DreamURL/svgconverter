# SVG Path별 개별 편집 기능 구현 계획

## 목표
현재 전체 SVG에 통일된 스타일을 적용하는 방식에서 각 path 요소별로 개별 색상, 선두께 등을 편집할 수 있는 진정한 SVG 에디터로 업그레이드

## 작업 단계별 계획

### 1단계: SVG 파싱 및 Path 분석 (첫 번째 작업)
**목표**: SVG 파일 업로드 시 각 path 요소를 개별적으로 파싱하고 분석
- [x] SVG 파일에서 path 요소들을 배열로 추출
- [x] 각 path의 기본 속성 파싱 (fill, stroke, stroke-width, linecap, linejoin 등)
- [x] path별 고유 ID 생성 및 관리
- [x] 파싱된 path 정보를 state로 관리할 데이터 구조 설계

**구현 위치**: 
- src/components/UploadPanel.tsx (파일 업로드 처리)
- 새 유틸리티 함수: src/utils/svgParser.ts

### 2단계: 데이터 구조 설계 및 State 관리
**목표**: path별 편집 정보를 관리할 데이터 구조 구축
- [ ] PathConfig 인터페이스 정의 (id, originalPath, fill, stroke, strokeWidth, 등)
- [ ] 전체 SVG 설정과 개별 path 설정을 분리한 Config 구조 재설계
- [ ] Context API 또는 상태 관리 방식 결정
- [ ] path별 설정 초기값 및 기본값 처리

**구현 위치**:
- src/types/svgTypes.ts (새 타입 정의)
- src/app/page.tsx (상태 관리 수정)

### 3단계: ControlPanel 개별 편집 UI 구현
**목표**: 각 path를 선택하고 개별 편집할 수 있는 UI 구성
- [ ] Path 목록 표시 (미리보기 포함)
- [ ] 개별 path 선택 기능
- [ ] 선택된 path의 색상, 선두께 편집 컨트롤
- [ ] 전체 적용 vs 개별 적용 모드 토글
- [ ] path별 show/hide 기능

**구현 위치**:
- src/components/ControlPanel.tsx (UI 확장)
- 새 컴포넌트: src/components/PathEditor.tsx

### 4단계: PreviewPanel 실시간 반영
**목표**: 개별 path 편집 사항을 실시간으로 미리보기에 반영
- [ ] 선택된 path 하이라이트 표시
- [ ] 개별 path 설정을 반영한 SVG 렌더링
- [ ] path 클릭으로 선택할 수 있는 인터랙션
- [ ] 수정사항 실시간 업데이트

**구현 위치**:
- src/components/PreviewPanel.tsx (렌더링 로직 수정)

### 5단계: CodeModal 코드 생성 로직 수정
**목표**: 개별 path 설정을 반영한 React 컴포넌트 코드 생성
- [ ] path별 개별 스타일을 적용한 SVG 코드 생성
- [ ] CSS-in-JS 스타일 객체 생성 (path별 분리)
- [ ] TypeScript 인터페이스 포함한 컴포넌트 코드
- [ ] hover/animation은 기존 방식 유지하되 path별 적용 가능하도록

**구현 위치**:
- src/components/CodeModal.tsx (generateInlineSVG 함수 수정)

### 6단계: 고급 기능 추가
**목표**: 사용성을 높이는 추가 기능들
- [ ] path 그룹핑 기능 (관련 path들을 묶어서 편집)
- [ ] path별 레이어 순서 변경
- [ ] 전체 초기화 / 개별 초기화 기능
- [ ] path별 애니메이션 설정
- [ ] Undo/Redo 기능

### 7단계: 최적화 및 테스트
**목표**: 성능 최적화 및 안정성 확보
- [ ] 복잡한 SVG 파일 처리 성능 최적화
- [ ] 메모리 사용량 최적화
- [ ] Edge case 처리 (잘못된 SVG, 복잡한 path 등)
- [ ] 브라우저 호환성 테스트

## 기술적 고려사항

### SVG Path 파싱 전략
```typescript
interface PathElement {
  id: string;
  originalPath: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'square' | 'butt';
  strokeLinejoin?: 'round' | 'bevel' | 'miter';
  opacity?: number;
  transform?: string;
}

interface SVGConfig {
  globalSettings: {
    size: number;
    animation: string;
    hover: boolean;
  };
  paths: PathElement[];
}
```

### 파싱 함수 예시
```typescript
export function parseSVGPaths(svgContent: string): PathElement[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  const paths = doc.querySelectorAll('path');
  
  return Array.from(paths).map((path, index) => ({
    id: `path-${index}`,
    originalPath: path.getAttribute('d') || '',
    fill: path.getAttribute('fill') || '#000000',
    stroke: path.getAttribute('stroke') || 'none',
    strokeWidth: parseFloat(path.getAttribute('stroke-width') || '1'),
    // ... 기타 속성들
  }));
}
```

## 예상 작업 시간
- 1단계: 2-3시간 (SVG 파싱 및 기본 구조)
- 2단계: 1-2시간 (데이터 구조 설계)
- 3단계: 3-4시간 (UI 구현)
- 4단계: 2-3시간 (미리보기 연동)
- 5단계: 2-3시간 (코드 생성 로직)
- 6-7단계: 3-5시간 (고급 기능 및 최적화)

**총 예상 시간: 13-20시간**

## 첫 번째 작업 완료
**1단계: SVG 파싱 및 Path 분석** 완료됨.

다음 작업은 2단계 또는 3단계 중 선택 가능.