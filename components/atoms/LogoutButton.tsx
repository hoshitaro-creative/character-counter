import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button backgroundColor="red">
      <button onClick={() => logout()}>ログアウト</button>
    </Button>
  );
};

export default LogoutButton;
