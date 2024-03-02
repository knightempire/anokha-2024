"use client";

import React, { useState } from 'react';
import { BUY_PASSPORT_DUMMY_PAGE_URL } from '../_util/constants';
import { payU_Key, payU_Action } from '../_util/constants';

const HomePage = () => {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleClick = async () => {

    const response = await fetch(BUY_PASSPORT_DUMMY_PAGE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    
    if (response.status === 200) {
        const data = await response.json();
        const payUData = {
            key: payU_Key,
            txnid: data["txnid"],
            amount: data["amount"],
            productinfo: data["productinfo"],
            firstname: data["firstname"],
            email: data["email"],
            phone: data["phone"],
            surl: data["surl"],
            furl: data["furl"],
            hash: data["hash"]
        }
    
        const payUForm = document.createElement('form');
        payUForm.method = 'post';
        payUForm.action = payU_Action;
    
        for (const key in payUData) {
            if (payUData.hasOwnProperty(key)) {
                const hiddenField = document.createElement('input');
                hiddenField.type = 'hidden';
                hiddenField.name = key;
                hiddenField.value = payUData[key];
    
                payUForm.appendChild(hiddenField);
            }
        }
    
        document.body.appendChild(payUForm);
    
        payUForm.submit();
    
    
    
        setMessage('Called PayU API to make payment.');

    } else {
        console.log('Error');
    }

  };

  return (
    <div className='flex items-centre justify-center'>
    <div className='mx-auto my-auto'>
      <input onChange={(event) => setToken(event.target.value)} placeholder='paste auth token'></input>
      <div className='bg-red-500'>
        <button onClick={handleClick}>Click me</button>
      </div>
      <p className='mx-auto my-auto'>{message}</p>
    </div>
    </div>
  );
};

export default HomePage;
