"use client";

import React, { useState } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleClick = async () => {

    //const token = 'v4.public.eyJzdHVkZW50RW1haWwiOiJkaGFybWFwcmF2YXJkaGFuYTdAZ21haWwuY29tIiwic3R1ZGVudElkIjozLCJzZWNyZXRfa2V5IjoiZTc0NjVmMjBiMTMzZDI5NDM4MmQxZjUyZGRlMGNmOTQ5OTRjNzYyYTYzZDc5NjcwNGQ1NWVlOWY3YTE4NDZiZTg4Yzg1MzFjYzBlMWY2MGY1Y2VhMTYyMDAzNzQ0YmJmMmNjYTViMTNkMzhkYWRmNzFkYjI1NDRjNjRkNzhmZTQ5ZTQ0YWJmZWM4MDk0ZjMzNzExN2JhNWIwMTYwZmI2NWRkOTE0ZThiMTRiOGFiMTBiZjQ0ZTE0MThkNzlkYzliNzg1OTdhMGIyYTdjZTQyMDYwOTA2MTNkOGY3NmUzMTFiMmFiZGQ2NDliZmI0ODNiM2I1MzEyOGFhNWUyNzAwMmE2NmFhODg4YWZkM2IyYmI0YTE2MjU3OTBkZGQ0NTZhY2IxYTc3YzJiOGE3M2Y1ODE2Y2IxMTk2ODM2M2EzMDAzMmNlMGIzZDkwYmE0NjZiNTFhODVjZTMwNmU2ZWIwMzBjMDk1ZGIyYzYyODZjMGE2MjkzOWYxMDU2ZTdlZDQ3N2NiOWYxNTQ1MDQ1MjUzOWVhMzc1NmE5ZjQwYTE2YjU0ZjUwMTY4MDUyODg0MmYyZjQzNmE2ODQzMzdiZDg1NjE3OWNmMGE4ZDllNzFmYzZjOTEzMzFmMWZkNjAwNmQ2MmFkMjQyOTc4YTI1MjI0NTVhMzFmODYzZWM4MWNkYzhhZWZkM2VhZGI0MmIwMDM2YzFhZWExNzZhN2VhIiwiaWF0IjoiMjAyNC0wMi0yMVQxNzoxODozNy45OThaIiwiZXhwIjoiMjAyNC0wMi0yMVQxOToxODozNy45OThaIn1YSETGn2TycBNgV2Ebdy3lQc9QAYarFeaK3_HiE8AuxSkE3KdmvH-ZkM_hmuo9P4KGE2qZIaIJby3h8OtxtpID' 
    const response = await fetch('http://localhost:5000/api/user/buyPassport', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const payUKey = 'gtKFFx';
    //const payUKey = 'ypfBaj';

    if (response.status === 200) {
        const data = await response.json();
        const payUData = {
            key: payUKey,
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
        payUForm.action = 'https://test.payu.in/_payment';
        //payUForm.action = 'https://secure.payu.in/_payment';
    
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
