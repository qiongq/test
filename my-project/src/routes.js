//一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

import Form from './components/form'
import Select from './components/Select'
import Page from './components/Page'
import Scroll from './components/Scroll'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [{
        path: '/',
        name: "homeLink",
        components: {
            default: Home,
            'orderingGuide': OrderingGuide,
            'history': History,
            'delivery': Delivery
        }
    },
    { path: '/menu', name: "menuLink", component: Menu },
    {
        path: '/admin',
        name: "adminLink",
        component: Admin
            //,beforeEnter:(to,from,next) => {
            //路由独享守卫
            //alert('sb,去登陆！');
            //next(false); //不加false为后置钩子（加载页面），加了为小权限的全局守卫（不加载）

        /*if(to.path == '/login' || to.path == '/register'){
        	next();
        }else{
        	alert('还没登陆，请先登录！');
        	next('/login');
        }*/
        //}
    },
    {
        path: '/about',
        name: "aboutLink",
        redirect: '/history',
        component: About,
        children: [{
                path: '/about/contact',
                name: "contactLink",
                redirect: '/phone',
                component: Contact,
                children: [
                    { path: '/phone', name: "phoneLink", component: Phone },
                    { path: '/personname', name: "personnameLink", component: PersonName }
                ]
            },
            { path: '/delivery', name: "deliveryLink", component: Delivery },
            { path: '/history', name: "historyLink", component: History },
            { path: '/orderingGuide', name: "orderingGuideLink", component: OrderingGuide },
        ]
    },
    { path: '/login', name: "loginLink", component: Login },
    { path: '/register', name: "registerLink", component: Register },
    { path: '/form', name: "formLink", component: Form },
    { path: '/select', name: "selectLink", component: Select },
    { path: '/page', name: "pageLink", component: Page },
    { path: '/scroll', name: "scrollLink", component: Scroll },

    { path: '*', redirect: '/' } //当路径错误时，跳转默认路径
]