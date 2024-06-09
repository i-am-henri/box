import { app } from ".."

app.get('/', (c) => {
    return c.text('Hello Hono!')
})