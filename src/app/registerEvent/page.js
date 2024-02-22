"use client";

import React, { useState } from 'react';
import { payU_Key, payU_Action } from '../_util/constants';

const HomePage = () => {
  const [message, setMessage] = useState('');
  const [txnId, setTxnId] = useState('');
  const [amount, setAmount] = useState(0);
  const [productinfo, setProductinfo] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [surl, setSurl] = useState('');
  const [furl, setFurl] = useState('');
  const [hash, setHash] = useState('');

  const handleClick = (event) => {

    event.preventDefault();

    // setTxnId('TXN-E-2-1-1708601584453');
    // setAmount(236);
    // setProductinfo('EGPT-2-1-3-236');
    // setFirstname('Ashwin S');
    // setEmail('cb.en.u4cse21008@cb.students.amrita.edu');
    // setPhone('695959595');
    // setSurl('http://localhost:3002/trasactions/verify/TXN-E-2-1-1708601584453');
    // setFurl('http://localhost:3002/trasactions/verify/TXN-E-2-1-1708601584453');
    // setHash('02671c765063ab142c63545ca486f3534d7c621db72d243d27d5e16f55b50298e2a0be1fbd332c5ced0696a727411215520adc1d295216592333ba9d271ea7dd')

    // const txnId = 'TXN-E-2-1-1708601584453';
    // const amount = 236;
    // const productinfo = 'EGPT-2-1-3-236';
    // const firstname = 'Ashwin S';
    // const email = 'cb.en.u4cse21008@cb.students.amrita.edu';
    // const phone = '695959595';
    // const surl = 'http://localhost:3002/trasactions/verify/TXN-E-2-1-1708601584453';
    // const furl = 'http://localhost:3002/trasactions/verify/TXN-E-2-1-1708601584453';
    // const hash = '02671c765063ab142c63545ca486f3534d7c621db72d243d27d5e16f55b50298e2a0be1fbd332c5ced0696a727411215520adc1d295216592333ba9d271ea7dd';

    // console.log("test button");
    const payUData = {
        key: payU_Key,
        txnid: txnId,
        amount: amount,
        productinfo: productinfo,
        firstname: firstname,
        email: email,
        phone: phone,
        surl: surl,
        furl: furl,
        hash: hash
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


  };

  return (
    <div className='flex items-centre justify-center'>
    <div className='mx-auto my-auto'>
      <input type='text' onChange={(event) => setTxnId(event.target.value)} placeholder='paste txnId'/>
      <input type='text' onChange={(event) => setAmount(parseInt(event.target.value))} placeholder='paste amount'/>
      <input type='text' onChange={(event) => setProductinfo(event.target.value)} placeholder='paste productinfo'/>
      <input type='text' onChange={(event) => setFirstname(event.target.value)} placeholder='paste firstname'/>
      <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='paste email'/>
      <input type='text' onChange={(event) => setPhone(event.target.value)} placeholder='paste phone'/>
      <input type='text' onChange={(event) => setSurl(event.target.value)} placeholder='paste surl'/>
      <input type='text' onChange={(event) => setFurl(event.target.value)} placeholder='paste furl'/>
      <input type='text' onChange={(event) => setHash(event.target.value)} placeholder='paste hash'/>
      <div className='bg-red-500 h-fit w-fit'>
        <input type='submit' onClick={(event) => handleClick(event)}/>
      </div>
      <p className='mx-auto my-auto'>{message}</p>
    </div>
    </div>
  );
};

export default HomePage;
