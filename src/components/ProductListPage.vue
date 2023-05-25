<template>
  <header-component :nav-title="navTitle" :nav-buttons="navButtons" @send-delete-list="massDelete" />
  <hr>
  <div class="container">
    <div class="row hidden-md-up">
      <product-card-component v-for="product in productList" :key="product.sku" :product="product" v-slot:deleteCheckbox>
        <input type="checkbox" class="delete-checkbox" :value="product.sku" v-model="deleteProductList" />
      </product-card-component>
    </div>
  </div>
  <hr>
  <footer-component footer-text="Jaderson Rodrigues - Scandiweb Test assignment" />
</template>

<script>
import axios from 'axios'

export default {
  props: {
    appUrl: {
      type: String,
      required: false,
      default: 'https://jay-product-inventory.000webhostapp.com'
    }
  },
  data() {
    return {
      navTitle: { url: '/', title: 'Product List' },
      navButtons: [
        { type: 'link', classBtn: 'secondary', name: 'ADD', url: '/add-product' },
        { type: 'button', classBtn: 'danger', name: 'MASS DELETE', event: 'send-Delete-List', id: 'delete-product-btn' }
      ],
      productList: [],
      deleteProductList: []
    }
  },
  methods: {
    loadProducts() {
      let url = this.appUrl + '/api/products'

      let config = {
        headers: {
          'Accept': 'application/json',
        }
      }

      axios.get(url, config)
        .then(response => {
          // console.log('%c Products loaded\n', 'background: #41AF41', 'Route: ' + url, response)
          this.productList = response.data
        })
        .catch(errors => {
          // console.log('%c Error loading products\n', 'background: #FEC302', 'Route: ' + url, errors.response)
        })
    },
    massDelete() {
      let url = this.appUrl + '/api/products/mass-delete'

      let config = {
        headers: {
          'Accept': 'application/json',
        }
      }

      let formData = new FormData()

      let deleteList = this.deleteProductList.reduce((prev, next) => prev == '' ? next : `${prev},${next}`, '')

      console.log(deleteList);

      this.deleteProductList = []

      formData.append('delete-list', deleteList);

      axios.post(url, formData, config)
        .then(response => {
          // console.log('%c Products deleted\n', 'background: #41AF41', 'Route: ' + url, response)
          this.loadProducts()
        })
        .catch(errors => {
          // console.log('%c Error deleting products\n', 'background: #FEC302', 'Route: ' + url, errors.response)
          this.loadProducts()
        })

    }
  },
  mounted() {
    this.loadProducts()
  }
}
</script>