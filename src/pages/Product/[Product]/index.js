import Link from "next/link";
function index() {
  return (
    <>
      {" "}
      <h1>
        <div>Products one</div>
        <Link href="/Product/1">Product Ones</Link>
      </h1>
    </>
  );
}

export default index;
