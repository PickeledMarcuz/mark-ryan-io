import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

// apollo
import VueApollo from 'vue-apollo';
import apolloClient from './vue-apollo';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const app = createApp(App);

app.use(apolloProvider);
app.mount('#app');
