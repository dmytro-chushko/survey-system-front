import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "redux/api/user.api";
import { useAppDispatch } from "redux/hooks";
import { setUserData } from "redux/reducers/user-data.reducer";
import { LoginFormData } from "types/login.types";

interface IUseLoginForm {
  onSubmit: SubmitHandler<LoginFormData>;
  isLoading: boolean;
}

export const useLoginForm = (): IUseLoginForm => {
  const dispatch = useAppDispatch();
  const [loginUser, { data: loginRes, isLoading, isSuccess }] =
    useLoginUserMutation();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await loginUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData({ token: loginRes?.token, role: loginRes?.role }));
    }
  }, [dispatch, isSuccess, loginRes?.role, loginRes?.token]);

  return {
    onSubmit,
    isLoading,
  };
};
