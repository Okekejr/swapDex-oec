export const styles = {
  global: {
    ":root": {
      colorScheme: "dark",
    },
    body: {
      overflowX: "hidden",
      bg: "#02041C",
      color: "#fff",
    },

    html: {
      maxW: "100%",
      overflowX: "hidden",
    },

    "a:focus:not(:focus-visible), div:focus:not(:focus-visible), button:focus:not(:focus-visible)":
      {
        outline: "unset",
        boxShadow: "unset",
      },
    ".nav-item-active": {
      color: `accent.100 !important`,
    },
  },
};
