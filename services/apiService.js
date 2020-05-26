import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://localhost:5000/api/v1`,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    // getBootcamps() {
    //     return apiClient.get("/bootcamps");
    // },
    getBootcamp(id) {
        return apiClient.get("/bootcamps/" + id);
    },
    getCourses() {
        return apiClient.get("/courses");
    },
    getCourse(id) {
        return apiClient.get("/courses/" + id);
    },
    registerUser(body) {
        return apiClient.post("/auth/register", body);
    },
    loginUser(body) {
        return apiClient.post("/auth/login", body);
    }
};