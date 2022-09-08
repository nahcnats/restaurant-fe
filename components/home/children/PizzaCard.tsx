import Image from "next/image";
import React from "react";

function PizzaCard() {
    return (
        <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-100 p-20 shadow-lg">
            <Image src="/images/pizza.png" alt="" width="500" height="500" />
            <h1 className="my-4 text-lg font-bold text-primary">
                FIORI DI ZUCCA
            </h1>
            <span className="mb-4 text-lg font-semibold text-gray-500">
                RM 19.90
            </span>
            <p className="text-center text-sm text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
        </div>
    );
}

export default PizzaCard;
