"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import GetStartedModal from "@/components/sections/GetStartedModal"

import ImageContent from "@/app/assets/images/web-images-03.png"

const perks = [
    {
        title: "Get paid for each page read with Kindle Unlimited",
        description:
            "Earn royalties for each page read on Kindle Unlimited when you enroll your book in KDP Select.",
        link: { label: "Learn about Kindle Unlimited", href: "#" },
    },
    {
        title: "Earn up to 70% on eBooks",
        description:
            "Choose between two royalty options (70% or 35%) depending on your eBook content and which countries it's sold.",
        link: { label: "Learn about eBook royalties", href: "#" },
    },
    {
        title: "Earn up to 60% on print books",
        description:
            "Earn up to 60% royalty on paperback and hardcover books sold through KDP.",
        links: [
            { label: "paperback royalties", href: "#" },
            { label: "hardcover royalties", href: "#" },
        ],
    },
]

export default function KindleDirectPublishing() {
    const [showModal, setShowModal] = useState(false)

    return (
        <section className="bg-background py-20 px-6">
            {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* Left — image */}
                <div className="flex justify-center">
                    <Image
                        src={ImageContent}
                        alt="Kindle Direct Publishing formats"
                        width={520}
                        height={420}
                        className="object-contain w-full max-w-3xl"
                    />
                </div>

                {/* Right — content */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl text-secondary font-serif">
                        Earn more with Kindle Direct Publishing
                    </h2>

                    <div className="flex flex-col gap-7">
                        {perks.map(({ title, description, link, links }) => (
                            <div key={title} className="flex gap-4">
                                {/* Orange dot */}
                                <div className="mt-1.5 shrink-0 w-3 h-3 rounded-full bg-amazon-orange" />

                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-amazon-dark font-bold text-base font-sans">{title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {description}
                                    </p>

                                    {/* Single link */}
                                    {link && (
                                        <a
                                            href={link.href}
                                            className="text-amazon-teal text-sm hover:underline w-fit"
                                        >
                                            {link.label}
                                        </a>
                                    )}

                                    {/* Multi links (last item) */}
                                    {links && (
                                        <p className="text-sm text-muted-foreground">
                                            Learn more about{" "}
                                            {links.map((l, i) => (
                                                <a key={l.label} href={l.href}
                                                    className="text-amazon-teal hover:underline">
                                                    {l.label}
                                                    {i < links.length - 1 && " and "}
                                                </a>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-wrap items-center gap-10 pt-4">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-[#FFA41C] hover:bg-[#F3A847] text-slate-900 font-medium py-2.5 px-8 rounded-md shadow-sm transition-colors text-sm cursor-pointer"
                            >
                                Join KDP
                            </button>
                            <Link href="/about" className="text-cyan-700 hover:text-orange-700 hover:underline text-sm font-medium">
                                Learn how to publish
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}