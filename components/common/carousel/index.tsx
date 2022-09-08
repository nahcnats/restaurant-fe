import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ArrowNav from "./children/ArrowNav";

interface CarouselProps {
    images: string[];
    slideInterval: number;
    slideHeight: string;
}

let count = 0;

function Carousel({ images, slideInterval, slideHeight }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleArrow(direction: string) {
        if (direction === "l") {
            const imgLen = images.length;
            count = (currentIndex + imgLen - 1) % imgLen;
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
            className={`relative -ml-[7.7%] h-[${slideHeight}] w-screen overflow-hidden bg-gray-100`}
        >
            <ArrowNav style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <AiOutlineLeft />
            </ArrowNav>
            <div className="flex w-screen transition duration-700 ease-in-out md:h-full">
                <div className="aspect-auto">
                    <Image
                        src={images[currentIndex]}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <ArrowNav style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <AiOutlineRight />
            </ArrowNav>
        </div>
    );
}

export default Carousel;
