import { useRouter } from "next/router";

function ReviewID() {
  const { reviewID } = useRouter();
  return <div>ReviewID {reviewID}</div>;
}

export default ReviewID;
