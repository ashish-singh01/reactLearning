import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  let [selectedTopic, setSelectedTopic] = useState("Click a button");

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => clickHandler("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton onClick={() => clickHandler("props")}>Props</TabButton>
            <TabButton onClick={() => clickHandler("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
