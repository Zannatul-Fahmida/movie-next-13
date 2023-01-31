import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
      <div className=" mx-32 my-12">
        <h2 className="text-3xl text-rose-700 font-bold">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 text-white rounded-md text-sm">
          {res.status}
        </h2>
        <Image
          className="my-10 w-full"
          width={1000}
          height={1000}
          src={imagePath + res.backdrop_path}
          alt={res.title}
          priority
        />
        <p className="mb-6">{res.overview}</p>
        <Link className="bg-rose-700 text-white px-4 py-2 rounded-md" href="/">
          <button>Back To Home</button>
        </Link>
      </div>
  );
}
