import React, { useState } from "react";
import Issue from "../../assets/error.png";
import "../ReportProblem/styles.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ReportProblem = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content">
      <p>Facing a problem ?</p>
      <img src={Issue} width={70} height={60} alt="issue" />
      <button onClick={handleOpen}>Call Us</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Call Us at 01111773134
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ReportProblem;
