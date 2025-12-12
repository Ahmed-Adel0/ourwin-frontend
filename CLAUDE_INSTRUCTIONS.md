
```
You are Claude, a Senior Technical Lead for Outwin Digital Solutions. 
Here is your project brief:

[لصق محتوى PROJECT_BRIEF.md هنا]

Always respond with:
1. Code snippets that match the brand identity (#45B7BA accent, ClashDisplay font)
2. Priority-aware suggestions (P0 > P1 > P2)
3. Trade-offs for each decision
4. References to the project structure and constraints
```

---

## 🎯 **الخطوة 2: أمثلة الأسئلة**

### **مثال 1: مراجعة صفحة**

```
Claude, based on the Project Brief, review @app/page.jsx and:
1. Check if it follows P0 requirements
2. Identify any accessibility issues
3. Suggest improvements matching brand identity
```

### **مثال 2: إضافة ميزة جديدة**

```
Claude, I want to add a "Testimonials" section to the home page.
Based on the Project Brief:
1. Use brand colors (#45B7BA for accents)
2. Follow the component structure (Server Component if possible)
3. Match the design system (dark theme, ClashDisplay font)
4. Ensure accessibility (aria-labels, keyboard nav)
```

### **مثال 3: إصلاح ثغرة**

```
Claude, fix the Hero image performance issue mentioned in P0.
The image at @app/components/Hero/Hero.jsx needs:
1. Priority prop for LCP
2. Proper alt text
3. Size optimization
```

### **مثال 4: إضافة صفحة جديدة**

```
Claude, create a new /pricing page following the Project Brief:
1. Use existing component structure
2. Match brand identity (dark theme, teal accents)
3. Follow Next.js App Router patterns
4. Include proper meta tags for SEO
```

### **مثال 5: تحسين الأداء**

```
Claude, optimize @app/components/Projects/ProjectsShowcase.jsx for performance:
1. Check image optimization
2. Review bundle size
3. Suggest lazy loading if needed
4. Ensure it meets P1 performance requirements
```

---

## 🔄 **الخطوة 3: تحديث Project Brief**

عند إجراء تغييرات كبيرة، أخبر Claude بتحديث الـ Brief:

```
Claude, remember this change: "We switched from inline colors to Tailwind config classes in ContactForm. Update the Project Brief to reflect this."
```

أو:

```
Claude, we added Google Analytics. Update the Project Brief under "Important Gaps (P1)" - remove "Missing Analytics" and add it to "Completed Features".
```

---

## 📝 **الخطوة 4: Checklist للمراجعة**

قبل إرسال الكود للمراجعة، استخدم هذا الـ Checklist:

```
Claude, review this code against the Project Brief checklist:
- [ ] Uses brand colors (#45B7BA, dark teal variants)
- [ ] Follows component structure (Server/Client separation)
- [ ] Has proper error handling (logger.error)
- [ ] Images use next/image with optimization
- [ ] Accessibility attributes present (aria-label, role)
- [ ] Matches design system (ClashDisplay font, spacing)
- [ ] No inline colors (uses Tailwind config)
- [ ] Proper TypeScript types (if applicable)
```

---

## 🎨 **الخطوة 5: أمثلة على الأسئلة المتخصصة**

### **Design System Questions**

```
Claude, what's the correct Tailwind class for the primary accent color?
Answer: bg-accent (which maps to #45B7BA in tailwind.config.js)
```

### **Component Architecture**

```
Claude, should this component be a Server Component or Client Component?
[Paste component code]
Answer based on: Does it need interactivity? Does it use hooks? Does it need SEO?
```

### **Performance Optimization**

```
Claude, how can I improve the LCP for the Hero section?
Answer: Add priority prop, optimize image size, use next/image
```

### **Accessibility**

```
Claude, what accessibility improvements does this button need?
[Paste button code]
Answer: Add aria-label, ensure keyboard navigation, check color contrast
```

---

## 🚨 **الخطوة 6: معالجة الأخطاء**

### **عند حدوث خطأ:**

```
Claude, I'm getting this error: [error message]
Based on the Project Brief, what's the likely cause and how to fix it?
```

### **عند عدم تطابق Brand:**

```
Claude, this component doesn't match the brand identity. 
Review @app/components/[Component].jsx and suggest fixes to match:
- Color: #45B7BA for accents
- Font: ClashDisplay for headings
- Theme: Dark with teal highlights
```

---

## 📊 **الخطوة 7: تقارير المراجعة**

اطلب تقرير مراجعة شامل:

```
Claude, perform a full code review of @app/components based on the Project Brief:
1. Check P0 issues (critical)
2. Identify P1 improvements (important)
3. Suggest P2 enhancements (nice-to-have)
4. Verify brand identity compliance
5. Check accessibility
6. Review performance
```

---

## 🎯 **الخطوة 8: أمثلة على الإجابات المتوقعة**

### **إجابة جيدة من Claude:**

```
Based on the Project Brief, I recommend:

1. **Priority (P0)**: Add `priority` prop to Hero image for LCP improvement
2. **Brand Identity**: Use `bg-accent` instead of `bg-[#45B7BA]` to match Tailwind config
3. **Accessibility**: Add `aria-label="Navigate to services"` to the CTA button
4. **Performance**: Consider lazy loading the Projects section below the fold

Code snippet:
```jsx
<Image
  src="/hero-bg.jpg"
  alt="Digital Solutions Background"
  fill
  priority  // P0 fix
  className="absolute inset-0 opacity-30"
/>
```
```

### **إجابة غير جيدة (يجب تجنبها):**

```
Just use any color and font. It doesn't matter.
```

---

## 💡 **نصائح للاستخدام الأمثل**

1. **كن محدداً**: اذكر الملف أو المكون الذي تريد مراجعته
2. **استخدم References**: استخدم `@filename` للإشارة إلى ملفات محددة
3. **اذكر الأولوية**: "This is P0" أو "This is P2 enhancement"
4. **اطلب التفسير**: "Why did you choose Server Component here?"
5. **اطلب البدائل**: "What are the trade-offs of this approach?"

---

## 🔄 **تحديثات دورية**

قم بتحديث `PROJECT_BRIEF.md` عند:
- إضافة صفحات جديدة
- تغيير Tech Stack
- إصلاح ثغرات P0
- تغيير Brand Identity
- إضافة ميزات جديدة

---

## 📞 **دعم إضافي**

إذا واجهت مشاكل:
1. راجع `PROJECT_BRIEF.md` للتأكد من المعلومات
2. استخدم `CODE_REVIEW_REPORT.md` للتفاصيل التقنية
3. راجع `FIXES_SUMMARY.md` للإصلاحات المكتملة

---

**آخر تحديث**: ${new Date().toISOString().split('T')[0]}

