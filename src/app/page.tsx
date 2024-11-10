"use client";
import React, { useActionState } from "react";
import MaxWidthWrapper from "../../components/maxWidthWrapper";
import Link from "next/link";
import HoverHighlightCard from "../../components/card";
import { signup } from "@/actions/signupAction";
import { useFormState } from "react-dom";

const Page = () => {
  const [formState, formAction] = useFormState(signup, {});

  return (
    <MaxWidthWrapper>
      <form className="w-full max-w-sm p-4" action={formAction}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Jane Doe"
              name="userName"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              name="password"
            />
          </div>
        </div>
        {formState.errors && (
          <ul id="form-errors">
            {Object.keys(formState).map((error, index) => {
              console.log(formState[error]);
              return (
                <li className="text-red-400" key={index}>
                  {" "}
                  {formState[error]}
                </li>
              );
            })}
          </ul>
        )}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </MaxWidthWrapper>
  );
};

export default Page;
