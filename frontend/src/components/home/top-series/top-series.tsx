import { Link } from "@tanstack/react-router";
import { Button } from "@nextui-org/button";
import { topseriesData } from "@/json";

export const TopSeries = () => {
  return (
    <section id="most-viewed-section" className="flex justify-start mt-7">
      <div id="most-viewed-container" className="font-dmsans overflow-hidden">
        <div id="most-viewed-heading">
          <header className="font-extrabold uppercase tracking-tight text-xl text-foreground">
            Top Series
          </header>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center gap-3 mt-3 snap-x no-scrollbar overflow-x-auto">
            {topseriesData.map((card, index) => (
              <Link
                to="/"
                key={index}
                className="group relative w-64 h-80 shrink-0 rounded overflow-hidden snap-center"
              >
                <img
                  src={card.cover}
                  alt={card.cover}
                  className="w-full h-full object-cover"
                />
                <div className="group-hover:flex flex-col justify-end hidden absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-charcoalblue p-4 font-prompt">
                  <h6 className="font-medium text-lg text-white truncate mb-1">
                    {card.title}
                  </h6>
                  <div className="flex justify-start items-start gap-1">
                    {card.categories.map((genre, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium rounded-md bg-white/90 px-2 py-0.5 truncate"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <Button className="mt-2 text-white" color="primary">
                    Buy now
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
