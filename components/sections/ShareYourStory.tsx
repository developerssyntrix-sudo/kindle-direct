import Image from 'next/image';

import ImageContent from "@/app/assets/images/web-images-01.png"

export default function ShareYourStory() {
    return (

        <section className="px-8 py-10 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 font-sans text-slate-800">
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl text-secondary font-serif">Share your story</h2>
                    <p className="text-lg leading-relaxed">
                        Publish in different formats to reach more readers in their preferred way to read.
                    </p>

                    <ul className="space-y-8">
                        <li className="relative pl-6">
                            <span className="absolute left-0 top-2 h-3 w-3 bg-orange-400 rounded-full" />
                            <h3 className="font-bold text-lg font-sans">eBooks</h3>
                            <p className="text-slate-600">
                                Upload your manuscript and distribute your <span className="text-cyan-600 underline cursor-pointer">eBook</span> in Kindle Stores around the world. Reach even more readers with Kindle Unlimited.
                            </p>
                        </li>

                        <li className="relative pl-6">
                            <span className="absolute left-0 top-2 h-3 w-3 bg-orange-400 rounded-full" />
                            <h3 className="font-bold text-lg font-sans">Print books</h3>
                            <p className="text-slate-600">
                                Bring your book to life in <span className="font-semibold text-slate-700">paperback</span> and <span className="font-semibold text-slate-700">hardcover</span> formats. KDP will print your books on demand and ship them to customers around the world.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-full max-w-5xl aspect-6/6">
                        <Image
                            src={ImageContent}
                            alt="Kindle Device"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}