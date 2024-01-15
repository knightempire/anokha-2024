'use client';
import React, { useEffect, useRef } from 'react'
import { WebGL } from './js/webgl'
import "./app.css"

const WebGLApp = () => {
    const rendererEl = useRef(null)

    const bgProps = {
        color1: [163 / 255, 189 / 255, 230 / 255],
        color2: [54 / 255, 211 / 255, 211 / 255],
        color3: [0 / 255, 0 / 255, 0 / 255],
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