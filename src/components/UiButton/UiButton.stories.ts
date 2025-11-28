import { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false
  },
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: '<UiButton v-bind="args">Текст кнопки</UiButton>',
  }),
};

export const Secondary: StoryObj<typeof UiButton> = {
  args: {
    layout: 'secondary'
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: '<UiButton v-bind="args">Вторичная кнопка</UiButton>',
  }),
};

export const Disabled: StoryObj<typeof UiButton> = {
  args: {
    isDisabled: true
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: '<UiButton v-bind="args">Отключенная кнопка</UiButton>',
  }),
};