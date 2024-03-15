import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Spinner() {
  let [timer, setTimer] = useState(4);
  let navigate = useNavigate();
  let location = useLocation()
  useEffect(() => {
    let id = setInterval(() => {
      setTimer(--timer);
    }, 1000);
    if (timer == 0) navigate("/signin", { state: location.pathname });
    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "600px" }}>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <h6 > Redirect to you in {timer} secound</h6>
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
