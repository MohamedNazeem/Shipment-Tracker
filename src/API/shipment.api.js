import axios from "axios";
import Snackbar from "@mui/material/Snackbar";

export const fetchShipmentDetails = async (trackingNumber) => {
  try {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`
    );
    return response.data || {};
  } catch (error) {
    console.error(error);
  }
};
