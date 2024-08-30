import React from 'react'
import clsx from 'clsx';
import styles from './Resume.module.css';
import Layout from '@theme/Layout';
import Experience from '../components/Experience';

export default function Resume() {
  return (
    <Layout
      title={`resume`}
      description="resume">
      <main>
        <Experience />
      </main>
    </Layout>
  )
}
