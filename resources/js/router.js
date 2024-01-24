import {createWebHistory, createRouter} from 'vue-router';
// import home from './components/pages/home.vue';
// import login from './components/pages/login.vue';
// import register from './components/pages/register.vue';
import dashboard from './components/admin/dashboard.vue';
import appointments from './components/pages/appointments.vue';
import profile from './components/pages/profile.vue';
import users from './components/pages/users.vue';
import settings from './components/pages/settings.vue';


const routes = [

    // {
    //     path:'/',
    //     name:'Home',
    //     component:home

    // },
    // {
    //     path:'/login',
    //     name:'Login',
    //     component:login

    // },
    // {
    //     path:'/register',
    //     name:'Register',
    //     component:register

    // },
    {
        path:'/admin/dashboard',
        name:'admin.dashboard',
        component:dashboard

    },
    {
        path:'/admin/appointments',
        name:'admin.appointments',
        component:appointments

    },
    {
        path:'/admin/users',
        name:'admin.users',
        component:users

    },
    {
        path:'/admin/profile',
        name:'admin.profile',
        component:profile

    },
    {
        path:'/admin/settings',
        name:'admin.settings',
        component:settings

    },
    {
        path:'/admin/logout',
        name:'admin.logout',
        component:settings

    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;

