import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import config from '@site/docusaurus.config';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
  img: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.getStarted.title">Comenzar</Translate>,
    img: './img/index/Start.png',
    description: (
      <Translate id="homepage.feature.getStarted.description">
        Bienvenido a la documentación de Daiana. Comienza rápidamente aprendiendo lo básico.
      </Translate>
    ),
    link: 'intro'
  },
  {
    title: <Translate id="homepage.feature.agents.title">Agentes</Translate>,
    img: './img/index/agent.png',
    description: (
      <Translate id="homepage.feature.agents.description">
        Descubre cómo funcionan los agentes en Daiana y cómo configurarlos.
      </Translate>
    ),
    link: 'Plataforma/agentes'
  },
  
  {
    title: <Translate id="homepage.feature.integrations.title">Integraciones</Translate>,
    img: './img/index/integrations.png',
    description: (
      <Translate id="homepage.feature.integrations.description">
        Conoce las integraciones disponibles y cómo conectarlas con Daiana.
      </Translate>
    ),
    link: 'Plataforma/agentes/integraciones/teams'
  },
  {
    title: <Translate id="homepage.feature.reports.title">Reportes y tableros</Translate>,
    img: './img/index/reports.png',
    description: (
      <Translate id="homepage.feature.reports.description">
        Visualiza y analiza datos con los reportes y tableros de Daiana.
      </Translate>
    ),
    link: 'Plataforma/dashboard/reportes'
  },
  {
    title: <Translate id="homepage.feature.history.title">Historial</Translate>,
    img: './img/index/history.png',
    description: (
      <Translate id="homepage.feature.history.description">
        Consulta el historial de actividades y eventos en Daiana.
      </Translate>
    ),
    link: 'Plataforma/historial'
  },
/** 
  {
    title: <Translate id="homepage.feature.knowledgeBases.title">Bases de conocimiento</Translate>,
    img: './img/index/knowledge.png',
    description: (
      <Translate id="homepage.feature.knowledgeBases.description">
        Aprende a gestionar y utilizar bases de conocimiento en Daiana.
      </Translate>
    ),
    link: 'intro'
  },
  */

];

function Feature({title, description, img, link}: FeatureItem) {
  const docsConfig = config.presets?.[0]?.[1]?.docs ?? {};
  const docBasePath = docsConfig.routeBasePath ?? 'docs';
  const versionPath = docsConfig.versions?.current?.path;
  const toPath = `/${docBasePath}/${versionPath ? `${versionPath}/` : ''}${link}`;
  
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center">
        <Link to={toPath} className={styles.indexCards}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      
    </div>
    
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}> 
      <div className="container">
      <div className='name'>
        <h3>
          <Translate id="homepage.title_topics">
            Explora por temas
          </Translate>
        </h3>
      </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
            
          ))}


        </div>
      </div>
    </section>
  );
}
