import type { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/common/Layout";
import Home from "../components/home";
import { ProductProps } from "../utils/types";
import { findAll } from "../components/home/services";

const HomePage = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default HomePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<ProductProps[]>("products", findAll);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}
