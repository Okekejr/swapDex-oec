import { useState } from "react";

export const useWalletSelector = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleOpen1 = () => setModal1(true);
  const handleClose1 = () => setModal1(false);

  return { modal, modal1, handleClose, handleClose1, handleOpen, handleOpen1 };
};
