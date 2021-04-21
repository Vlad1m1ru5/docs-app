import AppHead from "@components/app-head";
import AppLink from "@components/app-link";
import AppContainer from "@components/app-container";
import AppPage from "@components/app-page";

export default function Login() {
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
          </div>
        </AppContainer>
      </header>
      <hr />
      <main className="flex-1">
        <AppContainer>
          <div className="flex flex-col items-center mt-8">
            <form
              action=""
              className="flex flex-col space-y-2 p-4 rounded bg-white"
            >
              <h2 className="text-2xl font-bold">Enter user data</h2>
              <label>
                Email
                <br />
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
                Password
                <br />
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
