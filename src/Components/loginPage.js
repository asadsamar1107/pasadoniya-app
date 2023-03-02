import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
    
const loginPage = () => {
    return (


        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm='4'>

                    <div className='d-flex flex-row ps-5 pt-5'>
                        <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                        <span className="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>
                    </div>

                </MDBCol>



            </MDBRow>

        </MDBContainer>

    );
}
export default loginPage
