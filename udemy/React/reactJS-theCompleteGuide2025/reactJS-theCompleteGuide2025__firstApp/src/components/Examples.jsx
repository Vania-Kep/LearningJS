import { useState } from "react";

import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelection(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={Object.keys(EXAMPLES).map((key) => {
          return (
            <TabButton
              key={key}
              onClick={() => handleSelection(key)}
              isSelected={selectedTopic == key}
            >
              {EXAMPLES[key].title}
            </TabButton>
          );
        })}
      >
        {!selectedTopic || !EXAMPLES[selectedTopic] ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
