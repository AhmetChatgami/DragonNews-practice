import React from 'react';
import classRoom from '../../assets/class.png'
import playground from '../../assets/playground.png'
import swimming from '../../assets/swimming.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='bg-base-100 p-3'>Qzone bili</h2>

            <div className='space-y-4 mt-4'>
                <img src={classRoom} alt="" />
                <img src={playground} alt="" />
                <img src={swimming} alt="" />
            </div>
        </div>
    );
};

export default Qzone;