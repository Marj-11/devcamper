import apiService from "~/services/apiService.js";
import Cookie from "js-cookie";
import JWTDecode from "jwt-decode";
import AuthService from "@/services/apiAuthService";
import axios from "axios";

export const state = () => ({
    bootcamps: [],
    bootcamp: {},
    courses: [],
    course: {},
    userToken: null,
    user: null
});
export const mutations = {
    SET_BOOTCAMPS(state, bootcamps) {
        state.bootcamps = bootcamps;
    },
    SET_BOOTCAMP(state, bootcamp) {
        state.bootcamp = bootcamp;
    },
    SET_COURSES(state, courses) {
        state.courses = courses;
    },
    SET_COURSE(state, course) {
        state.course = course;
    },
    SET_USER_UP(state, userData) {
        state.userToken = userData;
    },
    SET_USER_TOKEN_IN(state, userData) {
        state.userToken = userData;
    },
    CLEAR_USER_DATA(state) {
        state.userToken = null;
        state.user = null;
        Cookie.remove("access_token");
        axios.defaults.headers.common["Authotization"] = null;
    },
    SET_USER(state, userData) {
        state.user = userData;
    }
};
export const actions = {
    nuxtServerInit({ commit, state }, { req }) {
        let accessTokenCookie = req.headers.cookie;

        if (accessTokenCookie === undefined) {
            return;
        } else {
            accessTokenCookie = req.headers.cookie.split("=")[1];
        }
        commit("SET_USER_TOKEN_IN", accessTokenCookie);
        return new AuthService(state).getUser().then(response => {
            commit("SET_USER", response.data.data);
        });
        // const decoded = JWTDecode(accessTokenCookie);
        // console.log(decoded);

        // if (decoded) {
        //     commit("SET_USER_IN", decoded);
        // }
    },
    fetchBootcamps({ commit, state }) {
        return new AuthService(state).getBootcamps().then(response => {
            commit("SET_BOOTCAMPS", response.data.data);
        });
    },
    fetchBootcamp({ commit }, id) {
        return apiService.getBootcamp(id).then(response => {
            commit("SET_BOOTCAMP", response.data.data);
        });
    },
    fetchCourses({ commit }) {
        return apiService.getCourses().then(response => {
            commit("SET_COURSES", response.data.data);
        });
    },
    fetchCourse({ commit }, id) {
        return apiService.getCourse(id).then(response => {
            commit("SET_COURSE", response.data.data);
        });
    },
    signUserUp({ commit }, body) {
        return apiService.registerUser(body).then(response => {
            Cookie.set("access_token", response.data.token);
            // commit("SET_USER_UP", response.data);
            commit("SET_USER_TOKEN_IN", response.data.token);
        });
    },
    login({ commit, state }, body) {
        return apiService.loginUser(body).then(response => {
            Cookie.set("access_token", response.data.token);
            commit("SET_USER_TOKEN_IN", response.data.token);
            new AuthService(state).getUser().then(response => {
                commit("SET_USER", response.data.data);
            });
        });
    },
    logout({ commit }) {
        commit("CLEAR_USER_DATA");
    }
};
export const getters = {
    loggedIn(state) {
        return !!state.userToken;
    },
    userData(state) {
        if (!state.user) {
            return;
        } else {
            return state.user.name;
        }
    }
};