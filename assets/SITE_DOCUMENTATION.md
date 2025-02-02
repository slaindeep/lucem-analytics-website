# Lucem Analytics Website Documentation

## Project Structure
```
lucem-react/
├── src/
│   ├── pages/
│   │   └── DataAnalytics.tsx    # Main landing page
│   ├── components/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   └── BentoBox.tsx        # Reusable card component
│   └── assets/
│       └── video/
│           └── analytics.mp4    # Video asset
```

## Key Components

### BentoBox Component
The BentoBox component is a reusable card component that provides consistent styling and animations across the site. It's implemented as a component within DataAnalytics.tsx:

```tsx
const BentoBox = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`rounded-3xl p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);
```

### Styling Framework
- **Tailwind CSS**: Used for utility-first styling
- **Primary Colors**: 
  - Blue: #3B82F6
  - Green: #10B981
- **Background**: Gradient from black via #0f172a to black

### Bento Grid Layout
The bento grid layout is managed in DataAnalytics.tsx using CSS Grid. The main grid container uses:
```css
grid-cols-1 md:grid-cols-3 gap-4
```

Key layout features:
- Video section: `md:col-span-2 md:row-span-2`
- Regular cards: Single column/row
- Full-width sections: `md:col-span-3`

### Animations
- Uses Framer Motion for animations
- Each BentoBox has fade-in and slide-up animations
- Hover effects on cards using Tailwind transitions

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Default: Single column
  - md (768px+): Three-column grid
- Flexible card heights using auto-rows
- Responsive typography and spacing

## Updating the Site

### Adding New Cards
To add a new card section:
```tsx
<BentoBox className="flex flex-col justify-between h-[250px]">
  <h3 className="text-2xl font-bold text-[#3B82F6]">Title</h3>
  <p className="text-gray-300">Description</p>
  <div className="flex flex-wrap gap-2 mt-4">
    <span className="px-3 py-1 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-sm">
      Feature
    </span>
  </div>
</BentoBox>
```

### Modifying Grid Layout
- For full-width sections: Add `md:col-span-3`
- For double-width sections: Add `md:col-span-2`
- For double-height sections: Add `md:row-span-2`

### Styling Guidelines
1. Use Tailwind utility classes for consistency
2. Follow the color scheme:
   - Primary blue (#3B82F6) for main actions
   - Primary green (#10B981) for secondary elements
   - White with opacity for cards (bg-white/5)
   - Text colors: white for headers, gray-300 for body text

### Navigation
Currently using React Router Dom for navigation. Routes are defined in App.tsx.

## Dependencies
- React 18.2.0
- React Router Dom 7.1.1
- Framer Motion 11.15.0
- Tailwind CSS 3.4.17
- Lucide React 0.469.0 (for icons)

## Performance Considerations
- Video is set to autoPlay, loop, muted, and playsInline
- Images should be optimized before adding
- Lazy loading is implemented for better performance
- Animations are set to run once using viewport={{ once: true }}

## Future Improvements
- Add error boundaries
- Implement SEO optimization
- Add loading states
- Implement contact form functionality
- Add analytics tracking
