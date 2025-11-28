import UiField from "../components/UiField/UiField.vue";  // ← добавить /UiField/
import UiInput from "../components/UiInput/UiInput.vue";  // ← добавить /UiInput/

const meta = {
  component: UiField,
  args: {
    label: 'E-mail'
  }
};

export default meta;

export const WithInput = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="example@mail.com" />
      </UiField>
    `,
  }),
};