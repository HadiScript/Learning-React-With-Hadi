import React from "react";

const Layouts = ({name = "pages", children}) => {
  return <div>
   {name}

    {children}  
  
  </div>;
};

export default Layouts;
