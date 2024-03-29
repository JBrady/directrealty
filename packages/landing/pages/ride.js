import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/Ride/ride.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'common/src/containers/Ride/Navbar';
import Banner from 'common/src/containers/Ride/Banner';
import RideOption from 'common/src/containers/Ride/RideOption';
import LocationSection from 'common/src/containers/Ride/LocationSelection';
import FeatureSection from 'common/src/containers/Ride/Feature';
import LatestNewsSection from 'common/src/containers/Ride/LatestNews';
import HowItWorkSection from 'common/src/containers/Ride/HowItWorks';
import TestimonialSection from 'common/src/containers/Ride/TestimonialSection';
import FeatureSlider from 'common/src/containers/Ride/FeatureSlider';
import Footer from 'common/src/containers/Ride/Footer';

export default () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <Head>
          <title>Ride Sharing | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <RideOption />
          <LocationSection />
          <FeatureSlider />
          <FeatureSection />
          <LatestNewsSection />
          <HowItWorkSection />
          <TestimonialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
