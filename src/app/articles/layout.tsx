import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="p-8 flex items-center bg-blue-50 ">
        This is the header from news Layout ! <hr />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
