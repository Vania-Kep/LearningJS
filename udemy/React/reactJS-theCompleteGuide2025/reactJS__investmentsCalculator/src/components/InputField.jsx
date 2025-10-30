import { useState } from "react";

export default function InputField({label, name, type = 'text', initialValue = 0, onInputChange}) {
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event) => {
        var newValue = +event.target.value;

        if (newValue < 1) {
            // Show error message
            setErrorMsg('Value cannot be negative or zero.');

            return;
        }

        setErrorMsg('');
        onInputChange(name, newValue);
    };

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} defaultValue={initialValue} onChange={handleInputChange}/>
            <p className={"error-text " + (errorMsg ? 'show': '')}>{errorMsg}</p>
        </div>
    );
}