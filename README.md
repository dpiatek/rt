# rt

Developed with node.js 18.18.0 and npm 10.3.0.

You can prefix the below commands with npx or install the nx tool globally:

```bash
npm add --global nx@latest
```

To run the API:

```bash
nx run live-market-api:serve
```

The api will be listening on `http://localhost:3333`.

To run the frontend:

```bash
nx run live-market:start
```

The frontend will be served on `http://localhost:3000`.

To run unit tests for the frontend:

```bash
nx test live-market
```

To run e2e tests for the frontend (note this uses the servers you'd run above):

```bash
nx e2e live-market-e2e
```
