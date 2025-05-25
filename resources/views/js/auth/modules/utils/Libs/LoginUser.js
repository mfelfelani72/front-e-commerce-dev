// Functions

import { ConnectToServer } from "../../../../../../../app/Utils/services/api/ConnectToServer.js";
import SetErrorOnInput from "../../../../../../../app/Utils/Libs/SetErrorOnInput.js";

// Constants

import { userLogin } from "../constants/EndPoints.js";

const LoginUser = (param, setErrors, setSendRequest) => {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const parameter = {
    email: username,
    password: password,
  }

  ConnectToServer("post", userLogin, parameter, "", "login").then(
    (response) => {
      console.log(response);
      setSendRequest(false);
      // if (response?.data?.return) {
      //   sessionStorage.setItem("session_id", response?.data?.user_token);
      //   sessionStorage.setItem("key", response?.data?.username);
      //   setSendRequest(false);
      //   navigate("/dashboard/home", {
      //     state: { to_location: "/dashboard/home" },
      //   });
      // } else if (response?.data?.return === false) {
      //   console.log(response?.data)
      //   setSendRequest(false);
      //   setErrors({ password: "login_failed" });
      //   SetErrorOnInput({ type: param });
      // }
    }
  );
}


export default LoginUser;
