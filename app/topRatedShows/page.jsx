import Movie from "@/components/Movie";
import Search from "../../components/Search";

export default async function TopRatedShows() {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main className="mx-8 md:mx-32 my-12">
      <h1 className="text-3xl text-center text-rose-700 font-bold mb-6">Top Rated Shows</h1>
      <Search />
      <div className="grid gap-16 grid-cols-fluid mt-6">
      {res?.results?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.name}
          poster_path={movie.poster_path}
          release_date={movie.first_air_date}
        />
      ))}
      </div>
    </main>
  );
}