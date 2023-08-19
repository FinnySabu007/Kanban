import React from 'react'

export default function Card(props) {
    let color = ["#23ba21","#1ae4ff","#e92b2b","#7d21ba","#ba21ae","#b0ba21"]
    var random_color = color[(Math.floor(
        Math.random() * color.length))];
  return (
    <>
        <div id="card">
            <div id="ctop">
                <h5>{props.id}</h5>
                <div id="ctopimg" style={{backgroundColor:random_color}}>{props.name}</div>
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
