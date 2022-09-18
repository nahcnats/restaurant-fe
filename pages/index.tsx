import type { GetServerSidePropsContext } from "next";
import axios from "axios";
import Layout from "../components/common/Layout";
import Carousel from "../components/common/carousel";
import PizzaList from "../components/home/PizzaList";
import { ProductProps } from "../utils/types";

const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
];

const HomePage = ({ products }: { products: Array<ProductProps> }) => {
    return (
        <Layout>
            <Carousel
                images={images}
                slideInterval={3000}
                backgroundColor="bg-primary"
            />
            <PizzaList products={products} />
        </Layout>
    );
};

export default HomePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const NEXT_CROSS_ORIGIN = process.env.NEXT_CROSS_ORIGIN;
    const res = await axios.get(`${NEXT_CROSS_ORIGIN}/api/products`);

    return {
        props: {
            products: res.data,
        },
    };
}
