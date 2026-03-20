---
title: "Hello, World: Why I rebuilt my portfolio again"
date: "2026-03-18"
excerpt: "Because Notion just looks too good to not steal their aesthetic."
---

When building a developer portfolio, we often get caught up in the flashy animations and 3D scenes. But at the end of the day, people are here to read about who you are and what you've done. 

That's why I decided to pivot. I wanted something that felt like a living document—just like how we draft our ideas in Notion or Obsidian.

## The Markdown Approach

Writing blogs should be simple. By integrating `react-markdown` and `gray-matter`, I can now write pure `.md` files right inside my repository and push to deploy.

```javascript
console.log("No more database necessary for simple blogs!");
```

### Key Features of this redesign
1. **Performance**: Static generation means the site is incredibly fast.
2. **Typography**: Minimal, beautifully spaced typography using Tailwind's Typography plugin.
3. **Animations**: Subtle `framer-motion` staggers make it feel alive without being overwhelming.
