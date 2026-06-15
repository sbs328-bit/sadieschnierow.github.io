import Button from './Button';

export default function Heading() {
  return (
    <div>

      <section className="hero">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem", flexWrap: "wrap" }}>
            <picture><img style={{ width: "60px" }} src='images/buzz.png' alt="Bee"/></picture>
            <h1>Sadie Bea Schnierow</h1>
          </div>
          <Button color="blue" url="mailto:sbs328@cornell.edu">Get in touch</Button>
        </div>
        <h3>
          Info Science Student @ Cornell University<br />
          Based in New York City, NY.<br />
        </h3>
      </section>

    </div>
  );
}