import ProductCard from "./children/ProductCard";
import { ProductProps } from "../../utils/types";

function PizzaList({ products }: { products: Array<ProductProps> }) {
    return (
        <section className="flex flex-col items-center py-5 px-8">
            <h1 className="mb-4 text-3xl font-bold">THE BEST PIZZA IN TOWN</h1>
            <p className="mb-6  text-center text-lg text-gray-700 md:w-[70%] md:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eum quaerat dolorum ea repellat repudiandae voluptatibus illum
                quibusdam nobis dignissimos amet suscipit sint quia tempore
                officia laudantium possimus ullam, iste aspernatur assumenda
                similique impedit explicabo in. Perspiciatis, asperiores! Earum
                incidunt eveniet possimus sed accusantium veritatis, quisquam
                magni obcaecati modi omnis.
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
                {products.map((item) => (
                    <ProductCard key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PizzaList;
