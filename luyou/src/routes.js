//一级路由
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'
import Page6 from './components/page6/page6'
import Page7 from './components/page7/page7'
import Page8 from './components/page8/page8'
import Page9 from './components/page9/page9'
import Page10 from './components/page10/page10'

//二级路由
import Page61 from './components/page6/page6-1'
import Page62 from './components/page6/page6-2'
import Page63 from './components/page6/page6-3'
import Page64 from './components/page6/page6-4'

import Page71 from './components/page7/page7-1'
import Page72 from './components/page7/page7-2'
import Page73 from './components/page7/page7-3'

import Page81 from './components/page8/page8-1'
import Page82 from './components/page8/page8-2'
import Page83 from './components/page8/page8-3'

import Page91 from './components/page9/page9-1'
import Page92 from './components/page9/page9-2'
import Page93 from './components/page9/page9-3'

import Page101 from './components/page10/page10-1'
import Page102 from './components/page10/page10-2'
import Page103 from './components/page10/page10-3'

export const routes = [
    { path: '/', name: "Page1Link", component: Page1 },
    { path: '/Page2', name: "Page2Link", component: Page2 },
    { path: '/Page3', name: "Page3Link", component: Page3 },
    { path: '/Page4', name: "Page4Link", component: Page4 },
    { path: '/Page5', name: "Page5Link", component: Page5 },
    {
        path: '/Page6',
        name: "Page6Link",
        component: Page6,
        children: [{
                path: '/page61',
                name: "Page61Link",
                component: Page61,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page62',
                name: "Page62Link",
                component: Page62,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page63',
                name: "Page63Link",
                component: Page63,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page64',
                name: "Page64Link",
                component: Page64
            }

        ]
    },
    {
        path: '/Page7',
        name: "Page7Link",
        component: Page7,
        children: [{
                path: '/page71',
                name: "Page71Link",
                component: Page71,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page72',
                name: "Page72Link",
                component: Page72,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page73',
                name: "Page73Link",
                component: Page73,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
        ]
    },
    {
        path: '/Page8',
        name: "Page8Link",
        component: Page8,
        children: [{
                path: '/page81',
                name: "Page81Link",
                component: Page81,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

            {
                path: '/page82',
                name: "Page82Link",
                component: Page82,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

            {
                path: '/page83',
                name: "Page83Link",
                component: Page83,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

        ]
    },
    {
        path: '/Page9',
        name: "Page9Link",
        component: Page9,
        children: [{
                path: '/page91',
                name: "Page91Link",
                component: Page91,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

            {
                path: '/page92',
                name: "Page92Link",
                component: Page92,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

            {
                path: '/page93',
                name: "Page93Link",
                component: Page93,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },

        ]
    },
    {
        path: '/Page10',
        name: "Page10Link",
        component: Page10,
        children: [{
                path: '/page101',
                name: "Page101Link",
                component: Page101,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page102',
                name: "Page102Link",
                component: Page102,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
            {
                path: '/page103',
                name: "Page103Link",
                component: Page103,
                beforeEnter: (to, form, next) => {
                    console.log(form.path);
                    next();
                }
            },
        ]
    },
    { path: '*', redirect: '/' }
]