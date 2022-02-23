import * as React from "react";
import { useState } from "react";

interface Props {
  onSubmit: (title: string) => void;
}

export const InputForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, storeValue] = useState("");

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          storeValue(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onSubmit(value);
          storeValue("");
        }}
      >
        Append
      </button>
    </form>
  );
};
