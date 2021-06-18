import "./styles.css";

export default function AttendanceApp() {
  const diplayAlert = function () {
    alert("click");
  };

  return (
    <>
      <div className="outputArea">
        <p>出社時間A：</p>
        <p>退社時間A：</p>
      </div>
      <div className="inputA">
        <button className="startTime" onClick={diplayAlert}>
          出社
        </button>
      </div>
      <div className="inputB">
        <button className="endTime" onClick={diplayAlert}>
          退社
        </button>
      </div>
    </>
  );
}
