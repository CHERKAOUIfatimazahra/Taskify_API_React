import { register } from '../API/Auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import Alert from '../components/Alert';
import '../App.css';
// import { Button, Spinner } from 'flowbite-react';

import Input from '../components/Input';
import Button from '../components/Button';

const Register = ({ isLoggedIn, setIsLoggedIn, setEmail }) => {
    const navigate = useNavigate();

    const [registering, setRegistring] = useState(false);
    const [values, setValues] = useState({ name: '', email: '', password: '', password_confirmation: '' });
    const [inputsStyle, setInputsStyle] = useState({ name: '', email: '', password: '', password_confirmation: '' });
    const [valuesError, setValuesError] = useState({
        errors: [],
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        console.log("is logged in : " + isLoggedIn);
        if (isLoggedIn) navigate('/');
    }, [values, inputsStyle, valuesError, isLoggedIn, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setRegistring(() => true);

        try {
            const response = await register(values.name, values.email, values.password, values.password_confirmation);
            console.log(response, "response")
            if (!response.data.status) {
                setValuesError({ ...valuesError, errors: response.data.errors });
            } else {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', values.email);
                localStorage.setItem('name', values.name);
                setIsLoggedIn(true);
                setEmail(values.email);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
        setRegistring(() => false);
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setValuesError({ ...valuesError, [event.target.name]: '' });
        testRegExp(event.target);
    };

    const testRegExp = (target) => {
        if (target.name === 'name') {
            if (!/^[a-zA-Z\s]*$/.test(target.value)) {
                setValuesError({ ...valuesError, [target.name]: 'Please enter a valid name' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-red-500' });
            } else {
                setValuesError({ ...valuesError, [target.name]: '' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-green-500' });
            }
        }

        if (target.name === 'email') {
            if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(target.value)) {
                setValuesError({ ...valuesError, [target.name]: 'Please enter a valid email' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-red-500' });
            } else {
                setValuesError({ ...valuesError, [target.name]: '' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-green-500' });
            }
        }

        if (target.name === 'password') {
            if (target.value.length < 8) {
                setValuesError({ ...valuesError, [target.name]: 'The password must be 8 characters or longer' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-red-500' });
            } else {
                setValuesError({ ...valuesError, [target.name]: '' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-green-500' });
            }
        }

        if (target.name === 'password_confirmation') {
            if (target.value !== values.password) {
                setValuesError({ ...valuesError, [target.name]: 'The confirmation must match the password' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-red-500' });
            } else {
                setValuesError({ ...valuesError, [target.name]: '' });
                setInputsStyle({ ...inputsStyle, [target.name]: 'border-2 border-green-500' });
            }
        }
    }

    return (
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <AppLogo />
          </span>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign up to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <Alert
                    valuesError={valuesError}
                    isAlert={valuesError.errors.length > 0}
                />

<Input
        label="username"
        name="name"
        type="text"
        placeholder="username"
        value={values.name}
        onChange={handleChange}
        error={valuesError.name}
      />

<Input
        label="Your email"
        name="email"
        type="email"
        placeholder="name@gmail.com"
        value={values.email}
        onChange={handleChange}
        error={valuesError.email}
      />


<Input
        label="password"
        name="password"
        type="password"
        placeholder="*******"
        value={values.password}
        onChange={handleChange}
        error={valuesError.password}
      />

<Input
        label="password confirmation"
        name="password_confirmation"
        type="password"
        placeholder="*******"
        value={values.password_confirmation}
        onChange={handleChange}
        error={valuesError.password_confirmation}
      />



        <Button
          type="submit"
          textContent="Sign up"
          isLoading={registering}
        />

                <p class="text-sm font-light text-gray-500">
                  You Have An Account! {' '}
                  <Link
                    to="/login"
                    class="font-medium text-primary-600 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Register;