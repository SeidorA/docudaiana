import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Faq from '@site/src/components/faq';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <small>
          <Translate id="homepage.getStartedNow">Comienza ahora</Translate>
        </small>
        <h1>
          <Translate id="homepage.title">Centro de ayuda</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            Cree asistentes virtuales impulsados por inteligencia artificial, entrénelos para áreas como ventas, recursos humanos o atención al cliente, y obtenga información valiosa directamente desde sus paneles de control.
          </Translate>


        </p>


      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.bgfull}>
        <HomepageFeatures />
      </main>
      <div className={styles.studio}>
        <img src="img/index/logoStudio.png" alt="" />
        <h2>Más rápido con Studio</h2>

        <Link to="docs/Studio">
          <button className={styles.button}>
            Empezar
          </button>
        </Link>
      </div>

      <Faq />
    </Layout>


  );
}
