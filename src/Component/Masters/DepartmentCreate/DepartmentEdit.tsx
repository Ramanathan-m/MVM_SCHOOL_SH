import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../utils/Constant'
import EditNewDepartmentForm from './EditNewDepartmentForm'

const DepartmentEditContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <EditNewDepartmentForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default DepartmentEditContainer