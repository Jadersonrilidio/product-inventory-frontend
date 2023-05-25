<template>
  <div>
    <p class="text-center">{{ footerText }}</p>
  </div>
</template>
  
<script>
export default {
  props: {
    footerText: {
      type: String,
      required: false,
      default: 'Jaderson Rodrigues - Scandiweb Test assignment'
    }
  }
}
</script>