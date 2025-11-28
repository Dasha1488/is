<template>
  <input
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :data-disabled="props.isDisabled"
    class="ui-input"
    @input="handleInput"
  >
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string
  isDisabled?: boolean
  placeholder?: string
}

interface IEmit {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: 'Введите текст'  // ← ИСПРАВИТЬ НА НОРМАЛЬНЫЙ ТЕКСТ
})

const emit = defineEmits<IEmit>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.ui-input {
  padding: 8px 12px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-light);
}

.ui-input[data-disabled="true"] {
  background-color: var(--color-gray-light);
  cursor: not-allowed;
  opacity: 0.6;
}
</style>