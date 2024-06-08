import DarkModeSvg from "public/box-light.svg"
import LightModeSvg from "public/box.svg"
import Img from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
export default function Navigation() {
    return (
        <header className="flex items-center mt-8 justify-between text-neutral-900 dark:text-neutral-100">
            <Link href="/">
                <Img src={DarkModeSvg} height={30} width={30} alt="The box logo." />
            </Link>
            <nav className="flex space-x-3">
                <Link href="/features">features</Link>
                <Link href="/pricing">pricing</Link>
                <Button variant={"secondary"} className=" bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 transition bg-buttonAnimation background-hover ">
                    register
                </Button>
            </nav>
        </header>
    )
}