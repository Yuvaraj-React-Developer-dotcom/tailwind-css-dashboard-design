import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const MapModule = (props) => {
  const location = { lat: 12.971599, lng: 77.594566 };
  return (
    <div>
      <div className="h-[82vh] p-[1em] bg-[#fff] rounded-[12px] shadow overflow-hidden relative">
        <Map
          style={{ height: "94%", width: "97%" }}
          zoom={8}
          initialCenter={location}
          google={props.google}
        ></Map>
      </div>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyCfDn_jsblVm8Kkxo-BeKMCXp_F7-HMQJU",
})(MapModule);
