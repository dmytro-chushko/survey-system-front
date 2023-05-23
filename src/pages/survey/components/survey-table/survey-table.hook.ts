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
  const { id: categoryId } = useParams();
  const { data: category } = useGetCategoryByIdQuery(categoryId || "");
  const { data: answers } = useGetAnswersByCategoryQuery(categoryId || "");

  const filterAndSortAnswers = useMemo(
    () => (id: string) => {
      const filteredAnswers = answers?.filter(
        ({ user, category }) => user === id && category === categoryId
      );

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
    [answers, categoryId, category?.questions]
  );

  return {
    category,
    answers,
    filterAndSortAnswers,
  };
};
