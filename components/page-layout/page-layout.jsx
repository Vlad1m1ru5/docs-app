import AppHead from "@components/app-head";
import HomePageLink from "./components/home-page-link";
import LayoutContainer from "./components/layout-container";
import LayoutFooter from "./components/layout-footer";
import LayoutHeader from "./components/layout-header";
import LayoutHeading from "./components/layout-heading";
import LayoutMain from "./components/layout-main";
import PoweredByVercelLink from "./components/powered-by-vercel-link";
import WelcomeToNextJsLink from "./components/welcome-to-next-js-link";

export default function PageLayout({ children }) {
  return (
    <LayoutContainer>
      <AppHead />
      <LayoutHeader>
        <LayoutHeading>
          <HomePageLink>Docs App</HomePageLink>
        </LayoutHeading>
      </LayoutHeader>
      <LayoutMain>{children}</LayoutMain>
      <LayoutFooter>
        <WelcomeToNextJsLink />
        <PoweredByVercelLink />
      </LayoutFooter>
    </LayoutContainer>
  );
}
