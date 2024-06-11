function ModeChange() {
  var test = document.getElementById("modechanger");
  if (test) {
    test.style.marginLeft = "18px";
  }
}
function Mode() {
  var test = document.getElementById("modechanger");
  if (test) {
    test.style.marginLeft = "20px";
  }
}
function Vision() {
  return (
    <>
      <div className="mode-body">
        <div className="left-icon">
          <img src={"icon-sun-dark.svg"} alt="" />
        </div>
        <div className="middle" onClick={ModeChange} onDoubleClick={Mode}>
          <div id="modechanger" className="circle"></div>
        </div>

        <div className="right-icon">
          <img src={"icon-moon-dark.svg"} alt="" />
        </div>
      </div>
    </>
  );
}

export default Vision;
