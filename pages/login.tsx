import { Button } from "@chakra-ui/button";
import SigninButton from "components/atoms/SigninButton";
import Layout from "components/Layout";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import init from "firebaseInit";
import { useEffect, useState } from "react";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  init();
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
    });
  });

  return (
    <Layout title="character counter app">
      {user ? (
        <Button>
          <Link href="/app">
            <a>アプリ画面へ</a>
          </Link>
        </Button>
      ) : (
        <SigninButton></SigninButton>
      )}
    </Layout>
  );
};

export default Login;
