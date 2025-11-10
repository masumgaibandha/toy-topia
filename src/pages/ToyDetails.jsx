import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function ToyDetails() {
  const { toyId } = useParams();
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `ToyTopia | Toy ${toyId}`;
  }, [toyId]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/toitopia.json");
        const data = await res.json();
        setToys(data || []);
      } catch {
       
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const toy = useMemo(
    () => toys.find((t) => String(t.toyId) === String(toyId)),
    [toys, toyId]
  );

  const handleTryNow = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    if (!name || !email) {
      toast.error("Please fill out name and email.");
      return;
    }
    toast.success("Request submitted! We'll contact you soon.");
    e.target.reset();
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!toy) return <div className="p-6">Toy not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-72 object-cover rounded-2xl shadow"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{toy.toyName}</h1>
          <p className="opacity-80 mt-2">{toy.description}</p>
          <div className="mt-4 space-y-1">
            <p><span className="font-semibold">Price:</span> ${toy.price}</p>
            <p><span className="font-semibold">Rating:</span> {toy.rating}</p>
            <p><span className="font-semibold">Available:</span> {toy.availableQuantity}</p>
            <p><span className="font-semibold">Category:</span> {toy.subCategory}</p>
            <p><span className="font-semibold">Seller:</span> {toy.sellerName} ({toy.sellerEmail})</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-base-100 shadow rounded-2xl">
        <div className="card-body">
          <h2 className="card-title">Try Now</h2>
          <form onSubmit={handleTryNow} className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-base font-medium">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-base font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Your email"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn w-full bg-[#EA4A30] border-[#EA4A30] text-white hover:brightness-95"
              >
                Try Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
