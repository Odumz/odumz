function withOpacity (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  tailwindcss: {
    jit: true,
    cssPath: '~/assets/css/tailwind.css'
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        body: ['Roboto']
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted')
        },
        alerts: {
          base: withOpacity('--color-text'),
          muted: withOpacity('--color-text-muted')
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted')
        },
        alerts: {
          base: withOpacity('--color-base'),
          muted: withOpacity('--color-muted'),
          'base-dark': withOpacity('--color-base-dark'),
          'base-darker': withOpacity('--color-base-darker')
        }
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill')
        }
      },
      borderColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          accent: withOpacity('--color-button-accent'),
          'accent-hover': withOpacity('--color-button-accent-hover'),
          muted: withOpacity('--color-button-muted')
        },
        alerts: {
          base: withOpacity('--color-base')
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
