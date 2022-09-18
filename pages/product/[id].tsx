import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Layout from "../../components/common/Layout";
import { ProductProps } from "../../utils/types";

// const pizza = {
//     id: 1,
//     img: "/images/pizza.png",
//     name: "CAMPAGNOLA",
//     price: [19.9, 23.9, 27.9],
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// };

// const ingredients = [
//     { id: 1, name: "double", desc: "Double Ingredients" },
//     { id: 2, name: "cheese", desc: "Extra Cheese" },
//     { id: 3, name: "spicy", desc: "Spicy Sauce" },
//     { id: 4, name: "garlic", desc: "Garlic Sauce" },
// ];

function ProductPage({ product }: { product: ProductProps }) {
    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState<
        { _id: string; text: string; price: number }[]
    >([]);

    function changePrice(number: number) {
        setPrice(price + number);
    }

    function changeSizeHandler(sizeIndex: number) {
        const delta = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(delta);
    }

    function changOptionHandler(
        e: React.SyntheticEvent,
        option: ProductProps["extraOptions"][0]
    ) {
        let target = e.target as HTMLInputElement;
        const checked = target.checked;

        if (checked) {
            changePrice(option.price);
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    }

    return (
        <Layout title={product.title}>
            <div className="mt-12 grid h-[calc(100vh-100px)] grid-cols-1 md:grid-cols-2">
                <div className="flex-1 items-center justify-center">
                    <div className="relative h-full w-full md:h-[80%] md:w-[80%]">
                        <Image
                            src={product.img}
                            alt={product.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="md: flex flex-1 flex-col justify-center px-5 md:justify-start">
                    <h1 className="mb-4 text-2xl font-bold">{product.title}</h1>
                    <span className="mb-6 text-lg font-[400] text-primary">
                        RM {price}
                    </span>
                    <p className="mb-4">{product.desc}</p>
                    <h3 className="mb-4 font-bold">Choose the size</h3>
                    <div className="mb-6 flex w-[40%] flex-row items-start justify-between">
                        <div
                            className="relative h-[30px] w-[30px] cursor-pointer"
                            onClick={() => changeSizeHandler(0)}
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
                            onClick={() => changeSizeHandler(1)}
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
                            onClick={() => changeSizeHandler(2)}
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
                        {product.extraOptions.map((option) => (
                            <div
                                key={option._id}
                                className="font-[14px] flex items-center font-[500]"
                            >
                                <input
                                    type="checkbox"
                                    id={option._id}
                                    name={option.text}
                                    className="mr-1 h-5 w-5"
                                    onChange={(e) =>
                                        changOptionHandler(e, option)
                                    }
                                />
                                <label htmlFor={option.text}>
                                    {option.text}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const NEXT_CROSS_ORIGIN = process.env.NEXT_CROSS_ORIGIN;
    const res = await axios.get(
        `${NEXT_CROSS_ORIGIN}/api/products/${params?.id}`
    );

    return {
        props: {
            product: res.data,
        },
    };
}
