import { useRouter } from "next/router";
function CatchALl() {
  let route = useRouter();
  let { params = [] } = route?.query;
  return <div>{params?.length}</div>;
}

export default CatchALl;
