/* eslint-disable no-unused-vars */
// Display 4 checkboxes with different names and a button named selectall  -->done
// User can select each checkbox -->done
// Select all button click will check all checkboxes
// Button should be disabled once all checkboxes are selected.
// Display selected checkboxes count and names in ui

import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const checkboxData = [
  { id: 1, name: "checkbox1", checked: false },
  { id: 2, name: "checkbox2", checked: false },
  { id: 3, name: "checkbox3", checked: false },
  { id: 4, name: "checkbox4", checked: false },
];

const CheckboxScenerio = () => {
  const [checkboxes, setCheckBoxes] = useState(checkboxData);
  const [selectAllDisabled, setSelectAllDisabled] = useState(false);

  const onChangeCheckBox = (id) => {
    const findSelectedBox = checkboxes.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheckBoxes(findSelectedBox);
  };

  const selectedCheckBox = checkboxes.filter((item) => item.checked);
  const lengthOfSelectedCheckBox = selectedCheckBox.length;

  const selectAllCheckBox = () => {
    const updateCheckbox = checkboxData.map((item) => ({
      ...checkboxes,
      checked: !selectAllDisabled,
    }));
    setCheckBoxes(updateCheckbox);
  setSelectAllDisabled(!selectAllDisabled);

  };
  return (
    <div>
      <h1>{lengthOfSelectedCheckBox}</h1>
      {checkboxes.map((item) => {
        return (
          <Checkbox
            label={item.name}
            checked={item.checked}
            key={item.id}
            onChange={() => onChangeCheckBox(item.id)}
          />
        );
      })}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {selectedCheckBox?.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <button onClick={selectAllCheckBox}>Select All</button>
    </div>
  );
};

export default CheckboxScenerio;
