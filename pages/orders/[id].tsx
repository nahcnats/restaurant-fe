import Image from "next/image";
import Layout from "../../components/common/Layout";
import styles from "../../styles/order.module.css";

const orderItems = [
    {
        orderId: 10001,
        customer: "Bob Raja Petra",
        address:
            "100, Jalan 18/38A, Taman Sri Sinar, Segambut, 51200 Kuala Lumpur",
        total: 12.9,
    },
];

const statuses = [
    { image: "/images/paid.png", name: "Paid", checked: "/images/checked.png" },
    {
        image: "/images/bake.png",
        name: "Preparing",
        checked: "/images/checked.png",
    },
    {
        image: "/images/bike.png",
        name: "On the way",
        checked: "/images/checked.png",
    },
    {
        image: "/images/delivered.png",
        name: "Delivered",
        checked: "/images/checked.png",
    },
];

function OrderPage() {
    const status = 0;
    // const statusRef = useRef() as MutableRefObject<HTMLDivElement>;

    const statusClass = (index: number) => {
        if (index - status < 1) {
            return styles.done;
        }
        if (index - status === 1) {
            return styles.inProgress;
        }
        if (index - status > 1) {
            return styles.inComplete;
        }
    };

    return (
        <Layout title="Order">
            <div className="grid grid-cols-1 gap-2 p-5 md:grid-cols-4">
                <div className="col-span-3 overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 px-2 text-left md:px-0">
                                    Order ID
                                </th>
                                <th className="py-2 px-2 text-left md:px-0">
                                    Customer
                                </th>
                                <th className="py-2 px-2 text-left md:px-0">
                                    Address
                                </th>
                                <th className="py-2 px-2 text-right md:px-0">
                                    Total RM
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item, i) => (
                                <tr key={i} className="border-b">
                                    <td>{item.orderId}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.address}</td>
                                    <td className="px-2 text-right md:px-0">
                                        {item.total.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex w-full justify-between md:w-[80%]">
                        {statuses.map((item, index) => (
                            <div key={index} className={statusClass(index)}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={30}
                                    height={30}
                                />
                                <span>{item.name}</span>
                                <div className={styles.checkedIcon}>
                                    <Image
                                        src={item.checked}
                                        alt="checked"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
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
                                    RM
                                    {orderItems
                                        .reduce((a, c) => a + c.total, 0)
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
                                    RM
                                    {orderItems
                                        .reduce(
                                            (a, c) =>
                                                a + c.total * orderItems.length,
                                            0
                                        )
                                        .toFixed(2)}
                                </span>
                            </li>
                        </ul>
                        <button
                            disabled
                            className="secondary-button w-full cursor-not-allowed"
                        >
                            PAID
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default OrderPage;
