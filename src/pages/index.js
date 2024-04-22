import * as React from 'react'
import Layout from '../layout'

import RestaurantIntroduction from '../components/RestaurantIntroduction/RestaurantIntroduction'

import ExplanationSection from '../components/ExplanationSection/ExplanationSection'
import LFeaturedDish from '../components/LFeaturedDish/LFeaturedDish'
import RFeaturedDish from '../components/RFeaturedDish/RFeaturedDish'

const IndexPage = () => {
  return (
    <Layout>
      <RestaurantIntroduction />
      <ExplanationSection />
      <LFeaturedDish />
      <RFeaturedDish />
      
    </Layout>
  )
}

export default IndexPage
