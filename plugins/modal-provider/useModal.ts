import { useContext, useMemo } from "react";
import ModalContext from "./ModalContext";

const useModal = () => {
  const { open, close } = useContext(ModalContext);
  return useMemo(
    () => ({
      open,
      close,
    }),
    [open, close],
  );
};

export default useModal;
