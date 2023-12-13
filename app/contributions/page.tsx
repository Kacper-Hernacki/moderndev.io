import Link from "next/link";
import React from "react";

export async function fetchCollaborators() {
  const response = await fetch(
    'https://api.github.com/repos/Kacper-Hernacki/moderndev.io/collaborators',
    {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch collaborators');
  }

  return await response.json();
}

export default async function Contributions() {
const collaborators = await fetchCollaborators()

  return (
    <div className="p-4 pb-10">
      <h1 className="mb-24 text-2xl md:text-3xl lg:text-5xl xl:text-7xl gradient-span font-bold text-center">Collaborators</h1>
      {/*@ts-ignore*/}
      {collaborators.map(collaborator => (
        <Collaborator key={collaborator.id} collaborator={collaborator} />
      ))}
    </div>
  );
}

type CollaboratorType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type CollaboratorProps = {
  collaborator: CollaboratorType;
};
const Collaborator:React.FC<CollaboratorProps> = ({ collaborator }) => {
  return (
    <Link target="_blank" href={collaborator?.html_url}>
      <div className="flex items-center space-x-4">
        <img
          src={collaborator.avatar_url}
          alt={collaborator.login}
          className="w-10 h-10 rounded-full"
        />
        <div className="text-sm font-medium">{collaborator.login}</div>
      </div>
    </Link>

  );
};