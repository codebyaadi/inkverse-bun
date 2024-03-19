import { Carousel } from "@/components/home/carousel/carousel";
import { TopSeries } from "@/components/home/top-series/top-series";
import { testData } from "@/json";

export const Homepage = () => {
  return (
    <main className="m-auto max-w-7xl md:px-8 md:py-4 px-5 py-2">
        <Carousel data={ testData } />
        <section className="w-full bg-amber-100 rounded-md mt-7 px-5 py-4">
            <div className="font-dmsans leading-none">
                <h4 className="font-normal text-base"><span className="font-unbounded">Inkverse </span>#2024 Events</h4>
                <span className="font-dmsans text-xs font-medium text-slate-800">Vote for your favourite artist!</span>
            </div>
        </section>
        <TopSeries />
    </main>
  )
}