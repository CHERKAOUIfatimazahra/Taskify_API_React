import { login } from '../API/Auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import '../App.css';
import Alert from '../components/Alert';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = ({ isLoggedIn, setIsLoggedIn, setEmail }) => {
    const navigate = useNavigate();

    const [loggingIn, setLoggingIn] = useState(false);
    const [values, setValues] = useState({ email: '', password: '' });
    const [inputsStyle, setInputsStyle] = useState({ email: '', password: '' });
    const [valuesError, setValuesError] = useState({
        credentials: '',
        errors: [],
        email: '',
        password: ''
    });
    const [userId, setUserId] = useState(''); // New state to store user_id

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [values, inputsStyle, valuesError, isLoggedIn, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoggingIn(true);

        try {
            const response = await login(values.email, values.password);
            if (response.token) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('email', values.email);
                setUserId(response.user_id); // Set user_id state
                setIsLoggedIn(true);
                setEmail(values.email);
                navigate('/');
            } else {
                setValuesError({ ...valuesError, credentials: 'Invalid credentials' });
            }
        } catch (error) {
            console.error(error);
        }
        setLoggingIn(false);
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setValuesError({ ...valuesError, [event.target.name]: '' });
        testRegExp(event.target);
    };

    const testRegExp = (target) => {
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
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <AppLogo />
                </span>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <Alert valuesError={valuesError} />

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
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="*******"
                                value={values.password}
                                onChange={handleChange}
                                error={valuesError.password}
                            />

                            <Button
                                type="submit"
                                textContent="Sign in"
                                isLoading={loggingIn}
                            />

                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet?{' '}
                                <Link to="/register" className="font-medium text-primary-600 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
