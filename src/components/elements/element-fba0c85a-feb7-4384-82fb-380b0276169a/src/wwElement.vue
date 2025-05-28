<template>
  <div class="fl-ww-pv-slider">
    
    <!-- Wrapper for Tooltips & Slider (Ensures They Stay Aligned) -->
    <div class="fl-ww-pv-slider__wrapper">
      
      <!-- Min Badge (Before Slider) -->
      <Badge
        v-if="content.isLimits"
        class="fl-ww-pv-slider__badge fl-ww-pv-slider__badge--left"
        :value="content.min"
        :pt="{
          root:{
            style:{
              'background-color':this.content.globalStyle.limitBackgroundColor,
              'color':this.content.globalStyle.limitTextColor
            }
          }
        }"
      />

      <div class="fl-ww-pv-slider__slider-container">
        
        <!-- Tooltips for Single & Range Sliders -->
        <div 
          v-if="content.isTooltip && !isRange" 
          :style="[tooltipStyle, { left: 'var(--tooltip-position-start)' }]" 
          class="fl-ww-pv-slider__tooltip"
        >
          {{ value }}
        </div>

        <template v-if="content.isTooltip && isRange">
          <div 
            :style="[tooltipStyle, { left: 'var(--tooltip-position-start)' }]" 
            class="fl-ww-pv-slider__tooltip"
          >
            {{ value[0] }}
          </div>
          <div 
            :style="[tooltipStyle, { left: 'var(--tooltip-position-end)' }]" 
            class="fl-ww-pv-slider__tooltip"
          >
            {{ value[1] }}
          </div>
        </template>

        <!-- The Slider (Now Inside the Same Wrapper as Tooltips) -->
        <Slider 
          v-model="value"
          :step="content.step"
          :range="isRange"
          :min="content.min"
          :max="content.max"
          :class="{ editing: isEditing }"
          :pt="{
            range: {
              style:{
                'background-color':this.content.globalStyle.rangeBackgroundColor
              }
            },
            handle: {
              style:{
                'background-color':this.content.globalStyle.selectorBorderColor
              }
            },
            startHandler: {
              style:{
                'background-color':this.content.globalStyle.selectorBorderColor
              }
            },
            endHandler: {
              style:{
                'background-color':this.content.globalStyle.selectorBorderColor
              }
            }
          }"
          @update:modelValue="handleManualInput"
        />
      </div>

      <!-- Max Badge (After Slider) -->
      <Badge 
        v-if="content.isLimits"
        class="fl-ww-pv-slider__badge fl-ww-pv-slider__badge--right"
        :value="content.max"
        :pt="{
          root:{
            style:{
              'background-color':this.content.globalStyle.limitBackgroundColor,
              'color':this.content.globalStyle.limitTextColor
            }
          }
        }" />

    </div>

  </div>
</template>



<script>
import { computed, watch } from 'vue';
import Slider from 'primevue/slider';
import Badge from 'primevue/badge';
// import InputText from 'primevue/inputtext';
import PrimeVue from 'primevue/config'
import Noir from './Noir.js';

