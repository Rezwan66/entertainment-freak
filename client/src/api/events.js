import axiosSecure from ".";

export const getAllCategories = async () => {
    const { data } = await axiosSecure('/categories');
    return data;
};