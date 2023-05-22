import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAnswersByCategoryQuery,
  useGetCategoryByIdQuery,
} from "redux/api/survey.api";
import { IAnswer } from "types/answers.types";
import { ICategory } from "types/questions.types";

interface IUseSurveyTable {
  category?: ICategory;
  answers?: IAnswer[];
  filterAndSortAnswers: (id: string) => IAnswer[] | undefined;
}

export const useSurveyTable = (): IUseSurveyTable => {
  const { id } = useParams();
  const { data: category } = useGetCategoryByIdQuery(id || "");
  const { data: answers } = useGetAnswersByCategoryQuery(id || "");

  const filterAndSortAnswers = useMemo(
    () => (id: string) => {
      const filteredAnswers = answers?.filter(({ user }) => user === id);

      const sortedAnswersByQuestions = filteredAnswers?.reduce<IAnswer[]>(
        (answersArr, _, i, arr) => {
          const answer = arr.find(
            ({ question }) => question === category?.questions[i]._id
          );
          if (answer) answersArr.push(answer);
          return answersArr;
        },
        []
      );

      return sortedAnswersByQuestions;
    },
    [category, answers]
  );

  return {
    category,
    answers,
    filterAndSortAnswers,
  };
};
