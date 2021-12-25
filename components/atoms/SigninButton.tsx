import { Button } from "@chakra-ui/react";
import app from "firebase";
import { EmailAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

const provider = new EmailAuthProvider();
const signin = () => signInWithRedirect(getAuth(app), provider);

const SigninButton = (): JSX.Element => (
  <Button onClick={signin}>ログインもしくはサインアップ</Button>
);

export default SigninButton;
