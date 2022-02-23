import * as React from "react";

import { Entry } from "../modules/Entry";

interface Props {
  entry: Entry;
  onChange: (selected: Entry) => void;
}

export const ListItem: React.FC<Props> = ({ entry, onChange }) => {
  return (
    <li>
      <label
        style={{
          textDecoration: entry.isComplete ? "line-through" : undefined
        }}
      >
        <input
          type="checkbox"
          checked={entry.isComplete}
          onChange={() => {
            onChange(entry);
          }}
        />{" "}
        {entry.title}
      </label>
    </li>
  );
};
