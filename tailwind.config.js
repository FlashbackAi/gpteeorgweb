/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          magenta: '#ff2d7b',
          'magenta-dim': 'rgba(255, 45, 123, 0.6)',
          'magenta-glow': 'rgba(255, 45, 123, 0.15)',
          cyan: '#00f0ff',
          'cyan-dim': 'rgba(0, 240, 255, 0.6)',
          'cyan-glow': 'rgba(0, 240, 255, 0.15)',
          lime: '#b8ff00',
          'lime-dim': 'rgba(184, 255, 0, 0.6)',
          violet: '#a855f7',
          'violet-dim': 'rgba(168, 85, 247, 0.6)',
          void: '#0a0a0f',
          'void-light': '#12101a',
          'void-lighter': '#1a1625',
          surface: '#1e1a2e',
          grey: '#888899',
          'grey-light': '#a0a0b5',
        },
        // Keep terminal colors for backward compat
        terminal: {
          green: '#b8ff00',
          'green-dim': 'rgba(184, 255, 0, 0.6)',
          black: '#0a0a0f',
          'black-light': '#12101a',
          'black-lighter': '#1a1625',
          grey: '#888899',
          'grey-light': '#a0a0b5',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'glitch': ['Glitch Goblin', 'cursive'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'glitch-fast': 'glitch 0.5s infinite',
        'scanline': 'scanline 8s linear infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'border-travel': 'borderTravel 3s linear infinite',
        'flicker': 'flicker 3s infinite',
        'cyber-glow': 'cyberGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        borderTravel: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.3' },
          '46%': { opacity: '1' },
        },
        cyberGlow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 45, 123, 0.3), 0 0 10px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 45, 123, 0.6), 0 0 40px rgba(0, 240, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
