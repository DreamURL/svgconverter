# SVG 자동 라벨링 전략

## 🎯 핵심 아이디어: SVG 구조 분석을 통한 자동 라벨링

### 1. SVG 파일명 기반 라벨링
```python
# 기존 아이콘 라이브러리의 파일명 활용
filename_patterns = {
    'home.svg': ['home', 'house', 'building'],
    'user-circle.svg': ['user', 'profile', 'person', 'account'],
    'shopping-cart.svg': ['cart', 'shop', 'buy', 'purchase'],
    'heart-filled.svg': ['heart', 'love', 'like', 'favorite'],
    'arrow-up.svg': ['arrow', 'up', 'direction', 'navigation']
}
```

### 2. SVG 구조 분석 기반 라벨링
```python
def analyze_svg_structure(svg_content):
    labels = []
    
    # 기본 도형 분석
    if '<circle' in svg_content:
        labels.extend(['circle', 'round', 'dot'])
    
    if '<rect' in svg_content:
        labels.extend(['rectangle', 'square', 'box'])
    
    if '<path' in svg_content:
        # path 복잡도 분석
        complexity = analyze_path_complexity(svg_content)
        if complexity > 0.8:
            labels.append('complex')
        else:
            labels.append('simple')
    
    # 색상 분석
    colors = extract_colors(svg_content)
    if len(colors) == 1:
        labels.append('monochrome')
    else:
        labels.append('multicolor')
    
    return labels

def analyze_path_complexity(svg_content):
    # 곡선 명령어 개수로 복잡도 측정
    curve_commands = ['C', 'Q', 'S', 'T', 'A']
    total_commands = sum(svg_content.count(cmd) for cmd in curve_commands)
    return min(total_commands / 10, 1.0)
```

### 3. 시각적 패턴 매칭
```python
# 공통 패턴 데이터베이스
visual_patterns = {
    'arrow': {
        'description': 'Contains triangular or pointed shape',
        'path_pattern': r'M.*L.*L.*Z',  # 삼각형 패턴
        'keywords': ['arrow', 'direction', 'navigation', 'pointer']
    },
    'circle_with_content': {
        'description': 'Circle containing other elements',
        'pattern': r'<circle.*>.*<.*>.*</circle>',
        'keywords': ['button', 'badge', 'notification', 'status']
    },
    'house_shape': {
        'description': 'House-like triangular roof + rectangular base',
        'geometric_pattern': 'triangle_above_rectangle',
        'keywords': ['home', 'house', 'building', 'residence']
    }
}
```

### 4. 의미론적 그룹핑
```python
semantic_groups = {
    'navigation': ['arrow', 'chevron', 'menu', 'back', 'forward'],
    'social': ['heart', 'share', 'comment', 'like', 'follow'],
    'communication': ['mail', 'message', 'phone', 'chat', 'notification'],
    'media': ['play', 'pause', 'stop', 'volume', 'camera'],
    'file': ['folder', 'document', 'download', 'upload', 'save'],
    'user': ['profile', 'account', 'login', 'logout', 'settings']
}

def expand_labels(base_labels):
    expanded = base_labels.copy()
    
    for group, keywords in semantic_groups.items():
        if any(keyword in base_labels for keyword in keywords):
            expanded.append(group)
    
    return expanded
```

### 5. 자동 라벨링 파이프라인
```python
class SVGAutoLabeler:
    def __init__(self):
        self.load_pattern_database()
        self.load_semantic_groups()
    
    def generate_labels(self, svg_path):
        svg_content = self.load_svg(svg_path)
        filename = os.path.basename(svg_path)
        
        labels = []
        
        # 1. 파일명 기반 라벨링
        labels.extend(self.extract_from_filename(filename))
        
        # 2. 구조 분석
        labels.extend(self.analyze_structure(svg_content))
        
        # 3. 패턴 매칭
        labels.extend(self.match_patterns(svg_content))
        
        # 4. 의미론적 확장
        labels = self.expand_semantic_labels(labels)
        
        # 5. 중복 제거 및 정규화
        return self.normalize_labels(labels)
    
    def extract_from_filename(self, filename):
        # 파일명에서 키워드 추출
        base_name = filename.replace('.svg', '')
        keywords = re.split(r'[-_\s]+', base_name)
        return [kw.lower() for kw in keywords if len(kw) > 1]
    
    def analyze_structure(self, svg_content):
        # SVG 구조 분석 로직
        pass
    
    def match_patterns(self, svg_content):
        # 패턴 매칭 로직
        pass
```

