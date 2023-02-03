import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { signIn } from "next-auth/react";

export default function Social() {
  return (
    <div>
      <button
        onClick={() => signIn("google", { redirect: false, callbackUrl: "/" })}
        className="mx-2"
      >
        <FcGoogle />
      </button>
      <button
        onClick={() => signIn("github", { redirect: false, callbackUrl: "/" })}
        className="mx-2"
      >
        <BsGithub />
      </button>
      <button
        onClick={() =>
          signIn("facebook", { redirect: false, callbackUrl: "/" })
        }
        className="mx-2 text-blue-800"
      >
        <BsFacebook />
      </button>
      <button
        onClick={() =>
          signIn("linkedin", { redirect: false, callbackUrl: "/" })
        }
        className="mx-2 text-blue-600"
      >
        <FaLinkedinIn />
      </button>
    </div>
  );
}
