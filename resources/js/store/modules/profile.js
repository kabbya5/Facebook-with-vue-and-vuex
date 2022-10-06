import axios from "axios";
import { set } from "lodash";

const state = {
    user:[],
    userStatus: null,
    posts: [],
    friendButtonText:'',
    csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    friendship:'',
    friend_id: '',
    cancleFriendButtonText:'cancle',
    authId:document.querySelector("meta[name='user-id']").getAttribute('content'),
};

const getters = {
    user: state => {
        return state.user;
    },
    posts: state =>{
        return state.posts
    },
    friendButtonText: state =>{
        // if(!(state.authId == state.user.id)){
        //     return 'Add friend'
        // }else{
        //     return state.friendButtonText;
        // }
        return state.friendButtonText;
        
    },
    friend_id : state =>{
        return state.friend_id;
    },
    csrf: state => {
        return state.csrf;
    },
    friendship: state =>{
        return state.friendship;
    },
    cancleFriendButtonText: state => {
        return state.cancleFriendButtonText;
    }
};

const actions = {
    fetchUser({commit,state}, userId){
        commit('setUserStatus', 'loding...');
        commit('setButtonText', 'Add Friend');
        commit('setFriendId', userId);

        axios.get('/api/profile/' + userId)
            .then(res => {
                commit('setUser', res.data[0]);
                commit('setUserStatus', 'success');
                commit('setPosts', res.data[1]);
                commit('setFriendShip', res.data[2]);
                commit('setButtonText', 'Pending Friend Request')
            })
            .catch(error => {
                commit('setUserStatus', 'error');
            })
    },

    sendFriendRequest({commit, state}){
        commit('setButtonText', 'Loading..');
        

        axios.post('/api/send-friend-request/',{friend_id: state.user.id})
                .then(res => {
                    
                    commit('setButtonText', 'Pending Friend Request')
                    console.log(res.data);
                })
                .catch(error =>{
                    console.log(error);
                    commit('setButtonText', 'Add Friend')
                })                               
    },
      
};

const mutations = {
    setUser(state, user){
        state.user = user;
    },
    setUserStatus(state, status){
        state.userStatus = status;
    },
    setPosts(state, posts){
        state.posts = posts
    },
    setButtonText(state , text){
        state.friendButtonText = text;
    },
    setFriendShip(state, friendship){
        state.friendship = friendship.confirmed_at;
    },
    setFriednId(state, friendId){

    }

};

export default {
    state, getters, actions, mutations,
}