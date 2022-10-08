import MyHeader from './Header.vue';

export type User = { user: { name: string; wallet: string; }};

export default {
  title: 'Design_System/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export type PagesArgs = & User;

const Template = (args: PagesArgs) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});

type T = ReturnType<typeof LoggedIn>;

export interface K extends T {
  args: {
    user: {
      wallet: string;
    } | null;
  }
}


(LoggedIn as unknown as K).args = {
  user: {
    wallet: 'EQ...0-',
  },
};

export const LoggedOut = Template.bind({});
(LoggedOut as unknown as K).args = {
  user: null,
};
