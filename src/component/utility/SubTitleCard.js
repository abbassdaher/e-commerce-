import React from 'react'
import { Fragment } from 'react'

function SubTitleCard({ title,button}) {
  return (
    <Fragment>
    <div className="d-flex justify-content-between my-4">
        <h4>{title}</h4>
        {button ? (
          <button class="btn btn-primary btn-sm bg-body text-dark rounded-4">
            {button}
          </button>
        ) : null}
      </div>
    </Fragment>
  )
}

export default SubTitleCard