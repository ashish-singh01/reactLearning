import { CORE_CONCEPTS } from "./data";
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={description}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
/*OR
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.description}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}*/

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts !!</h2>
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
      </main>
    </div>
  );
}

export default App;
