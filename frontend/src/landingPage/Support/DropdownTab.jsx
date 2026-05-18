import Dropdown from "./Dropdown";

export default function DropdownTab() {
  return (
    <div>
      <Dropdown
        icon={<i className="fa-solid fa-circle-plus"></i>}
        headLine="Account Opening"
        MenuItem={[
          "Resident individual",
          "Minor",
          "Non Resident Indian (NRI) ",
          "Company, Partnership, HUF and LLP",
          "Glossary",
        ]}
      />
      <Dropdown
        icon={<i className="fa-solid fa-circle-user"></i>}
        headLine="Your Zerodha Account"
        MenuItem={[
          "Your Profile",
          "Account modification",
          "Client Master Report (CMR) and Depository Participant ID (DP ID)",
          "Nomination",
          "Transfer and Conversion of Securities",
        ]}
      />
      <Dropdown
        icon={<i className="fa-brands fa-uikit"></i>}
        headLine="Kite"
        MenuItem={[
          "IPO",
          "Trading FAQs",
          "Margin Trading Facility (MTF) and Margins",
          "Charts and Orders",
          "Alerts and Nudges",
          "General",
        ]}
      />
      <Dropdown
        icon={<i className="fa-solid fa-indian-rupee-sign"></i>}
        headLine="Funds"
        MenuItem={[
          "Add Money",
          "Withdraw Money",
          " Add bank accounts",
          "eMandates",
        ]}
      />
      <Dropdown
        icon={<i className="fa-brands fa-gg-circle"></i>}
        headLine="Console"
        MenuItem={[
          "Portfolio",
          "Corporate Actions",
          "Fund Statements",
          "Reports",
          "Profile",
          "Segments",
        ]}
      />
      <Dropdown
        icon={<i className="fa-solid fa-circle-notch"></i>}
        headLine="Coin"
        MenuItem={[
          "Mutual funds",
          "National Pension Scheme (NPS)",
          "Features on Coin",
          "Payment and Orders",
          "General",
        ]}
      />
    </div>
  );
}
