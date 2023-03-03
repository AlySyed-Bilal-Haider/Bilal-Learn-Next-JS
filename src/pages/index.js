import Link from "next/link";

function Home() {
  return (
    <>
      <h1>
        <Link href="/Product">Product</Link>
      </h1>
      <h1>
        <Link href="/Product/1">Product Ones</Link>
      </h1>
    </>
  );
}

export default Home;
