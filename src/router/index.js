import Vue from 'vue';
import Router from 'vue-router';

import * as routes from '../util/constants/routes.js';
import Home from '../components/pages/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: routes.HOME_ROUTE,
			name: 'Root',
			component: Home
		},
		{
			path: '*',
			name: 'Wildcard',
			redirect: routes.HOME_ROUTE
		}
	]
});
