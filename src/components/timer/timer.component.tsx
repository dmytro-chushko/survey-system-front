import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getPadTimeStamp } from "utils/getPadTimeStamp";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const minutes = getPadTimeStamp(Math.floor(timeLeft / 60));
  const seconds = getPadTimeStamp(timeLeft - +minutes * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) clearInterval(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft]);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Typography fontSize="1.5em">{minutes}</Typography>
      <Typography fontSize="1.5em">:</Typography>
      <Typography fontSize="1.5em">{seconds}</Typography>
    </Grid>
  );
};
