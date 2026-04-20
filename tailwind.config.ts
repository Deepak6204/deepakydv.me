import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#0b1326',
        foreground: '#dae2fd',
        // Shadcn UI base colors (preserved)
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Modern Full-Stack Portfolio Design Tokens
        "surface-container-high": "#222a3d",
        "primary-fixed": "#e1e0ff",
        "on-secondary-fixed": "#0d1c2d",
        "on-primary-fixed-variant": "#2f2ebe",
        "tertiary": "#ffb783",
        "outline-variant": "#464554",
        "surface-container": "#171f33",
        "surface-container-highest": "#2d3449",
        "on-tertiary-fixed-variant": "#703700",
        "on-surface": "#dae2fd",
        "tertiary-fixed": "#ffdcc5",
        "inverse-on-surface": "#283044",
        "tertiary-fixed-dim": "#ffb783",
        "on-primary-fixed": "#07006c",
        "on-background": "#dae2fd",
        "on-tertiary-container": "#452000",
        "on-surface-variant": "#c7c4d7",
        "error": "#ffb4ab",
        "on-tertiary": "#4f2500",
        "inverse-primary": "#494bd6",
        "on-secondary-fixed-variant": "#39485a",
        "inverse-surface": "#dae2fd",
        "surface": "#0b1326",
        "primary": "#c0c1ff",
        "surface-container-lowest": "#060e20",
        "primary-fixed-dim": "#c0c1ff",
        "secondary": "#b9c8de",
        "secondary-fixed-dim": "#b9c8de",
        "on-secondary-container": "#a7b6cc",
        "on-error": "#690005",
        "outline": "#908fa0",
        "secondary-fixed": "#d4e4fa",
        "primary-container": "#8083ff",
        "surface-dim": "#0b1326",
        "error-container": "#93000a",
        "secondary-container": "#39485a",
        "surface-container-low": "#131b2e",
        "on-primary-container": "#0d0096",
        "on-primary": "#1000a9",
        "surface-bright": "#31394d",
        "on-error-container": "#ffdad6",
        "on-tertiary-fixed": "#301400",
        "surface-tint": "#c0c1ff",
        "on-secondary": "#233143",
        "surface-variant": "#2d3449",
        "tertiary-container": "#d97721",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        DEFAULT: "0.125rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
