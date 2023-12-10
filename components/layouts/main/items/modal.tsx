"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { pages } from "@/content/pages";
import Link from "next/link";

type ModalProps = {
  closeModal: () => void;
  closeBothModals: () => void;
};

interface Page {
  name: string;
  path: string;
  preview: string;
}

export const Modal: React.FC<ModalProps> = ({ closeModal, closeBothModals }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Page[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebouncedCallback(
    // Function to debounce
    (searchQuery: string) => {
      const filteredResults = pages.filter((page) =>
        page.name.toLowerCase().includes(searchQuery.toLowerCase()) || page.preview.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setResults(filteredResults);
    },
    // Delay in ms
    300,
  );

  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery); // Directly call the debounced function
  };

  return (
    <div
      className="bg-base-100 modal modal-open fixed inset-0 z-50"
      onClick={closeModal}
    >
      <div
        className="modal-box relative p-4 max-w-sm mx-auto rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-md font-bold mb-4">Search things on this platform from here</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-md w-full"
          value={query}
          onChange={handleInputChange}
        />
        <div>
          <div className="search-results overflow-y-auto max-h-60"> {/* Adjust max height as needed */}
            {results.map((result) => (
              <Link key={result.path} href={result.path}>
                <div onClick={closeBothModals} className="my-2 block hover:bg-gray-500 p-3 rounded-lg transition ease-in-out">
                  <strong>{result.name}</strong> - {result.preview}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};
