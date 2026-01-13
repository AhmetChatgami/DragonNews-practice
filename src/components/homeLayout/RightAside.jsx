import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightAside = () => {
    return (
        <div>
            <SocialLogin className="space-y-8"></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightAside;