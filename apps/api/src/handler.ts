import fs from "fs"
/**Importing the routes to the main function */
export default async function Handler() {
    const files = await fs.promises.readdir("./src/routes") // string[] 

    for await (const file of files) {
        await import("./routes/" + file)
    }
}