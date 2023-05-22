import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSubmitAnwsersMutation } from "redux/api/survey.api";
import { useGetCategoryByIdQuery } from "redux/api/survey.api";
import { useGetUserInfoQuery } from "redux/api/user.api";
import { ICategory } from "types/questions.types";
import { APP_ROUTE_KEYS } from "utils/consts";

interface IUseServeyForm {
  data?: ICategory;
  isLoading: boolean;
  isSubmitting: boolean;
  isModalOpen: boolean;
  onSubmit: (data: Record<string, string>) => void;
  handleBackToSurveyList: () => void;
}

export const useSurveyForm = (): IUseServeyForm => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetCategoryByIdQuery(id || "");
  const [submitAnswers, { isLoading: isSubmitting }] =
    useSubmitAnwsersMutation();
  const { data: userInfo } = useGetUserInfoQuery();

  const onSubmit = async (data: Record<string, string>) => {
    await submitAnswers({ answers: data, categoryId: id || "" });
  };

  const handleBackToSurveyList = () => {
    setIsModalOpen(false);
    navigate(`/${APP_ROUTE_KEYS.SURVEY_LIST}`);
  };

  useEffect(() => {
    if (
      data &&
      userInfo &&
      data.interviewedUsers.some(({ _id }) => _id === userInfo._id)
    ) {
      setIsModalOpen(true);
    }
  }, [data, userInfo]);

  return {
    data,
    isLoading,
    isSubmitting,
    isModalOpen,
    onSubmit,
    handleBackToSurveyList,
  };
};
