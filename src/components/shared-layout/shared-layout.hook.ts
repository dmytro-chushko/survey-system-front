import { useAppDispatch } from "redux/hooks";
import { unsetUserData } from "redux/reducers/user-data.reducer";

interface IUseSharedLayout {
  handleLogout: () => void;
}

export const useSharedLayout = (): IUseSharedLayout => {
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(unsetUserData());

  return {
    handleLogout,
  };
};
