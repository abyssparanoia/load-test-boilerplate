# application-boilerplate

A boilerplate for load test by k6

## Apps

| Package                                 | Localhost             | Prodction |
| :-------------------------------------- | :-------------------- | :-------- |
| **[[NEST.JS] api](./packages/backend)** | http://localhost:3001 | api.\*    |

### sample

```bash
# on root
> yarn
> yarn build

> docker compose up -d
> yarn workspace @load-test-boilerplate/backend migration:run
> yarn workspace @load-test-boilerplate/backend start:dev

# on packages/k6
> k6 run -e API_HOST=http://localhost:3001 dist/create-users.js

> k6 run -e API_HOST=http://localhost:3001 dist/create-and-get-users.js
```
