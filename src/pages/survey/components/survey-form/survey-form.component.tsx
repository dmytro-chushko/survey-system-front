import { useForm } from "react-hook-form";
import { Send } from "@mui/icons-material";
import { Grid, List } from "@mui/material";
import { useSurveyForm } from "./survey-form.hook";
import { Question } from "pages/survey/components/question";
import { SubmitButton } from "components/submit-button";
import { ModalWindow } from "components/modal-window";

export const SurveyForm = () => {
  const {
    data,
    isLoading,
    isSubmitting,
    onSubmit,
    isModalOpen,
    handleBackToSurveyList,
  } = useSurveyForm();
  const { handleSubmit, control } = useForm<Record<string, string>>();

  return (
    <Grid container alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <List>
          {data &&
            data.questions.map(({ _id, question, answers }) => (
              <Question
                key={_id}
                id={_id}
                question={question}
                answers={answers}
                control={control}
              />
            ))}
        </List>
        <Grid container alignItems="center" justifyContent="flex-end">
          <SubmitButton icon={<Send />} isLoading={isLoading || isSubmitting}>
            Submit
          </SubmitButton>
        </Grid>
      </form>
      <ModalWindow
        isOpen={isModalOpen}
        handleButtonClick={handleBackToSurveyList}
        buttonText="back to survey list"
      >
        Thank you for completing the survey
      </ModalWindow>
    </Grid>
  );
};
