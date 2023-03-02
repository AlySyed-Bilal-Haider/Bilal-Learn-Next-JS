import { useRouter } from "next/router";
function Product() {
  const router = useRouter();
  const { Product } = router.query;
  return <div>Dynamic routing {Product}</div>;
}

export default Product;
