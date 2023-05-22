import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "redux/api/survey.api";
import { useGetUserInfoQuery } from "redux/api/user.api";
import { useGetUserData } from "redux/hooks";
import { IUserInfo, ROLE } from "types/login.types";
import { ICategory } from "types/questions.types";
import { APP_ROUTE_KEYS } from "utils/consts";

interface IUseSurveyList {
  data?: Omit<ICategory, "questions">[];
  isLoading: boolean;
  handleClick: (id: string, array: Omit<IUserInfo, "role">[]) => void;
  isModalOpen: boolean;
  onClose: () => void;
}

export const useSurveyList = (): IUseSurveyList => {
  const navigate = useNavigate();
  const { role } = useGetUserData();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetCategoriesQuery();
  const { data: userInfo } = useGetUserInfoQuery();

  const handleClick = (id: string, array: Omit<IUserInfo, "role">[]) => {
    console.log(array);
    console.log(userInfo?._id);
    if (
      role === ROLE.GUEST &&
      userInfo &&
      array.some(({ _id }) => _id === userInfo._id)
    ) {
      setIsModalOpen(true);
      console.log("Click");
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
