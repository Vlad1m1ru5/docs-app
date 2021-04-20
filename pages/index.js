import Container from "@components/container";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Docs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-4xl font-bold">Docs App</h1>
            <form action="/login">
              <button
                type="submit"
                className="ml-2 px-2 py-2 text-lg bg-green-400 text-white rounded outline-none focus:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </Container>
      </header>
      <hr />
      <main className="flex-1">
        <Container>
          <div className="flex flex-col items-center space-y-2 mt-8">
            <form action="" className="flex flex-row w-full">
              <input
                type="search"
                placeholder="Search the Docs"
                className="px-2 py-2 w-full rounded outline-none focus:border focus:border-blue-700 focus:-m-px"
              />
              <button
                type="submit"
                className="ml-2 px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
              >
                Search
              </button>
            </form>
            <a
              href="/"
              className="px-2 py-2  text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
            >
              Add Document
            </a>
          </div>
        </Container>
      </main>
      <hr />
      <footer className="py-4 bg-white">
        <Container>
          <div className="flex flex-wrap justify-around">
            <span className="text-2xl">
              Welcome to{" "}
              <a
                href="https://nextjs.org"
                className="outline-none focus:underline"
              >
                Next.js!
              </a>
            </span>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl outline-none focus:underline"
            >
              Powered by{" "}
              <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
