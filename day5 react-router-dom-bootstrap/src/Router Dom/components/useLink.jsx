import { useLocation } from "react-router-dom";

const useLink = () => {
  const { pathname } = useLocation();
  
  
  function whatsMyName(x) {
    return pathname === x ? true : false;
  }

  return {whatsMyName}
};

export default useLink;
