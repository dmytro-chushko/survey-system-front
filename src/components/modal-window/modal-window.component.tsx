import { Box, Button, Grid, Modal } from "@mui/material";

interface IModalWindowProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  handleButtonClick?: () => void;
  buttonText?: string;
  button?: boolean;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({
  isOpen,
  onClose,
  children,
  handleButtonClick,
  buttonText,
  button,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    outline: "none",
    p: 4,
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Box mb={2}>{children}</Box>
        <Grid container alignItems="cente" justifyContent="center">
          {button && (
            <Button variant="contained" onClick={handleButtonClick || onClose}>
              {buttonText || "ok"}
            </Button>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};
