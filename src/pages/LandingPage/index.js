import React, { memo, useCallback, useEffect, useState } from 'react';
import Header from 'components/layout/Header';
import Adventure from 'components/layout/Adventure';
import { useDispatch, useSelector } from 'react-redux';
import { getPageDataRequest, pageDataSelector } from 'slices/pageData';
import Map from 'components/layout/Map';
import _mockData from './mockData';
import ActivityBooking from 'components/layout/ActivityBooking';
import FoodCarousel from 'components/layout/FoodCarousel';
import Experiences from 'components/layout/Experiences';
import SocialMedia from 'components/layout/SocialMedia';
import Explore from 'components/layout/Explore';
import Footer from 'components/layout/Footer';

const LandingPage = () => {
  const dispatch = useDispatch();
  const pageDataStore = useSelector(pageDataSelector) || _mockData[0];
  const [pageData, setPageData] = useState(_mockData[0]);

  const getPageData = useCallback(() => {
    dispatch(getPageDataRequest('en'));
  }, []);

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {
    if (Object.keys(pageDataStore).length > 0) {
      setPageData(pageDataStore);
    }
  }, [pageDataStore]);

  return (
    <div className="spdm-landing-page">
      <Header headerMenu={pageData?.head_menu} />
      <Adventure adventureData={pageData?.bloc_1} />
      <Map mapData={pageData?.bloc_2} points={pageData?.carte_point} />
      <ActivityBooking activityData={pageData?.bloc_2_2} />
      <FoodCarousel carouselData={pageData?.bloc_3} />
      <Experiences experiencesData={pageData?.bloc_4} />
      <SocialMedia socialMediaData={pageData?.bloc_5} />
      <Explore exploreData={pageData?.bloc_6} />
      <Footer footerData={pageData?.footer} />
    </div>
  );
};

LandingPage.propTypes = {};

export default memo(LandingPage);
