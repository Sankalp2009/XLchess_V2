import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: {
          50: { value: '#e8eaf6' },
          100: { value: '#c5caec' },
          200: { value: '#9fa8de' },
          300: { value: '#7886d0' },
          400: { value: '#5b6cc5' },
          500: { value: '#3d52b9' },
          600: { value: '#2d3e9a' },
          700: { value: '#1e2c7a' },
          800: { value: '#111b57' },
          900: { value: '#0d1540' },
          950: { value: '#0B1023' },
        },
        violet: {
          50: { value: '#f0eeff' },
          100: { value: '#ddd9ff' },
          200: { value: '#c2baff' },
          300: { value: '#a29bff' },
          400: { value: '#8a81ff' },
          500: { value: '#6C63FF' },
          600: { value: '#5a52e8' },
          700: { value: '#4840c0' },
          800: { value: '#372f98' },
          900: { value: '#271f70' },
          950: { value: '#160f48' },
        },
      },
      fonts: {
        heading: { value: "'Inter', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.violet.500}' },
          contrast: { value: '{colors.violet.200}' },
          fg: { value: '{colors.violet.400}' },
          muted: { value: '{colors.violet.900}' },
          subtle: { value: '{colors.violet.800}' },
          emphasized: { value: '{colors.violet.600}' },
          focusRing: { value: '{colors.violet.400}' },
        },
      },
    },
    keyframes: {
      floatUp: {
        '0%, 100%': { transform: 'translateY(0px)', willChange: 'transform' },
        '50%': { transform: 'translateY(-12px)' },
      },
      floatCard: {
        '0%, 100%': {
          transform: 'translateY(0px) rotate(0deg)',
          willChange: 'transform',
        },
        '50%': { transform: 'translateY(-8px) rotate(0.5deg)' },
      },
      pulseGlow: {
        '0%, 100%': {
          opacity: '0.6',
          transform: 'scale(1)',
          willChange: 'opacity, transform',
        },
        '50%': { opacity: '1', transform: 'scale(1.04)' },
      },
      slideUp: {
        '0%': {
          opacity: '0',
          transform: 'translateY(30px)',
          willChange: 'transform, opacity',
        },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeIn: {
        '0%': { opacity: '0', willChange: 'opacity' },
        '100%': { opacity: '1' },
      },
      shimmerMove: {
        '0%': { backgroundPosition: '-200% center' },
        '100%': { backgroundPosition: '200% center' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.7' },
      },
    },
  },
  globalCss: {
    'html, body': {
      bg: '#0B1023',
      color: 'white',
      fontFamily: 'body',
      margin: '0',
      padding: '0',
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    '*': {
      boxSizing: 'border-box',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
    },
    '::selection': {
      bg: 'violet.500',
      color: 'white',
    },
    ':focus-visible': {
      outline: '2px solid {colors.violet.400}',
      outlineOffset: '2px',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '*': {
        animation: 'none !important',
        transition: 'none !important',
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
