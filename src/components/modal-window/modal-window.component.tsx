import { Box, Button, Grid, Modal, Typography } from "@mui/material";

interface IModalWindowProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  handleButtonClick?: () => void;
  buttonText?: string;
}

export const ModalWindow: React.FC<IModalWindowProps> = ({
  isOpen,
  onClose,
  children,
  handleButtonClick,
  buttonText,
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
        <Typography mb={2}>{children}</Typography>
        <Grid container alignItems="cente" justifyContent="center">
          <Button variant="contained" onClick={handleButtonClick || onClose}>
            {buttonText || "ok"}
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};
