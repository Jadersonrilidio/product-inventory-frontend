<template>
  <form id="product_form">
    <input-component label-size="2" input-size="3" label="SKU" input-type="text" id="sku" is-required="true">
      <div class="col-sm-6 invalidClass" v-show="errorInputObj.sku.show">
        {{ errorInputObj.sku.message }}
      </div>
    </input-component>

    <input-component label-size="2" input-size="3" label="Name" input-type="text" id="name" is-required="true">
      <div class="col-sm-6 invalidClass" v-show="errorInputObj.name.show">
        {{ errorInputObj.name.message }}
      </div>
    </input-component>

    <input-component label-size="2" input-size="3" label="Price" input-type="number" id="price" is-required="true">
      <div class="col-sm-6 invalidClass" v-show="errorInputObj.price.show">
        {{ errorInputObj.price.message }}
      </div>
    </input-component>

    <div class="row m-3 mt-5 mb-5">
      <div class="col-sm-2">
        <label for="productType" class="col-form-label">Type Switcher</label>
      </div>
      <div class="col-sm-3">
        <select class="form-select" id="productType" name="type" v-model="productType" required>
          <option disabled> -- </option>
          <option v-for="type in productTypes" :key="productType" :id="type" :value="type">{{ type }}</option>
        </select>
      </div>

      <div class="col-sm-6 invalidClass" v-show="errorInputObj.type.show">
        {{ errorInputObj.type.message }}
      </div>
    </div>

    <div style="min-height:300px">
      <component :is="activeComponent" :error-input-obj="errorInputObj"></component>
    </div>
  </form>
</template>
  
<script>
import axios from 'axios'

export default {
  props: {
    appUrl: {
      type: String,
      required: false,
      default: 'https://jay-product-inventory.000webhostapp.com'
    },
    errorInputObj: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productType: null,
      productTypes: []
    }
  },
  methods: {
    loadProductTypes() {
      let url = this.appUrl + '/api/products/type'

      let config = {
        headers: {
          'Accept': 'application/json',
        }
      }

      axios.get(url, config)
        .then(response => {
          // console.log('%c Product types loaded\n', 'background: #41AF41', 'Route: ' + url, response)
          this.productTypes = response.data
        })
        .catch(errors => {
          // console.log('%c Error loading product types\n', 'background: #FEC302', 'Route: ' + url, errors)
        })
    }
  },
  computed: {
    activeComponent() {
      return this.productType ? `${this.productType.toLowerCase()}-form-attributes` : null
    }
  },
  mounted() {
    this.loadProductTypes()
  }
}
</script>