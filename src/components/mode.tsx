import { useState } from "react";

function Vision() {
  var [check, setCheck] = useState(0);
  // var [modecheck,setmodecheck] =  useState("true");

  // var mode = document.getElementById("mode");

  let isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("darkmode");
  }

  // mode?.addEventListener("click", () => {
  //   document.body.classList.toggle("darkmode");
  //   alert("hello");
  //   if (check === 0) {
  //     setCheck(check + 1);
  //   } else {
  //     setCheck(check - 1);
  //   }
  // });

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

                // if (check === 0) {
                //   setCheck(check + 1);
                // } else {
                //   setCheck(check - 1);
                // }
                // var body = document.body;
                // body.classList.toggle("darkmode");
                // var theme = "false";
                // if (body.classList.contains("darkmode")) {
                //   theme = "Dark";
                // } else {
                //   theme = "Light";
                // }
                // localStorage.setItem("Theme", JSON.stringify(theme));
                // var getTheme = window.localStorage.getItem("Theme");
                // console.log(getTheme);
                // if (getTheme === "Dark") {
                //   body.classList.toggle("darkmode");
                // }
                //  isDarkMode = !isDarkMode;
                // localStorage.setItem("darkMode", isDarkMode.toString());
                // document.body.classList.toggle("darkmode");
                // if (isDarkMode) {
                //   document.body.classList.add("dark-mode");
                // }
                // if (check === 0) {
                //   setCheck(check + 1);
                // } else {
                //   setCheck(check - 1);
                // }
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
