import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "redux/api/survey.api";
import { useGetUserInfoQuery } from "redux/api/user.api";
import { ICategory } from "types/questions.types";
import { APP_ROUTE_KEYS } from "utils/consts";

interface IUseSurveyList {
  data?: Omit<ICategory, "questions">[];
  isLoading: boolean;
  handleClick: (id: string, array: string[]) => void;
  isModalOpen: boolean;
  onClose: () => void;
}

export const useSurveyList = (): IUseSurveyList => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetCategoriesQuery();
  const { data: userInfo } = useGetUserInfoQuery();

  const handleClick = (id: string, array: string[]) => {
    if (userInfo && array.some((el) => el === userInfo._id)) {
      setIsModalOpen(true);
      return;
    }
    navigate(`/${APP_ROUTE_KEYS.SURVEY_LIST}/${id}`);
  };

  const onClose = () => setIsModalOpen(false);

  return {
    data,
    isLoading,
    handleClick,
    isModalOpen,
    onClose,
  };
};
