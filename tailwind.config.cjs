/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        "./index.html",
        "./src-web/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        borderRadius: {
            none: '0px',
            sm: 'var(--border-radius-sm)',
            DEFAULT: 'var(--border-radius)',
            md: 'var(--border-radius-md)',
            lg: 'var(--border-radius-lg)',
            full: '9999px',
        },
        colors: {
            transparent: 'transparent',
            white: 'hsl(var(--color-white) / <alpha-value>)',
            black: 'hsl(var(--color-black) / <alpha-value>)',
            background: 'hsl(var(--color-background) / <alpha-value>)',
            gray: color('gray'),
            orange: color('orange'),
            blue: color('blue'),
            green: color('green'),
            pink: color('pink'),
            violet: color('violet'),
            red: color('red'),
        }
    },
    plugins: [],
}

function color(name) {
    return {
        50: `hsl(var(--color-${name}-50) / <alpha-value>)`,
        100: `hsl(var(--color-${name}-100) / <alpha-value>)`,
        200: `hsl(var(--color-${name}-200) / <alpha-value>)`,
        300: `hsl(var(--color-${name}-300) / <alpha-value>)`,
        400: `hsl(var(--color-${name}-400) / <alpha-value>)`,
        500: `hsl(var(--color-${name}-500) / <alpha-value>)`,
        600: `hsl(var(--color-${name}-600) / <alpha-value>)`,
        700: `hsl(var(--color-${name}-700) / <alpha-value>)`,
        800: `hsl(var(--color-${name}-800) / <alpha-value>)`,
        900: `hsl(var(--color-${name}-900) / <alpha-value>)`,
    }
}
