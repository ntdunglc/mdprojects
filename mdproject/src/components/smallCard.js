import React from "react";
import { MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

function SmallCard(props){
    return (
        <MDBCol md="6" className="md-0 mb-4">
            <MDBCard className="card-image" style={{
                backgroundImage:
                    "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
            }}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                    <div>
                        <h3 className="py-3 font-weight-bold">
                            <strong>{props.name}</strong>
                        </h3>
                        <p className="pb-3">{props.describe}</p>
                        <MDBBtn color="secondary" rounded size="md">
                            <MDBIcon far icon="clone" className="left" /> View Post
                        </MDBBtn>
                    </div>
                </div>
            </MDBCard>
        </MDBCol>
    );
}

export default SmallCard;