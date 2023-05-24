import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { MainRouter } from "../navigation";
import { ToastContainer } from "react-toastify";
import { Loader } from "components/loader";

function App() {
  return (
    <>
      <Loader />
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default App;
