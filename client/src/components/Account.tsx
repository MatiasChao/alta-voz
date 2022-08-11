import React, { useState } from "react";
import Router from 'next/router';

import { withPublic } from '../hooks/route';

const Account = ({auth}: {auth: any}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageError, setMessageError] = useState('');

    const { logInWithEmail, error } = auth;

    const login = async () => {
        logInWithEmail(email, password)
            .then(() => {
                Router.push('/dashboard');
            })
            .catch((error: any)  => {
                setMessageError(error.message)
                console.log("Hubo un error al iniciar sesión ,", error)
            });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Ingresa con tú cuenta</div>
                <div className="mt-10">
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Email:</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>

                            <input
                                type="email"
                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Ingresa tú email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Contraseña:</label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                            </div>

                            <input
                                type="password"
                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Ingresa tú contraseña"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button
                            type="submit"
                            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                            onClick={() => login()}
                        >
                            <span className="mr-2 uppercase">Iniciar Sesión</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withPublic(Account);
