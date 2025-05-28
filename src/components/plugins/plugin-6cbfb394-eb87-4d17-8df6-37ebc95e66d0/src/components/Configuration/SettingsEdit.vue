<template>
  <wwEditorFormRow required label="Developer Token">
    <template #append-label>
      <a class="ncscale-settings-edit__link" href="https://app.ncscale.io/connections" target="_blank">
        Create it here
      </a>
    </template>
    <div class="flex items-center">
      <wwEditorInputText
          :type="isKeyVisible ? 'text' : 'password'"
          name="developer-token"
          placeholder="ncs**************"
          @update:modelValue="changeDeveloperToken"
          class="w-full mr-3"
          :model-value="settings.publicData.developerToken"
      />
      <button class="pointer" @click.prevent="isKeyVisible = !isKeyVisible">
        <wwEditorIcon :name="isKeyVisible ? 'eye-off' : 'eye'"></wwEditorIcon>
      </button>
    </div>
  </wwEditorFormRow>
</template>

<script>
export default {
  props: {
    settings: { type: Object, required: true },
  },
  emits: ['update:settings'],
  data() {
    return {
      isKeyVisible: false,
    };
  },
  methods: {
    changeDeveloperToken(developerToken) {
      this.$emit('update:settings', {
        ...this.settings,
        publicData: {...this.settings.publicData, developerToken}
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.ncscale-settings-edit__link {
  color: var(--ww-color-blue-500);
  margin-left: var(--ww-spacing-02);
}
</style>
