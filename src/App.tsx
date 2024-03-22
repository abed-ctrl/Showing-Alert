import Button from "./components/Button";

function App() {
  const handleClick = () => console.log("Clicked");
  const color = "primary";
  const icon = "bi-airplane-engines-fill";

  return (
    <div>
      <Button onClick={handleClick} color={color} icon={icon}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
