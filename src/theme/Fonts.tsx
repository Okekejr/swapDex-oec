import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'GT Flexa Mono Beta v5 Regular', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: " 'GT Flexa Mono Beta v5 Regular', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: "GT Flexa Mono Beta v5 Regular";
        src: url("https://db.onlinewebfonts.com/t/8dd8a40826ffb9145e5a6bf11c881466.woff2")format("woff2"),
             url("https://db.onlinewebfonts.com/t/8dd8a40826ffb9145e5a6bf11c881466.woff")format("woff"),
      }

      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.woff2")format("woff2"),
             url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.woff")format("woff"),
      }
    `}
  />
);
