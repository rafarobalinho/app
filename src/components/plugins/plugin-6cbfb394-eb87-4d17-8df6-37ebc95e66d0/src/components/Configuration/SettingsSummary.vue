<template>
  <span class="body-2">{{ getDeveloperToken() ? 'Developer token set' : 'No developer token yet' }}</span>
</template>

<script>
export default {
  props: {
    settings: {type: Object, required: true},
  },
  methods: {
    getDeveloperToken() {
      return !!this.settings.publicData.developerToken;
    }
  },
};
</script>
