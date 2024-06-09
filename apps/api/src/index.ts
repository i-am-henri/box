/*
* The backend for box. 
* This is a hono server, which is similar to an express server.
*/

import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import isolatedVm from "isolated-vm"
import Handler from './handler'

/**The app class, here you can add new routes. */
export const app = new Hono()

// importing the routes from the "/routes" folder
Handler()

/**The port, where the hono server launches */
const port = 4000

console.log(` 
${"Server is running. Please go to http://localhost:" + port}`)

// Creating the server
serve({
  fetch: app.fetch,
  port
})