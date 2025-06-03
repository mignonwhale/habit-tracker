# React + TypeScript + Vite

## 프로젝트 초기 설정

### 1. 프로젝트 생성

```bash
# Vite + React + TypeScript 템플릿으로 생성
npm create vite@latest habit-tracker -- --template react-ts
cd habit-tracker
npm install
```

### 2. 주요 라이브러리 설치

- Core Dependencies (최신 버전)

```bash
# 상태관리 & 데이터 페칭
npm install zustand@^5.0.1 @tanstack/react-query@^5.56.2

# UI & 스타일링  
npm install tailwindcss@^4.0.0 @tailwindcss/forms@^0.5.9
npm install clsx@^2.1.1 class-variance-authority@^0.7.1

# 차트 & 캘린더
npm install recharts@^2.13.3 react-calendar@^5.1.0

# 애니메이션 & 알림
npm install framer-motion@^11.15.0 react-hot-toast@^2.4.1

# 아이콘
npm install lucide-react@^0.456.0

# 날짜 처리
npm install date-fns@^4.1.0
```

- Dev Dependencies

```bash

# npm install -D @types/node@^22.9.3 autoprefixer@^10.4.20 postcss@^8.5.3
# 위 라이브러리는 오류 발생, 안정적인 v3 버전 설치
npm uninstall tailwindcss
npm install -D tailwindcss@^3.4.0

# 설치 버전 확인
# npm list tailwindcss

npm install -D eslint@^9.15.0 @typescript-eslint/eslint-plugin@^8.15.0

# npm install -D prettier@^3.3.3 eslint-plugin-prettier@^5.2.1
```

### 3. Tailwind CSS 설정

```bash
# Tailwind 초기화
npx tailwindcss init -p
```

- 초기화가 잘 안되서(npm error could not determine executable to run) 수동으로 아래 파일 생성

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### src/index.css

```css
// 추가
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/main.tsx

```ts
import './index.css'  // 추가
```

