import * as React from "react";

import { Entry } from "../modules/Entry";
import { ListItem } from "./ListItem";

interface Props {
  entries: Entry[];
  onChange: (selected: Entry) => void;
}

export const List: React.FC<Props> = ({ entries, onChange }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <ListItem key={entry.title} entry={entry} onChange={onChange} />
      ))}
    </ul>
  );
};
