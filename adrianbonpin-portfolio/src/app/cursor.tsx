'use client'

import './cursor.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
    const [ mousePos, setMousePos ] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const mouseMove = (e:any) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    })

    const variants = {
        default: {
            x: mousePos.x - 100,
            y: mousePos.y - 100
        }
    }
    
    return (
        <div>
            <motion.div id="bg_blob" variants={variants} animate="default"/>
            <div id="blob_blur"></div>
        </div>
    )
}