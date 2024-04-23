// Top.js
import * as React from 'react';
import RestaurantIntroduction from '../components/RestaurantIntroduction/RestaurantIntroduction'
import ExplanationSection from '../components/ExplanationSection/ExplanationSection'

const Top = () => {
    return (
      <section id='top'>
        <RestaurantIntroduction />
        <ExplanationSection />
      </section>
    );
  };
  
  export default Top;
