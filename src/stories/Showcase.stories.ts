import Showcase from '../components/Showcase.vue';

export default {
  title: 'Design_System/Showcase',
  component: Showcase,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: {
  primary: boolean;
  label: string;
}) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Showcase },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    console.log(args);
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Showcase v-bind="args" />',
});

export const LightTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

LightTheme({
  primary: true,
  label: 'Showcase',
});