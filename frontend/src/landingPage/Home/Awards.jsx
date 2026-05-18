import AwardText from "./AwardText";

export default function Awards() {
  return (
    <div className="container p-3 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="Media/largestBroker.svg" alt="Broker-image" />
        </div>
        <div className="col-6">
          <AwardText />
        </div>
      </div>
    </div>
  );
}
