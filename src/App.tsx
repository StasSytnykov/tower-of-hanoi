import React from "react";
import { ToastContainer } from "react-toastify";
import { PegsListPage } from "./pages/PegsList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <PegsListPage />
      <ToastContainer
        style={{ width: "400px" }}
        position="top-center"
        autoClose={5000}
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
