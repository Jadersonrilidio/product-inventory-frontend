<template>
  <input-component label-size="2" input-size="3" label="Size (MB)" input-type="number" id="size" is-required="true">
    <div class="col-sm-6 invalidClass" v-show="errorInputObj.size.show">
      {{ errorInputObj.size.message }}
    </div>
  </input-component>

  <div class="row m-3 mt-5">
    <p>"Please provide DVD-disc size megabytes (MB)"</p>
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