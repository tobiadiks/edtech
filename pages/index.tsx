import type { NextPage } from 'next'
import Head from 'next/head'

//the home page for a logged in user
const HomePage:NextPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center align-middle">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="your learnali dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto text-center">
        <h1 className="">
          Welcome Logged in user
        </h1>

        <p className="">
          Get started by editing
         
        </p>

      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}

export default HomePage
