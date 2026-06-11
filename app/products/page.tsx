// import ProductsContainer from "@/components/products/ProductsContainer";

// async function ProductsPage({
//   searchParams,
// }: {
//   searchParams: {
//     layout?: string;
//     search?: string;
//   };
// }) {
//   const layout = searchParams.layout || "grid";
//   const search = searchParams.search || "";

//   return <ProductsContainer layout={layout} search={search} />;
// }

// export default ProductsPage;
import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    layout?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;

  const layout = params.layout || "grid";
  const search = params.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
