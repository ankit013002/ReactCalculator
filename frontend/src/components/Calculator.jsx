import { useState } from "react";
import "./Calculator.css";
import Screen from "./Screen";
import Button from "./Button";

const Calculator = () => {
  const [computedValue, setComputedValue] = useState("");
  const [cachedValue, setCachedValue] = useState("");
  const [computeFunction, setComputeFunction] = useState("");
  const [workingValue, setWorkingValue] = useState("");

  return (
    <>
      <div className="calculator-container">
        <div className="calculator-content-container">
          <div className="screen-container">
            <Screen
              computedScreen={computedValue}
              workingScreen={workingValue}
              updatingValue={cachedValue}
            />
          </div>
          <div className="other-buttons">OtherButtons</div>
          <div className="calculator-button-grid">
            <Button button="undo" updateWorkingValue={setWorkingValue} />
            <Button
              button="("
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button=")"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button button="clear" updateWorkingValue={setWorkingValue} />

            <Button
              button="7"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="8"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="9"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="/"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />

            <Button
              button="4"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="5"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="6"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="*"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />

            <Button
              button="1"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="2"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="3"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button
              button="-"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />

            <Button
              button="0"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
            <Button button="." updateScreen={setWorkingValue} />
            <Button
              button="="
              cachedValue={cachedValue}
              workingValue={workingValue}
              computeFunction={computeFunction}
              updateComputeValue={setComputedValue}
              updateCachedValue={setCachedValue}
              updateWorkingValue={setWorkingValue}
            />
            <Button
              button="+"
              updateScreen={setWorkingValue}
              updateFunction={setComputedValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
