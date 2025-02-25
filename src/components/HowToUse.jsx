import React from 'react'
import Accordion from './Accordion'
import Venue from './Venue'
import Carousel from './Carousel';
import ImageTabs from "./ImageTabs.jsx";

const images = ['./images/afro4.jpg', './images/afro5.jpg'];

export default function HowToUse() {
    return (
        // <div className='flex flex-col md:flex-row gap-x-6 relative'>
        //   <div>
        //    <Carousel images={images} />
        //   </div>
        //   <div>
        //     <h3>Comment l'utiliser ?</h3>
        //     <p>
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia, velit dolorem vero obcaecati labore at unde ullam distinctio sit ex illo libero beatae voluptates, nam harum quod natus alias.
        //     </p>
        //   </div>
        //
        // </div>
        <section>
            <h3 className="max-sm:text-2xl md:text-4xl lg:text-8xl font-bold px-4 mb-4">Comment l'utiliser ?</h3>
            <ImageTabs/>
        </section>
    )
}
