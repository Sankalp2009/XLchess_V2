# XLChess Hero Section

## Project Overview   

This project was created as part of the XLChess Stage 2 Full-Stack Developer technical assessment.

I selected **Option 2 – Improve**, modernizing the existing homepage hero section while preserving the XLChess brand identity. The implementation focuses on responsive design, accessibility, reusable React components, performance, and polished user interactions.

## 🎯 Features

- Modernized hero section based on the existing XLChess homepage
- Responsive layout for desktop, tablet, and mobile
- AI-powered branding badge
- Interactive chessboard-inspired hero visual
- Floating information cards with subtle animations
- Primary and secondary call-to-action buttons
- Reusable React component architecture
- Accessible UI built with Chakra UI

## 🎨 Design Decisions

For this assessment, I chose **Option 2 – Improve**.

Instead of recreating the existing XLChess hero section exactly, I retained the overall branding and visual identity while modernizing the user experience.

Key improvements include:

- Improved typography and spacing
- Stronger call-to-action hierarchy
- AI-powered feature badge
- Interactive chessboard mockup
- Floating status cards for visual depth
- Modern glassmorphism styling
- Responsive layout optimized for desktop, tablet, and mobile

## 💡 Engineering Decisions

The implementation focuses on producing a maintainable and production-ready React application.

- Components were separated by responsibility to improve maintainability.
- Chakra UI was chosen to accelerate development while preserving accessibility.
- The visual design intentionally stays close to the existing XLChess branding while modernizing the overall experience.
- Animations were intentionally kept subtle to improve perceived quality while maintaining smooth performance across devices.

## 📌 Assumptions

- The assessment only required recreating the homepage hero section.
- Existing XLChess branding should remain recognizable.
- The chessboard shown in the hero is a visual representation rather than a fully playable board.
- A lightweight navigation was included because it is visually integrated with the existing homepage hero.

## ⚖ Trade-offs

- Chakra UI was selected to accelerate development while maintaining accessibility and consistency.
- CSS animations were preferred over heavier animation libraries to reduce bundle size.
- The chessboard is a lightweight visual component instead of integrating a complete chess engine.

## 🚀 Future Improvements

 I would implement:

- Real chess engine integration
- Animated move playback
- AI move suggestions
- Dark/light theme support
- Internationalization (i18n)
- Unit and integration tests
- Analytics and user tracking

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/xlchess.git
   cd xlchess
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx              # Main hero section
│   │   ├── HeroContent.jsx       # Hero text content
│   │   ├── HeroImage.jsx         # Hero visual section with chess board
│   │   ├── ChessBoard.jsx        # Interactive chess board component
│   │   ├── CTAButton.jsx         # Call-to-action buttons
│   │   ├── TrustBadges.jsx       # Trust/social proof badges
│   │   ├── FloatingCard.jsx      # Floating stat cards
│   └── Navbar/
│       └── Navbar.jsx            # Navigation header
│   └── ui/
│       ├── provider.jsx          # Chakra UI provider
│       └── color-mode.jsx        # Color mode theme provider
├── App.jsx                       # Main app component
├── App.css                       # Global styles
├── main.jsx                      # Entry point
├── theme.js                      # Chakra UI theme configuration
└── index.css                     # Global performance optimizations
public/
├── favicon.svg                   # Favicon
index.html                        # HTML entry point with SEO meta tags
vite.config.js                    # Vite build configuration
package.json                      # Project dependencies
```

## 🎨 Technology Stack

### Frontend Framework
- **React 19.2** - UI library with latest hooks and features
- **Chakra UI 3.36** - Component library with accessibility built-in
- **Emotion** - CSS-in-JS styling solution

### Build Tools
- **Vite 8.1** - Next-generation build tool
- **Terser** - JavaScript minification with optimization
- **esbuild** - CSS minification

### Icons & Utilities
- **react-icons** - Icon library (Lucide icons)
- **ESLint** - Code quality and linting

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager

## 🎮 Component Details

### Hero Section
The main landing page section featuring:
- Animated heading with gradient text
- AI-Powered Chess Training badge
- Call-to-action buttons
- Trust badges with social proof
- Chessboard-inspired hero visualization
- Floating stat cards

### Chess Board
Interactive chess board component with:
- 8x8 grid layout
- Piece visualization with Unicode chess symbols
- Move highlighting system
- Last move tracking
- Hover effects and animations
- Responsive sizing

### Navbar
Minimal navigation integrated into the hero section:
- Logo with branding
- Navigation links (Play, Learn, Puzzles, Watch)
- Sign In / Get Started buttons
- Mobile-responsive hamburger menu
- Scroll-triggered backdrop blur effect

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px (base)
- **Tablet**: 640px - 1024px (sm, md, lg)
- **Desktop**: > 1024px (lg, xl)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
### Deploy to Popular Platforms

**Vercel**
```bash
npm i -g vercel
vercel
```