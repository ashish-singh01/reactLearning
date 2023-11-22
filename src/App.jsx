import { useState, Fragment } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  return (
     <> 
      {/* Empty tag is used to wrap the whole ouput as one so that JS can return */}
      {/* Instead we can use <div></div> but it will show in DOM as an element. 
     Alternately <Fragment> </Fragment> can be used which doesnt show on DOM */}
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((items) => (
              <CoreConcepts {...items} />
            ))}{" "}
            {/* This will take each items from the array and map it into a seprate array to display*/}
            {/* Below method breaks if the number of items in the CORE_CONCEPTS array changes
                We have to manually update each time we change the number of items in the array. */}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => clickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => clickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => clickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => clickHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {/* rendering nothing if no topic is selected  */}
          {!selectedTopic ? undefined : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
