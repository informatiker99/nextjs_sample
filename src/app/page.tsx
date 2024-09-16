import React from "react";
import MaxWidthWrapper from "../../components/maxWidthWrapper";
import Link from "next/link";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div>
        <Link href="/articles" >Go to articles</Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
