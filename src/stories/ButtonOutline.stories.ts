import ButtonOutline from '../components/ButtonOutline.vue';

export default {
  title: 'Example/ButtonOutline',
  component: ButtonOutline,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: {
  primary: boolean;
  label: string;
}) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ButtonOutline },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    console.log(args);
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ButtonOutline v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary({
  primary: true,
  label: 'Button',
});