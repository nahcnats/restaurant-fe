import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Layout from "../components/common/Layout";
import QuantityToggler from "../components/common/QuantityToggler";

const cartItems = [
    {
        img: "/images/pizza.png",
        name: "CAMPAGNOLA",
        extras: ["Double Ingredients", "Spicy Sauce"],
        price: 23.9,
        quantity: 1,
    },
    {
        img: "/images/pizza.png",
        name: "CAMPAGNOLA 1",
        extras: ["Double Ingredients", "Spicy Sauce"],
        price: 23.9,
        quantity: 2,
    },
    {
        img: "/images/pizza.png",
        name: "CAMPAGNOLA 2",
        extras: ["Double Ingredients", "Spicy Sauce"],
        price: 23.9,
        quantity: 1,
    },
    {
        img: "/images/pizza.png",
        name: "CAMPAGNOLA 3",
        extras: ["Double Ingredients", "Spicy Sauce"],
        price: 23.9,
        quantity: 3,
    },
];

function CartPage() {
    return (
        <Layout title="Cart">
            <div className="grid grid-cols-1 gap-2 p-5 md:grid-cols-4">
                <div className="col-span-3 overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 px-2 text-left md:px-0">
                                    Item
                                </th>
                                <th className="py-2 px-2 text-left md:px-0">
                                    Extras
                                </th>
                                <th className="py-2 px-2 text-right md:px-0">
                                    Price RM
                                </th>
                                <th className="py-2 px-2 text-right md:px-0">
                                    Quantity
                                </th>
                                <th className="py-2 px-2 text-right md:px-0">
                                    Total RM
                                </th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, i) => (
                                <tr key={i} className="border-b">
                                    <td className="pr-2 md:pr-0">
                                        <Link href="#" passHref>
                                            <a className="flex md:items-center">
                                                <div className="relative hidden pt-2 md:block">
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded"
                                                    />
                                                </div>
                                                &nbsp; <span>{item.name}</span>
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        <ul className="list-disc pl-4">
                                            {item.extras.map((extra, idx) => (
                                                <li key={idx}>{extra}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="px-2 text-right md:px-0">
                                        {item.price.toFixed(2)}
                                    </td>
                                    <td className="px-2 text-right md:px-0">
                                        <QuantityToggler
                                            item={item}
                                            onUpdate={() => null}
                                        />
                                    </td>
                                    <td className="px-2 text-right md:px-0">
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </td>
                                    <td className="text-center text-red-500">
                                        <button className=" hover:text-accent">
                                            <AiOutlineCloseCircle size="1.5rem" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="card max-h-56 p-4">
                        <h2 className="mb-2 text-lg font-semibold">
                            CART TOTAL
                        </h2>
                        <ul className="mb-4 leading-loose">
                            <li className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>
                                    RM{" "}
                                    {cartItems
                                        .reduce((a, c) => a + c.quantity, 0)
                                        .toFixed(2)}
                                </span>
                            </li>
                            <li className="flex justify-between">
                                <span>Discount:</span>
                                <span>RM 0</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Total:</span>
                                <span>
                                    RM{" "}
                                    {cartItems
                                        .reduce(
                                            (a, c) => a + c.quantity * c.price,
                                            0
                                        )
                                        .toFixed(2)}
                                </span>
                            </li>
                        </ul>
                        <button className="primary-button w-full">
                            CHECK OUT
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;
