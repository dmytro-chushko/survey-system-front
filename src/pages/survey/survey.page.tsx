import { useGetUserData } from "redux/hooks";
import { SurveyForm } from "./components/survey-form";
import { ROLE } from "types/login.types";
import { SurveyTable } from "./components/survey-table";

export const Survey = () => {
  const { role } = useGetUserData();

  switch (role) {
    case ROLE.GUEST:
      return <SurveyForm />;
    case ROLE.ADMIN:
      return <SurveyTable />;
    default:
      return <div>Invalid role</div>;
  }
};
