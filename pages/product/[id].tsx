import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout";

const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

const ingredients = [
    { id: 1, name: "double", desc: "Double Ingredients" },
    { id: 2, name: "cheese", desc: "Extra Cheese" },
    { id: 3, name: "spicy", desc: "Spicy Sauce" },
    { id: 4, name: "garlic", desc: "Garlic Sauce" },
];

function ProductPage() {
    const router = useRouter();
    const { query } = router;
    const [size, setSize] = useState(0);

    return (
        <Layout title={pizza.name}>
            <div className="mt-12 grid h-[calc(100vh-100px)] grid-cols-1 md:grid-cols-2">
                <div className="flex-1 items-center justify-center">
                    <div className="relative h-[80%] w-[80%]">
                        <Image
                            src={pizza.img}
                            alt={pizza.name}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:px-5">
                    <h1 className="mb-4 text-2xl font-bold">{pizza.name}</h1>
                    <span className="mb-6 text-lg font-[400] text-primary">
                        RM{pizza.price[size]}
                    </span>
                    <p className="mb-4">{pizza.desc}</p>
                    <h3 className="mb-4 font-bold">Choose the size</h3>
                    <div className="mb-6 flex w-[40%] flex-row items-start justify-between">
                        <div
                            className="relative h-[30px] w-[30px] cursor-pointer"
                            onClick={() => setSize(0)}
                        >
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                            />
                            <span className="absolute -top-1.5 -right-6 rounded-lg bg-teal-500 px-1 text-sm text-white">
                                Small
                            </span>
                        </div>
                        <div
                            className="relative h-[40px] w-[40px] cursor-pointer"
                            onClick={() => setSize(1)}
                        >
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                            />
                            <span className="absolute -top-1.5 -right-6 rounded-lg bg-teal-500 px-1 text-sm text-white">
                                Medium
                            </span>
                        </div>
                        <div
                            className="relative h-[50px] w-[50px] cursor-pointer"
                            onClick={() => setSize(2)}
                        >
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                            />
                            <span className="absolute -top-1.5 -right-6 rounded-lg bg-teal-500 px-1 text-sm text-white">
                                Large
                            </span>
                        </div>
                    </div>
                    <h3 className="mb-2 font-bold">
                        Choose additional ingredients
                    </h3>
                    <div className="mb-5 flex flex-row gap-4">
                        {ingredients.map((ingredient) => (
                            <div
                                key={ingredient.id}
                                className="font-[14px] flex items-center font-[500]"
                            >
                                <input
                                    type="checkbox"
                                    id={ingredient.name}
                                    name={ingredient.name}
                                    className="mr-1 h-5 w-5"
                                />
                                <label htmlFor={ingredient.name}>
                                    {ingredient.desc}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <input
                            type="number"
                            defaultValue={1}
                            className="h-[30px] w-[50px] rounded-md border border-gray-400 px-2"
                        />
                        <button className="ml-2 h-[30px] rounded-md bg-primary px-3 font-[500] text-white">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductPage;