# user-role

A web application that manages user roles, such as whether or not a user can access a service.

# Architecture

The project is made in monorepo, using turborepo and pnpm workspace, with the `apps` folder containing the applications, and the `packages` folder for shared modules.

## Tech Stack

**Client:** Next.js, TailwindCSS, DaisyUI

**Server:** Node, Express

**Ability:** CASL


## Installation

Clone the project :

```bash
  git clone https://github.com/heryfitiavana22/user-role.git
  cd user-role
```
    
Download dependencies :

```bash
  pnpm install
```    
First, setup `environment variables` in web and server.

Run the server :

```bash
  cd apps/server
  pnpm dev
```

Then, the web :

```bash
  cd apps/web
  pnpm dev
```    
and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
