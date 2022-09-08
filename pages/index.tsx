import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import Carousel from "../components/common/carousel";
import PizzaList from "../components/PizzaList";

const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
];

const HomePage: NextPage = () => {
    return (
        <Layout>
            <Carousel
                images={images}
                slideInterval={3000}
                slideHeight="calc(100vh-100px)"
                backgroundColor="bg-primary"
            />
            <PizzaList />
        </Layout>
    );
};

export default HomePage;
