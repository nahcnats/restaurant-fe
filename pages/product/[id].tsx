import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../../components/common/Layout";
import { ProductProps } from "../../utils/types";
import { getProductById } from "../../services/products";
import Loader from "../../components/common/Loader";
import Error from "../../components/common/Error";

function ProductPage({ id }: { id: string }) {
    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useQuery<ProductProps>("productsById", () => getProductById(id), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: id !== undefined,
    });

    const [price, setPrice] = useState(product?.prices[0] || 0);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState<
        { _id: string; text: string; price: number }[]
    >([]);

    function changePrice(number: number) {
        setPrice(price + number);
    }

    function changeSizeHandler(sizeIndex: number) {
        const delta =
            product && product.prices[sizeIndex] - product?.prices[size];
        setSize(sizeIndex);

        if (!delta) {
            return;
        }

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

    if (isLoading) {
        return <Loader isVisible={isLoading} />;
    }

    if (isError) {
        return <Error message={String(error)} />;
    }

    return (
        <Layout title={product?.title}>
            <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-between">
                <div className="w-full">
                    <div className="relative h-[65vw] w-[65vh] md:h-[90%] md:w-[90%]">
                        <Image
                            src={product?.img || ""}
                            alt={product?.title}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="mt-6 flex w-full flex-col items-center md:mt-0 md:items-start">
                    <h1 className="mb-4 text-3xl font-bold md:text-2xl">
                        {product?.title}
                    </h1>
                    <span className="mb-6 text-xl font-[400] text-primary md:text-lg">
                        RM {price}
                    </span>
                    <p className="mb-4 text-base md:text-sm">{product?.desc}</p>
                    <h3 className="mb-4 text-lg font-bold md:text-base">
                        Choose the size
                    </h3>
                    <div className="mb-6 flex w-full justify-between px-14 md:w-[40%] md:justify-between md:px-0">
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
                    <h3 className="mb-2 text-lg font-bold md:text-base">
                        Choose additional ingredients
                    </h3>
                    <div className="mb-5 flex flex-col gap-4 md:flex-row">
                        {product?.extraOptions.map((option) => (
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
    const id = context.params?.id as string;

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery<ProductProps>("productById", () =>
        getProductById(id)
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            id: id,
        },
    };
}
