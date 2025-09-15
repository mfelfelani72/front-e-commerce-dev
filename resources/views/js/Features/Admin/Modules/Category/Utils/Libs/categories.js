import axios from "axios";

export const categories = async (parameters = "", setData) => {
    const response = await axios.post(
        "/admin/category/categoriesData",
        parameters
    );

    // console.log(response);
    if (response?.data?.return) {
        setData(response?.data?.record?.categories);
        // navigate("/", true);
    }
    // } else if (response?.data?.return === false) {
    //     console.log(response?.data?.return);
    //     // setSendRequest(false);
    //     // setErrors({ password: response?.data?.message });
    //     // SetErrorOnInput({ type: param });
    // }
};
