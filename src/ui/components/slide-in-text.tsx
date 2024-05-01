import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

export const SlideInText: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
