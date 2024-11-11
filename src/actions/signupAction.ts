"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

type FormActionParameters = {
  userName: string;
  password: string;
};

export const signup = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  // if (!email.includes("@")) {
  //   errors.email = "Please enter a valid email address.";
  // }

  // if (password.trim().length < 8) {
  //   errors.password = "Password must be at least 8 characters long.";
  // }

  // if (Object.keys(errors).length > 0) {
  //   return {
  //     errors,
  //   };
  // }
  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/articles");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email:
            "It seems like an account for the chosen email already exists.",
        },
      };
    }
    throw error;
  }
};

export const login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "could not athenticate user check the credentials ",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "wrong password! ",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/articles");
};

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export const logout = async () => {
  await destroySession();
  redirect("/");
};
