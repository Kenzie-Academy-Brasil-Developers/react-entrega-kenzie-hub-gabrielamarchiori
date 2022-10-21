import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";

interface iContextsProps {
  children: React.ReactNode;
}

const Contexts = ({ children }: iContextsProps) => {
  return (
    <TechProvider>
      <UserProvider>{children}</UserProvider>
    </TechProvider>
  );
};

export default Contexts;
