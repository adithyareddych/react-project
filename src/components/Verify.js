import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Apply from "./Apply";
import "./Verify.css";
const Verify = () => {
  const [admninfo, setadmninfo] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("adm")) {
      const admission = JSON.parse(localStorage.getItem("adm"));
      setadmninfo(admission);
    }
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/admin");
  };
  const funAccept = (id) => {
    let admndata = admninfo.find((admission) => admission.id === id);
    admndata.pend = false;
    admndata.verify = true;
    let ind = admninfo.findIndex((admission) => admission.id === id);
    let admissioninfo = admninfo;
    admissioninfo[ind] = admndata;
    localStorage.setItem("adm", JSON.stringify(admissioninfo));
    setadmninfo(admissioninfo);
    window.location.reload();
  };
  const funReject = (id) => {
    let admndata = admninfo.find((admission) => admission.id === id);
    admndata.pend = false;
    admndata.verify = false;
    let ind = admninfo.findIndex((admission) => admission.id === id);
    let admissioninfo = admninfo;
    admissioninfo[ind] = admndata;
    localStorage.setItem("adm", JSON.stringify(admissioninfo));
    setadmninfo(admissioninfo);
    window.location.reload();
  };
  return (
    <>
      <button onClick={logout} id="btnlog">
        Logout
      </button>
      {admninfo.length > 0 ? (
        <div className="status">
          <table>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>X-GPA</h3>
            </th>
            <th>
              <h3>XII-GPA</h3>
            </th>
            <th>
              <h3>EAMCET Rank</h3>
            </th>
            <th>
              <h3>Status</h3>
            </th>
            {admninfo.map((e) => (
              <tbody>
                <tr>
                  <td>
                    <h5>{e.name}</h5>
                  </td>
                  <td>
                    <h5>{e.tenth}</h5>
                  </td>
                  <td>
                    <h5>{e.twelth}</h5>
                  </td>
                  <td>
                    <h5>{e.rank}</h5>
                  </td>
                  <td>
                    {(!e.pend && e.verify) || (!e.pend && !e.verify) ? (
                      e.verify ? (
                        <h5>Accepted</h5>
                      ) : (
                        <h5>Rejected</h5>
                      )
                    ) : (
                      <button
                        onClick={() => funAccept(e.id)}
                        className="btnacp"
                      >
                        Accept
                      </button>
                    )}
                  </td>
                  <td>
                    {(!e.pend && !e.verify) || (!e.pend && e.verify) ? null : (
                      <button
                        onClick={() => funReject(e.id)}
                        className="btnrej"
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "10%" }}>
          No pending applications...
        </h3>
      )}
    </>
  );
};
export default Verify;
