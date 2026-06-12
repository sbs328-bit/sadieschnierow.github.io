import './index.css';
import Heading from './components/Heading';
import Project from './components/Project';

const projects = [
  {
    title: 'Project One',
    description: 'A short line about what this is.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Project Two',
    description: 'Another thing you made or worked on.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Project Three',
    description: 'Keep these descriptions tight.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
  },
];

function App() {

  return (
    <div className="page">

      <main>
        <Heading />
        <section>
          <h3 className="rounded-border">Featured Work!</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;