### 6. 품질 검증 시스템
```python
def validate_labels(svg_path, generated_labels):
    # 시각적 검증
    visual_score = calculate_visual_similarity(svg_path, generated_labels)
    
    # 의미론적 검증
    semantic_score = check_semantic_coherence(generated_labels)
    
    # 일관성 검증
    consistency_score = check_label_consistency(generated_labels)
    
    overall_score = (visual_score + semantic_score + consistency_score) / 3
    
    return overall_score > 0.7  # 임계값 이상만 사용
```

### 7. 크라우드소싱 보완
```python
# 불확실한 케이스에 대한 크라우드소싱
class CrowdsourcingHelper:
    def __init__(self):
        self.uncertain_cases = []
    
    def add_uncertain_case(self, svg_path, confidence_score):
        if confidence_score < 0.5:
            self.uncertain_cases.append({
                'svg': svg_path,
                'confidence': confidence_score,
                'status': 'pending'
            })
    
    def generate_labeling_task(self, svg_path):
        return {
            'svg_preview': self.generate_preview(svg_path),
            'suggested_labels': self.get_suggested_labels(svg_path),
            'question': 'What does this icon represent?',
            'options': self.generate_options(svg_path)
        }
```

### 8. 실제 데이터 파이프라인
```python
# 전체 프로세스 통합
def process_svg_dataset(dataset_path):
    labeler = SVGAutoLabeler()
    results = []
    
    for svg_file in glob.glob(f"{dataset_path}/*.svg"):
        try:
            # 자동 라벨링
            labels = labeler.generate_labels(svg_file)
            
            # 품질 검증
            if validate_labels(svg_file, labels):
                results.append({
                    'svg_path': svg_file,
                    'labels': labels,
                    'prompt': generate_prompt(labels),
                    'confidence': calculate_confidence(labels)
                })
            else:
                # 수동 검토 대상
                add_to_manual_review(svg_file, labels)
                
        except Exception as e:
            print(f"Error processing {svg_file}: {e}")
    
    return results

def generate_prompt(labels):
    # 라벨을 자연어 프롬프트로 변환
    primary_label = labels[0]
    style_labels = [l for l in labels if l in ['minimal', 'outline', 'filled']]
    category_labels = [l for l in labels if l in semantic_groups.keys()]
    
    prompt = f"{primary_label} icon"
    
    if style_labels:
        prompt += f", {style_labels[0]} style"
    
    if category_labels:
        prompt += f", {category_labels[0]} category"
    
    return prompt
```

### 9. 데이터 품질 향상 전략
```python
# 반복적 개선 프로세스
def improve_labeling_quality():
    # 1. 초기 자동 라벨링
    initial_labels = auto_label_dataset()
    
    # 2. 샘플링 및 수동 검토
    sample_cases = random.sample(initial_labels, 1000)
    manual_corrections = manual_review(sample_cases)
    
    # 3. 패턴 학습 및 모델 업데이트
    update_labeling_patterns(manual_corrections)
    
    # 4. 재라벨링
    improved_labels = auto_label_dataset()
    
    return improved_labels
```

### 10. 예상 성능
```
데이터셋 크기: 10,000개 SVG 파일
자동 라벨링 정확도: 85%
수동 검토 필요: 15% (1,500개)
전체 처리 시간: 2-3일
최종 데이터셋 품질: 95%+
```

## 💡 핵심 장점

1. **확장성**: 새로운 아이콘 라이브러리 추가시 자동 처리
2. **일관성**: 규칙 기반이므로 일관된 라벨링
3. **비용 효율**: 대부분 자동화로 비용 절감
4. **품질 보장**: 검증 시스템으로 품질 관리

## 🚀 구현 우선순위

1. **Week 1**: 파일명 기반 라벨링 구현
2. **Week 2**: SVG 구조 분석 시스템 개발
3. **Week 3**: 패턴 매칭 및 의미론적 확장
4. **Week 4**: 품질 검증 및 파이프라인 통합

이 방식으로 하면 대부분의 라벨링을 자동화할 수 있고, 불확실한 케이스만 수동으로 처리하면 됩니다!