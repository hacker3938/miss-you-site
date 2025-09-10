"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function FinalScreen({ ...motionProps }) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    const finalMessage =
        "I miss you. Not just your smile and your laugh, but the way I imagine your naked body pressed against mine, your warmth melting into me, your breath breaking against my lips as I kiss you deeper and deeper.Every second apart feels like torture because I ache for your touch. I miss the thought of kissing that mole on your shoulder, sucking your nipple until you cry out, licking down your stomach until my tongue is buried between your thighs. I want to taste you until your legs shake, until you are dripping for me, until you can’t hold back your moans any longer.My cock throbs with the thought of sliding inside you, stretching you, fucking you harder and harder until you can’t breathe without moaning my name. I imagine your nails digging into my back, your body arching under me, your voice breaking as I take you raw and deep.The distance tears at me because my hands crave your curves, my lips crave your taste, and my body craves the way you would shiver and lose yourself under me. Nights are empty without your moans in my ear, without the feel of your wetness soaking me as I fuck you until you collapse against my chest.I don’t just miss you, Mumma. I am starving for you. For your nakedness, your sweetness, your moans, your surrender. I can’t wait for the day I finally hold you again, strip you bare, kiss every mole, and make love to you for hours, making up for every second of this distance.Until then, know this I miss you in every filthy, desperate, lustful way a man can miss a woman. 🌙🔥❤️"

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < finalMessage.length) {
                setDisplayText((prev) => prev + finalMessage[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            } else {
                setIsTyping(false)
            }
        }, 30)
        return () => clearTimeout(timer)
    }, [currentIndex, finalMessage])

    return (
        <motion.div {...motionProps} className="min-h-screen flex items-center justify-center text-center px-6 relative">

            <div className="max-w-4xl z-10">
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div><img src="/gifs/us.gif" alt="us gif" className="w-48" /></div>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Forever Yours
                </motion.h2>

                <motion.div
                    className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
                        {displayText}
                        {isTyping && (
                            <motion.span
                                className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                        )}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}
