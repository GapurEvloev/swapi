import UiGif from './index';
import gif from './gifs/gif.gif';

export default {
  title: 'Ui-Kit/UiGif',
  component: UiGif
};

const Template = (args) => <UiGif {...args} />;

const props = {
  src: gif,
  classes: '',
}

export const Default = Template.bind({});
Default.args = {
  ...props,
};
