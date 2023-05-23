import { Button, Grid } from "@mui/material";
import { useSurveyList } from "./survey-list.hook";
import { ModalWindow } from "components/modal-window";

export const SurveyList = () => {
  const { data, handleClick, isModalOpen, onClose, isLoading } =
    useSurveyList();

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      {isLoading && <div>...Loading</div>}
      {data &&
        data.map(({ _id, title, interviewedUsers }) => (
          <Grid key={_id} item xs={6} textAlign="center">
            <Button
              variant="text"
              onClick={() => handleClick(_id, interviewedUsers)}
            >
              {title}
            </Button>
          </Grid>
        ))}
      <ModalWindow isOpen={isModalOpen} onClose={onClose}>
        You have already taken this survey
      </ModalWindow>
    </Grid>
  );
};
