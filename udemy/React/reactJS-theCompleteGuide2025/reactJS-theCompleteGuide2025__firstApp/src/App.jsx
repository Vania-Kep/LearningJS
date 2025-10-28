import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelection(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((itm) => {
              return <CoreConcept key={itm.title} {...itm} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key) => {
              return (
                <TabButton
                  key={key}
                  onSelect={() => handleSelection(key)}
                  isSelected={selectedTopic == key}
                >
                  {EXAMPLES[key].title}
                </TabButton>
              );
            })}
          </menu>
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
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
