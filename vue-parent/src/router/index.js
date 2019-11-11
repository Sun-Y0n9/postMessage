import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Iframes from '../views/Iframes.vue';
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/iframes',
		name: 'iframes',
		component: Iframes
	}
];
const router = new VueRouter({
	routes
});

export default router;