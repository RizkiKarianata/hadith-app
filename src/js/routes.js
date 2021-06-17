
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import HaditsAllPage from '../pages/hadits-all.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/hadits-all/:id/',
	component: HaditsAllPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;