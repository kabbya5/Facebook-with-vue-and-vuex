import { defaults } from "lodash";

const state = {
    user:document.querySelector("meta[name='user-id']").getAttribute('content'),
    Status: null,
};

const getters = {
    authUser: state =>{
        return state.user;
    }
};

const actions = {

};

const mutations = {};

export default{
    state, getters, actions, mutations,
}