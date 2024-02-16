import { useRouter } from "next/router";
import React from "react";

export default function FilteredEventsPage() {
  const router = useRouter();
  const tenant = router.query;
  console.log(router.query);
  return (
    <div>
      <h1>FilteredEventsPage</h1>
     </div>
  );
}
