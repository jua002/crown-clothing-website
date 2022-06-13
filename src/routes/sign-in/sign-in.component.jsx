import {
  signInWithGooglePopUP,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUP();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
