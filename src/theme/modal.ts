import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.600", //change the background
  },
  dialog: {
    borderRadius: "20px",
    bg: `rgb(19, 19, 19)`,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
