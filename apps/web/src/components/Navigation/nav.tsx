import DarkModeSvg from "public/box-light.svg"
import LightModeSvg from "public/box.svg"
import Img from "next/image"
import {Card} from "@repo/ui/card"
import Link from "next/link"
export default function Navigation() {
    return (
        <header className="flex items-center justify-between text-neutral-900 dark:text-neutral-100">
            <Link href="/">
                <Img src={DarkModeSvg} height={30} width={30} alt="The box logo." />
            </Link>
            <nav>
                <Link href="/features">features</Link>
                <Link href="/pricing">pricing</Link>
                <Card href="/hey" title="hallo" key={"wow"}>
                    wow
                </Card>
            </nav>
        </header>
    )
}