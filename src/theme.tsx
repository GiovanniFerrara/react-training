/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';

const Theme = {
  colors: {
    primary: '#06D6A0',
    secondary: '#1B9AAA',
    background: '#F5F5F5',
    textPrimary: '#353535',
    textSecondary: '#757575',
    accent: '#EF476F',
    border: '#E0E0E0', // Neutral Border color
  },

  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Merriweather', serif",
  },

  fontSize: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },

  transition: 'all 0.3s ease-in-out',

  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
};

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: ${Theme.fonts.primary};
        background-color: ${Theme.colors.background};
        color: ${Theme.colors.textPrimary};
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${Theme.fonts.secondary};
      }

      a {
        color: ${Theme.colors.accent};
        text-decoration: none;
      }

      p {
        line-height: 1.6;
      }

      button {
        padding: 10px 15px;
        font-size: ${Theme.fontSize.medium};
        font-family: ${Theme.fonts.primary};
        color: ${Theme.colors.textPrimary};
        background-color: ${Theme.colors.primary};
        border: none;
        border-radius: ${Theme.borderRadius.medium};
        transition: ${Theme.transition};
        box-shadow: ${Theme.boxShadow};

        &:hover {
          background-color: ${Theme.colors.secondary};
          cursor: pointer;
        }
      }

      input, textarea {
        width: 100%;
        padding: 10px 15px;
        font-size: ${Theme.fontSize.medium};
        font-family: ${Theme.fonts.primary};
        color: ${Theme.colors.textPrimary};
        background-color: ${Theme.colors.background};
        border: 1px solid ${Theme.colors.border};
        border-radius: ${Theme.borderRadius.small};
        transition: ${Theme.transition};

        &:focus {
          border-color: ${Theme.colors.primary};
          box-shadow: ${Theme.boxShadow};
          outline: none;
        }
      }
    `}
  />
);

export { GlobalStyle, Theme };
