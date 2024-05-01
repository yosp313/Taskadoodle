import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Boxes />
      <h1 className="text-7xl font-bold z-10 mb-10">Task a Doodle</h1>
      <h2 className="text-5xl font-bold z-10 bg-gradient-to-r from-blue-300 to-orange-400 text-transparent bg-clip-text mb-16">
        The best place for working with co-workers
      </h2>
      <button
        type="button"
        className="z-10 inline-block px-8 py-4 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-orange-400 to-blue-300 leading-pro text-lg ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-black hover:shadow-lg active:opacity-85"
      >
        Get Started
      </button>
    </main>
  );
}
