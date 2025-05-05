import http from "../utils/http";

const userApiRequest = {
    getUsers: () => http.get('/users'),
    createUser: (userData: any) => http.post('/users', userData),
    updateUser: (userId: string, userData: any) => http.put(`/users/${userId}`, userData),
    deleteUser: (userId: string) => http.delete(`/users/${userId}`)
}

export default userApiRequest;