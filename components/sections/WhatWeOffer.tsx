"use client"

import { useState } from "react"
import GetStartedModal from "@/components/sections/GetStartedModal";
import { ArrowLeft, ArrowRight, FileText, Shield, PenLine, BookOpen, Palette, Megaphone } from "lucide-react"
import Link from "next/link"

const slides = [
    [
        {
            icon: FileText,
            title: "Editing & Proofreading",
            subtitle: "Enhance Readability for Maximum Impact",
            description:
                "Our editing & proofreading process guarantees accuracy and attention to every detail in the shortest possible time. We provide fact-checking to guarantee the utmost perfection in the final manuscript.",
        },
        {
            icon: Shield,
            title: "Copyright Registration",
            subtitle: "Protecting your work with legal certainty",
            description:
                "Bring your literary work to life and protect it with copyright registration. Our expert services make it easy to secure your ownership. Registering your copyright gives you clear and legal proof of ownership.",
        },
        {
            icon: PenLine,
            title: "Ghostwriting",
            subtitle: "Telling your story professionally",
            description:
                "Get the most out of your story with skilled ghostwriters! Improve your writing with our top-rated ghostwriters. Choose us as your partner for affordable packages and complete services for every author!",
        },
    ],
    [
        {
            icon: Palette,
            title: "Cover Design",
            subtitle: "Designs that speak volumes before the first page is turned",
            description:
                "Your cover is your first impression, and we surely make it count. Our writers and designers collaborate to create visually stunning, meaningful covers that capture the message of your book and connect with your audience.",
        },
        {
            icon: FileText,
            title: "Editing & Proofreading",
            subtitle: "Enhance Readability for Maximum Impact",
            description:
                "Our editing & proofreading process guarantees accuracy and attention to every detail in the shortest possible time. We provide fact-checking to guarantee the utmost perfection in the final manuscript.",
        },
        {
            icon: Shield,
            title: "Copyright Registration",
            subtitle: "Protecting your work with legal certainty",
            description:
                "Bring your literary work to life and protect it with copyright registration. Our expert services make it easy to secure your ownership. Registering your copyright gives you clear and legal proof of ownership.",
        },
    ],
    [
        {
            icon: BookOpen,
            title: "Book Publishing",
            subtitle: "Let your words inspire the world through our book publication service",
            description:
                "We take care of getting your manuscript noticed, guiding it toward acceptance by publishers and agents. With proven strategies and deep industry insight, we increase your chances of getting published where it counts.",
        },
        {
            icon: Megaphone,
            title: "Book Marketing",
            subtitle: "Sometimes, a great marketing strategy is all you need!",
            description:
                "You get what you require: book promotion, author publicity, or marketing. KPH has got you covered! Our experts spent years understanding the algorithm, discovering the secrets that drive the success of marketing campaigns.",
        },
        {
            icon: FileText,
            title: "Book Formatting",
            subtitle: "Make your book not just well-written, but professionally polished",
            description:
                "We make sure your manuscript meets global formatting standards, from clean typography to perfect margins. We handle every detail with care, so your book looks as good as it reads.",
        },
    ],
]

export default function WhatWeOffer() {
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((c) => Math.max(c - 1, 0))
    const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1))

    return (
        <section className="bg-background py-10 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="text-4xl text-secondary mb-2 font-serif">What We Offer</h2>
                    <p className="text-secondary font-semibold text-lg">Turn Your Manuscript into a Masterpiece</p>
                    <p className="text-muted-foreground text-sm mt-1">Discover Our Book Publishing Services!</p>

                    {/* Slide indicators */}
                    <div className="flex items-end justify-center gap-1.5 mt-6">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className="transition-all duration-300 rounded-full cursor-pointer"
                                style={{
                                    width: i === current ? "6px" : "6px",
                                    height: i === current ? "32px" : "20px",
                                    backgroundColor:
                                        i === current
                                            ? "var(--amazon-orange)"
                                            : "var(--amazon-navy)",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Carousel wrapper */}
                <div className="relative flex items-center gap-4">
                    {/* Left arrow */}
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="shrink-0 text-amazon-orange disabled:opacity-30 transition-opacity cursor-pointer"
                    >
                        <ArrowLeft size={28} strokeWidth={2} />
                    </button>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 min-h-[320px]">
                        {slides[current].map(({ icon: Icon, title, subtitle, description }) => (
                            <div key={title} className="flex flex-col gap-3">
                                {/* Icon blob */}
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 bg-amazon-orange/20 rounded-full scale-110" />
                                    <div className="relative flex items-center justify-center w-full h-full">
                                        <Icon size={32} className="text-amazon-dark" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-amazon-dark font-bold text-lg leading-snug font-sans">{title}</h3>
                                <p className="text-amazon-dark font-semibold text-sm">{subtitle}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={next}
                        disabled={current === slides.length - 1}
                        className="shrink-0 text-amazon-orange disabled:opacity-30 transition-opacity cursor-pointer"
                    >
                        <ArrowRight size={28} strokeWidth={2} />
                    </button>
                </div>

                {/* CTAs */}
                <div className="flex justify-center gap-4">
                    <Link href="" onClick={() => setIsOpen(true)} className="bg-secondary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md transition-opacity duration-200 cursor-pointer">
                        Let's Talk
                    </Link>
                </div>
                {isOpen && <GetStartedModal onClose={() => setIsOpen(false)} />}
            </div>
        </section>
    )
}