import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { MainRouter } from "../navigation";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default App;
