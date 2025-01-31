import React from "react";
import { Fragment } from "react";
import { Link, Links } from "react-router";

function SubTitleCard({ title, button,path }) {
  return (
    <Fragment>
      <div className="d-flex justify-content-between my-4">
        <h4>{title}</h4>
        
          {button ? (
            <Link to={path}><button class="btn btn-primary btn-sm bg-body text-dark rounded-4">
              {button}
            </button> </Link>
          ) : null}
       
      </div>
    </Fragment>
  );
}

export default SubTitleCard;
