<template>
  <header-component :nav-title="navTitle" :nav-buttons="navButtons" @submit-form="addProduct" />
  <hr>
  <div class="container">
    <product-form-component :error-input-obj="errorInputs"></product-form-component>
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
      navTitle: { url: '/add-product', title: 'Product Add' },
      navButtons: [
        { type: 'button', classBtn: 'primary', name: 'Save', event: 'submit-Form' },
        { type: 'link', classBtn: 'danger', name: 'Cancel', url: '/' }
      ],
      skuList: [],
      errorInputs: {
        sku: { show: false, message: '' },
        name: { show: false, message: '' },
        price: { show: false, message: '' },
        type: { show: false, message: '' },
        size: { show: false, message: '' },
        weight: { show: false, message: '' },
        height: { show: false, message: '' },
        width: { show: false, message: '' },
        length: { show: false, message: '' }
      },
      messages: {
        requiredData: 'Please, submit required data',
        invalidTypeData: 'Please, provide the data of indicated type'
      }
    }
  },
  methods: {
    loadSkuList() {
      let url = this.appUrl + '/api/products/sku'

      let config = {
        headers: {
          'Accept': 'application/json',
        }
      }

      axios.get(url, config)
        .then(response => {
          // console.log('%c SKU list loaded\n', 'background: #41AF41', 'Route: ' + url, response)
          this.skuList = response.data
        })
        .catch(errors => {
          // console.log('%c Error loading SKU list\n', 'background: #FEC302', 'Route: ' + url, errors.response)
        })
    },
    addProduct() {
      this.resetErrorInputsObject()

      let url = this.appUrl + '/api/products'

      let config = {
        headers: {
          'Accept': 'application/json',
        }
      }

      let inputs = Array.from(document.querySelectorAll('#product_form input'))
        .reduce(function (acc, input) {
          return ({ ...acc, [input.id]: input.value })
        }, {})

      inputs.type = document.querySelector('#product_form select').value

      let formData = new FormData()

      for (let key in inputs) {
        formData.append(key, inputs[key])
      }

      if (this.runInputsValidation(inputs)) {
        axios.post(url, formData, config)
          .then(response => {
            // console.log('%c Product added\n', 'background: #41AF41', 'Route: ' + url, response)
            window.location.replace('/')
          })
          .catch(errors => {
            // console.log('%c Error adding product\n', 'background: #FEC302', 'Route: ' + url, errors)
          })
      }
    },
    runInputsValidation(inputs) {
      let validation = true

      for (let key in inputs) {
        if (!this.standardValidation(key, inputs[key])) {
          validation = false
        }

        if (key === 'sku' && !this.skuValidation(inputs[key])) {
          validation = false
        }
      }

      return validation
    },
    standardValidation(key, value) {
      if (value === "") {
        this.errorInputs[key].show = true
        this.errorInputs[key].message = this.messages.requiredData
        return false
      } else if (!isNaN(value) && value <= 0) {
        this.errorInputs[key].show = true
        this.errorInputs[key].message = this.messages.invalidTypeData
        return false
      }

      return true
    },
    skuValidation(skuValue) {
      if (this.skuList.includes(skuValue)) {
        this.errorInputs.sku.show = true
        this.errorInputs.sku.message = 'SKU already exists'
        return false
      }

      if (skuValue.length > 32) {
        this.errorInputs.sku.show = true
        this.errorInputs.sku.message = 'SKU must have less than 33 characters'
        return false
      }

      return true
    },
    resetErrorInputsObject() {
      this.errorInputs = {
        sku: { show: false, message: '' },
        name: { show: false, message: '' },
        price: { show: false, message: '' },
        type: { show: false, message: '' },
        size: { show: false, message: '' },
        weight: { show: false, message: '' },
        height: { show: false, message: '' },
        width: { show: false, message: '' },
        length: { show: false, message: '' }
      }
    }
  },
  mounted() {
    this.loadSkuList()
  }
}
</script>