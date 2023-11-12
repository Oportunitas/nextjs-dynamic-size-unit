import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '0.1dp' : '0.1rem',
        '0.25dp': '0.25rem',
        '0.5dp' : '0.5rem',
        '0.75dp': '0.75rem',
        '1dp'   : '1rem',
        '2dp'   : '2rem',
        '4dp'   : '4rem',
        '8dp'   : '8rem',
        '16dp'  : '16rem',
        '32dp'  : '32rem',
        '64dp'  : '64rem',
      },
    },
  },
  plugins: [],
}
export default config
