import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../../../utils/types";

function PizzaCard({ item }: { item: ProductProps }) {
    return (
        <Link href={`/product/${item._id}`} passHref>
            <div className="card flex w-full cursor-pointer flex-col items-center justify-center p-20">
                <Image src={item.img} alt="" width="500" height="500" />
                <h1 className="my-4 text-lg font-bold text-primary">
                    {item.title}
                </h1>
                <span className="mb-4 text-lg font-semibold text-gray-500">
                    RM {item.prices[0].toFixed(2)}
                </span>
                <p className="text-center text-sm text-gray-400">{item.desc}</p>
            </div>
        </Link>
    );
}

export default PizzaCard;
