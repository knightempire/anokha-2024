"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import WebGLApp from "@/app/bg/WebGLApp";
import Lottie from 'react-lottie';
import { VERIFY_TRANSACTIONS_URL } from "@/app/_util/constants";
import animationData from '@/app/_util/lotties/transactionVerify';

export default function PaymentVerify() {

    const { txnId } = useParams();
    const router = useRouter();

    useEffect(() => {
        fetch(VERIFY_TRANSACTIONS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"transactionId":txnId})
        }).then(res => {
            if (res.status === 200) {
                setTimeout(() => {
                    router.push("/events/register_team/success");
                }, 4000);
            } else if (res.status === 201) {
                setTimeout(() => {
                    router.push("/events/register_team/failure");
                }, 4000);
            } else {
                setTimeout(() => {
                    router.push("/events/register_team/pending");
                }, 4000);
            }
        }).catch(err => {
            console.log(err);
            router.push('/event/register/pending')
        });
    }, [router, txnId]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [webGLColors, setWebGLColors] = useState({
        color1: [43 / 255, 30 / 255, 56 / 255],
        color2: [11 / 255, 38 / 255, 59 / 255],
        color3: [15 / 255, 21 / 255, 39 / 255],
    });

    return (
        <main className="flex min-h-screen flex-col bg-[#192032]">
        <WebGLApp colors={webGLColors} className="-z-10"/>
        <div className="text-[#04002a] items-center justify-center bg-white rounded-3xl px-8 py-8 z-10 mx-auto my-auto">
            <Lottie 
                options={defaultOptions}
                height={250}
                width={250}
            />
            <h1 className="mt-8 text-center justify-center text-2xl font-bold">Hold On while we verify your payment.</h1>
            <p className="text-gray-700 text-sm text-center">Your transaction id is <span className="font-bold">{txnId}</span></p>
            <p className="text-gray-700 text-sm text-center">Please do not close this page or go back.</p>
        </div>
        </main>
        );
}