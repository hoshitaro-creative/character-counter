import { Button } from "@chakra-ui/react";
import app from "firebase";
import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => (
  <Button backgroundColor="red.200" onClick={() => signOut(getAuth(app))}>
    ログアウト
  </Button>
);

export default LogoutButton;
