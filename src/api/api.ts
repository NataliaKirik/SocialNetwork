import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': 'ab61ac65-4f7d-4f34-b171-2bf7b69d7103'
        }
    }
)


export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    getProfile(id: string) {
        console.warn('Obsolete method.Please use mainPageApi object')
        return mainPageApi.getProfile(id)
    },
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const mainPageApi = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id: string) {
        return instance.get(`/profile/status/${id}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
    }
}
