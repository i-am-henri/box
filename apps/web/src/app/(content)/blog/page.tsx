// Contentio 2024
import {type FrontMatter, getGallery} from "./[slug]/blog"

export default async function Gallery() {
    const data: FrontMatter[] = await getGallery()
    console.log(data)
    return (
        <div>
            {
                data.map((data) => (
                    <div>
                        {data.title}
                    </div>
                ))
            }
        </div>
    )
}