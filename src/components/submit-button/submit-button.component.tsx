import { LoadingButton } from "@mui/lab";

interface ISubmitButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  isLoading: boolean;
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
  children,
  icon,
  isLoading,
}) => {
  return (
    <LoadingButton
      type="submit"
      loadingPosition="start"
      variant="contained"
      loading={isLoading}
      startIcon={icon}
    >
      {children}
    </LoadingButton>
  );
};
