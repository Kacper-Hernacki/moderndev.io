## Moderndev

The [Moderndev](https://moderndev.io) knowledge base platform, developed with Typescript, Next.js, Tailwind, DaisyUI & Firebase.

## Contributing

All static content is managed with Notion as a CMS for education content.

### How to Run it

First, install [Hugo Extended](https://gohugo.io/getting-started/installing/) ver `0.101.0` or greater.

```
git clone <this-repo>
yarn add
yarn dev
```

Check it on `http://localhost:3000/`.


## Developing Components

Create a tsx file in the `/components` directory.

```typescript
"use client";
//type use client, if you want to use hooks

interface ComponentProps {
  header: string,
  //other props
}

export const DefaultComponent: React.FC<ComponentProps> = ({ header }) => {

  return (
    <div>{header}</div>
  );
};

```

Export the component from `component/index.ts`:

```ts
export * from './my-custom-component.tsx';
```

## Commands

- `yarn start`: Starts the server
- `yarn dev`: Runs localhost
- `yarn build`: Build for production

## Pull Requests

Each PR is deployed automatically by vercel, you can preview your changes.