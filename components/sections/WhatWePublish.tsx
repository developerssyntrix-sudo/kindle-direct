"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import GetStartedModal from "@/components/sections/GetStartedModal"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel"

import SongIcon from "@/app/assets/images/Group 1.png"
import AutobiographyIcon from "@/app/assets/images/Group 3.png"
import ComedyIcon from "@/app/assets/images/Group 3 (1).png"
import WikiIcon from "@/app/assets/images/Group 4 (1).png"
import BusinessIcon from "@/app/assets/images/Group 5.png"
import BiographyIcon from "@/app/assets/images/Group 2 (1).png"
import ChildrensIcon from "@/app/assets/images/Group 7.png"
import CrimeFictionIcon from "@/app/assets/images/Group 12 (1).png"
import ComicsIcon from "@/app/assets/images/Group 13.png"
import FictionIcon from "@/app/assets/images/Group 14.png"
import HipHopIcon from "@/app/assets/images/Group 15.png"
import MemoirIcon from "@/app/assets/images/Group 16.png"
import NovelIcon from "@/app/assets/images/Group 17.png"
import MilitaryIcon from "@/app/assets/images/Group 18.png"
import NarrativeIcon from "@/app/assets/images/Group 19 (2).png"
import RhymeIcon from "@/app/assets/images/Group 20.png"
import SpeechIcon from "@/app/assets/images/Group 21.png"
import ScreenplayIcon from "@/app/assets/images/Group 22.png"

const genres = [
    {
        label: "Song",
        icon: SongIcon,
        description: "A great song can't just haunt it's felt. Put your thoughts into words, and let the music tell the story. Words become lyrics, Lyrics become songs become memories.",
        filter: "All",
    },
    {
        label: "Autobiography",
        icon: AutobiographyIcon,
        description: "An autobiography is more than a story. It's a journey through your life, your struggles, your achievements, and the lessons that shaped you every life has a story worth telling.",
        filter: "Biography",
    },
    {
        label: "Comedy",
        icon: ComedyIcon,
        description: "Life is better when you're laughing. Comedy turns ordinary moments into unforgettable memories, bringing smiles, joy, and connection.",
        filter: "All",
    },
    {
        label: "Wiki",
        icon: WikiIcon,
        description: "Knowledge starts with curiosity, most history and science or people and places. Discover reliable information and expand your understanding of the world.",
        filter: "Non-Fiction",
    },
    {
        label: "Business",
        icon: BusinessIcon,
        description: "Business is more than making money, it's about creating value, solving problems, and building something that lasts. Turn ideas and opportunities into a close.",
        filter: "Non-Fiction",
    },
    {
        label: "Biography",
        icon: BiographyIcon,
        description: "Every remarkable life has a story. A biography explores the journey, achievements, challenges, and legacy of an individual, bringing history through live experiences.",
        filter: "Biography",
    },
    {
        label: "Children's",
        icon: ChildrensIcon,
        description: "Children's books are fun, learning, and creativity through engaging stories, educational activities, cartoons, songs, and interactive experiences.",
        filter: "Children's",
    },
    {
        label: "Crime Fiction",
        icon: CrimeFictionIcon,
        description: "Crime fiction is a genre that revolves around mysteries, investigations, and criminal activities. It follows detectives, investigators through gripping storylines.",
        filter: "Sci-Fi & Fantasy",
    },
    {
        label: "Comics",
        icon: ComicsIcon,
        description: "Comics combines storytelling and artwork to create engaging visual narratives. Through colorful illustrations, characters, and dialogue, comics entertain readers with bold art.",
        filter: "All",
    },
    {
        label: "Fiction",
        icon: FictionIcon,
        description: "Fiction is a literary genre based on imaginative stories and invented narratives. It immerses readers in creative worlds filled with alternate realities and fantastic adventures.",
        filter: "Sci-Fi & Fantasy",
    },
    {
        label: "Hip Hop",
        icon: HipHopIcon,
        description: "Hip Hop is a dynamic music and cultural genre known for its rhythmic patterns, powerful lyrics, and creative expression. It blends storytelling, poetry, fashion influences to entertain.",
        filter: "All",
    },
    {
        label: "Memoir",
        icon: MemoirIcon,
        description: "Memoir is a personal narrative that shares real events, experiences, and reflections from the author's life. It offers readers an intimate look into true-life experiences.",
        filter: "Biography",
    },
    {
        label: "Novel",
        icon: NovelIcon,
        description: "A novel is a long-form fictional narrative that explores characters, events, and themes in depth. It immerses readers in compelling stories filled with emotion, adventure.",
        filter: "All",
    },
    {
        label: "Military",
        icon: MilitaryIcon,
        description: "Military content explores armed forces, warfare strategy, and historical conflicts. It covers stories, military operations, leadership, technology, and the experiences of service.",
        filter: "Sci-Fi & Fantasy",
    },
    {
        label: "Narrative",
        icon: NarrativeIcon,
        description: "Narrative is a form of storytelling that presents events, experiences, or ideas through a structured sequence. It engages readers by conveying characters, actions.",
        filter: "Non-Fiction",
    },
    {
        label: "Rhyme",
        icon: RhymeIcon,
        description: "Rhyme is a creative form of expression that uses words with similar ending sounds to create rhythm and musicality. Often found in poetry, songs, and children's literature.",
        filter: "All",
    },
    {
        label: "Speech",
        icon: SpeechIcon,
        description: "Speech is a spoken form of communication that delivers ideas, information, or emotions. With an audience, it can inform, inspire, persuade, or entertain.",
        filter: "All",
    },
    {
        label: "Screenplay",
        icon: ScreenplayIcon,
        description: "A screenplay is a written script for films, TV shows, plays, and other visual productions. It outlines dialogue, actions, scenes, and characters, serving as the blueprint.",
        filter: "All",
    },
]

const PER_PAGE = 6

const pages = Array.from({ length: Math.ceil(genres.length / PER_PAGE) }, (_, i) =>
    genres.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
)

export default function WhatWePublish() {
    const [showModal, setShowModal] = useState(false)

    return (
        <section className="bg-background py-10 px-6">
            {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

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
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {pageGenres.map(({ label, icon, description, filter }) => (
                                        <Link
                                            href={`/portfolio?genre=${encodeURIComponent(filter)}#portfolio-grid`}
                                            key={label}
                                            className="group block"
                                        >
                                            <div className="bg-transparent transition-all duration-300 rounded-lg p-5 h-full flex flex-col gap-3 border border-gray-300 shadow-md hover:shadow-amazon-orange/40 hover:border-amazon-orange">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-10 h-10 flex-shrink-0">
                                                        <Image
                                                            src={icon}
                                                            alt={label}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <h3 className="text-secondary font-bold text-sm uppercase tracking-wide">
                                                        {label}
                                                    </h3>
                                                </div>
                                                <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                                                    {description}
                                                </p>
                                                <span className="text-amazon-orange text-xs font-semibold uppercase tracking-wider group-hover:underline">
                                                    View More
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="md:flex hidden text-amazon-orange border-amazon-orange hover:text-amazon-orange hover:bg-amazon-orange/10 -left-10" />
                    <CarouselNext className="md:flex hidden text-amazon-orange border-amazon-orange hover:text-amazon-orange hover:bg-amazon-orange/10 -right-10" />
                </Carousel>

                {/* CTA */}
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-semibold px-8 py-3 rounded-md transition-colors duration-200 cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    )
}
