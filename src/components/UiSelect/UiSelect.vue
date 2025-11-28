<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :data-disabled="props.isDisabled"
    class="ui-select"
    @change="handleChange"
  >
    <option
      v-for="option in props.options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string
  isDisabled?: boolean
  options: string[]
}

interface IEmit {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  options: () => ['Опция 1', 'Опция 2', 'Опция 3']  // ← ИСПРАВИТЬ НА НОРМАЛЬНЫЙ ТЕКСТ
})

const emit = defineEmits<IEmit>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.ui-select {
  padding: 8px 12px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-white);
}

.ui-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-light);
}

.ui-select[data-disabled="true"] {
  background-color: var(--color-gray-light);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>