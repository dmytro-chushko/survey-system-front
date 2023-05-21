import { Box, Button, Modal } from "@mui/material";
import { TypeSetState } from "types/set-state.types";

interface IModalWindowProps {
  isOpen: boolean;
  onClose: TypeSetState<boolean>;
  children: React.ReactElement;
  handleClick: () => void;
  buttonText: string;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({
  isOpen,
  onClose,
  children,
  handleClick,
  buttonText,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box>
        {children}
        <Button onClick={handleClick}>{buttonText || "ok"}</Button>
      </Box>
    </Modal>
  );
};
