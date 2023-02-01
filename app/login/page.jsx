"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SlLogin } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsFacebook } from "react-icons/bs";

export default function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row mx-4 items-center justify-center my-12">
        <div className="bg-green-700 md:w-1/3 py-6 px-4 text-center text-white">
          <SlLogin className="w-full h-24" />
          <h2 className="my-3 text-2xl">Login</h2>
          <p>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <div className="md:w-1/3 px-3">
          <h3 className="text-2xl mb-2">Please fill this correctly</h3>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            {errors.confirmPassword && <span>This field is required</span>}
            <button
              className="bg-rose-700 mt-1 rounded-md text-white py-2"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold">
          Don't have an account?{" "}
          <Link
            className="bg-rose-700 text-white py-1 px-1 font-normal rounded-sm"
            href="/signup"
          >
            Signup
          </Link>{" "}
          now
        </p>
        <p>or</p>
        <button className="mx-2"><FcGoogle /></button>
        <button className="mx-2"><BsGithub /></button>
        <button className="mx-2 text-blue-800"><BsFacebook /></button>
        <button className="mx-2 text-blue-600"><FaLinkedinIn /></button>
      </div>
    </div>
  );
}
