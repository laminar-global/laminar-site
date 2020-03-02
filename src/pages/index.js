import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';
import Icon10X from '../svg/Icon10X';
import IconZeroT from '../svg/IconZeroT';
import IconConfluenceEngine from '../svg/IconConfluenceEngine';
import IconDeepStrata from '../svg/IconDeepStrata';
import IconVersatile from '../svg/IconVersatile';
import IconHighQuality from '../svg/IconHighQuality';
import IconReliability from '../svg/IconReliability';
import IconSpeed from '../svg/IconSpeed';
import IconContentManagement from '../svg/IconContentManagement';
import IconTrulyGlobal from '../svg/IconTrulyGlobal';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 md:flex md:items-center">
        <div className="relative pb-8 md:pb-0 md:w-1/2">
          <HeroImage />
        </div>
        <div className="relative z-10 text-center md:text-left md:w-1/2 md:pl-8">
          <h1 className="font-display uppercase font-semibold text-4xl lg:text-5xl xl:text-6xl leading-none">
            Zero Turbulence Streaming Infrastructure
          </h1>
          <p className="text-xl lg:text-2xl mt-6 text-gray-600">
            Enterprise-class video-streaming PAAS aimed at content companies looking to run a
            Netflix-scale service.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" href="#contact">
              Get Started
            </Button>
          </p>
        </div>
      </div>
    </section>
    <section className="px-8 py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="font-display uppercase font-semibold text-3xl lg:text-5xl">
          Four Major Laminae
        </h2>
        <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
          The Laminar Platform has four major moving parts that come together seamlessly to help
          content creators and companies build a streaming business.
        </p>
        <div className="flex flex-wrap mt-12 text-left">
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4">
            <IconZeroT />
            <p className="font-display uppercase font-semibold text-xl">Zero.T</p>
            <p className="mt-1">
              <strong className="font-semibold">The Streaming Infrastructure</strong>
              <span className="text-gray-600">
                {' '}
                that intelligently manages your video assets and seamlessly delivers them anywhere
                in the world, to any device.
              </span>
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4">
            <Icon10X />
            <p className="font-display uppercase font-semibold text-xl">10.X</p>
            <p className="mt-1">
              <strong className="font-semibold">The Business Engine</strong>
              <span className="text-gray-600">
                {' '}
                that lets you seamlessly set up hybrid revenue models and maximize ARPU.
              </span>
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4">
            <IconConfluenceEngine />
            <p className="font-display uppercase font-semibold text-xl">Confluence.Engine</p>
            <p className="mt-1">
              <strong className="font-semibold">The Adaptive Frontend</strong>
              <span className="text-gray-600">
                {' '}
                that’s married to our insights engine and changes auto-magically.
              </span>
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4">
            <IconDeepStrata />
            <p className="font-display uppercase font-semibold text-xl">Deep.Strata</p>
            <p className="mt-1">
              <strong className="font-semibold">The Data Science Engine</strong>
              <span className="text-gray-600">
                {' '}
                that give you an end-to-end overview of your audience.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-8 my-20 lg:my-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Laminar Delivers</LabelText>
        <div className="flex flex-wrap mt-8 lg:px-24 text-left">
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconHighQuality />
            <p className="mt-1 font-semibold text-primary">High Quality</p>
            <p className="mt-1 text-gray-600">
              HD/4k/8k streams in bandwidth rich locations and high quality streams in poor network
              areas.
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconReliability />
            <p className="mt-1 font-semibold text-primary">Reliability</p>
            <p className="mt-1 text-gray-600">
              Average video start time under 4 seconds on all networks and video start failure under
              1%.
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconSpeed />
            <p className="mt-1 font-semibold text-primary">Speed</p>
            <p className="mt-1 text-gray-600">
              Transcoding speed of 4:1 and bandwidth savings of up to 30% over traditional
              solutions.
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconContentManagement />
            <p className="mt-1 font-semibold text-primary">Content Management</p>
            <p className="mt-1 text-gray-600">
              Auto generate metadata content and auto-ratings/censor according to regional
              requirements.
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconTrulyGlobal />
            <p className="mt-1 font-semibold text-primary">Truly Global</p>
            <p className="mt-1 text-gray-600">
              Native multi-lingual translation support and multi-region licensing and monetization.
            </p>
          </div>
          <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/3">
            <IconVersatile />
            <p className="mt-1 font-semibold text-primary">Versatile</p>
            <p className="mt-1 text-gray-600">
              Support for all kinds of devices and an integrated second-screen solution.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      className="container mx-auto my-20 px-8 py-24 bg-gray-100 sm:rounded-lg text-center"
    >
      <h3 className="font-display uppercase font-semibold text-4xl">Zero Cap-Ex Pricing</h3>
      <p className="text-l text-gray-600">
        One simple cost for everything that drops as you scale.
        <br />
        We are always aligned with your business model.
      </p>
      <p className="mt-8">
        <Button size="l">Get Started</Button>
      </p>
    </section>
  </Layout>
);
