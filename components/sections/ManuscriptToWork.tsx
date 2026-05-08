"use client"

import Image from "next/image"
import ArrowLeftToRight from "@/app/assets/images/mauscipt-to-work-arrow-left-to-right.webp"
import ArrowRightToLeft from "@/app/assets/images/mauscipt-to-work-arrow-right-to-left.webp"
import SectionBg from "@/app/assets/images/turn-your-manuscript-into-a-published-work.jpg"
import { ClipboardList, FileText, CheckSquare, BookCheck, BookOpen, Megaphone } from "lucide-react"

const steps = [
    {
        icon: ClipboardList,
        title: "Order Placement",
        description:
            "Start by filling out a simple form so our expert ghostwriters can understand your ideas and storyline.",
        side: "left",
    },
    {
        icon: FileText,
        title: "Outline & Plot Creation",
        description:
            "After your consultation, your dedicated writer will develop a detailed outline to help you better understand how to proceed.",
        side: "right",
    },
    {
        icon: CheckSquare,
        title: "Chapter-By-Chapter Approvals",
        description:
            "With the outline in place, we write and refine each chapter, always with your feedback and approval at every stage.",
        side: "left",
    },
    {
        icon: BookCheck,
        title: "Editing & Proofreading",
        description:
            "Our experienced editors refine your manuscript to perfection, making sure it is error-free, clear, and impactful.",
        side: "right",
    },
    {
        icon: BookOpen,
        title: "Book Publishing",
        description:
            "Once everything's finalized, we move your book into the design and publishing phase, ready to go live.",
        side: "left",
    },
    {
        icon: Megaphone,
        title: "Book Marketing",
        description:
            "We help your book shine through targeted marketing campaigns across multiple platforms to attract and engage readers.",
        side: "right",
    },
]

export default function ManuscriptToWork() {
    return (
        <section className="relative py-10 px-6 overflow-hidden min-h-screen">
            {/* BG Image */}
            <Image
                src={SectionBg}
                alt="Manuscript to published work background"
                fill
                className="object-cover object-center"
                priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                        Turning{" "}
                        <span className="text-amazon-orange">your manuscript</span>{" "}
                        into
                        <br />
                        published works
                    </h2>
                    <p className="text-white/80 text-sm mt-3">
                        Our Book Publishing Process
                    </p>
                </div>

                {/* Steps */}
                <div className="w-full flex flex-col gap-0">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        const isLeft = step.side === "left"
                        const isLast = i === steps.length - 1
                        const showArrow = !isLast
                        // alternate arrow direction
                        const arrowImg = i % 2 === 0 ? ArrowLeftToRight : ArrowRightToLeft

                        return (
                            <div key={step.title} className="flex flex-col">
                                {/* Step row */}
                                <div
                                    className={`flex flex-col md:flex-row items-start gap-4 ${isLeft ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    <div
                                        className={`flex items-start gap-4 max-w-xs ${!isLeft ? "md:text-right md:flex-row-reverse" : ""
                                            }`}
                                    >
                                        {/* Icon */}
                                        <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                            <Icon
                                                size={50}
                                                className="text-white"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        {/* Text */}
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-amazon-orange font-bold text-base">
                                                {step.title}
                                            </h3>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow between steps */}
                                {showArrow && (
                                    <div
                                        className={`hidden md:flex my-1 ${isLeft ? "justify-center ml-16" : "justify-center mr-16"
                                            }`}
                                    >
                                        <Image
                                            src={arrowImg}
                                            alt="connector arrow"
                                            width={220}
                                            height={60}
                                            className="object-contain opacity-90"
                                        />
                                    </div>
                                )}

                                {/* Mobile divider instead of arrow */}
                                {showArrow && (
                                    <div className="md:hidden flex justify-center my-4">
                                        <div className="w-px h-8 border-l-2 border-dashed border-amazon-orange/60" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}