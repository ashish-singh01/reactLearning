export default function CoreConcepts({ image, description, title }) {
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