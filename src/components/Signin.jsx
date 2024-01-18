import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

export default function Signin() {
    const googleSignin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
            .then(result => {
                console.log(result)
            })
    }
    return (
        <button onClick={googleSignin} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto">
            Sign-in with google
        </button>
    )
}