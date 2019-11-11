import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Iframe from '../views/iframe.vue';
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		name: 'home',
		components: Home
	}, {
		path: '/iframe',
		name: 'iframe',
		components: Iframe
	}
];
const router = new VueRouter({
	routes
});

export default router;