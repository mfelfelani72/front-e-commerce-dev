import axios from "axios";

export const createCategory = async (parameters) => {
    const response = await axios.post(
        "/admin/category/createCategoryData",
        parameters
    );

    console.log(response);
    // if (response?.data?.return) {
    //     console.log(response?.data?.return);
    //     // navigate("/", true);
    // } else if (response?.data?.return === false) {
    //     console.log(response?.data?.return);
    //     // setSendRequest(false);
    //     // setErrors({ password: response?.data?.message });
    //     // SetErrorOnInput({ type: param });
    // }
};
