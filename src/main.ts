import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, provide, h } from "vue";
import { apolloClient } from "./apollo/apolloClient";
import App from "./App.vue";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.mount("#app");
