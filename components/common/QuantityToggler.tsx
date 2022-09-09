import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface QuantityTogglerProps {
    item: {
        countInStock?: number;
        quantity: number;
    };
    onUpdate: (newQuantity: number) => void;
}

export default function QuantityToggler({
    item,
    onUpdate,
}: QuantityTogglerProps) {
    const { countInStock, quantity } = item;
    let newQuantity: number = quantity;

    function decrementHandler() {
        newQuantity = newQuantity - 1;

        onUpdate(newQuantity);
    }

    function incrementHandler() {
        newQuantity = newQuantity + 1;

        onUpdate(newQuantity);
    }

    return (
        <div className="flex justify-end">
            <div className="flex items-center justify-between">
                <button
                    className={`rounded ${
                        quantity === 1 ? "bg-gray-300" : "bg-red-500"
                    }  p-2`}
                    onClick={decrementHandler}
                    disabled={quantity === 1 ? true : false}
                >
                    <AiOutlineMinus />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                    className="rounded bg-green-500 p-2"
                    onClick={incrementHandler}
                    disabled={countInStock === quantity ? true : false}
                >
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    );
}
