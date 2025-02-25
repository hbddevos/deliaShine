import React from 'react';
import Carousel from './Carousel';

const Venue = () => {
    const images = [
        "/images/venue/p1.jpg",
        "/images/venue/p2.jpg",
    ];

    return (
        <section id="venue" className="from-white/5 to-transparent bg-gradient-to-t relative py-12">
            <Carousel images={images} />
            <div className="max-w-screen-2xl scroll-m-12 relative px-12 mx-auto overflow-hidden">
                <h2 className="subtitle w-full">The Venue</h2>
                <p className="max-w-5xl mt-6 text-xl">
                    The flagship Laravel event in Europe returns to Amsterdam
                    for 2025. Join us in Amsterdam for two days of fantastic
                    talks and community networking with the most talented
                    Laravel developers in the world. Hosted in the beautiful
                    Muziekgebouw venue in the heart of Amsterdam, get ready to
                    learn, connect, and come away refreshed, energized, and
                    ready to build amazing things with Laravel.
                </p>
                <div className="flex items-center mt-6">
                    <a href="https://laracon.eu/location" target="_blank" rel="nofollow" className="cta">
                        <span>Check location</span>
                        <svg viewBox="0 0 24 24"><use href="#icon:arrow-next"></use></svg>
                    </a>
                </div>
                <div className="lg:gap-14 flex gap-6 mt-12">
                    <div className="flex items-start gap-5">
                        <svg viewBox="0 0 24 24" className="stroke-white size-6 md:size-8">
                            <use href="#icon:marker"></use>
                        </svg>
                        <span className="sr-only">Location</span>
                        <p className="mt-2 text-xl leading-none">Amsterdam, Netherlands 
                        </p>
                    </div>
                    <div className="flex items-start gap-5">
                        <svg viewBox="0 0 24 24" className="stroke-white size-6 md:size-8">
                            <use href="#icon:calendar"></use>
                        </svg>
                        <span className="sr-only">Dates</span>
                        <p className="mt-2 text-xl leading-none">Feb 3-4, 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;