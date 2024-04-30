import { useState } from "react";

export const useWalletSelector = () => {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return { modal, handleClose, handleOpen };
};
