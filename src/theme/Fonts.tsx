import { Global } from "@emotion/react"

export const fonts = {
  heading:
    "'Circular Std Bold', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Circular Std Book', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  statusTags: "'Source Code Pro', 'monospace'",
}

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Circular Std Book';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/CircularStd-Book.woff) format('woff');
             url(/assets/fonts/CircularStd-Book.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Circular Std Bold';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/CircularStd-Bold.woff) format('woff');
             url(/assets/fonts/CircularStd-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-SemiBold.woff) format('woff'),
             url(/assets/fonts/HafferXH-SemiBold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/SourceCodePro-Regular.woff) format('woff'),
              url(/assets/fonts/SourceCodePro-Regular.woff2) format('woff2');
      }
    `}
  />
)
