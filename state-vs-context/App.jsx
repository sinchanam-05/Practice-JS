const { useState, useContext, createContext } = React;

function ButtonPD({ toggle }) {
  return <button onClick={toggle}>Switch to (PD)</button>;
}
function ChildPD({ toggle }) {
  return <ButtonPD toggle={toggle} />;
}
function AppPropDrill() {
  const [dark, set] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <ChildPD toggle={() => set((d) => !d)} />
      <p> Prop-Drill : theme is {dark ? "dark" : "light"} </p>
    </div>
  );
}

const ThemeCtx = createContext();
const useTheme = () => useContext(ThemeCtx);

function ButtonCtx() {
  const { dark, toggle } = useTheme();
  return <button onClick={toggle}>Switch (CTX)</button>;
}

function ChildCtx() {
  return <ButtonCtx />;
}

function AppContent() {
  const [dark, set] = useState(false);
  const value = { dark, toggle: () => set((d) => !d) };

  return (
    <ThemeCtx.Provider value={value}>
      <div className={dark ? "dark" : ""}>
        <ChildCtx />
        <p>Context : theme is {dark ? "dark" : "light"} </p>
      </div>
    </ThemeCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppPropDrill />
    <hr /> <AppContent />
  </>
);
