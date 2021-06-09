import { createApp, h } from 'vue'
import App from './App.vue'
import store from './store'
// import router from './router'

import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import {  provideApolloClient } from '@vue/apollo-composable'


const defaultClient = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
})


const app = createApp({
    setup() {
        provideApolloClient(defaultClient)
    },
    render() {
        return h(App)
    }
});

app.use(store)
app.mount('#app')


// createApp(App).mount('#app')
