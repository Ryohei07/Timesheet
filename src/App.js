import "./styles.css";

export default function AttendanceApp() {
  const diplayAlert = function () {
    alert("click");
  };

  return (
    <>
      <div className="outputArea">
        <p>出社時間：</p>
        <p>退社時間：</p>
      </div>
      <div className="inputA">
        <button className="startTime" onClick={diplayAlert}>
          出社
        </button>
      </div>
      <div className="inputB">
        <button
          className="endTime"
          onClick={function () {
            alert("click");
          }}
        >
          退社
        </button>
      </div>
    </>
  );
}
