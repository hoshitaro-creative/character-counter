import { Button } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import init from "firebaseInit";

const LogoutButton = () => {
  init();
  return (
    <Button backgroundColor="red.200" onClick={() => signOut(getAuth())}>
      ログアウト
    </Button>
  );
};

export default LogoutButton;
