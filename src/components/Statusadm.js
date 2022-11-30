import React from "react";

const Statusadm = (props) => {
  return (
    <div>
      {props.ver ? (
        <h5 style={{ marginLeft: "20px", marginTop: "30px" }}>
          {" "}
          Congratulations! You are selected and a mail will be sent shortly
          regarding further process.Thank you!
        </h5>
      ) : null}
      {props.pen === false && props.ver === false ? (
        <h5 style={{ marginLeft: "30px", marginTop: "30px" }}>
          {" "}
          Sorry! You are rejected.Thanks for showing interest on Hyderabad
          University.
        </h5>
      ) : null}
      {props.pen ? (
        <h5 style={{ marginLeft: "30px", marginTop: "30px" }}>
          Application pending...To be updated shortly.Thank you!
        </h5>
      ) : null}
    </div>
  );
};
export default Statusadm;
