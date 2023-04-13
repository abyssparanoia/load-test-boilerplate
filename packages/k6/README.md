## k6

### sample

```bash
# on root
> yarn
> yarn build

# on packages/k6
> k6 run -e API_HOST=http://localhost:3001 dist/create-users.js

> k6 run -e API_HOST=http://localhost:3001 dist/create-and-get-users.js
```
