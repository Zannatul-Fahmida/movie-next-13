"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const handleNav = () => {
    menu.classList.toggle("hidden");
  };
  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <Link className="font-bold" href="/">
            Movie<span className="text-rose-700">Next</span>
          </Link>
        </div>
        <button
          className="h-6 w-6 cursor-pointer md:hidden block"
          onClick={handleNav}
        >
          <FiMenu />
        </button>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link
                className={
                  pathname === "/popularMovies"
                    ? "md:p-4 py-2 block text-rose-600"
                    : "md:p-4 py-2 block hover:text-rose-600"
                }
                href="/popularMovies"
              >
                Popular Movies
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/topRatedMovies"
                    ? "md:p-4 py-2 block text-rose-600"
                    : "md:p-4 py-2 block hover:text-rose-600"
                }
                href="/topRatedMovies"
              >
                Top rated Movies
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/popularShows"
                    ? "md:p-4 py-2 block text-rose-600"
                    : "md:p-4 py-2 block hover:text-rose-600"
                }
                href="/popularShows"
              >
                Popular Shows
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/topRatedShows"
                    ? "md:p-4 py-2 block text-rose-600"
                    : "md:p-4 py-2 block hover:text-rose-600"
                }
                href="/topRatedShows"
              >
                Top rated Shows
              </Link>
            </li>
            {!session && (
              <li>
                <Link
                  className="md:p-4 py-2 block hover:text-rose-600 text-rose-700"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </li>
            )}
            {session && (
              <li>
                <button
                  className="md:p-4 py-2 block hover:text-rose-600 text-rose-700"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
