import Vue from "vue";
import Router from "vue-router";

import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(Router);

const router = new Router({

	mode: "history",
	strict: true,
	routes:[
		{
			path: "/",
			name: "home",
			component: App
		},
		{
			path: "/helloworld",
			name: "helloworld",
			component: HelloWorld
		}
	]

});

export default router;