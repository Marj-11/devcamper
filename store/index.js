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
    users: [],
    fetchedUser: [],
    userById: [],
    reviews: [],
    userToken: null,
    user: null,
    notifications: [],
    isLoading: false
});
let nextId = 1;
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
    SET_REVIEWS(state, reviews) {
        state.reviews = reviews;
    },
    SET_USERS(state, users) {
        state.users = users;
    },
    SET_USERBYID(state, userById) {
        state.userById.push(userById);
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
    },
    FETCH_USER(state, userData) {
        state.fetchedUser = userData;
    },
    PUSH(state, notification) {
        state.notifications.push({
            ...notification,
            id: nextId++
        });
    },
    DELETE(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            notification => notification.id !== notificationToRemove.id
        );
    },
    NEWPHOTO(state, photoName) {
        state.photoName = photoName;
    },
    SET_LOADING(state, payload) {
        state.isLoading = payload;
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
    fetchBootcamps({ commit, dispatch, state }) {
        return new AuthService(state)
            .getBootcamps()
            .then(response => {
                commit("SET_BOOTCAMPS", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching bootcamps: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    fetchBootcamp({ commit, dispatch }, id) {
        return apiService
            .getBootcamp(id)
            .then(response => {
                commit("SET_BOOTCAMP", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching bootcamp: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    fetchUser({ commit, dispatch, state }, id) {
        return apiService
            .getUser(id)
            .then(response => {
                commit("FETCH_USER", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching user: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    fetchCourses({ commit, state }) {
        return new AuthService(state).getCourses().then(response => {
            commit("SET_COURSES", response.data.data);
        });
    },
    fetchCourse({ commit }, id) {
        return apiService.getCourse(id).then(response => {
            commit("SET_COURSE", response.data.data);
        });
    },
    signUserUp({ commit, dispatch }, body) {
        return apiService
            .registerUser(body)
            .then(response => {
                Cookie.set("access_token", response.data.token);
                // commit("SET_USER_UP", response.data);
                commit("SET_USER_TOKEN_IN", response.data.token);
                const notification = {
                    type: "success",
                    message: `You'er successfully signed up!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem signing up!`
                };
                dispatch("add", notification);
                throw error;
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
    },
    loadingON({ commit }) {
        commit("SET_LOADING", true);
    },
    loadingOFF({ commit }) {
        commit("SET_LOADING", false);
    },
    addNewBootcamp({ commit, dispatch, state }, body) {
        const address = `${body.street} ${body.buildingNumber}, ${body.city}, ${body.zipcode}, ${body.country}`;
        let body2 = body;
        body2.address = address;
        return new AuthService(state)
            .addNewBootcamp(body2)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Your bootcamp has been successfully added!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    updateBootcamp({ dispatch, state }, body) {
        return new AuthService(state)
            .updateBootcamp(body, body.id)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Your bootcamp has been successfully updated!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    updateUser({ dispatch, state }, user) {
        return new AuthService(state)
            .updateUser(user, user._id)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Your Profile has been successfully updated!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    deleteBootcamp({ commit, dispatch, state }, id) {
        return new AuthService(state)
            .deleteBootcamp(id)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Your bootcamp has been successfully deleted!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    deleteUser({ commit, dispatch, state }, id) {
        return new AuthService(state)
            .deleteUser(id)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `The user has been successfully deleted!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    add({ commit }, notification) {
        commit("PUSH", notification);
    },
    remove({ commit }, notificationToRemove) {
        commit("DELETE", notificationToRemove);
    },
    sendRecoveryEmail({ dispatch }, email) {
        return apiService
            .sendREmail(email)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Email Sent`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a recovery problem: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    resetPassword({ dispatch }, { token, password }) {
        return apiService
            .sendRPassword(token, password)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `Your password has been successfully updated!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a recovery problem: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    // newPhoto({ commit, dispatch, state }, body) {
    //     return new AuthService(state).newPhoto(body.photo, body)
    //     .then(res => {
    //         commit("NEWPHOTO", res.data.data);
    //         const notification = {
    //             type: "success",
    //             message: `Your Photo has been successfully uploaded!`
    //         };
    //         dispatch("add", notification);
    //     })
    //     .catch(error => {
    //         const notification = {
    //             type: "error",
    //             message: `${error.response.data.error}`
    //         };
    //         dispatch("add", notification);
    //         throw error;
    //     })
    // },
    addReview({ dispatch, state }, body) {
        return new AuthService(state)
            .addReview(body, state.bootcamp.id)
            .then(res => {
                const notification = {
                    type: "success",
                    message: `Thank you! Your review has benn successfully commited!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
    },
    getReviews({ commit, dispatch, state }, id) {
        return new AuthService(state)
            .getReviews(id)
            .then(response => {
                commit("SET_REVIEWS", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching reviews: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    getUsers({ commit, dispatch, state }) {
        return new AuthService(state)
            .getUsers()
            .then(response => {
                commit("SET_USERS", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching users: ${error.message}`
                };
                dispatch("add", notification);
            });
    },

    getUserById({ commit, dispatch, state }, id) {
        return new AuthService(state)
            .getUserById(id)
            .then(response => {
                commit("SET_USERBYID", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `There was a problem fetching user: ${error.message}`
                };
                dispatch("add", notification);
            });
    },
    registerUser({ dispatch, state }, user) {
        return new AuthService(state)
            .updateBootcamp(user, state.bootcamp.id)
            .then(() => {
                const notification = {
                    type: "success",
                    message: `You're successfully registered!`
                };
                dispatch("add", notification);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: `${error.response.data.error}`
                };
                dispatch("add", notification);
                throw error;
            });
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
            return state.user;
        }
    },
    getUsersById(state) {
        return state.userById;
    }
};