import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

//the home page for a logged in user
const HomePage: NextPage = () => {
  return (
    <div className="w-full font-inter min-h-screen flex justify-center align-middle">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="your learnali dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto text-center mt-8">
        <h1 className="">Welcome</h1>

        <Link href={"/auth/login"} passHref>
          <p className="cursor-pointer mt-8 bg-black p-4 rounded-md text-white font-bold hover:bg-slate-700">
            Continue your journey
          </p>
        </Link>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default HomePage;
