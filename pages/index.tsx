import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

//the home page for a logged in user
const HomePage: NextPage = () => {
  return (
    <div className="w-full font-archivo min-h-screen flex justify-center align-middle">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="your learnali dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto text-center">
        <h1 className="">Welcome</h1>

        <Link href={"/auth/login"} passHref>
          <p className="cursor-pointer hover:bg-slate-700">
            Get started by editing
          </p>
        </Link>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default HomePage;
