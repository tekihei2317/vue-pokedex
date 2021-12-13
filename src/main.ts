import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, provide, h } from 'vue';
import { apolloClient } from './apollo/apolloClient';
import App from './App.vue';
import { router } from './router';
import './assets/css/index.css';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.mount('#app');
