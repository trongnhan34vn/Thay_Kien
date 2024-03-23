/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': {'max': '660px'},
      // => @media (min-width: 640px) { ... }

      'laptop': {'max': '910px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'max': '1240px'},
      // => @media (min-width: 1280px) { ... }
    },
  }
}


