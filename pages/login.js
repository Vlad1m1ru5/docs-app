import Container from "@components/container";
import Page from "@components/page";
import Head from "next/head";

export default function Login() {
  return (
    <Page>
      <Head>
        <title>Docs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-4 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-4xl font-bold">
              <a href="/" className="outline-none focus:underline">
                Docs App
              </a>
            </h1>
          </div>
        </Container>
      </header>
      <hr />
      <main className="flex-1">
        <Container>
          <div className="flex flex-col items-center mt-8">
            <form
              action=""
              className="flex flex-col space-y-2 p-4 rounded bg-white"
            >
              <h2 className="text-2xl font-bold">Enter user data</h2>
              <label>
                Email <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  className="px-2 py-2 w-full bg-gray-100 rounded outline-none focus:border focus:border-blue-700 focus:-m-px"
                />
              </label>
              <label>
                Password <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  className="px-2 py-2 w-full bg-gray-100 rounded outline-none focus:border focus:border-blue-700 focus:-m-px"
                />
              </label>
              <button
                type="submit"
                className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
              >
                Login
              </button>
            </form>
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
    </Page>
  );
}
