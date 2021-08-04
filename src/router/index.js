//import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../layout/Container.vue'
import Books from '../layout/Books.vue';
import Login from '../views/Login.vue';
import Dashboard from '../layout/Dashboard.vue'
import Calendar from '../components/Calendar.vue';

const router = new VueRouter({
    routes : [
        {component: Container,
         name: 'approot',
         path: '/',
        redirect: '/default'},
        {   component: Container,
            name: 'Home',
            path: '/default',
            meta: {requiresAuth:true},
            children: [{ 
                component: Books,
                name: 'Books',
                path: '/books',
                    meta:{
                      requiresAuth: true
                    }
              }, 
              { 
                component: Dashboard,
                name: 'Dashboard',
                path: '/dashboard',
                    meta:{
                      requiresAuth: true
                    }
              },{
              component: Calendar,
              name: 'Calendar',
              path: '/calendar',
                  meta:{
                    requiresAuth: true
                  }
            }, 
       ]},
       {
        component: Login,
        name: 'Login',
        path: '/login',
            meta:{
                requiresAuth:false
            }
        },
        {
        component: Login,
        name: '404',
        path : '*', redirect: '/login'
        }
    ],
})
router.beforeEach((to,from,next) => {
    let token = localStorage.getItem('msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken');
    console.log(token);
    if(to.matched.some(route => route.meta.requiresAuth)){
        if( token !== '' && token !== null){
            next();
        }else{
            console.log('Not authenticated')
            next('/login');
        }
    }else{
        next();
    }
});

//Vue.use(VueRouter)    
export default router;