import Vue from 'vue'
import Vuex from 'vuex'

/* import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations" */

import menu from "./module/menu";
import status from "./module/status";
import users from "./module/users";

Vue.use(Vuex)

// export const store = new Vuex.Store({
//     state: {
//         //设置属性
//         menuItems: {},
//         currentUser: null,
//         isLogin: false
//     },
//     /* getters: { //获取属性
//         getMenuItems: state => state.menuItems,
//         currentUser: state => state.currentUser,
//         isLogin: state => state.isLogin
//     }, */
//     getters,
//     /* mutations: { //改变属性
//         setMenuItems(state, data) {
//             state.menuItems = data;
//         },
//         //将匹配到的对象，在menuItems数组中删除
//         removeMenuItems(state, data) {
//             state.menuItems.forEach((item, index) => {
//                 if (item == data) {
//                     state.menuItems.splice(index, 1);
//                 }
//             });
//         },
//         //将新添加的数据push到menuItems中
//         pushToMenuItems(state, data) {
//             state.menuItems.push(data)
//         },
//         //更改用户的状态信息
//         userStatus(state, user) {
//             if (user) {
//                 state.currentUser = user;
//                 state.isLogin = true;
//             } else {
//                 state.currentUser = null;
//                 state.isLogin = false;
//             }

//         }
//     }, */
//     mutations,
//     /* actions: {
//         //应用mutations
//         setUser({ commit }, user) {
//             commit("userStatus", user)
//         }
//     } */
//     actions
// })

export const store = new Vuex.Store({
    modules: {
        menu,
        status,
        users
    }
})