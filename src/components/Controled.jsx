import React, { useState } from 'react';
import TextInput from './common/TextInput';

const Controled = () => {
    const data = {
        name: "",
        email: "",
        password: "",    
        phone: "",
   };

    const [formValue, setFormValue] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue(oldValue => ({
            ...oldValue,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!", formValue); 
    };

    return (
        <div className="p-4 max-w-[940px] mx-auto card">
            <h2 className="text-4xl font-bold pb-10">Controlled Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                <TextInput
                    type="text"
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <TextInput
                    type="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <TextInput
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                    placeholder="Password"
                />

                <TextInput
                    type="number"
                    name="phone"
                    value={formValue.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 max-w-[100px] "
                >
                    Submit
                </button>
            </form>
        </div>
      
    );
};

export default Controled;
