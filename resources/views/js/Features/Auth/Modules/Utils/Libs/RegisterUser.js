import axios from "axios";

// Functions
import SetErrorOnInput from "../../../../../Utils/Libs/SetErrorOnInput";
import navigate from "../../../../../Utils/Libs/navigate";

const RegisterUser = async (setErrors, setSendRequest) => {
    const parameter = {
        email: document.getElementById("email").value,
        password: document.getElementById("ch_password")?.value,
        password_confirmation: document.getElementById("ch_confirm_password")
            ?.value,
    };

    const response = await axios.post("/auth/registerUser", parameter);
    console.log(response);

    if (response?.data?.return) {
        sessionStorage.setItem("session_id", response?.data?.record?.token);
        sessionStorage.setItem("key", response?.data?.record?.user?.id);
        sessionStorage.setItem("username", response?.data?.record?.user?.email);
        navigate("/home", true);
        setSendRequest(false);
    } else if (response?.data?.return === false) {
        console.log(response?.data);
        setSendRequest(false);
        setErrors({
            email: response?.data?.errors?.email,
            password: response?.data?.errors?.email,
        });

        SetErrorOnInput({ type: "email" });
    }
};

export default RegisterUser;
