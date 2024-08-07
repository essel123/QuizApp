import { useState } from "react";

function Vision() {
  //icons color toggler for light and darkmode
  var [check, setCheck] = useState(0);
  
 
  // local storage for setting mode of the site weather light or dark
  let isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("darkmode");
  }
  return (
    <>
      <div className="mode-body">
        <div className="left-icon">
          <img
            src={check === 0 ? "icon-sun-dark.svg" : "icon-sun-light.svg"}
            alt=""
          />
        </div>
        <div>
          <label className="switch">
            <input
              onClick={() => {
                isDarkMode = !isDarkMode;
                localStorage.setItem("darkMode", isDarkMode.toString());
                document.body.classList.toggle("darkmode");

                if (isDarkMode) {
                  setCheck(1);
                  document.body.classList.toggle(
                    "input:checked+.slider:before"
                  );
                } else {
                  setCheck(0);
                }

              }}
              type="checkbox"
            />
            <span className="slider round"></span>
          </label>
        </div>

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
