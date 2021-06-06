import "./styles.css";

export default function App() {
  return (
    <>
      <div className="outputArea">
        <p>出社時間：</p>
        <p>退社時間：</p>
      </div>
      <div className="inputA">
        <button>出社</button>
      </div>
      <div className="inputB">
        <button>退社</button>
      </div>
    </>
  );
}
