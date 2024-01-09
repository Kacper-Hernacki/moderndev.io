import React from "react";
import { deleteUser, getAuth } from "@firebase/auth";
import { doc } from "@firebase/firestore";
import { db } from "@/firebase";
import admin from "firebase-admin";

interface ModalProps {
  closeModal: () => void;
  enqueueSnackbar: (message: string, options?: object) => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal, enqueueSnackbar }) => {

  const deleteUserFromFirestore = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log('🚀 ',auth)
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        // await deleteDoc(userDocRef);
        if (user) {
          deleteUser(user).then(() => {
            console.log('User auth record deleted');
          }).catch((error) => {
            console.error('Error deleting user auth record:', error);
          });

          // await admin.auth().deleteUser(user.uid)
          //   .then(() => {
          //     console.log('Successfully deleted user');
          //   })
          //   .catch((error) => {
          //     console.log('Error deleting user:', error);
          //   });
        }
        enqueueSnackbar("Account Deleted", { variant: "success" });
      } catch (err) {
        console.error("Error deleting user: ", err);
        enqueueSnackbar("Error deleting account", { variant: "error" });
      }
    }
  };
  return (
    <div
      className="bg-base-100 modal modal-open fixed inset-0 z-50"
      onClick={closeModal}
    >
      <div className="p-12 bg-base-100 rounded-2xl grid items-center">
        <h1 className="text-secondary text-center mb-8 text-5xl font-bold">
          Are you sure you want to delete this account?
        </h1>
        <button onClick={deleteUserFromFirestore} className="w-52 mx-auto btn btn-secondary text-xl">Delete</button>
      </div>
    </div>
  );
};