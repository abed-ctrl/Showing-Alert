import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleOnClick = () => {
    setAlertVisibility(true);
  };
  const color = "primary";
  const icon = "bi-airplane-engines-fill";

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleOnClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={handleOnClose}>Notification</Alert>}
      <Button onClick={handleOnClick} color={color} icon={icon}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
