/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        'insta-purple': '#8a3ab9',
        'insta-pink': '#e95950',
        'insta-blue': '#4c68d7',
        'neutral-dark': '#1a1a1a',
        'neutral-light': '#f5f5f5',
      },
    },
  },
};
