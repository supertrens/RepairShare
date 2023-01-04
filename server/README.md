# Audition Assignment for Engineers - RepairShare

A simple apollo-server web API on Node 18.x that receives and processes
stage/tasks data.

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

To run locally:

```shell
npm run start
```

To develop locally:

```shell
npm run start:dev
```

### GRAPHQL API endpoints

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

Improvement

- To fullfil the project requirements, I implemented a fake DB using js Map. In
  real world we will need a db such as Postgresql or mongodb to persist the
  data. NB) I tried to use a data structure (taskTable and stageTable) That can
  represent a real db table
- Set an in memory db (example: redis) that will write to a persistent db such
  as postgres for server request
- Dockerize the application to facilitate smoother onboarding

## Project Structure

- `src/`
  - `handlers/` the "service" handlers. The only place we interact with the db.
    The controller can consume those handlers to respond to the requests.
  - `utils\`
    - `db.js` Our in memory DB implementation
  - `resolvers.js` All the functions that connect to the DB to fulfill the
    request
  - `schema.graphql` Available GraphQL queries and mutations
  - `index.js` We init and configure the app (apollo server) in this file.
