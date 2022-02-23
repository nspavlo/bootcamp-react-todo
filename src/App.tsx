import * as React from "react";
import { useState } from "react";

import { Entry } from "./modules/Entry";
import { InputForm } from "./components/InputForm";
import { List } from "./components/List";

const initialEntries = [new Entry("Buy Milk", false)];

function App() {
  const [entries, storeEntries] = useState(initialEntries);

  const onChange = (selected: Entry) => {
    const updatedEntries = entries.map((entry) => {
      if (entry === selected) {
        return entry.selected();
      } else {
        return entry;
      }
    });

    storeEntries(updatedEntries);
  };

  const appendNewEntry = (title: string) => {
    if (title === "") {
      return;
    }

    storeEntries([...entries, new Entry(title)]);
  };

  return (
    <main>
      <InputForm onSubmit={appendNewEntry} />
      <List entries={entries} onChange={onChange} />
    </main>
  );
}

export default App;
