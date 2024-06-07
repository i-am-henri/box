import Navigation from "~/components/Navigation/nav";
import Image from "next/image";
import Sandbox from "../../public/sandbox.svg"
import { Button } from "~/components/ui/button";
export default function Home() {
  return (
    <div className="flex  flex-col items-center w-full bg-neutral-50  text-neutral-700 dark:text-neutral-300 dark:bg-neutral-950 min-h-screen">
      <div className="w-full mx-5 flex flex-col space-y-14 md:mx-7 md:w-[600px] lg:w-[700px]">
        <Navigation />
        <div>
          <h2 className="text-4xl text-neutral-700 dark:text-neutral-300">
            Your code, running in the clode, with access from everywhere
          </h2>
          <p>
            We provide you a platform for your code. Code on your projects togo, create a pull request and more. This platform is open-source, optimized for tablets and mobile devices and even
          </p>
        </div>
      </div>
      <div className="w-full mx-1 mt-8 md:mx-3 md:w-[650px] lg:w-[800px]">
        <Image className="rounded-xl" src={Sandbox} alt="sandbox" />
      </div>
    </div>
  )
}