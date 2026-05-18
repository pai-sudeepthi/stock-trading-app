import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function SectionTab() {
  return (
    <div>
      <LeftSection
        ImageURL={"Media/kite.png"}
        Title={"Kite"}
        Description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        Link={["Try Demo", "Learn More"]}
        GooglePlay={"Media/googlePlayBadge.svg"}
        AppStore={"Media/appstoreBadge.svg"}
      />
      <RightSection
        ImageURL={"Media/console.png"}
        Title={"Console"}
        Description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        Link={["Learn More"]}
      />
      <LeftSection
        ImageURL={"Media/coin.png"}
        Title={"Coin"}
        Description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        Link={["Coin"]}
        GooglePlay={"Media/googlePlayBadge.svg"}
        AppStore={"Media/appstoreBadge.svg"}
      />
      <RightSection
        ImageURL={"Media/kiteconnect.png"}
        Title={"Kite Connect API"}
        Description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        Link={["Kite Connect"]}
      />
      <LeftSection
        ImageURL={"Media/varsity.png"}
        Title={"Varsity mobile"}
        Description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        GooglePlay={"Media/googlePlayBadge.svg"}
        AppStore={"Media/appstoreBadge.svg"}
      />
    </div>
  );
}
