/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/section/**/*.{js,ts,jsx,tsx,mdx}',
        './src/carousel/**/*.{js,ts,jsx,tsx,mdx}',
        './src/dynamiccontent/**/*.{js,ts,jsx,tsx,mdx}',
        './src/withoutcomponent/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                blue: {
                    50: 'rgb(245, 245, 247)',
                },
                secondary: {
                    900: 'rgb(0, 113, 227)',
                    800: 'rgb(0, 113, 200)',
                    700: 'rgb(0, 113, 195)',
                },
                primary: {
                    900: 'rgba(0, 101, 46, 1)',
                    800: 'rgba(0, 101, 46, .8)',
                    700: 'rgba(0, 101, 46, .7)',
                    600: 'rgba(0, 101, 46, .6)',
                    500: 'rgba(0, 101, 46, .5)',
                    400: 'rgba(0, 101, 46, .4)',
                    300: 'rgba(0, 101, 46, .3)',
                    200: '#3fb416',
                    100: '#dcffd0',
                    50: '#f0ffeb',
                },
                third: {
                    900: 'rgba(245, 245, 247)',
                    800: 'rgba(240, 240, 240)',
                    700: 'rgba(250, 250, 252)',

                }
            },
            container: {
                screens: {
                    md: '1200px'
                }
            }
        },
    },
    plugins: [],
};