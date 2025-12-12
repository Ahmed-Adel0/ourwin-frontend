# 🔧 دليل إصلاح الثغرات - Outwin Frontend

هذا الدليل يوضح كيفية إصلاح الثغرات المكتشفة في مراجعة الكود.

---

## 🔴 **1. إصلاحات حرجة (Critical Fixes)**

### **1.1 استبدال console.log بـ Logger Utility**

#### **الخطوات:**

1. استيراد Logger في الملفات المتأثرة:

```javascript
import logger from "@/lib/logger";
```

2. استبدال `console.log`:

```javascript
// قبل
console.log("Contact form submission:", { name, email, message });

// بعد
logger.log("Contact form submission:", { name, email, message });
```

3. استبدال `console.error`:

```javascript
// قبل
console.error("Contact form error:", error);

// بعد
logger.error("Contact form error:", error);
```

#### **الملفات التي تحتاج تعديل:**

- ✅ `app/api/contact/route.js`
- ✅ `app/api/newsletter/route.js`
- ✅ `app/actions/contactAction.js`
- ✅ `app/actions/newsletterAction.js`
- ✅ `app/components/Contact/ContactForm.jsx`

---

### **1.2 إصلاح Hardcoded API URLs**

#### **الخطوات:**

1. إضافة Environment Variables إلى `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

2. تحديث `app/actions/contactAction.js`:

```javascript
// قبل
const response = await fetch('https://your-api.com/api/v1/contact', {

// بعد
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
```

3. تحديث `app/actions/newsletterAction.js` بنفس الطريقة.

---

### **1.3 تفعيل TypeScript Strict Mode**

#### **الخطوات:**

1. تحديث `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

2. إصلاح الأخطاء الناتجة تدريجياً.

---

### **1.4 إضافة Error Boundaries**

#### **الخطوات:**

1. ✅ تم إنشاء `app/error.tsx` (جاهز للاستخدام)

2. إضافة Error Boundaries مخصصة للمكونات الحساسة:

```tsx
// app/components/ErrorBoundary.tsx
"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
```

---

## 🟡 **2. إصلاحات عالية الأولوية (High Priority)**

### **2.1 إضافة Loading States**

#### **الخطوات:**

1. ✅ تم إنشاء `app/loading.tsx` (جاهز للاستخدام)

2. ✅ تم إنشاء `app/components/ui/Skeleton.jsx` (جاهز للاستخدام)

3. استخدام Skeleton في المكونات:

```jsx
import { SkeletonCard, SkeletonList } from "@/app/components/ui/Skeleton";

export default function Projects() {
  const { data, isLoading } = useProjects();

  if (isLoading) {
    return <SkeletonList count={6} />;
  }

  return <div>{/* Projects */}</div>;
}
```

---

### **2.2 تحسين Tailwind Config**

#### **الخطوات:**

1. ✅ تم إنشاء `tailwind.config.js` محسّن

2. استبدال الألوان المباشرة في الكود:

```jsx
// قبل
className = "bg-[#0b253b]";

// بعد
className = "bg-dark-teal";
```

3. استخدام الألوان الجديدة:

```jsx
// بدلاً من
className = "bg-[#45B7BA]";

// استخدم
className = "bg-accent";
```

#### **قائمة الاستبدالات:**

- `bg-[#0b253b]` → `bg-dark-teal`
- `bg-[#45B7BA]` → `bg-accent`
- `bg-[#032131]` → `bg-page-bg`
- `bg-[#03141f]` → `bg-card-bg`
- `border-[#45B7BA]` → `border-accent`

---

### **2.3 تحسين Empty States**

#### **الخطوات:**

1. إنشاء مكون EmptyState قابل لإعادة الاستخدام:

```jsx
// app/components/ui/EmptyState.jsx
export default function EmptyState({
  title = "No items found",
  description = "Check back later",
  icon,
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {action && action}
    </div>
  );
}
```

2. استخدامه في المكونات:

```jsx
if (!projects || projects.length === 0) {
  return <EmptyState title="No projects available" />;
}
```

---

### **2.4 إضافة Environment Variables Validation**

#### **الخطوات:**

1. ✅ تم تحديث `lib/sanityClient.js` (validation موجود)

2. إنشاء ملف validation مركزي:

```javascript
// lib/env.js
export function validateEnv() {
  const required = [
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
    "NEXT_PUBLIC_SANITY_DATASET",
    "NEXT_PUBLIC_SANITY_API_VERSION",
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

// استدعاء في app/layout.jsx
validateEnv();
```

---

## 🟢 **3. إصلاحات متوسطة الأولوية (Medium Priority)**

### **3.1 إضافة Custom Hooks**

#### **مثال: useIntersectionObserver**

```javascript
// hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.5, ...options }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options]);

  return [ref, isIntersecting];
}
```

#### **مثال: useScrollPosition**

```javascript
// hooks/useScrollPosition.js
import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
```

---

### **3.2 تحسين Keyboard Navigation**

#### **الخطوات:**

1. إضافة `aria-label` لجميع الأزرار:

```jsx
<button aria-label="Close menu">×</button>
```

2. إضافة `role` attributes:

```jsx
<div role="button" tabIndex={0} aria-label="Click to expand">
```

3. إضافة Keyboard event handlers:

```jsx
const handleKeyDown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    handleClick();
  }
};
```

---

### **3.3 إضافة TypeScript Types**

#### **الخطوات:**

1. إنشاء ملف types:

```typescript
// types/index.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  team: number;
  detailsLink: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  projects: Project[];
}
```

2. استخدام Types في المكونات:

```tsx
// app/components/Projects/Projects.tsx
import { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  // ...
}
```

---

## 📋 **4. قائمة التحقق (Checklist)**

### **Critical Fixes:**

- [ ] استبدال جميع `console.log` بـ logger
- [ ] إصلاح Hardcoded API URLs
- [ ] تفعيل TypeScript strict mode
- [ ] اختبار Error Boundaries

### **High Priority:**

- [ ] إضافة Loading States في جميع الصفحات
- [ ] استبدال Tailwind inline colors
- [ ] تحسين Empty States
- [ ] إضافة Environment Variables validation

### **Medium Priority:**

- [ ] إنشاء Custom Hooks
- [ ] تحسين Keyboard Navigation
- [ ] إضافة TypeScript Types
- [ ] إضافة Storybook

---

## 🚀 **5. خطوات التنفيذ**

1. **الأسبوع الأول:**

   - إصلاح Critical Issues
   - إضافة Logger Utility
   - إصلاح API URLs

2. **الأسبوع الثاني:**

   - إضافة Loading States
   - تحسين Tailwind Config
   - تحسين Empty States

3. **الأسبوع الثالث:**
   - إضافة Custom Hooks
   - تحسين Keyboard Navigation
   - إضافة TypeScript Types

---

**ملاحظة:** ابدأ بالثغرات الحرجة أولاً، ثم انتقل إلى التحسينات الأخرى تدريجياً.
