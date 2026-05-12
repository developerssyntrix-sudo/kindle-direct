import Image from 'next/image';
import Link from 'next/link';

export default function BeYourOwnPublisher() {
    const features = [
        {
            title: "Self-publish easily",
            desc: "Publish print and digital formats in three simple steps, and see your book appear on Amazon stores around the world in 72 hours."
        },
        {
            title: "Earn more",
            desc: (
                <>
                    Earn up to 70% royalty and offer your ebook on{" "}
                    <span className="text-cyan-600 underline cursor-pointer">Kindle Unlimited</span> by enrolling in{" "}
                    <span className="text-cyan-600 underline cursor-pointer">KDP Select</span>.
                </>
            )
        },
        {
            title: "Keep control",
            desc: "Retain ownership of your content, publish on your schedule, and set your own list prices."
        }
    ];

    return (
        <section className="px-8 py-10 bg-[#F9F7F2]">
            <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-16 max-w-7xl mx-auto'>
                {/* Left Side: Book Stack Image */}
                <div className="flex-1 w-full max-w-xl">
                    <Image
                        src="https://m.media-amazon.com/images/G/01/Prelogin/img_bookCollect_USv1.png"
                        alt="Stack of published books"
                        width={600}
                        height={400}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 space-y-8">
                    <header className="space-y-4">
                        <h2 className="text-4xl font-serif text-slate-800">Be your own publisher</h2>
                        <p className="text-xl text-slate-700 leading-snug">
                            KDP gives you control over your book's content, design, price, audience, and advertising.
                        </p>
                    </header>

                    <ul className="space-y-6">
                        {features.map((item, i) => (
                            <li key={i} className="relative pl-8">
                                <span className="absolute left-0 top-2 h-3 w-3 bg-orange-400 rounded-full" />
                                <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-10 pt-4">
                        <Link href="/contact">
                            <button className="bg-[#FFA41C] hover:bg-[#F3A847] text-slate-900 font-medium py-2.5 px-8 rounded-md shadow-sm transition-colors text-sm">
                                Join KDP
                            </button>
                        </Link>
                        <Link href="/about" className="text-cyan-700 hover:text-orange-700 hover:underline text-sm font-medium">
                            Learn how to publish
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}