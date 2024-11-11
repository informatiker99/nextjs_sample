// "use client";
import React, { useEffect, useState } from "react";
import { ArticleTypes } from "../../../../types/articles";
import Link from "next/link";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Articles = async () => {
  // const [posts, setPosts] = useState([]);
  const result = await verifyAuth();
  if (!result.user) {
    return redirect("/");
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: "force-cache",
    next: { revalidate: 10 },
  });
  const posts = await response.json();
  console.log(posts);

  // const fetchData = async () => {

  //   try {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/users`
  //     );
  //     const data = await response.json();
  //     setPosts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="flex  gap-2 flex-wrap w-full justify-center">
      {posts.length > 0 &&
        posts.map((article: ArticleTypes, index: number) => {
          return (
            <div
              key={index}
              className="flex border md:text-base text-sm   flex-col rounded-lg shadow-md items-center px-2 py-3 w-60 "
            >
              <div className="w-full flex justify-start mx-1 p-2">
                <span className="text-white bg-red-600 rounded-md text-sm p-1 ">
                  {article.category}
                </span>
              </div>
              <div className="w-5/6 h-36 bg-slate-300 rounded-md"></div>
              <div>
                <p className="py-2 ">{article.title}</p>
              </div>
              <div className="p-1 w-5/6 flex flex-col">
                <p className="">{article.content}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="px-2 py-1 my-2 bg-blue-600 text-white w-fit rounded-full"
                >
                  read more
                </Link>
              </div>
              <div className="w-full flex items-center justify-between px-4">
                <small className="text-gray-500">{article.date}</small>
                <div className="flex items-center">
                  <em className="text-gray-500 text-xs">written by &nbsp; </em>
                  <small className="text-gray-500">{article.author}</small>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
