import styles from "./Banner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={`${styles.bannerBg} flex items-center`}>
      <div
        className={`${styles.backdropFilter} md:flex items-center justify-between py-12 px-8 w-full`}
      >
        <div>
          <h1 className="md:text-5xl text-xl font-bold text-white">
            Welcome to Movie<span className="text-rose-700">Next</span>
          </h1>
          <h2 className="md:text-xl text-lg my-6 text-white">
            Unlimited movies, TV shows, and more.
          </h2>
        </div>
        <div>
          <Link href='/signup'>
            <button className="animate-bounce bg-rose-700 rounded-md px-4 py-2 text-white">
              Signup Now <AiOutlineArrowRight className="inline" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
