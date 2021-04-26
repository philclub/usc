import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';

function Hello() {
  const url = 'https://plausible.io/usc.philclub.org';
  useEffect(() => {
    window.location.href = url;
  });
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Redirecting from ${siteConfig.title}...`}
      description="USC Philosophy Club"
    >
      <p>
        Redirecting to <a href={url}>{url}</a>...{' '}
      </p>
    </Layout>
  );
}

export default Hello;
