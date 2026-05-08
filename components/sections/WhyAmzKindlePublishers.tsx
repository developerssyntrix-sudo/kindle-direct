import Image from "next/image"
import SectionBg from "@/app/assets/images/why-amz-kindle-publishers.jpg"
import { BadgeCheck, BookOpen, Crown, Globe } from "lucide-react"

const stats = [
    {
        icon: BadgeCheck,
        title: "Guaranteeing 100% Client Satisfaction",
        description: "We commit to quality, ensuring 100% client satisfaction",
    },
    {
        icon: BookOpen,
        title: "Support on Every Aspect",
        description:
            "Our years of experience in the publishing industry enable us to excel in every aspect of book publication.",
    },
    {
        icon: Crown,
        title: "Get Your Rights and Royalties",
        description:
            "You own full ownership rights to your book and get to keep all the royalties.",
    },
    {
        icon: Globe,
        title: "Earn Global Trust",
        description:
            "We are trusted by bestselling authors and established entrepreneurs all over the world.",
    },
]

export default function WhyAmzKindlePublishers() {
    return (
        <section className="relative pt-10 px-6 h-[40vh]">
            {/* BG Image */}
            <Image
                src={SectionBg}
                alt="Why Amz Kindle Publishers background"
                fill
                className="object-cover object-center"
                priority
            />
            {/* Orange overlay */}
            <div className="absolute inset-0 bg-amazon-orange/85" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl text-white text-center ">
                    Why Amz Kindle Publishers?
                </h2>

                {/* Dark card */}
                <div className="bg-amazon-dark rounded-2xl px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                    {stats.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex flex-col items-center gap-4">
                            <Icon size={36} className="text-amazon-orange" strokeWidth={1.5} />
                            <h3 className="text-white font-bold text-sm leading-snug text-center w-full font-sans">{title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed text-center w-full font-sans">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}