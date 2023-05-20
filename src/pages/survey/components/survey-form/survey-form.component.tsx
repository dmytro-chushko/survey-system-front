import { useForm } from "react-hook-form";
import { Send } from "@mui/icons-material";
import { Grid, List } from "@mui/material";
import { useSurveyForm } from "./survey-form.hook";
import { Question } from "pages/survey/components/question";
import { SubmitButton } from "components/submit-button";

export const SurveyForm = () => {
  const { data, isLoading } = useSurveyForm();
  const {
    handleSubmit,
    control,
    formState: errors,
  } = useForm<Record<string, string>>();

  const onSubmit = (data: Record<string, string>) => console.log(data);

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
          <SubmitButton icon={<Send />} isLoading={isLoading}>
            Submit
          </SubmitButton>
        </Grid>
      </form>
    </Grid>
  );
};
