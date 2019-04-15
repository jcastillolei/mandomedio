<template>
	<v-breadcrumbs :items="items">
	  <template v-slot:divider>
	    <v-icon>chevron_right</v-icon>
	  </template>
	</v-breadcrumbs>
</template>

<script>
	export default {
    	name: "Breadcumb",
    	data() {
    		return {
    			items: [
		          {
		            text: 'Home',
		            disabled: true,
		            href: 'breadcrumbs_dashboard'
		          },
		          {
		            text: 'Procesos',
		            disabled: true,
		            href: 'breadcrumbs_link_1'
		          },
		          {
		            text: 'Evaluaciones',
		            disabled: true,
		            href: 'breadcrumbs_link_2'
		          }
		        ]
    		}
    	}
  	}
</script>>