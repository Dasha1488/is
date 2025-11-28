import UiSelect from "../components/UiSelect/UiSelect.vue";  // ← добавить /UiSelect/

const meta = {
  component: UiSelect,
  args: {
    modelValue: 'Опция 1',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false
  }
};

export default meta;

export const Default = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    template: '<UiSelect v-bind="args" />',
  }),
};