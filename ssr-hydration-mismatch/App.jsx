const { useState, useEffect } = React;

function ClockBad() {
  return <p> Server Time : {Date.now()}</p>;
}

function ClockGood() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(Date.now());
    const id = setInterval(() => setTime(Date.now(), 1000));

    return () => clearInterval(id);
  }, []);

  return (
    <p>
      {time ? "Client time :" + new Date(time).toLocaleTimeString() : "...."}
    </p>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ClockGood />);
