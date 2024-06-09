import fs from "fs"
/**Importing the routes to the main function */
export default async function Handler() {
    // reading the "routes" folder for files
    const files = await fs.promises.readdir("./src/routes") // string[] 

    for await (const file of files) {
        // importing the files of the "routes" folder
        await import("./routes/" + file)
    }
}