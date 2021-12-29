import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import init from "firebaseInit";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SigninButton: React.VFC = () => {
  init();

  return (
    <StyledFirebaseAuth
      uiConfig={{
        signInFlow: "popup",
        signInSuccessUrl: "https://character-counter-f4d21.web.app/app",
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod:
              firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          },
        ],
      }}
      firebaseAuth={getAuth()}
    ></StyledFirebaseAuth>
  );
};

export default SigninButton;
