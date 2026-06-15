import './index.css';
import projects from './projects'
import Heading from './components/Heading';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {

  return (
    <div className="page">

      <main>
        <Heading />
        <section>
          <h3 className="rounded-border" style={{ fontStyle: "italic" }}>Recent Projects!</h3>
          <div className="gallery">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imgUri={project.image}
                link={project.link}
                bgColor={project.bg}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;