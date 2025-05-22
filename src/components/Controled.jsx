import React, { useState } from 'react';
import TextInput from './common/TextInput';

const Controled = () => {
    const initialData = {
        name: "",
        email: "",
        password: "",
    };
    const [formValue, setFormValue] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue(oldValue => ({
            ...oldValue,
            [name]: value,
        }));

        setErrors(oldErrors => ({
            ...oldErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formValue.name) {
            newErrors.name = "Name is required";
        }
        if (!formValue.email) {
            newErrors.email = "Email is required";
        }
        if (!formValue.password) {
            newErrors.password = "Password is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log('Form Data:', formValue);
        setFormValue({ name: '', email: '', password: '' });
        setErrors({});
    };

    return (
        <div className="p-4 max-w-[640px] mx-auto mt-10 shadow-2xl">
            <h2 className="text-4xl font-bold pb-10">Form with Inline Validation</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-6">
                    <TextInput
                        type="text"
                        name="name"
                        value={formValue.name}
                        onChange={handleChange}
                        placeholder="Name"/>
                    {errors.name ? <p>{errors.name}</p> : null}</div>
                <div className="mb-6">
                    <TextInput
                        type="email"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange}
                        placeholder="Email"/>
                    {errors.email ? <p>{errors.email}</p> : null}</div>
                <div className="mb-6">
                    <TextInput
                        type="password"
                        name="password"
                        value={formValue.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    {errors.password ? <p>{errors.password}</p> : null}
                </div>

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 max-w-[100px]"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
      
    );
};

export default Controled;
