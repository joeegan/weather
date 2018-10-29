import React from 'react'

export default function({ val, desc }) {
    return (
        <div className="figure">
        <span className="val">{val}</span>
        <span className="desc">{desc}</span>
      </div>
    )
}