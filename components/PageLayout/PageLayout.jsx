import AppHead from "@components/AppHead";
import HomePageLink from "./components/HomePageLink";
import LayoutContainer from "./components/LayoutContainer";
import LayoutFooter from "./components/LayoutFooter";
import LayoutHeader from "./components/LayoutHeader";
import LayoutHeading from "./components/LayoutHeading";
import LayoutMain from "./components/LayoutMain";
import PoweredByVercelLink from "./components/PoweredByVercelLink";
import WelcomeToNextJsLink from "./components/WelcomeToNextLsLink";

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
