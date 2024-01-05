"use client"
import React, { useState } from "react";
import { deleteUser, getAuth } from "@firebase/auth";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const deleteUserFromFirestore = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      deleteUser(user).then(() => {
        // User deleted.
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div
      className="bg-base-100 modal modal-open fixed inset-0 z-50"
      onClick={closeModal}
    >
      <h1 className="text-secondary mb-8 text-5xl font-bold">
        Are you sure you want to delete this account?
      </h1>
      <button onClick={deleteUserFromFirestore} className="btn btn-secondary text-xl">Delete</button>
    </div>
  );
};
export function DeleteModal(){
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return(
    <>
      <div className="mt-32 my-8">
        <h1 className="text-secondary mb-8 text-5xl font-bold">Delete this account</h1>
        <button onClick={openModal} className="btn btn-secondary text-xl">Delete this Account</button>
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal} />
      )}
    </>
  )
}