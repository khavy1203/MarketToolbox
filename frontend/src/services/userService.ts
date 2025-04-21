import { getData, postData, putData, deleteData } from '../utils/axiosConfig';

export const fetchUsers = async () => {
    return await getData('/users');
};

export const createUser = async (userData: any) => {
    return await postData('/users', userData);
};

export const updateUser = async (userId: string, userData: any) => {
    return await putData(`/users/${userId}`, userData);
};

export const deleteUser = async (userId: string) => {
    return await deleteData(`/users/${userId}`);
};
