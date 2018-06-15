import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Auth from './components/Auth.vue';
import About from './components/About.vue';
import Quadrants from './components/Quadrants.vue';
import QuadrantDetail from './components/QuadrantDetail.vue';
import NeighborhoodsList from './components/NeighborhoodsList.vue';
import NeighborhoodsMap from './components/NeighborhoodsMap.vue';
import NewNeighborhood from './components/NewNeighborhood.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/quadrants', component: Quadrants },
    { path: '/auth', component: Auth },
    { 
      path: '/quadrants/:id', 
      component: QuadrantDetail,
      children: [
        { path: 'list', component: NeighborhoodsList },
        { path: 'map', component: NeighborhoodsMap },
        { path: 'new', component: NewNeighborhood },
        { path: '', redirect: 'list' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});