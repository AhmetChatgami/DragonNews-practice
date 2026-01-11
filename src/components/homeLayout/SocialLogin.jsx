import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-center font-semibold mb-5'>Login With Socials</h2>
            <div className='space-y-3'>
            <button className='btn btn-outline btn-secondary w-full'> <FcGoogle size={20}></FcGoogle> Login With Google</button>
            <button className='btn btn-primary btn-outline w-full'><FaGithub size={20}/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;