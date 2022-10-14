import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";

const Contexts = ({ children }) => {
  return (
    <TechProvider>
      <UserProvider>{children}</UserProvider>
    </TechProvider>
  );
};

export default Contexts;
