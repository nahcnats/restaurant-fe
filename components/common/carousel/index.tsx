import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ArrowNav from "./children/ArrowNav";
// import styles from "../../../styles/carousel.module.css";

interface CarouselProps {
    images: string[];
    slideInterval: number;
    backgroundColor: string;
}

let count = 0;

function Carousel({ images, slideInterval, backgroundColor }: CarouselProps) {
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
            className={`relative h-[50vh] w-screen overflow-hidden md:h-[calc(100vh-100px)] ${backgroundColor}`}
        >
            <ArrowNav style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <AiOutlineLeft />
            </ArrowNav>
            <div
                // className={styles.wrapper}
                className={`flex h-full transition-all duration-1000 ease-in-out`}
                style={{
                    width: `${images.length * 100}vw`,
                    transform: `translateX(${-100 * currentIndex}vw)`,
                }}
            >
                {images.map((img, i) => (
                    <div
                        // className={styles.imgContainer}
                        className="relative h-full w-full"
                        key={i}
                    >
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
