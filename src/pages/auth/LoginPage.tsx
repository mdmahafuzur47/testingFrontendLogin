// src/Login.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginUserMutation } from '../../queries/auth/hooks';

const LoginPage: React.FC = () => {
    const {mutateAsync,isPending} = useLoginUserMutation()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit =async (event: React.FormEvent) => {
        event.preventDefault();
       const data = {
        email,
        password
       }

       try{
        const res = await mutateAsync(data);
        if("errors" in res){
            console.log(res);
            return;
        }
        console.log(res)
       }catch(e){
        console.log(e)
       }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        disabled={isPending}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isPending ? "Loading...": "Login"}
                    </button>
                </form>

                <div className='mt-5'>
                    <Link to={"/register"}>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
