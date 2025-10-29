import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function App() {
  return (
    <Section title="Core Concept" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((itm) => {
          return <CoreConcept key={itm.title} {...itm} />;
        })}
      </ul>
    </Section>
  );
}
