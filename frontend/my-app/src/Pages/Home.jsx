import React from 'react';
import Banner1 from '../Components/Adverts/Adverts';
import Feat1 from '../Components/Features/Features';
import Newsletter from '../Components/Newsletter/Newsletter';
import Popular from '../Components/Popular/Popular';


export const Home = () => {
  return (
    <div>
        <Banner1/>
        <Feat1/>
        <Popular/>
        <Newsletter/>
    </div>
  )
}
export default Home;