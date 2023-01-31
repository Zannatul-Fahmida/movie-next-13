import Movie from "@/components/Movie";
import Search from "../../components/Search";

export default async function PopularMovies() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main className=" mx-32 my-12">
      <h1 className="text-3xl text-center text-rose-700 font-bold mb-6">Popular Movies</h1>
      <Search />
      <div className="grid gap-16 grid-cols-fluid mt-6">
      {res?.results?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      </div>
    </main>
  );
}