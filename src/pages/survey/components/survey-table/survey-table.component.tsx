import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSurveyTable } from "./survey-table.hook";

import * as Styled from "./survey-table.styled";

export const SurveyTable = () => {
  const { category, answers, filterAndSortAnswers } = useSurveyTable();

  if (category && answers) {
    const { title, questions, interviewedUsers } = category;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <Styled.Cell>{title}</Styled.Cell>
            {questions.map(({ _id, question }) => (
              <Styled.Cell key={_id} align="center">
                {question}
              </Styled.Cell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {interviewedUsers.map(({ _id, email }) => (
            <Styled.Row key={_id}>
              <TableCell>{email}</TableCell>
              {filterAndSortAnswers(_id)?.map(({ _id, answer }) => (
                <TableCell key={_id} align="center">
                  {answer}
                </TableCell>
              ))}
            </Styled.Row>
          ))}
        </TableBody>
      </Table>
    );
  }

  return <div>...Loading</div>;
};
