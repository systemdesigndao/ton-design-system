import { within, userEvent } from '@storybook/testing-library';
import { K, PagesArgs } from './Header.stories';
import MyPage from './Page.vue';

export default {
  title: 'Design_System/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args: PagesArgs) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Here we define the `template`
  template: '<my-page :user="user" />',
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});

(LoggedIn as unknown as K).args = {
  user: {
    wallet: 'EQ...0-',
  },
};

(LoggedIn as unknown as K & { play: any }).play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};

(LoggedOut as unknown as K).args = {
  user: null,
};
