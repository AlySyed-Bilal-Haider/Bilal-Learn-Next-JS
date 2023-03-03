import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const rounter = useRouter();
  const programaticallyNavigations = () => {
    rounter.push("/Product");
  };
  return (
    <>
      <button
        style={{ width: "10%", height: "30px" }}
        onClick={programaticallyNavigations}
      >
        Product
      </button>
    </>
  );
}

export default Home;
