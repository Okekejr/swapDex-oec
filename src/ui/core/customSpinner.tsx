import { CustomSpinT } from "@/types";
import { Box, Spinner } from "@chakra-ui/react";
import { FC } from "react";

export const CustomSpinner: FC<CustomSpinT> = ({
  children,
  loading,
  connected,
  ...rest
}) => {
  return (
    <Box position="relative">
      {loading && (
        <Box
          position="absolute"
          bottom="40%"
          left="50%"
          color={connected ? "rgb(64, 182, 107)" : "orange.300"}
          transform="translate(-50%, 50%)"
        >
          <Spinner size="xs" speed="0.8s" {...rest} />
        </Box>
      )}
      {children}
    </Box>
  );
};
