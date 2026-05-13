"use client"

import Image from "next/image"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"

// Services Images
import SongImg from "@/app/assets/images/services/song.webp"
import AutobiographyImg from "@/app/assets/images/services/autobiography.webp"
import ComedyImg from "@/app/assets/images/services/comedy.webp"
import WikiImg from "@/app/assets/images/services/wiki.webp"
import BusinessImg from "@/app/assets/images/services/business.webp"
import BiographyImg from "@/app/assets/images/services/biography.webp"
import ChildrensImg from "@/app/assets/images/services/children.webp"
import CrimeFictionImg from "@/app/assets/images/services/crime-fiction.webp"
import ComicsImg from "@/app/assets/images/services/comic.webp"
import FictionImg from "@/app/assets/images/services/fiction.webp"
import HipHopImg from "@/app/assets/images/services/hip-hop.webp"
import MemoirImg from "@/app/assets/images/services/memoir.webp"
import NovelImg from "@/app/assets/images/services/novel.webp"
import MilitaryFictionImg from "@/app/assets/images/services/military-fiction.webp"
import NarrativeImg from "@/app/assets/images/services/narrative.webp"
import RhymeImg from "@/app/assets/images/services/rhyme.webp"
import SpeechImg from "@/app/assets/images/services/speech.webp"
import ScreenPlayImg from "@/app/assets/images/services/screen-play.webp"

const genres = [
    { label: "Song", img: SongImg, filter: "All" },
    { label: "Autobiography", img: AutobiographyImg, filter: "Biography" },
    { label: "Comedy", img: ComedyImg, filter: "All" },
    { label: "Wiki", img: WikiImg, filter: "Non-Fiction" },
    { label: "Business", img: BusinessImg, filter: "Non-Fiction" },
    { label: "Biography", img: BiographyImg, filter: "Biography" },
    { label: "Children's", img: ChildrensImg, filter: "Children's" },
    { label: "Crime Fiction", img: CrimeFictionImg, filter: "Sci-Fi & Fantasy" },
    { label: "Comics", img: ComicsImg, filter: "All" },
    { label: "Fiction", img: FictionImg, filter: "Sci-Fi & Fantasy" },
    { label: "Hip Hop", img: HipHopImg, filter: "All" },
    { label: "Memoir", img: MemoirImg, filter: "Biography" },
    { label: "Novel", img: NovelImg, filter: "All" },
    { label: "Military Fiction", img: MilitaryFictionImg, filter: "Sci-Fi & Fantasy" },
    { label: "Narrative", img: NarrativeImg, filter: "Non-Fiction" },
    { label: "Rhyme", img: RhymeImg, filter: "All" },
    { label: "Speech", img: SpeechImg, filter: "All" },
    { label: "Screen Play", img: ScreenPlayImg, filter: "All" },
]

const PER_PAGE = 6

// Split genres into pages of PER_PAGE
const pages = Array.from({ length: Math.ceil(genres.length / PER_PAGE) }, (_, i) =>
    genres.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
)

export default function WhatWePublish() {
    return (
        <section className="bg-background py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl text-secondary font-serif">
                        What kinds of book genres do we publish?
                    </h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        From ghostwriting to editing to publishing, we handle the entire process of book creation, including all genres.
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{ loop: true }}
                    className="w-full"
                >
                    <CarouselContent>
                        {pages.map((pageGenres, pageIdx) => (
                            <CarouselItem key={pageIdx}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {pageGenres.map(({ label, img, filter }) => (
                                        <Link href={`/portfolio?genre=${encodeURIComponent(filter)}#portfolio-grid`} key={label}>
                                            <div className="group flex flex-col items-center gap-3">
                                                <div className="relative w-full h-[220px] aspect-5/2 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={img}
                                                        alt={label}
                                                        fill
                                                        className="h-[500px] object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    {/* Dark overlay: visible by default, fades out on hover */}
                                                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/0 transition-colors duration-300 rounded-xl" />
                                                </div>
                                                <span className="text-amazon-dark font-bold text-base">{label}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-amazon-orange border-amazon-orange hover:text-amazon-orange hover:bg-amazon-orange/10 -left-10" />
                    <CarouselNext className="text-amazon-orange border-amazon-orange hover:text-amazon-orange hover:bg-amazon-orange/10 -right-10" />
                </Carousel>

                {/* CTA */}
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
