<template>
  <div class="col-md-3 px-4 py-2">
    <div class="card p-4">
      <div class="card-block mb-3">
        <slot name="deleteCheckbox"></slot>
        <p class="card-text text-center">{{ product.sku }}</p>
        <p class="card-text text-center">{{ product.name }}</p>
        <p class="card-text text-center">{{ product.price }}</p>
        <p class="card-text text-center">{{ product.specific_attribute }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  emits: [
    'add-To-Delete-List'
  ],
  methods: {
    emitEvent() {
      this.$emit('add-To-Delete-List', product.sku)
    }
  }
}
</script>