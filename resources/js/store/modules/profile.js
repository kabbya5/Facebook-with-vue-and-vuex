import axios from "axios";

const state = {
    user: null,
    userStatus: null,
    posts: null,
    friendButtonText:'Add Friend',
};

const getters = {
    user: state => {
        return state.user;
    },
    posts: state =>{
        return state.posts
    },
    friendButtonText: state =>{
        return state.friendButtonText;
    }
};

const actions = {
    // fetchUser({commit,state}, userId){
    //     commit('setUserStatus', 'loding...');

    //     axios.get('/api/profile/' + userId)
    //         .then(res => {
    //             commit('setUser', res.data[0]);
    //             commit('setUserStatus', 'success');
    //             commit('setPosts', res.data[1]);
    //         })
    //         .catch(error => {
    //             commit('setUserStatus', 'error');
    //         })
    // }

    sendFriendRequest({commit, state}, friendId){
        commit('setButtonText', 'Loading..');

        axios.post('api/freind-request', {'friend_id' : friendId})
            .then(res => {
                commit('setButtonText', 'Pending Friend Request')
            })
            .catch(error =>{
                commit('setButtonText', 'Add Friend')
            })
    }
};

const mutations = {
    setUser(state,user){
        state.user = user;
    },
    setUserStatus(state,status){
        state.userStatus = status;
    },
    setPosts(state, posts){
        state.posts = posts
    },
    setButtonText(state , text){
        state.friendButtonText = text;
    }
};

export default {
    state, getters, actions, mutations,
}