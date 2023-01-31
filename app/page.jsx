import Link from "next/link";

export default async function Home() {
  return (
    <main className="text-center my-12">
      <h1 className="md:text-5xl text-xl font-bold">
        Welcome to Movie<span className="text-rose-700">Next</span>
      </h1>
      <h2 className="md:text-xl text-lg my-6">Unlimited movies, TV shows, and more.</h2>
      <p className="md:text-lg mb-3">Are you excited!!! <Link className="text-rose-700 text-semibold" href='/signup'>Signup</Link> now</p>
      <p>It's 2:30 pm only. Watch a movie now...</p>
    </main>
  );
}
