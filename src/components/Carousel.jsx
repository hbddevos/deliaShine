import React, { useRef } from 'react';

const Carousel = ({ images }) => {
    const containerRef = useRef();
    const imgRef = useRef();

    const scroll = (direction) => {
        const scrollAmount = imgRef.current.offsetWidth + 32;
        containerRef.current.scrollBy({
            behavior: 'smooth',
            left: direction === 'prev' ? -scrollAmount : scrollAmount,
        });
    };

    return (
        <div ref={containerRef} className="scroll-m-12 custom-scrollbar relative overflow-x-auto">
            <div className="xl:flex-row transform-gpu relative flex flex-col gap-16 mx-auto">
                <div className="max-w-none relative flex items-start gap-1 px-1">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            ref={index === 0 ? imgRef : null}
                            src={src}
                            className="aspect-video h-80 shrink-0 bg-black object-cover md:h-[300px]"
                            alt={`Venue ${index + 1}`}
                        />
                    ))}
                    <div className="shrink-0 w-0">&nbsp;</div>
                </div>
            </div>
            <div className="absolute bg-black bg-opacity-25 top-0 flex items-center justify-between gap-12 mt-12">
                <button
                    type="button"
                    className="size-14 hover:opacity-80 sm:size-20 flex items-center justify-center flex-none transition rounded-full"
                    onClick={() => scroll('prev')}
                >
                {"<="}
                </button>
                <button
                    type="button"
                    className="size-14 hover:opacity-80 sm:size-20 flex items-center justify-center flex-none transition rounded-full"
                    onClick={() => scroll('next')}
                >
                    {"=>"}
                </button>
            </div>
        </div>
    );
};

export default Carousel;