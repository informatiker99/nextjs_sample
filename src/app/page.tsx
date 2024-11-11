import LoginForm from "@/components/loginForm";
import React from "react";

const page = ({ searchParams }) => {
  const formMode = searchParams.mode || "login"; 
  return (
    <div>
      <LoginForm mode={formMode} />
    </div>
  );
};

export default page;
