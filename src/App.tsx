import React from "react";
import { ToastContainer } from "react-toastify";
import { PegsList } from "./components/PegsList/PegsList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <PegsList />
      <ToastContainer
        style={{ width: "400px" }}
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
