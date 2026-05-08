"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

// Serivces Image
import SongImg from "@/app/assets/images/services/song.webp";
import AutobiographyImg from "@/app/assets/images/services/autobiography.webp";
import ComedyImg from "@/app/assets/images/services/comedy.webp";
import WikiImg from "@/app/assets/images/services/wiki.webp";
import BusinessImg from "@/app/assets/images/services/business.webp";
import BiographyImg from "@/app/assets/images/services/biography.webp";
import ChildrensImg from "@/app/assets/images/services/children.webp";
import CrimeFictionImg from "@/app/assets/images/services/crime-fiction.webp";
import ComicsImg from "@/app/assets/images/services/comic.webp";
import FictionImg from "@/app/assets/images/services/fiction.webp";
import HipHopImg from "@/app/assets/images/services/hip-hop.webp";
import MemoirImg from "@/app/assets/images/services/memoir.webp";
import NovelImg from "@/app/assets/images/services/novel.webp";
import MilitaryFictionImg from "@/app/assets/images/services/military-fiction.webp";
import NarrativeImg from "@/app/assets/images/services/narrative.webp";
import RhymeImg from "@/app/assets/images/services/rhyme.webp";
import SpeechImg from "@/app/assets/images/services/speech.webp";
import ScreenPlayImg from "@/app/assets/images/services/screen-play.webp";


const genres = [
    { label: "Song", img: SongImg },
    { label: "Autobiography", img: AutobiographyImg },
    { label: "Comedy", img: ComedyImg },
    { label: "Wiki", img: WikiImg },
    { label: "Business", img: BusinessImg },
    { label: "Biography", img: BiographyImg },
    { label: "Children's", img: ChildrensImg },
    { label: "Crime Fiction", img: CrimeFictionImg },
    { label: "Comics", img: ComicsImg },
    { label: "Fiction", img: FictionImg },
    { label: "Hip Hop", img: HipHopImg },
    { label: "Memoir", img: MemoirImg },
    { label: "Novel", img: NovelImg },
    { label: "Military Fiction", img: MilitaryFictionImg },
    { label: "Narrative", img: NarrativeImg },
    { label: "Rhyme", img: RhymeImg },
    { label: "Speech", img: SpeechImg },
    { label: "Screen Play", img: ScreenPlayImg },
]

const PER_PAGE = 6

export default function WhatWePublish() {
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(genres.length / PER_PAGE)
    const visible = genres.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

    return (
        <section className="bg-background py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                        What kinds of book genres do we publish?
                    </h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        From ghostwriting to editing to publishing, we handle the entire process of book creation, including all genres.
                    </p>
                </div>

                {/* Carousel wrapper */}
                <div className="relative w-full flex items-center gap-4">

                    {/* Left arrow */}
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                        disabled={page === 0}
                        className="shrink-0 text-amazon-orange disabled:opacity-25 transition-opacity cursor-pointer"
                    >
                        <ArrowLeft size={28} strokeWidth={2} />
                    </button>

                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
                        {visible.map(({ label, img }) => (
                            <Link href="/contact">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative w-full aspect-5/2 rounded-xl overflow-hidden">
                                        <Image
                                            src={img}
                                            alt={label}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <span className="text-amazon-dark font-bold text-base">{label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                        disabled={page === totalPages - 1}
                        className="shrink-0 text-amazon-orange disabled:opacity-25 transition-opacity cursor-pointer"
                    >
                        <ArrowRight size={28} strokeWidth={2} />
                    </button>
                </div>

                {/* Page dots */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className="w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer"
                            style={{
                                backgroundColor: i === page ? "var(--amazon-orange)" : "var(--amazon-navy)",
                            }}
                        />
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4">
                    <Link href="/contact">
                        <button className="bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-semibold px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer">
                            Get Started
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}