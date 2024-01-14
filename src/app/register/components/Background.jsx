import React from 'react';
import './Background.css';
import clsx from 'clsx';

class Background extends React.Component {
    render() {
        const liListDesktop = new Array(18).fill('');
        const liListMobile = new Array(6).fill('');

        return (
            <ul className="background">
                {liListDesktop.map((_, i) => (
                    <li key={i} className={clsx('hidden', { 'md:block': i < 18 })}></li>
                ))}
                {liListMobile.map((_, i) => (
                    <li key={i} className={clsx('block', { 'md:hidden': i < 6 })}></li>
                ))}
            </ul>
        );
    }
}

export default Background;