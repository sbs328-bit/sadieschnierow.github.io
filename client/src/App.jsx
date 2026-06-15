import './index.css';
import Heading from './components/Heading';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Jaden',
    date: { month: 'June', year: 2025 },
    description: 'Brand identity and website for Jaden, a personal safety alarm designed for women runners.',
    image: '/images/jaden.png',
    link: 'https://cornell-info1300-2025fa.github.io/sbs328-project/index.html',
  },
  {
    title: 'Seekh Embarrassment',
    date: { month: 'January', year: 2026 },
    description: 'Designed a clothing line for Seekh Embarrassment, a celebrity streetwear brand.',
    image: '/images/seekh.png',
  },
  {
    title: 'AEPhi Pink Week',
    date: { month: 'October', year: 2025 },
    description: 'Organized a week of philanthropy events in support of Sharsheret. Designed graphics for social media and merch. Raised over $2000 for breast and ovarian cancer patients.',
    image: '/images/pink-week.png',
  },
  {
    title: 'Kids Fight Climate Change',
    date: { month: 'May', year: 2023 },
    description: 'Organized a week of philanthropy events in support of Sharsheret. Designed graphics for social media and merch. Raised over $2000 for breast and ovarian cancer patients.',
    image: '/images/kfcc.png',
    link: 'https://www.kidsfightclimatechange.org/',
  },
];

function App() {

  return (
    <div className="page">

      <main>
        <Heading />
        <section>
          <h3 className="rounded-border" style={{ fontStyle: "italic" }}>Featured Work!</h3>
          <div className="gallery">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imgUri={project.image}
                link={project.link}
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