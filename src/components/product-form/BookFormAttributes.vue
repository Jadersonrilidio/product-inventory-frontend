<template>
  <input-component label-size="2" input-size="3" label="Weight (Kg)" input-type="number" id="weight"
    is-required="true">
    <div class="col-sm-6 invalidClass" v-show="errorInputObj.weight.show">
      {{ errorInputObj.weight.message }}
    </div>
  </input-component>

  <div class="row m-3 mt-5">
    <p>"Please provide Book weight in kilograms (Kg)"</p>
  </div>
</template>

<script>
export default {
  props: {
    errorInputObj: {
      type: Object,
      required: true
    }
  }
}
</script>