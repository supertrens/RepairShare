# Audition Assignment for Engineers - RepairShare (Client)

A simple apollo-client that can connect to a graphql server to add/update stage
and tasks for a startup

## System Requirements

- node `16 || 18`
- npm v8.16.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
node --version
npm --version
```

If they are not installed on your system, you can :

- <a href="https://github.com/nvm-sh/nvm" target="_blank">Install nvm</a>
  - Then use nvm to install Node.js (Node 18.x, latest):
    ```shell
    nvm install --lts
    ```

## Running the app

To install required npm packages:

```shell
npm install
```

To run on prod build:

```shell
npm run build
```

To develop locally:

```shell
npm run dev
```

### Queries and Mutation available

`🚀 Server ready at: http://localhost:4000/`

- Queries

  - tasks: [Task!]
  - task(id: ID!): Task
  - stages: [Stage]
  - stage(id: ID!): Stage

- Mutations
  - addStage(name: String!): Stage
  - addTask(title: String!, stageId: ID!): Task
  - updateTaskStatus(isCompleted: Boolean!, taskId: ID!): Task

### Improvements (Todos)

Must

- Add authentication/authorization in the query context so that we could scope
  user access.
- Add Error handling.
- Add test coverage. For now we only have basic "happy path" coverage for the
  units and integration tests.
- Virtualized the list to improve performance
- Better usage of apollo cache to avoid multiple trip to the server when it is
  not necessary.

## Project Structure

- `src/`
  - `components/` All the different reusable component for the app
  - `utils\` where I define the constants - interfaces and enums
  - `graphql` where we iniate the apollo client and expose the queries/mutations
    available
  - `main.ts` We init and configure the app (apollo client) in this file.
  - `App.ts` The APP.
- at the top level we have a couple of config file to configure
  - typescript
  - tailwind (The css utility class we use for this project)
  - vite (the bundler that transpile the react code)
