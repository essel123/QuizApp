import { useState } from "react";

function Vision() {

  var [check,setCheck] = useState(0);
  return (
    <>
      <div className="mode-body">
        <div className="left-icon">
          <img
            src={check === 0 ? "icon-sun-dark.svg" : "icon-sun-light.svg"}
            alt=""
          />
        </div>
        <label className="switch">
          <input
            onClick={() => {
              if (check === 0) {
                setCheck(check + 1);
              } else {
                setCheck(check - 1);
              }
            }}
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>

        <div className="right-icon">
          <img
            src={check == 0 ? "icon-moon-dark.svg" : "icon-moon-light.svg"}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Vision;
