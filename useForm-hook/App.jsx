const { useState, useEffect } = React;

function useForm(initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!values.email) return;
    const id = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?email=${values.email}`)
        .then((r) => r.json())
        .then((arr) =>
          setErrors((e) => ({ ...e, email: arr.length ? "Taken" : "" }))
        );
    }, 400);
    return () => clearTimeout(id);
  }, [values.email]);

  const validate = () => {
    const e = {};
    if (!values.name) e.name = "Required";
    if (!values.email) e.email = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return { values, errors, onChange, validate };
}

function App() {
  const { values, errors, onChange, validate } = useForm({
    name: "",
    email: "",
  });

  const submit = () => validate() && alert(JSON.stringify(values));

  return (
    <>
      <div>
        Name : <br />
        <input name="name" value={values.name} onChange={onChange} />
        {errors && <span className="err">{errors.name}</span>}
      </div>
      <div>
        Email : <br />
        <input name="email" value={values.email} onChange={onChange} />
        {errors && <span className="err">{errors.email}</span>}
      </div>
      <button onClick={submit}>Submit</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
