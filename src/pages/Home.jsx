import React from 'react'
import Headers from '../components/Headers'
import Info from '../components/Info'
import Section from '../components/Section'
import Products from '../components/Products'
import { products ,productsSection} from '../constants/constant'

const Home = () => {
  return (
    <div>
        <Headers />
        <Info />
        <Section data={productsSection.iphonePro}/>
        <Section data={productsSection.iphone}/>
        <Section data={productsSection.macbookpro}/>
        <Products />
    </div>
  )
}

export default Home