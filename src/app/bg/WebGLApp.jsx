'use client';
import React, { useEffect, useRef } from 'react'
import { WebGL } from './js/webgl'
import "./app.css"

const WebGLApp = ({colors}) => {
    const rendererEl = useRef(null)

    const bgProps = {
        color1: colors.color1,
        color2: colors.color2,
        color3: colors.color3,
        uLinesBlur: 0.25,
        uNoise: 0.075,
        uOffsetX: 0.34,
        uOffsetY: 0.0,
        uLinesAmount: 5.0,
    };

    useEffect(() => {
        if (rendererEl.current) {
            new WebGL({ rendererEl: rendererEl.current, bgProps })
        }
    }, [])

    return <div id='webgl' ref={rendererEl} />
}

export default WebGLApp