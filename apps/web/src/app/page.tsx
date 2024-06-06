import Navigation from "~/components/Navigation/nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-50  text-neutral-700 dark:text-neutral-300 dark:bg-neutral-950 min-h-screen">
      <div className="w-full mx-5 md:mx-5 md:w-[600px] lg:w-[700px]">
        <Navigation />
        <h2 className="text-4xl text-neutral-700 dark:text-neutral-300">
          box
        </h2>
      </div>
    </div>
  )
}