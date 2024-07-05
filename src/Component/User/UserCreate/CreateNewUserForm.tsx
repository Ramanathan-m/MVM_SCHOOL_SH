import React from 'react'
import CommonFormFooter from '../../Forms/FormsControl/BaseInput/Common/CommonFormFooter'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { selectschool, UsersConfirmPassword, UsersEmailId, UsersName, UsersPassword, UsersPhoneNumber, Usersname, MAddDepartments, MDepartments, Permission, SearchStatus, Active, InActive } from '../../../utils/Constant'
import { LinkDropdown } from '../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import DepartmentCheckBox from './DepartmentCheckBox'
import PermissionCheck from './PermissionCheck'

const CreateNewUserForm = () => {
  return (
    <>
      <Row>
        <Col md="6 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{selectschool}</Label>
              </Col>
              <Col sm="8">
              <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersName}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersEmailId}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPhoneNumber}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Usersname}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersConfirmPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" />
              </Col>
            </Row>
          </FormGroup>
          {/* DepartmentCheckBox */}
          <FormGroup>
              <Col sm="12">
                <DepartmentCheckBox />
              </Col>
          </FormGroup>
          {/* PermissionCheck */}
          <FormGroup>
              <Col sm="12">
                <PermissionCheck />
              </Col>
          </FormGroup>
          <FormGroup className="d-flex gap-3 checkbox-checked">
              <Col sm="4">
                <Label>{SearchStatus}</Label>
              </Col>
              <Col sm="8" className='d-flex gap-2'>
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" />
                  <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{Active}</Label>
                </FormGroup>
                <FormGroup check>
                  <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget"  />
                  <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{InActive}</Label>
                </FormGroup>              
              </Col>
          </FormGroup>
        </Col>
      </Row>
      <CommonFormFooter />
    </>
  )
}

export default CreateNewUserForm