import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { useSession, signIn } from "next-auth/react";

export default function Social() {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={() => signIn("google")} className="mx-2">
        <FcGoogle />
      </button>
      <button onClick={() => signIn("github")} className="mx-2">
        <BsGithub />
      </button>
      <button onClick={() => signIn("facebook")} className="mx-2 text-blue-800">
        <BsFacebook />
      </button>
      <button onClick={() => signIn("linkedin")} className="mx-2 text-blue-600">
        <FaLinkedinIn />
      </button>
    </div>
  );
}
