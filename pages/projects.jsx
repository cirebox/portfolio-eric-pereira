import ProjectCard from '../components/ProjectCard';
import { api } from "../pages/api/config/axios";
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Alguns projetos que realizei</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  let projects;
  await api
    .get(`/projects`)
    .then((response) => {
      projects = response.data;
    })
    .catch((error) => {
    })
    .finally(() => {
    });

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
