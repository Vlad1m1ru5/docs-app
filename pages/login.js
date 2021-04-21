import AppContainer from "@components/app-container";
import AppHead from "@components/app-head";
import AppInput from "@components/app-input";
import AppLink from "@components/app-link";
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
              <label htmlFor="email">Email</label>
              <AppInput
                type="email"
                name="email"
                placeholder="Enter email"
                id="email"
                isRequired={true}
              />
              <label htmlFor="password">Password</label>
              <AppInput
                type="password"
                name="password"
                placeholder="Enter password"
                id="password"
                idRequired={true}
              />
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
