import UiInput from "../components/UiInput/UiInput.vue";  // ← добавить /UiInput/

const meta = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст',
    isDisabled: false
  },
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

export const Default = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: '<UiInput v-bind="args" />',
  }),
};

export const Disabled = {
  args: {
    isDisabled: true,
    placeholder: 'Отключенное поле'
  }
};