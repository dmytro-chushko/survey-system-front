import { Backdrop } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import { useAppSelector } from "redux/hooks";
import { REDUCER_PATHES } from "utils/consts";

export const Loader = () => {
  const { mutations, queries } = useAppSelector(
    (state) => state[REDUCER_PATHES.SURVEY]
  );

  const isLoading = [
    ...Object.values(mutations),
    ...Object.values(queries),
  ].some((item) => item?.status === "pending");

  return (
    <Backdrop sx={{ zIndex: "1" }} open={isLoading}>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </Backdrop>
  );
};
