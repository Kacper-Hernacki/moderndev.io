import React from 'react';
import Link from 'next/link';

// Define the type for the props
type ModalProps = {
  closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div
      className="bg-base-100 modal modal-open fixed inset-0 z-50"
      onClick={closeModal}
    >
      <div
        className="modal-box relative p-4 max-w-sm mx-auto rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        This feature is still under development. Maybe you want to help? If so, contribute <Link target="_blank" href="https://github.com/Kacper-Hernacki/moderndev.io"><span className="text-accent">here</span></Link>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};
