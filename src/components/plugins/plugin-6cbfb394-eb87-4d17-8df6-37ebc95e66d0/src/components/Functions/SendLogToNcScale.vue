<template>
  <wwEditorInputRow
      label="Log message"
      type="query"
      placeholder="Enter your log message here"
      required
      :model-value="message"
      @update:modelValue="setMessage"
  />
  <wwEditorInputRow
      label="Log severity"
      type="select"
      placeholder="Select a severity"
      required
      :options="severityOptions"
      :model-value="severity"
      @update:modelValue="setSeverity"
  />
  <wwEditorInputRow
      label="Event name"
      type="query"
      placeholder="Enter an event name here"
      :model-value="eventName"
      @update:modelValue="setEventName"
  />
  <wwEditorInputRow
      label="Extra data"
      type="array"
      :model-value="extraData"
      @update:modelValue="setExtraData"
      @add-item="setExtraData([...(extraData || []), {}])"
  >
    <template #default="{ item, setItem }">
      <wwEditorInputRow
          type="query"
          :model-value="item.key"
          label="Key"
          placeholder="Enter a key"
          bindable
          small
          @update:modelValue="setItem({ ...item, key: $event })"
      />
      <wwEditorInputRow
          type="query"
          :model-value="item.value"
          label="Value"
          placeholder="Enter a value"
          bindable
          small
          @update:modelValue="setItem({ ...item, value: $event })"
      />
    </template>
  </wwEditorInputRow>

  <wwEditorInputRow
      label="Continue on error"
      type="boolean"
      :model-value="continueOnError"
      @update:modelValue="setContinueOnError"
  />
</template>

<script>
export default {
  props: {
    plugin: { type: Object, required: true },
    args: { type: Object, default: () => {} },
  },
  emits: ['update:args'],
  computed: {
    severity() {
      return this.args.severity;
    },
    message() {
      return this.args.message;
    },
    continueOnError(){
      return this.args.continueOnError || true;
    },
    severityOptions() {
      return [
        { label: 'Verbose', value: 'verbose' },
        { label: 'Info', value: 'info' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' },
        { label: 'Critical', value: 'critical' },
      ];
    },
    eventName() {
      return this.args.eventName;
    },
    extraData() {
      return this.args.extraData || [];
    },
  },
  methods: {
    setMessage(message) {
      this.$emit('update:args', { ...this.args, message });
    },
    setSeverity(severity) {
      this.$emit('update:args', { ...this.args, severity });
    },
    setContinueOnError(continueOnError) {
      this.$emit('update:args', { ...this.args, continueOnError });
    },
    setEventName(eventName) {
      this.$emit('update:args', { ...this.args, eventName });
    },
    setExtraData(extraData) {
      this.$emit('update:args', { ...this.args, extraData });
    },
  }
};
</script>
