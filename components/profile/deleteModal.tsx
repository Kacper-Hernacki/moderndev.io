"use client";
import React, { useState } from "react";
import { deleteUser, getAuth } from "@firebase/auth";
import { useSnackbar } from "notistack";
import { signOut } from "next-auth/react";
import { deleteDoc, doc, setDoc } from "@firebase/firestore";
import { serverTimestamp } from "@firebase/database";
import { db } from "@/firebase";
import admin from "firebase-admin";
import { Modal } from "@/components/profile/modal";


export function DeleteModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="mt-32 my-8">
        <h1 className="text-secondary mb-8 text-5xl font-bold">Delete this account</h1>
        <button onClick={openModal} className="btn btn-secondary text-xl">Delete this Account</button>
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal} enqueueSnackbar={enqueueSnackbar} />
      )}
    </>
  );
}