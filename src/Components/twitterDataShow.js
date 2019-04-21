import React from "react";

const twitterDataShow = props => {
  return (
    <div
      className="card text-white bg-info "
      style={{ marginTop: "10px", height: "180px" }}
    >
      <div className="card-body">
        <div className="row">
          {props.imgg ?  (
            <div className="col-md-4">
              {props.imgg == "" ? (
                <img
                  className="card-img-top"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50px"
                  }}
                  src={
                    `${props.imgg}`
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
          ) : null}
          <div className=" col-md-8">
            <h5 className="card-title">{props.name}</h5>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              {props.ScreenName ? props.ScreenName : null}
            </p>
            <p style={{ fontSize: "12px" }}>
              {props.description.split("").length > 50
                ? props.description
                : // .substr(0,80) + "..."
                  props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default twitterDataShow;
