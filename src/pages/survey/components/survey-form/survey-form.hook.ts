import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "redux/api/questions.api";
import { ICategory } from "types/questions.types";

interface IUseServeyForm {
  data?: ICategory;
  isLoading: boolean;
}

export const useSurveyForm = (): IUseServeyForm => {
  const { id } = useParams();
  const { data, isLoading } = useGetCategoryByIdQuery(id || "");

  return {
    data,
    isLoading,
  };
};
