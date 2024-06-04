import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 4000
console.log(`
${"Server is running. Please go to https://localhost:" + port}`)

serve({
  fetch: app.fetch,
  port
})