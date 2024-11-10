"use server";

import { redirect } from "next/navigation";


type FormActionParameters = {
  userName: string;
  password: string;
};

export const signup = async (state: FormActionParameters, data: FormData) => {
  const userName = data.get("userName") as string;
  const password = data.get("password") as string;
  const validatedInputs = {
    userName: userName.trim(),
    password: password.trim(),
  };
  if (!validatedInputs.password || !validatedInputs.userName) {
    return {
      errors: "all the field must be filled out ",
    };
  }
  console.log(validatedInputs);
  redirect('/articles')
};
