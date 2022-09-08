import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { TiShoppingCart } from "react-icons/ti";

const itemsLeft = [
    { label: "Homepage", url: "/" },
    { label: "Products", url: "#" },
    { label: "Menu", url: "#" },
];

const itemsRight = [
    { label: "Events", url: "#" },
    { label: "Blog", url: "#" },
    { label: "Contact", url: "#" },
];

function Header() {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50">
            <div className="flex h-[100px] w-full items-center justify-between bg-primary px-8">
                <div className="flex w-auto flex-1 flex-row items-center justify-start gap-2">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white">
                        <Image
                            src="/images/telephone.png"
                            alt="phone"
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-white">
                            ORDER NOW!
                        </div>
                        <div className="font-bold text-white">012 345 6789</div>
                    </div>
                </div>

                <div className="flew-row flex-5 flex items-center justify-center">
                    <ul className="hidden list-none items-center gap-8 p-0 md:flex">
                        {itemsLeft.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} passHref>
                                    <a
                                        className={`font-500 header-link ${
                                            router.pathname === item.url
                                                ? "text-gray-300"
                                                : "text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            </li>
                        ))}

                        <div className="aspect-auto relative h-14 w-28 ">
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {itemsRight.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} passHref>
                                    <a
                                        className={`font-500 header-link ${
                                            router.pathname === item.url
                                                ? "text-gray-300"
                                                : "text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-1 justify-end">
                    <button className="aspect-auto relative h-6 w-6">
                        <Link href="/cart" passHref>
                            <>
                                <a
                                    className={`font-500 header-link ${
                                        router.pathname === "/cart"
                                            ? "text-gray-300"
                                            : "text-white"
                                    }`}
                                >
                                    <TiShoppingCart className="text-[28px]" />
                                </a>
                                <div className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-primary">
                                    0
                                </div>
                            </>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
