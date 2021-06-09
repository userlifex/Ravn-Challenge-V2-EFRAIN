// third party
import { createApp, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'

// store 
import store from './store'

// app.vue
import App from './App.vue'

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

