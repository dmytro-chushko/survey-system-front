import { useGetUserInfoQuery } from "redux/api/user.api";
import { useAppDispatch } from "redux/hooks";
import { unsetUserData } from "redux/reducers/user-data.reducer";
import { IUserInfo } from "types/login.types";

interface IUseSharedLayout {
  handleLogout: () => void;
  data?: IUserInfo;
  isLoading: boolean;
}

export const useSharedLayout = (): IUseSharedLayout => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUserInfoQuery();

  const handleLogout = () => dispatch(unsetUserData());

  return {
    handleLogout,
    data,
    isLoading,
  };
};
