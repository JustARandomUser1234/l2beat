import React from 'react'

import {
  Chart,
  ChartProps,
  Footer,
  FooterProps,
  Header,
  HeaderProps,
  Navbar,
  NavbarProps,
} from '../../../components'
import { PageContent } from '../../../components/PageContent'
import { ProjectDetails, ProjectDetailsProps } from './ProjectDetails'
import { ProjectHeader, ProjectHeaderProps } from './ProjectHeader'

export interface ProjectPageProps {
  navbar: NavbarProps
  header: HeaderProps
  showProjectHeader: boolean
  projectHeader: ProjectHeaderProps
  chart: ChartProps
  projectDetails: ProjectDetailsProps
  footer: FooterProps
}

export function ProjectPage(props: ProjectPageProps) {
  return (
    <>
      <Navbar {...props.navbar} />
      <PageContent mobileFull>
        {props.showProjectHeader ? (
          <ProjectHeader {...props.projectHeader} />
        ) : (
          <Header {...props.header} />
        )}
        <Chart {...props.chart} mobileFull />
        <ProjectDetails {...props.projectDetails} />
      </PageContent>
      <Footer narrow {...props.footer} />
    </>
  )
}
