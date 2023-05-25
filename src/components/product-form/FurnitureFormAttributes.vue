<template>
  <input-component label-size="2" input-size="3" label="Height (cm)" input-type="number" id="height" is-required="true">
    <div class="col-sm-6 invalidClass" v-show="errorInputObj.height.show">
      {{ errorInputObj.height.message }}
    </div>
  </input-component>

  <input-component label-size="2" input-size="3" label="Width (cm)" input-type="number" id="width" is-required="true">
    <div class="col-sm-6 invalidClass" v-show="errorInputObj.width.show">
      {{ errorInputObj.width.message }}
    </div>
  </input-component>

  <input-component label-size="2" input-size="3" label="Length (cm)" input-type="number" id="length" is-required="true">
    <div class="col-sm-6 invalidClass" v-show="errorInputObj.length.show">
      {{ errorInputObj.length.message }}
    </div>
  </input-component>

  <div class="row m-3 mt-5">
    <p>"Please provide dimensions in the format <b>HxWxL</b> in centimeters (cm)"</p>
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