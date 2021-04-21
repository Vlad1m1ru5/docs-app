import AppContainer from "@components/app-container";
import AppHead from "@components/app-head";
import AppInput from "@components/app-input";
import AppLink from "@components/app-link";
import AppPage from "@components/app-page";

export default function Home() {
  return (
    <AppPage>
      <AppHead />
      <header className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-4xl font-bold">
              <AppLink href="/" className="outline-none focus:underline">
                Docs App
              </AppLink>
            </h1>
            <form action="/login">
              <button
                type="submit"
                className="ml-2 px-2 py-2 text-lg bg-green-400 text-white rounded outline-none focus:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </AppContainer>
      </header>
      <hr />
      <main className="flex-1">
        <AppContainer>
          <div className="flex flex-col items-center space-y-2 mt-8">
            <form action="" className="flex flex-row w-full">
              <AppInput
                type="search"
                name="search"
                placeholder="Search the Docs"
                ariaLabelledby="search-button"
              />
              <button
                type="submit"
                id="search-button"
                className="ml-2 px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
              >
                Search
              </button>
            </form>
            <AppLink
              href="/upload"
              className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
            >
              Add Document
            </AppLink>
          </div>
        </AppContainer>
      </main>
      <hr />
      <footer className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap justify-around">
            <span className="text-2xl">
              Welcome to{" "}
              <AppLink
                href="https://nextjs.org"
                className="outline-none focus:underline"
              >
                Next.js!
              </AppLink>
            </span>
            <AppLink
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl outline-none focus:underline"
            >
              Powered by{" "}
              <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
            </AppLink>
          </div>
        </AppContainer>
      </footer>
    </AppPage>
  );
}
