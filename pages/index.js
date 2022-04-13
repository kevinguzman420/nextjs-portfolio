import Layout from '../components/Layout';
import Hero from '../components/index/Hero';
import Link from 'next/link';
import { skills, experiences, projects } from '../profile';

const Index = () => (
  <Layout>
    {/* Header Card */}
    <Hero />

    {/* Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {
              skills.map(({skill, percentage}, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {
                experiences.map(({title, description, from, to}, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>{from}-{to ? to : "Current"}</h5>
                    <p>{description}</p>
                  </li>
                ))
              }
              <Link href="/experiences">
                <a className="btn btn-primary">Hire Me</a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Porffolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-align">Portfolio</h1>
            </div>

            {
              projects.map(({name, description, image}, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index;