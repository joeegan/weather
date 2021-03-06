import React, { Fragment} from 'react';
import Figure from './Figure';
import { equals, times, identity } from 'ramda';

const CIRCLE_QTY = 16

const shouldSelectCreator = deg => {
    return equals(
        Math.round(
            deg / (360 / CIRCLE_QTY)
        )
    )
}

const getDeg = i => Math.round(
        (360 / CIRCLE_QTY) * i
    )


const Circle = ({ i, selected }) => {
    const translate = window.innerWidth > 500 ? '220px' : '120px'
    return <div style={{ transform: `rotate(${getDeg(i)}deg) translate(${translate})` }}
        className={`circle ${selected ? 'selected' : ''}`} />
}

export default ({ deg, speed }) => {
  const shouldSelect = shouldSelectCreator(deg)
  return (
      <Fragment>
          <p className="dir dir-single">N</p>
            <div className="horiz-dirs">
                <p className="dir">W</p>
                <div className='circle-wrap'>
                {times(identity, CIRCLE_QTY).map(
                    i => <Circle key={i} i={i} selected={shouldSelect(i)} />
                )}
                <Figure desc="Windspeed (MPH)" val={speed} />
                </div>
                <p className="dir">E</p>
             </div>
        <p className="dir dir-single">S</p>
        </Fragment>

  )
}