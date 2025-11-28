<template>
  <button 
    :class="$style.button" 
    :data-layout="props.layout" 
    :data-disabled="props.isDisabled"
    :disabled="props.isDisabled" 
    :type="props.type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'click'): void
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false
})

const emit = defineEmits<IEmit>()

const handleClick = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not([data-disabled="true"]) {
    background: var(--color-primary-dark);
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background-color: var(--color-white);
    border-color: var(--color-primary);

    &:hover:not([data-disabled="true"]) {
      background: var(--color-gray-light);
    }
  }

  &[data-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>