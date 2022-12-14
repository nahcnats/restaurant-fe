import { useRouter } from "next/router";
import Layout from "./Layout";

interface ErrorTypes {
    message: string;
}

function Error({ message }: ErrorTypes) {
    const router = useRouter();

    return (
        <Layout>
            <div className="flex h-[85vh] flex-col items-center justify-center">
                <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
                    {message}
                </div>
                <button onClick={() => router.back()}>Go back</button>
            </div>
        </Layout>
    );
}

export default Error;
