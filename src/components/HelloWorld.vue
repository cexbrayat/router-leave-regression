<template>
  <h1>Hello</h1>
  <RouterLink to="/other">Trigger leave guard</RouterLink>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    const saved = ref(false);
    onBeforeRouteLeave((to, from, next) => {
      if (!saved.value) {
        const confirmation = confirm('Are you sure you want to leave the current page?');
        if (!confirmation) {
          next(false);
        } else {
          next();
        }
      }
    });
  }
}
</script>