export default {
  beforeCreate: function () {
    this.$.appContext.app.use(PrimeVue, {
        unstyled:false,
        theme: {
            preset: Noir,
            options: {
                prefix: 'p',
                // darkModeSelector: '.p-dark',
                cssLayer: false,
            }
        }
    })
    this.$.appContext.app.component('Slider', Slider)
    this.$.appContext.app.component('Badge', Badge)
    // this.$.appContext.app.component('InputText', InputText)
  },
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
  },
  emits: ['trigger-event'],
  setup(props) {
    const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'value',
      type: props.content.isRange ? 'array' : 'number',
      defaultValue: computed(() => {
        if (props.content.isRange) {
          return Array.isArray(props.content.value)
            ? props.content.value.map((val) => Number(val) || 0)
            : [20, 60];  // Default range
        } else {
          return isNaN(props.content.value) ? 30 : Number(props.content.value);  // Default single value
        }
      }),
    });

    return { variableValue, setValue };
  },
  computed: {
      isEditing() {
        return false;
      },
      isRange() {
        return this.content.isRange ? this.content.isRange : false;
      },
      value() {
        return this.variableValue;
      },
      cssVars() {
        let ratioStart, ratioEnd;
        const min = Number(this.content.min) || 0;
        const max = this.content.max!==undefined ? Number(this.content.max) : 100;

        if (this.isRange && Array.isArray(this.value)) {
          ratioStart = ((this.value[0] - min) / (max - min)) * 100;
          ratioEnd = ((this.value[1] - min) / (max - min)) * 100;
        } else {
          const singleValue = this.value!==undefined ? Number(this.value) : min; // Ensure single value mode works
          ratioStart = ((singleValue - min) / (max - min)) * 100;
          ratioEnd = ratioStart; // Single value mode, both positions are the same
        }

        return {
          "--tooltip-position-start": `${ratioStart}%`,
          "--tooltip-position-end": `${ratioEnd}%`,
          "--selector-background": this.content.globalStyle.selectorBackgroundColor,
          "--text-color": this.content.globalStyle.textColor,
        };
      },
      tooltipStyle() {
        let ratioStart, ratioEnd;
        const min = Number(this.content.min) || 0;
        const max = this.content.max!==undefined ? Number(this.content.max) : 100;

        if (this.isRange && Array.isArray(this.value)) {
          ratioStart = (this.value[0] - min) / (max - min);
          ratioEnd = (this.value[1] - min) / (max - min);
        } else {
          const singleValue = this.value!==undefined ? Number(this.value) : min;
          ratioStart = (singleValue - min) / (max - min);
          ratioEnd = ratioStart; // Single value mode
        }

        return {
          fontSize: this.content.globalStyle.fontSize,
          fontFamily: this.content.globalStyle.fontFamily,
          "--tooltip-background": this.content.globalStyle.tooltipBackground,
          "--tooltip-text-color": this.content.globalStyle.tooltipTextColor,
          "--tooltip-position-start": `${ratioStart * 100}%`,
          "--tooltip-position-end": `${ratioEnd * 100}%`
        };
      }
  },
  watch: {
      'content.value'(newValue) {

          let parsedVal;

          if (this.isRange) {
              // Ensure it's always an array for range mode
              parsedVal = Array.isArray(newValue)
                  ? newValue.map((val) => {
                      const floatVal = parseFloat(val);
                      return isNaN(floatVal) ? 0 : floatVal;
                  })
                  : [20, 60]; // Default range value if invalid
          } else {
              // Ensure it's always a number for single slider mode
              const floatVal = parseFloat(newValue);
              parsedVal = isNaN(floatVal) ? 30 : floatVal;
          }

          // Prevent unnecessary updates
          if (JSON.stringify(parsedVal) === JSON.stringify(this.value)) return;

          this.setValue(parsedVal);
          this.$emit('trigger-event', { name: 'initValueChange', event: { value: parsedVal } });
      }
  },
  methods: {
    handleManualInput(newValue) {

      let formattedValue;
      
      if (this.isRange) {
        formattedValue = Array.isArray(newValue)
          ? newValue.map((val) => Number(val) || 0)
          : [20, 60];
      } else {
        formattedValue = isNaN(newValue) ? 30: Number(newValue);
      }

      if (JSON.stringify(formattedValue) === JSON.stringify(this.value)) return;

      this.setValue(formattedValue);
      this.$emit("trigger-event", { name: "change", event: { value: formattedValue } });
    }
  }
};
</script>

<style lang="scss" scoped>
.fl-ww-pv-slider {
    position: relative;
    width: 100%;
    font-family: inherit;
    border: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Wrapper for Min Badge, Slider, and Max Badge (Inline) */
.fl-ww-pv-slider__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensures min/max stay on either side */
    gap: 10px;
}

/* Ensure Slider Stretches Fully */
.fl-ww-pv-slider__slider-container {
    flex-grow: 1; /* Makes slider take up the available space */
    position: relative;
}

/* PrimeVue Slider Full Width */
.fl-ww-pv-slider__slider-container > .p-slider {
    width: 100%;
}

/* Tooltip Styling */
.fl-ww-pv-slider__tooltip {
    visibility: visible;
    background-color: var(--tooltip-background);
    color: var(--tooltip-text-color);
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 20;
    top: -7px; /* Move closer to draggable ball */
    transform: translateX(-50%) translateY(-100%);
}

/* Tooltip Positions (Now Correctly Inside the Slider Container) */
.fl-ww-pv-slider__tooltip:first-child {
    left: var(--tooltip-position-start);
}

.fl-ww-pv-slider__tooltip:last-child {
    left: var(--tooltip-position-end);
}

/* Min & Max Badges (Kept Inline for Proper Alignment) */
.fl-ww-pv-slider__badge {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap; /* Prevents the badge from wrapping */
}

.p-slider-range {
  background-color:red !important;
}

</style>