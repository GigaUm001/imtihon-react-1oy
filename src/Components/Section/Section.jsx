import Card from "../Card/Card";
import products from "../../tools";

const Section = () => {
  return (
    <section className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="w-[1200px] mx-auto grid grid-cols-4 gap-[20px]">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Section;
