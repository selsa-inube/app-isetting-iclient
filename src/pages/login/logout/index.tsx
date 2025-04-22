import { Home } from "@pages/home";
import { useNotBusinessUnit } from "@hooks/useNotBusinessUnit";

const Logout = () => {
  useNotBusinessUnit({ isHandlelogout: false });
  return <Home />;
};

export { Logout };
