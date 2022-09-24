import type { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/common/Layout";
import { ProductProps } from "../utils/types";
import { getProducts } from "../services";
import ProductCard from "../components/home/children/ProductCard";
import Carousel from "../components/common/carousel";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";

const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
];

const HomePage = () => {
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useQuery<ProductProps[]>("products", getProducts, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return <Loader isVisible={isLoading} />;
    }

    if (isError) {
        return <Error message={String(error)} />;
    }

    return (
        <Layout>
            <Carousel
                images={images}
                slideInterval={3000}
                backgroundColor="bg-primary"
            />
            <section className="flex flex-col items-center py-5 px-8">
                <h1 className="mb-4 text-3xl font-bold">
                    THE BEST PIZZA IN TOWN
                </h1>
                <p className="mb-6  text-center text-lg text-gray-700 md:w-[70%] md:text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio eum quaerat dolorum ea repellat repudiandae
                    voluptatibus illum quibusdam nobis dignissimos amet suscipit
                    sint quia tempore officia laudantium possimus ullam, iste
                    aspernatur assumenda similique impedit explicabo in.
                    Perspiciatis, asperiores! Earum incidunt eveniet possimus
                    sed accusantium veritatis, quisquam magni obcaecati modi
                    omnis.
                </p>
                <div className="flex w-full flex-wrap items-center justify-center gap-4">
                    {products?.map((product) => (
                        <ProductCard key={product._id} item={product} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<ProductProps[]>("products", getProducts);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}
