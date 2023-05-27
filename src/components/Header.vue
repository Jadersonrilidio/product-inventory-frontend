<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container mt-2">
      <div>
        <router-link class="navbar-brand" :to="navTitle.url">{{ navTitle.title }}</router-link>
      </div>

      <div>
        <div class="navbutton" v-for="item in navButtons" :key="item.name">
          <router-link class="navbar-item btn btn-sm" :class="`btn-${item.classBtn}`" :to="item.url"
            v-if="item.type == 'link'">
            {{ item.name }}
          </router-link>

          <button type="button" class="btn btn-sm" :class="`btn-${item.classBtn}`" :id="item.id" @click="emitEvent(item.event)"
            v-if="item.type == 'button'">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navTitle: {
      type: Object,
      required: false,
      default: { url: '/', title: 'Product Inventory' }
    },
    navButtons: {
      type: Array,
      required: false,
      default: []
    }
  },
  emits: [
    'send-Delete-List',
    'submit-form'
  ],
  methods: {
    emitEvent(eventName) {
      this.$emit(eventName)
    }
  }
}
</script>