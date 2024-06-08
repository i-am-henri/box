import Navigation from "~/components/Navigation/nav";
import Image from "next/image";
import Sandbox from "../../public/sandbox.svg"
import { Button } from "~/components/ui/button";


export default function Home() {
  return (
    <div className="flex  flex-col items-center w-full bg-neutral-50  text-neutral-700 dark:text-neutral-300 dark:bg-neutral-950 min-h-screen">
      <div className="w-full mx-5 flex flex-col space-y-14 md:mx-7 md:w-[600px] lg:w-[700px] z-20">
        <Navigation />
        <div>
          <h2 className="text-4xl font-medium text-neutral-900 dark:text-neutral-100">
            Your code, running in the clode, with access from everywhere.
          </h2>
          <p>
            We provide you a platform for your code. Code on your projects togo, create a pull request and more. This platform is open-source, optimized for mobile-devices, teams and schools.
          </p>
          <div className="flex space-x-3">
            <Button className="mt-4">
              start now
            </Button>
            <Button variant={"secondary"} className="mt-4">
              login
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full mx-1 mt-8 md:mx-3 md:w-[650px] lg:w-[800px]">
        <Image className="rounded-xl z-10 drop-shadow" src={Sandbox} alt="sandbox" />
      </div>
      <div className="w-full mx-5 mt-4 flex flex-col space-y-16  md:mx-7 md:w-[600px] lg:w-[700px] z-20">
        <div>
          <hr className="border-b border-t-0 border-b-neutral-700 dark:border-b-neutral-300" />
          <h2 className="text-center mb-4 mt-2">
            trusted by companys & schools
          </h2>
          <div className="flex justify-between">
            <h3 className="text-white text-xl font-bold">company 1</h3>
            <h3 className="text-white text-xl font-bold">company 2</h3>
            <h3 className="text-white text-xl font-bold">company 3</h3>
            <h3 className="text-white text-xl font-bold">company 4</h3>
          </div>

        </div>
        <div className="">
          <h2 className="text-3xl text-center font-medium text-neutral-900 dark:text-neutral-100">Full packed with features</h2>
        </div>
      </div>
    </div>
  )
}