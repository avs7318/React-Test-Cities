import "./styles.css";

function Header(props) {
  return (
    <header>
      <h1>Hello {props.name}, here are cities!</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>This is a {props.adjective} world! Here are some cities: </p>
      <ul style={{ textAlign: "left" }}>
        {props.cities.map((city) => (
          <li key={city.id}>{city.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>{props.year}</p>
    </footer>
  );
}

const cities = ["New York City", "San Francisco", "Ithaca"];

const cityObjects = cities.map((city, i) => ({ id: i, title: city }));

export default function App() {
  return (
    <div className="App">
      <Header name="Person" />
      <Main adjective="great" cities={cityObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
