import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../../../utils/types";

function PizzaCard({ item }: { item: ProductProps }) {
    return (
        <Link href={`/product/${item._id}`} passHref>
            <div className="card flex w-full cursor-pointer flex-col items-center justify-center p-[10px] md:w-[22%]">
                <Image
                    src={item.img}
                    alt={item.title}
                    width="500"
                    height="500"
                />

                <h1 className="my-4 text-2xl font-bold text-primary md:text-xl">
                    {item.title}
                </h1>
                <span className="mb-4 text-lg font-semibold text-gray-500 md:text-base">
                    RM {item.prices[0].toFixed(2)}
                </span>
                <p className="text-center text-base text-gray-400 md:text-sm">
                    {item.desc}
                </p>
            </div>
        </Link>
    );
}

export default PizzaCard;
