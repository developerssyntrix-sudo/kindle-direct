"use client"

import { useState } from "react"
import Image from "next/image"
import GetStartedModal from "@/components/sections/GetStartedModal"

export default function ReadyToJoinCTA() {
    const [showModal, setShowModal] = useState(false)

    return (
        <section className="bg-amazon-surface pt-2 px-6">
            {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

            <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
                {/* Center content */}
                <div className="flex flex-1 items-center justify-center gap-15 flex-wrap">
                    <p className="text-secondary text-xl font-medium">
                        Ready to publish your book?
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-semibold px-6 py-2.5 rounded-sm transition-colors duration-150 cursor-pointer"
                    >
                        Join kindle direct publishing house
                    </button>

                    <div>
                        {/* Stickman */}
                        <div className="hidden md:block shrink-0">
                            <Image
                                src="https://m.media-amazon.com/images/G/01/Prelogin/img_stickman_dark.png"
                                alt="Stickman"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}