import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ArrowNav from "./children/ArrowNav";

interface CarouselProps {
    images: string[];
    slideHeight: string;
    slideInterval: number;
    backgroundColor: string;
}

let count = 0;

function Carousel({
    images,
    slideInterval,
    slideHeight,
    backgroundColor,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleArrow(direction: string) {
        if (direction === "l") {
            count = (currentIndex + images.length - 1) % images.length;
        }

        if (direction === "r") {
            count = (count + 1) % images.length;
        }

        setCurrentIndex(count);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleArrow("r");
        }, slideInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [handleArrow]);

    return (
        <div
            className={`relative h-[${slideHeight}] w-screen overflow-hidden ${backgroundColor}`}
        >
            <ArrowNav style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <AiOutlineLeft />
            </ArrowNav>
            {/* Wrapper */}
            <div
                className={`flex h-full w-[${
                    images.length * 100
                }vw] transform transition-all duration-[1.5s] ease-in-out`}
                style={{ transform: `translateX(${-100 * currentIndex}vw)` }}
            >
                {images.map((img, i) => (
                    // Image container
                    <div key={i} className="relative h-full w-screen">
                        <Image
                            src={img}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>
            <ArrowNav style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <AiOutlineRight />
            </ArrowNav>
        </div>
    );
}

export default Carousel;
