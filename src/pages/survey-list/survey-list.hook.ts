import { useGetCategoriesQuery } from "redux/api/questions.api";
import { ICategory } from "types/questions.types";

interface IUseSurveyList {
  data?: Omit<ICategory, "questions">[];
  isLoading: boolean;
}

export const useSurveyList = (): IUseSurveyList => {
  const { data, isLoading } = useGetCategoriesQuery();

  return {
    data,
    isLoading,
  };
};
