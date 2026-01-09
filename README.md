# Taro H Blog 🇯🇵

A personal blog dedicated to my Japanese learning journey (`Taro's Journey`), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🌟 Features

### 🎨 Custom "App-Like" Layout
- **Fixed Header & Footer**: Navigation and footer stay fixed to the viewport edges, similar to a native mobile app.
- **Scrollable Content Area**: The main content scrolls independently within the fixed frame.
- **Sticky Footer**: Ensures the footer is always at the bottom, even on pages with little content.

### 🔍 Advanced Search & Filtering
- **Client-Side Search**: Instant text search across all blog posts.
- **Smart Tag Filtering**:
  - Filter by multiple tags using "AND" logic (shows posts containing *all* selected tags).
  - Selected tags appear as dismissible filter chips in the search bar.
  - Interactive tag cloud with post counts.
- **Sticky Search Bar**: The search interface remains visible at the top of the list while scrolling through results.
- **Full-Height Scrollable List**: Search results fill the remaining screen height for an immersive browsing experience.

### 📱 Core Essentials
- **Tailwind CSS**: Utility-first styling for rapid development.
- **Responsive Design**: Mobile-first layout that adapts gracefully to all screen sizes.
- **Dark/Light Mode**: Automatic theme switching based on system preference (or manual toggle).
- **Consolidated About/Contact**: Simplified page structure with contact information integrated into the About page.
- **View Transitions**: Smoother navigation experience powered by swup.js.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
2.  **Start Dev Server**:
    ```bash
    pnpm dev
    ```
3.  **Build for Production**:
    ```bash
    pnpm build
    ```

## 📂 Project Structure

```text
├── src/
│   ├── components/  # Astro & Preact components (Search, Nav, Footer, etc.)
│   ├── content/     # Blog posts (Markdown)
│   ├── layouts/     # Main site layout (Scroll management logic)
│   ├── pages/       # Route definitions (Home, Blog, About)
│   └── styles/      # Global CSS & Tailwind directives
├── public/          # Static assets (images, fonts)
└── astro.config.mjs # Configuration
```

##  CREDITS

Based on the [Space Ahead](https://github.com/djsiddz/space-ahead) template by Siddhesh Thadeshwar.
