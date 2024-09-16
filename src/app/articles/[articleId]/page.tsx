"use client";
import React, { useEffect } from "react";

const newsDetailPage = (props: {
  params: { articleId: string };
  searchParams: string;
}) => {
  const articleId = props.params.articleId;
  console.log(articleId);

  const fetchData = () => {
    fetch(`https://api.vercel.app/blog/${articleId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [articleId]);

  return <div>newsDetailPage</div>;
};

export default newsDetailPage;
