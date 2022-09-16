import Image from "next/image";

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
        <footer className="h-[100vh-100px] w-screen bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                    <div className="relative">
                        <Image
                            src="/images/bg.png"
                            alt=""
                            layout="responsive"
                            width={640}
                            height={640}
                        />
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-300">
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF
                        PIZZA
                    </h2>
                </div>
                <div className="p-4">
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
                <div className="p-4">
                    <h1 className="mb-4 text-base font-bold text-accent">
                        WORKING HOURS
                    </h1>
                    {operatingHours.map((wh, i) => (
                        <p key={i} className="mb-4 text-sm text-gray-400">
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
