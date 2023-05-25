<template>
  <div class="row m-3">
    <div :class="`col-sm-${labelSize}`">
      <label :for="id" class="col-form-label">{{ label }}</label>
    </div>
    <div :class="`col-sm-${inputSize}`">
      <input :type="inputType" :id="id" :name="id" class="form-control" :required="isRequired">
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelSize: {
      type: Number,
      required: false,
      default: 2
    },
    inputSize: {
      type: Number,
      required: false,
      default: 3
    },
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>