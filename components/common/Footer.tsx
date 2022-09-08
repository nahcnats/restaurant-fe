import Image from "next/image";
import React from "react";

const branches = [
    {
        line1: "18, Jalan 18/38A",
        line2: "Taman Sri Sinar, Segambut",
        line3: "51200 Kuala Lumpur",
        line4: "Malaysia",
    },
    {
        line1: "18, Jalan 18/38A",
        line2: "Taman Sri Sinar, Segambut",
        line3: "51200 Kuala Lumpur",
        line4: "Malaysia",
    },
    {
        line1: "18, Jalan 18/38A",
        line2: "Taman Sri Sinar, Segambut",
        line3: "51200 Kuala Lumpur",
        line4: "Malaysia",
    },
];

const operatingHours = [
    { days: "MONDAY - FRIDAY", hours: "9:00 - 22:00" },
    { days: "SATURDAY - SUNDAY", hours: "2:00 - 24:00" },
];

function Footer() {
    return (
        // <footer className="flex h-[100vh-100px] bg-gray-900">
        <footer className="grid h-[100vh-100px] w-full grid-cols-1 bg-gray-900 md:grid-cols-2">
            <div className="relative hidden md:block">
                <Image
                    src="/images/bg.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="relative mt-4 grid grid-cols-1 md:mt-0 md:grid-cols-3">
                <div className="flex-1 p-5 md:col-start-1 md:col-end-2">
                    <h2 className="text-lg font-bold text-gray-300">
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF
                        PIZZA
                    </h2>
                </div>
                <div className="mb-4 flex-1 p-5">
                    <h1 className="mb-4 text-base font-bold text-accent">
                        FIND OUR RESTAURANTS
                    </h1>
                    {branches.map((branch, i) => (
                        <p key={i} className="mb-4 text-sm text-gray-400">
                            {branch.line1}
                            <br />
                            {branch.line2}
                            <br />
                            {branch.line3}
                            <br />
                            {branch.line4}
                        </p>
                    ))}
                </div>
                <div className="flex-1 p-5">
                    <h1 className="mb-4 text-base font-bold text-accent">
                        WORKING HOURS
                    </h1>
                    {operatingHours.map((wh, i) => (
                        <p className="mb-4 text-sm text-gray-400">
                            {wh.days}
                            <br />
                            {wh.hours}
                        </p>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
