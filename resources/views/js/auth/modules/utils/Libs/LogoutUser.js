// Functions

import { ConnectToServer } from "../../../../../../../app/Utils/services/api/ConnectToServer.js";

// Constants

import { userLogout } from "../constants/EndPoints.js";

const LogoutUser = (navigate, setSendRequest) => {
  ConnectToServer(
    "post",
    userLogout,
    {},
    "",
    "logout"
  ).then((response) => {
    if (response?.data?.return) {
      sessionStorage.removeItem("session_id");
      sessionStorage.removeItem("key");
      navigate("/login");
      setSendRequest(false);
    } else {
      console.log("Logout API call failed:", response?.data);
      setSendRequest(false);
    }
  })

};

export default LogoutUser;
