import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { MAddDepartments } from '../../../utils/Constant'

const CreateNewDepartmentBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/department/createnewdepartment`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {MAddDepartments}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewDepartmentBtn