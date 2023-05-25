import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProductCard from './components/ProductCardComponent.vue'
import ProductListPage from './components/ProductListPage.vue'
import ProductAddPage from './components/ProductAddPage.vue'
import ProductForm from './components/product-form/ProductForm.vue'
import InputComponent from './components/InputComponent.vue'
import DVDFormAttributes from './components/product-form/DVDFormAttributes.vue'
import BookFormAttributes from './components/product-form/BookFormAttributes.vue'
import FurnitureFormAttributes from './components/product-form/FurnitureFormAttributes.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProductListPage },
        { path: '/add-product', component: ProductAddPage }
    ]
})

const app = createApp(App)

app.use(router)

app.component('header-component', Header)
app.component('footer-component', Footer)
app.component('product-card-component', ProductCard)
app.component('product-form-component', ProductForm)
app.component('input-component', InputComponent)
app.component('dvd-form-attributes', DVDFormAttributes)
app.component('book-form-attributes', BookFormAttributes)
app.component('furniture-form-attributes', FurnitureFormAttributes)

app.mount('#app')
