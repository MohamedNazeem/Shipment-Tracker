import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import "../MultiStepProgress/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import AllInboxTwoToneIcon from "@mui/icons-material/AllInboxTwoTone";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { dateTimeString } from "../../helpers/helpers";

function MultiStep({ shipmentId, shipmentData }) {
  const shipmentStatusStyle = (state) => {
    let style = "";
    if (state === "DELIVERED") style = "delivered";
    if (state === "CANCELLED") style = "cancelled";
    if (state === "DELIVERED_TO_SENDER") style = "delivered-to-sender";

    return style;
  };

  const progressBarStyle = (state) => {
    let style = "";
    if (state === "DELIVERED") {
      style = "delivered";
    }
    if (state === "CANCELLED") {
      style = "progressbar-cancelled";
    }

    if (state === "DELIVERED_TO_SENDER") {
      style = "progressbar-delivered-to-sender";
    }

    console.log("state", state);
    console.log("style", style);

    return style;
  };

  const progressBarPercent = (state) => {
    let progress;
    if (state === "DELIVERED") progress = 100;
    if (state === "CANCELLED") progress = 66.6;
    if (state === "DELIVERED_TO_SENDER") progress = 66.6;

    return progress;
  };

  useEffect(() => {
    if (
      (shipmentData && shipmentData.CurrentStatus?.state === "CANCELLED") ||
      shipmentData.CurrentStatus?.state === "DELIVERED_TO_SENDER"
    ) {
      setSteps((prevSteps) => {
        steps.map;
        const newSteps = [...prevSteps];
        newSteps[2].accomplished = false;
        return newSteps;
      });
    }
  }, [shipmentData]);

  const [steps, setSteps] = useState([
    {
      accomplished: true,
      icon: <CheckCircleOutlineIcon />,
      label: "Shippment created",
    },
    {
      accomplished: true,
      icon: <LocalShippingTwoToneIcon />,
      label: "Deliverd to sender",
    },
    {
      accomplished: true,
      icon: <AllInboxTwoToneIcon />,
      label: "Out for deleivry",
    },
    {
      accomplished: true,
      icon: <SaveOutlinedIcon />,
      label: "Delivired",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="header">
          <span>
            <h4 className={``}>
              {" "}
              Shippment no. {shipmentData.TrackingNumber || ""}
            </h4>
            <p
              className={`${shipmentStatusStyle(
                shipmentData.CurrentStatus?.state
              )}`}
            >
              {shipmentData.CurrentStatus?.state || ""}
            </p>
          </span>
          <span>
            <h4> Last Updated</h4>
            <p>{dateTimeString(shipmentData.CurrentStatus?.timestamp) || ""}</p>
          </span>
          <span>
            <h4> provider</h4> <p> {shipmentData?.provider || ""}</p>
          </span>
          <span>
            <h4> Promised Date</h4>{" "}
            <p> {dateTimeString(shipmentData?.PromisedDate, false) || null}</p>
          </span>
        </div>
        {shipmentData.CurrentStatus?.state && (
          <div className={`progress__bar`}>
            <ProgressBar
              percent={progressBarPercent(shipmentData.CurrentStatus?.state)}
            >
              {steps.map((step, i) => (
                <Step key={i} transition="scale">
                  {() => {
                    return (
                      <div className={`step-container`}>
                        <div
                          className={`indexedStep ${progressBarStyle(
                            shipmentData.CurrentStatus?.state
                          )} ${!step.accomplished ? "big" : ""}`}
                        >
                          {step.icon}
                        </div>
                        <p className="step-label">{step.label}</p>
                      </div>
                    );
                  }}
                </Step>
              ))}
            </ProgressBar>
          </div>
        )}
      </div>
    </>
  );
}

export default MultiStep;
