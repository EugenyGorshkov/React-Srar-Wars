import UiLoading from './UiLoading';

export default {
    title: 'Ui-Kit/Ui-Loading',
    component: UiLoading
}

const Template = (args) => <UiLoading {...args}/>;

const props = {
    theme: 'dark',
    isShadow: false,
    classes: '',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light',
    isShadow: true
}

export const Black = Template.bind({});

Black.args = {
    ...props,
    theme: 'black'
}

export const Blue = Template.bind({});

Blue.args = {
    ...props,
    theme: 'blue'
}

