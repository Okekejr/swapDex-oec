import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  borderRadius: "md",
  fontWeight: "normal",
  border: "1px solid #c1c1c1",
  bgColor: "#02041C",
  color: "#c1c1c1",
};

// export the component theme
export const tooltipTheme = defineStyleConfig({ baseStyle });
