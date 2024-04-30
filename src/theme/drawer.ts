import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: "md",
    bg: "#02041C",
    backdropFilter: "blur(50px)",
    border: "1px solid rgba(255, 255, 255, 0.07)",
    my: "5px",
    mr: "5px",
  },
});

export const drawerTheme = defineMultiStyleConfig({
  baseStyle,
});
