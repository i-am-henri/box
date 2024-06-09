/**Home route, providing infos */
import { app } from ".."

app.get('/', (c) => {
    return c.text("Backend for box.")
})