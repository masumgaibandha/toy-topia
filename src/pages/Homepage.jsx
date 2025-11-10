import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

const Homepage = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "ToyTopia | Home";
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/toitopia.json");
        const data = await res.json();
        setToys(data || []);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const popular = useMemo(() => {
    return [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);
  }, [toys]);

  const popularFiltered = useMemo(() => {
    if (activeCategory === "All") return popular;
    return popular.filter((t) => t.subCategory === activeCategory);
  }, [popular, activeCategory]);

  const sliderImages = useMemo(() => {
    const pics = toys.slice(0, 3).map((t) => t.pictureURL);
    while (pics.length < 3) {
      pics.push(
        "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop"
      );
    }
    return pics.slice(0, 3);
  }, [toys]);

  const categories = ["All", "Building Blocks", "STEM", "Stuffed Animals", "Puzzles"];

  return (
    <div className="space-y-12">
      <section className="max-w-6xl mx-auto px-4">
        <div className="carousel w-full rounded-2xl shadow">
          {sliderImages.map((src, idx) => (
            <div
              id={`slide${idx + 1}`}
              className="carousel-item relative w-full h-64 md:h-96"
              key={idx}
            >
              <img
                src={src}
                alt={`slide-${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                <a
                  href={`#slide${((idx + 2) % 3) + 1}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${((idx + 1) % 3) + 1}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
              <div className="absolute bottom-4 left-4 bg-base-100/80 backdrop-blur px-4 py-2 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Discover Joyful Toys
                </h3>
                <p className="text-sm opacity-80">
                  Colorful, creative, and kid-approved.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Toys</h2>
            <p className="opacity-70">Top-rated picks from local sellers</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton h-64 w-full rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFiltered.map((toy) => (
              <div
                key={toy.toyId}
                className="card bg-base-100 shadow hover:shadow-lg transition rounded-2xl"
              >
                <figure className="p-4">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="h-44 w-full object-cover rounded-xl"
                  />
                </figure>
                <div className="card-body pt-0">
                  <h3 className="card-title text-lg">{toy.toyName}</h3>
                  <div className="text-sm opacity-80">
                    <p>
                      Rating: <span className="font-semibold">{toy.rating}</span>
                    </p>
                    <p>
                      Available:{" "}
                      <span className="font-semibold">
                        {toy.availableQuantity}
                      </span>
                    </p>
                    <p>
                      Price: <span className="font-semibold">${toy.price}</span>
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <Link
                      to={`/toy/${toy.toyId}`}
                      className="btn bg-[#EA4A30] border-[#EA4A30] text-white hover:brightness-95"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-base-200 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Shop Local, Support Smiles
            </h2>
            <p className="opacity-80">
              Every purchase supports neighborhood toy makers and small shops.
              Better quality, more heart—right around the corner.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow">
            <img
              className="w-full h-56 object-cover"
              src="https://i.ibb.co.com/M5Pmwh6C/loose-parts-material-list-color-objects.jpg"
              alt="local-toys"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`p-5 rounded-2xl shadow transition text-left ${
                activeCategory === cat
                  ? "bg-[#EA4A30] text-white"
                  : "bg-base-100 hover:shadow-lg"
              }`}
            >
              <p className="font-semibold">{cat}</p>
              <p
                className={`text-sm ${
                  activeCategory === cat ? "opacity-90" : "opacity-70"
                }`}
              >
                {activeCategory === cat
                  ? "Selected"
                  : `Explore popular ${cat.toLowerCase()}.`}
              </p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
