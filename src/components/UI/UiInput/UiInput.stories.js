import { useState } from 'react';
import UiInput from './UiInput';

export default {
    title: 'Ui-Kit/Ui-Input',
    component: UiInput
}

const Template = (args) => {
    const [value, setValue] = useState('');

    const handleInputChange = value => setValue(value);

    return (
        <UiInput 
            {...args}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
};

const props = {
    value: '',
    handleInputChange: () => console.log('Input change'),
    crossHidden: false,
    placeholder: 'placeholder',
    classes: '',
}

export const Default = Template.bind({});

Default.args = {
    ...props
};

export const CrossHidden = Template.bind({});

Default.args = {
    ...props,
    crossHidden: true
};