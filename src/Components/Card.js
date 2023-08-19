import React from 'react'

export default function Card(props) {
  return (
    <>
        <div id="card">
            <div id="ctop">
                <h5>{props.id}</h5>
                <div id="ctopimg"></div>
            </div>
            <div id="cmid">
                <h4>{props.title}</h4>
            </div>
            <div id="cbot">
                <h5>Feature Request</h5>
            </div>
        </div>
    </>
  )
}
