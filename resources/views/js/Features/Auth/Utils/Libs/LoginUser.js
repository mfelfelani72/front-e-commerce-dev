import axios from "axios";

// Functions

import SetErrorOnInput from "../../../../Utils/Libs/SetErrorOnInput";
import navigate from "../../../../Utils/Libs/navigate";

const LoginUser = async (param, setErrors, setSendRequest) => {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const parameter = {
        email: username,
        password: password,
    };

    const response = await axios.post("/auth/loginUser", parameter);

    if (response?.data?.return) {
        sessionStorage.setItem("session_id", response?.data?.record?.token);
        sessionStorage.setItem("key", response?.data?.record?.user?.id);
        sessionStorage.setItem("username", response?.data?.record?.user?.email);
        navigate("/", true);
        setSendRequest(false);
    } else if (response?.data?.return === false) {
        setSendRequest(false);
        setErrors({ password: response?.data?.message });
        SetErrorOnInput({ type: param });
    }
};

export default LoginUser;
