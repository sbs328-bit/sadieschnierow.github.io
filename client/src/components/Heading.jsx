import Button from './Button';

export default function Heading() {
  return (
    <div>

      <header className="top-bar">
        <div className="avatar">🚀</div>
        <Button color="blue" url="mailto:sbs328@cornell.edu">Get in touch</Button>
      </header>

      <section className="hero">
        <h1>
          Hello, I'm Sadie Schnierow! 
        </h1>
        <h3>
          Info Science Student @ Cornell University<br />
          Based in New York City, NY.<br />
        </h3>
      </section>

    </div>
  );
}