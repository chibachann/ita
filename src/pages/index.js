import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout'

import RestaurantIntroduction from '../components/RestaurantIntroduction/RestaurantIntroduction'
import FeaturedMessage from '../components/FeaturedMessage/FeaturedMessage'

const IndexPage = () => {
  return (
    <Layout>
      <RestaurantIntroduction />
      <FeaturedMessage />
    </Layout>
  )
}

export default IndexPage
