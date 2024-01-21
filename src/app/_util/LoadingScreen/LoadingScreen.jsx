
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const  LoadingScreen= () => {
    return (
        <div className="flex h-screen justify-center items-center text-white">
            <ProgressSpinner style={{width: '100px', height: '100px'}} strokeWidth="3" fill="white" animationDuration=".75s" />
        </div>
    );
}
        