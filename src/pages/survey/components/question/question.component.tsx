import { QuestionMark } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface IQuestionProps {
  id: string;
  question: string;
  control: Control<Record<string, string>, any>;
  answers: string[];
}

export const Question: React.FC<IQuestionProps> = ({
  id,
  question,
  control,
  answers,
}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon>
        <QuestionMark />
      </ListItemIcon>
      <Grid container direction="column">
        <ListItemText primary={question} />
        <FormControl>
          <Controller
            name={id}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <RadioGroup {...field} name={id} defaultValue="">
                {answers.map((answer, i) => (
                  <FormControlLabel
                    key={i}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
            )}
          />
        </FormControl>
      </Grid>
    </ListItem>
  );
};
