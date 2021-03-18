import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];
};


/* Usage:
1- import "useForm".
2- const[formValues, handleInputChange] = useForm({
        (NAME OF INPUT): ''
    }).
    the destructuring can be useful instead of "formValues" use {KEY OF THE OBJECT}
3- Add the (name='') to the input.
4- Use the "reset()" to restore the initial value and clean up the input
*/ 
