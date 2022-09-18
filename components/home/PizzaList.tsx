import PizzaCard from "./children/PizzaCard";
import { ProductProps } from "../../utils/types";

function PizzaList({ products }: { products: Array<ProductProps> }) {
    return (
        <section className="flex flex-col items-center py-5 px-8">
            <h1 className="mb-4 text-3xl font-bold">THE BEST PIZZA IN TOWN</h1>
            <p className="mb-6 w-[70%] text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eum quaerat dolorum ea repellat repudiandae voluptatibus illum
                quibusdam nobis dignissimos amet suscipit sint quia tempore
                officia laudantium possimus ullam, iste aspernatur assumenda
                similique impedit explicabo in. Perspiciatis, asperiores! Earum
                incidunt eveniet possimus sed accusantium veritatis, quisquam
                magni obcaecati modi omnis.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <PizzaCard key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PizzaList;
