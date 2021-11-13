import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import firebaseInitAuth from "../Firebase/Firebase.init";
import swal from "sweetalert";
// firebase init call
firebaseInitAuth();

const UseFirebase = () => {
  // set state
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  // const [loading , setLoading] = useState(true)
  const auth = getAuth();
  // create email
  const CreateEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in email
  const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logOut = () => {
    swal({
      title: "Are you sure want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        signOut(auth)
          .then(() => {
            setUser({});
            setError("");
            swal("Your Aceount has been Log out now", {
              icon: "success",
            });
          })
          .catch((error) => {})
          .finally(() => setIsLoading(false));
      }
    });
  };
  // update email and password  call
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observe hook
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, [user]);

  // admin check
  useEffect(() => {
    fetch(`https://cryptic-plains-45363.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);
  return {
    user,
    setUser,
    isLoading,
    error,
    setError,
    setIsLoading,
    signInEmail,
    updateUserName,
    logOut,
    CreateEmail,
    admin,
    setAdmin,
  };
};

export default UseFirebase;
