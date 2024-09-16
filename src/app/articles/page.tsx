import React from "react";
import { ArticleTypes } from "../../../types/articles";
import Link from "next/link";

const Articles = async () => {
  const data = await fetch(`https://api.vercel.app/blog`, {
    cache: "force-cache",
  });
  const posts = await data.json();

  return (
    <div className="flex gap-4 flex-wrap w-full justify-center">
      {posts.length > 0 &&
        posts.map((article: ArticleTypes, index: number) => {
          return (
            <div
              key={index}
              className="flex border md:text-base text-sm   flex-col rounded-lg shadow-md items-center px-2 py-3 "
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
