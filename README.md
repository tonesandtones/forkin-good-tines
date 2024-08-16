# Mono Repo for Strapi and Next Workshops

This repository serves as the central hub for our Strapi and Next.js workshops. It consolidates both the backend CMS and the frontend public website, alongside shared libraries facilitating code reuse across the project.

## Prerequisites

Before proceeding, ensure your development environment meets the following prerequisites:

- Code: Install the NX Console extension for streamlined command execution within the editor.
- Node.js: Ensure you have Node.js installed to manage dependencies and run the project.

## Setup

1. Install NX Console Extension

The NX Console extension for Visual Studio Code provides an integrated environment to execute NX commands directly from the editor, optimizing your workflow. Install the extension from the Extensions view (Ctrl + Shift + X) by searching for “NX Console” and clicking “Install.”

2. Install Project Dependencies

Navigate to the root directory of the repository and execute the following command to install all required dependencies:

```bash
npm install
```

This will set up the necessary packages to run and build the project.

## Repository Structure

- Apps
  - Strapi CMS: Located in apps/cms, this is the backend content management system built on Strapi 4.
  - Next.js Public Website: Located in apps/public-web, this frontend application is built using Next.js.
- Libs
  - Shared Code: Contains reusable code across different apps in the repository.
  - Shared-ui: Shared React components for Next.js, located in libs/shared-ui.
  - CMS API: A library for interacting with Strapi CMS via GraphQL, located in libs/cms-api.

## Running the Applications

## Strapi CMS

To launch the CMS in development mode, run the 'serve' task against the CMS project
or run

```bash
npx nx run cms:serve
```

Access the CMS admin interface at http://localhost:1337/admin.

The GraphQL endpoint is available at http://localhost:1337/graphql.

## Next.js Public Website

To launch the web site in development mode, run the 'dev' task against the public-web project

or run

```bash
 npx nx run public-web:dev
```

The application will be accessible at http://localhost:3000.

## CMS API Library

The cms-api library facilitates interaction with the Strapi CMS using GraphQL. It includes:

- Code Generation: Automatically generates strongly typed GraphQL queries and types.
- GraphQL Client: Provides a ready-to-use GraphQL client for data fetching within React components.
- Automatic Scanning: Scans all .graphql files in the libs directory and generates corresponding types and queries.

### Using the CMS API

To update GraphQL queries or mutations:

1. Modify or add .graphql files under the libs directory.
2. Regenerate types and queries by running:

```bash
npx nx run cms-api:codegen-generate
```

### Example Usage

Here’s how to utilize the generated API within a React component:

```typescript
import { getClient } from 'libs/cms-api';
import { BlogpostsQuery, BlogpostsQueryVariables, BlogpostsDocument } from 'libs/cms-api';

const { data } = await getClient().query<BlogpostsQuery, BlogpostsQueryVariables>({
  query: BlogpostsDocument as DocumentNode,
});

console.log(data);
```

## Shared UI Library

The project should include a set of shared components, designed for ease of use, customization, and scalability.

This library also includes support for shadcn. In order to add a specific shadcn component, please use the add component task provided in the nx commands. It's crucial to ensure that you enter the correct name of the component.

### Directory Structure

Components are organized within the shared directory:

```
.
└── src/
    ├── componentGroupN/
        ├── component1.tsx
        └── component2.tsx
    ├── Blogs/
        ├── BlogList.tsx
        └── BlogItem.tsx
    └── componentGroupN/
```

### Importing Components

Components are imported via ES6 import statements. Example:

```typescript
import { BlogList, BlogListItem } from '@sharknado/shared-ui';
```

## Styling

Tailwind CSS is used across all components to ensure consistent, responsive design. Customization is straightforward and adheres to the project’s styling guidelines.

This version is concise, focused on essential technical details, and assumes familiarity with tools and concepts.
