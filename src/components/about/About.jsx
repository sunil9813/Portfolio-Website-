import React from "react"
import { Heading } from "../../common/Heading"
import { about } from "../../data/data"
import { Bio } from "./Bio"
import { Info } from "./Info"
import { Price } from "./Price"
import { Services } from "./Services"
import { Slider } from "./Slider"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
          {about.map((items) => {
            return (
              <>
                <div className='about_details'>
                  <Info items={items} Heading={Heading} />
                  <Bio items={items} Heading={Heading} />
                </div>
                <Services items={items} Heading={Heading} />
                <Slider items={items} Heading={Heading} />
                <Price items={items} Heading={Heading} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}
