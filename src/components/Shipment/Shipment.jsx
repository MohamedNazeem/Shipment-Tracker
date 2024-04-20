import React, { useState, useEffect } from "react";
import { fetchShipmentDetails } from "../../API/shipment.api";
import NavBar from "../NavBar/NavBar";
import MultiStep from "../MultiStepProgress/MultiStep";
import LogsTable from "../LogsTable/LogsTable";
import ShipmentAddress from "../ShipmentAddress/ShipmentAddress";
import ReportProblem from "../ReportProblem/ReportProblem";

import "../Shipment/styles.css";
const Shipment = () => {
  const [shipmentData, setshipmentData] = useState({});
  const fetchShipment = async () => {
    //TODO

    // DELIVERED_TO_SENDER -> 67151313
    // DELIVERED -> 7234258
    // CANCELLED -> 13737343

    const shipment = await fetchShipmentDetails("13737343");
    if (shipment) setshipmentData(shipment);
  };

  useEffect(() => {
    fetchShipment();
  }, []);
  return (
    <div>
      <NavBar />

      <MultiStep shipmentData={shipmentData} />
      <div className="address-logs">
        <LogsTable shipmentDetails={shipmentData.TransitEvents || []} />
        <div className="col">
          <ShipmentAddress />
          <ReportProblem />
        </div>
      </div>
    </div>
  );
};

export default Shipment;
