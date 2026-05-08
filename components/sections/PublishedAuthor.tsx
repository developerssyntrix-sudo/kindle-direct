import Image from "next/image"
import SectionBackgroundImage from "@/app/assets/images/Section-Background.jpg"
import { ShoppingCart, Globe, Award } from "lucide-react"
import Link from "next/link"

const perks = [
    {
        icon: ShoppingCart,
        title: "Online Book Sales",
        description:
            "Tap into a powerful income stream by selling your book online, with the potential to earn over $10,000 a month.",
    },
    {
        icon: Globe,
        title: "Global Publication Reach",
        description:
            "Your finished book will be featured on top platforms, including Amazon, Barnes & Noble, Google Books, and many more, reaching readers worldwide.",
    },
    {
        icon: Award,
        title: "Author Title Privileges",
        description:
            "Once published, proudly use your official author title and promote your work across various platforms and channels with confidence.",
    },
]

export default function PublishedAuthor() {
    return (
        <section className="relative py-10 overflow-hidden">
            {/* BG Image */}
            <Image
                src={SectionBackgroundImage}
                alt="Books background"
                fill
                className="object-cover object-center"
                priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-amazon-dark/80" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center gap-12">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    What Awaits You as a Published Author
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {perks.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="bg-white rounded-md p-7 flex flex-col gap-4 border-5 border-amazon-orange"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-amazon-dark font-bold text-lg leading-snug">
                                    {title}
                                </h3>
                                <Icon
                                    className="text-amazon-dark shrink-0 mt-0.5"
                                    size={32}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                <Link
                    href="/contact"
                    className="bg-amazon-orange hover:bg-amazon-orange/80 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors outline-2 outline-offset-2 outline-amazon-orange"
                >
                    Let's Publish
                </Link>
            </div>
        </section>
    )
}