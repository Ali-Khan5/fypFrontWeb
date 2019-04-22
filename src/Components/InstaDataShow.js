import React, { Component } from "react";

const InstaDataShow = props => {
  return (
    <div className="card text-white bg-dark responsiveCard " style={{ marginTop: "10px" }}>
      <div className="card-body">
        <div className="row">
          <div className=" col-md-4 col-4">
            {props.imgg === "" ? (
              <img
                className="card-img-top"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50px"
                }}
                src={
                  "https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg"
                }
                alt="Card image cap"
              />
            ) : null}
            {props.imgg ? (
              <img
                className="card-img-top"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50px"
                }}
                src={`${props.imgg}`}
                alt="Card image cap"
              />
            ) : null}
          </div>
          <div className=" col-md-8 col-8">
            <h5 className="card-title">{props.name}</h5>
            <p style={{ fontSize: "14px",fontWeight:'bold' }}>
            {props.Username ? props.Username :null}
            </p>
            <p style={{ fontSize: "12px" }}>

              { props.Followers ? props.Followers :null }

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaDataShow;
