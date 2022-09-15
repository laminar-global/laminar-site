import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Form from '../components/Form';
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
import VideoIcon from '../svg/VideoIcon';
import AppsIcon from '../svg/AppsIcon';
import MonetiseIcon from '../svg/MonetiseIcon';
import APIsIcon from '../svg/APIsIcon';

export default () => (
  <Layout>

    <section className="pt-20 pb-10 md:pt-40 md:pt-20">
      <div className="container mx-auto px-8 md:flex md:items-center">
        <div className="relative pb-8 md:pb-0 md:w-1/2">
          <HeroImage />
        </div>
        <div className="relative z-10 text-center md:text-left md:w-1/2 md:pl-8">
          <h1 className="font-display uppercase text-4xl lg:text-5xl leading-none">
            <span className="font-semibold text-4xl lg:text-5xl xl:text-6xl">Zero Turbulence</span><br/>
            Video Streaming PAAS
          </h1>
          <p className="text-xl lg:text-2xl mt-6 text-gray-600">
            Enterprise-class video streaming infrastructure aimed at content companies looking to run a Netflix-scale service.
          </p>
          <p className="mt-8 md:mt-12">
            <a class="lg:mr-2 lg:inline-block block mb-2 py-4 px-12 font-display uppercase bg-primary hover:bg-primary-darker rounded text-white text-center hover:text-white transition-all duration-200" href="https://calendly.com/laminar-streaming/meet-laminar-ibc-22?month=2022-09" target="_blank">Book A Meeting</a>
            <a class="lg:inline-block block py-4 px-12 font-display uppercase bg-white hover:bg-gray-100 rounded text-primary text-center hover:text-primary transition-all duration-200" href="#contact">Get In Touch</a>
            {/* <Button size="lg" href="#contact">
              Get In Touch
            </Button> */}
          </p>
        </div>
      </div>
    </section>

    <section className="pt-20 pb-10 md:pt-40 md:pt-20">
      <div className="container mx-auto text-center px-8">
        <h2 className="font-display uppercase font-semibold text-3xl lg:text-5xl">
          Streaming is hard...
        </h2>
      </div>
      <div class="relative flex overflow-x-hidden text-gray-400 streaming-marquee">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="text-xl mx-4">Live and Video on Demand</span>
          <span class="text-xl mx-4">Content License</span>
          <span class="text-xl mx-4">Management by Geography</span>
          <span class="text-xl mx-4">Apps for TVs and STBs</span>
          <span class="text-xl mx-4">Payment Gateways, Bundles and Partnerships</span>
          <span class="text-xl mx-4">Analytics and Machine Learning</span>
          <span class="text-xl mx-4">Global Tax</span>
          <span class="text-xl mx-4">Management and Regulatory Compliance</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="text-xl mx-4">Live and Video on Demand</span>
          <span class="text-xl mx-4">Content License</span>
          <span class="text-xl mx-4">Management by Geography</span>
          <span class="text-xl mx-4">Apps for TVs and STBs</span>
          <span class="text-xl mx-4">Payment Gateways, Bundles and Partnerships</span>
          <span class="text-xl mx-4">Analytics and Machine Learning</span>
          <span class="text-xl mx-4">Global Tax</span>
          <span class="text-xl mx-4">Management and Regulatory Compliance</span>
        </div>
      </div>
      <div className="container mx-auto text-center px-8">
        <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
          ...but it doesn't have to be.
        </p>
        <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
          Take a look at how we enabled <a className="transition-all duration-200" href="https://chaupal.tv/" target="_blank">Chaupal</a> to launch it's OTT service globally in 12 weeks at no upfront cost.
        </p>
        <div className="flex flex-wrap mt-12 text-left">
          <div className="flex-none w-full">
            <div class="embed-responsive aspect-ratio-16/9 embed-fix border rounded-md">
              <iframe class="rounded-md embed-responsive-item" src="https://www.youtube.com/embed/fDzNSF384qk?rel=0&color=white&modestbranding=1&controls=0" title="Laminar and Chaupal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-20 pb-10 md:pt-40 md:pt-20">
      <div className="container mx-auto text-center px-8">
        <h2 className="font-display uppercase font-semibold text-3xl lg:text-5xl">
          So what does it take?
        </h2>
        <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
          Quite a lot, actually. There's a lot that goes behind launching and running a secure streaming service at scale.
        </p>
        <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
          A lot of tech, a lot of money and a lot of time.
        </p>
      </div>
      <div className="container mx-auto mt-16 text-center px-8">
        <div className="flex flex-wrap">
          <div className="flex-none w-full">
            <p className="font-display uppercase font-semibold text-xl">
              The Vendor Spaghetti
            </p>
            <div className="mt-2 text-gray-600">
              <p>
                There exist a pleathora of complicated solutions from multiple vendors.
              </p>
              <p className="mt-1">
                A content owner has to jump through multiple hoops to get their content to their audience.
              </p>
            </div>
            <div className="vendor-spaghetti-cont mt-8 lg:px-16">
              <p className="font-display uppercase font-semibold text-xl text-primary">
                Content Owner
                <span class="block border-b-2 rounded border-primary-lighter mt-6"></span>
              </p>
              <div className="p-4 pt-8 text-left flex flex-row flex-wrap justify-center align-center">
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-0">CDNs</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-10">Video Delivery Management</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-20">Online Video Platforms</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-30">Encoding / Transcoding</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-0">Players</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-10">Measurement and Analytics</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-20">Data / DRM</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-30">Exchanges</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-0">Televisions</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-10">OTT Platforms</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-20">IP-Enabled Set Top Boxes</p>
                <p className="m-4 px-8 py-4 rounded-md border flex-none w-fit max-w-full self-start text-center text-gray-600 shake delay-30">System Integrators</p>
              </div>
              <p className="font-display uppercase font-semibold text-xl text-primary">
                <span class="block border-t-2 rounded border-primary-lighter mb-6"></span>
                Audience
              </p>
            </div>
          </div>
          <div className="flex-none w-full mt-16">
            <p className="font-display uppercase font-semibold text-xl relative problem-statement-name money">
                Cap-ex Spirals
            </p>
            <div className="mt-2 text-gray-600 problem-statement-description">
              <p>
                The upfront spends, both monetary and of time are massive.
              </p>
              <p className="mt-1">
                A content owner loses crucial time and significant money in setting up a non-scalable platform held together by hot glue.
              </p>
            </div>
            <div className="overflow-x-auto relative mt-8 lg:px-16">
              <table class="w-full text-left text-gray-600 text-center">
                <thead class="uppercase bg-gray-400 text-gray-800">
                  <tr>
                    <th scope="col" class="w-1/4 py-3 px-6 text-left">Monthly Active Users</th>
                    <th scope="col" class="w-1/4 py-3 px-6">100K+</th>
                    <th scope="col" class="w-1/4 py-3 px-6">1M+</th>
                    <th scope="col" class="w-1/4 py-3 px-6">10M+</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 text-gray-600 whitespace-nowrap text-left">Back-end</th>
                    <td class="py-4 px-6">$500K+</td>
                    <td class="py-4 px-6">$2-5M+</td>
                    <td class="py-4 px-6">$5-10M+</td>
                  </tr>
                  <tr class="bg-white">
                    <th scope="row" class="py-4 px-6 text-gray-600 whitespace-nowrap text-left">Front-end</th>
                    <td class="py-4 px-6"></td>
                    <td class="py-4 px-6"></td>
                    <td class="py-4 px-6"></td>
                  </tr>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-left bg-gray-200">All apps + all devices</td>
                    <td class="py-4 px-6 bg-gray-200"></td>
                    <td class="py-4 px-6 bg-gray-200"></td>
                    <td class="py-4 px-6 bg-gray-200">$3M+</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="py-4 px-6 text-left bg-gray-200">Most apps + major devices</td>
                    <td class="py-4 px-6 bg-gray-200"></td>
                    <td class="py-4 px-6 bg-gray-200">$1M+</td>
                    <td class="py-4 px-6"></td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="py-4 px-6 text-left bg-gray-200">Web + Android + iOS</td>
                    <td class="py-4 px-6 bg-gray-200">$500K+</td>
                    <td class="py-4 px-6"></td>
                    <td class="py-4 px-6"></td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th scope="row" class="py-4 px-6 text-gray-600 whitespace-nowrap text-left">Data and Analytics</th>
                    <td class="py-4 px-6">$100K+</td>
                    <td class="py-4 px-6">$500K+</td>
                    <td class="py-4 px-6">$1M+</td>
                  </tr>
                  <tr class="bg-white">
                    <th scope="row" class="py-4 px-6 text-gray-600 whitespace-nowrap text-left">Time Spent</th>
                    <td class="py-4 px-6">6-9 Months</td>
                    <td class="py-4 px-6">9-15 Months</td>
                    <td class="py-4 px-6">12-24 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="pt-20 pb-10 md:pt-40 md:pt-20 offerings">

      <div className="container mx-auto">

        <div className="flex flex-wrap text-center">
          <div className="flex-none w-full lg:w-1/8">
            <h2 className="font-display uppercase font-semibold text-3xl lg:text-5xl">
              We Change Everything
            </h2>
            <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
              With Laminar, you get everything out of the box, <br/>
              as soon as you sign up.
            </p>
            <p className="text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2 text-gray-600">
              All major apps and APIs, 30+ distribution channels, a ready to go revenue engine and so much more at one price per user.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap text-left mt-12 ">
          <div className="flex-none p-8 w-full lg:w-1/4 offering bg-white rounded-md mb-8 border-2 border-gray-200">
            <div class="icon-wrapper flex align-center">
              <VideoIcon />
            </div>
            <p className="mt-6 font-display uppercase font-semibold text-xl">Video</p>
            <ul className="mt-2 text-gray-600">
              <li>Live</li>
              <li>On Demand</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap text-left">
          <div className="flex-none p-8 w-full lg:w-1/4 offering bg-white rounded-md mb-8 mr-8 border-2 border-gray-200">
            <div class="icon-wrapper flex align-center">
              <AppsIcon />
            </div>
            <p className="mt-6 font-display uppercase font-semibold text-xl">Apps</p>
            <ul className="mt-2 text-gray-600">
              <li>Android</li>
              <li>iOS</li>
              <li>Airplay</li>
              <li>Chromecast</li>
              <li>Apple TV</li>
              <li>Amazon FireStick</li>
              <li>Android TV</li>
              <li>LG</li>
              <li>Samsung</li>
              <li>Vewd</li>
              <li>Vida-Hisense</li>
              <li>Foxxum</li>
              <li>Vizio</li>
              <li>Hosted HTML5 TVs</li>
              <li>Android Set Top Boxes</li>
              <li>Android OEMs</li>
              <li>Roku</li>
              <li><a href="#" className="uppercase font-semibold">See more</a></li>
            </ul>
          </div>

          <div className="flex-none self-start p-8 w-full lg:w-1/4 offering bg-white rounded-md mb-8 border-2 border-gray-200">
            <div class="icon-wrapper flex align-center">
              <APIsIcon />
            </div>
            <p className="mt-6 font-display uppercase font-semibold text-xl">APIs</p>
              <ul className="mt-2 text-gray-600">
                <li>Xiaomi Patchwall</li>
                <li>Airtel Xtreme</li>
                <li>Tata Play</li>
                <li>DishTV WatchO</li>
              </ul>
          </div>
        </div>

        <div className="flex flex-wrap text-left">
          <div className="flex-none p-8 w-full lg:w-1/4 offering bg-white rounded-md border-2 border-gray-200">
            <div class="icon-wrapper flex align-center">
              <MonetiseIcon />
            </div>
            <p className="mt-6 font-display uppercase font-semibold text-xl">Monetise</p>
            <ul className="mt-2 text-gray-600">
              <li>Subsriptions</li>
              <li>Revenue Share Partnerships</li>
              <li>Instream Ads <span className="text-gray-400">(Coming Soon)</span></li>
            </ul>
        </div>
      </div>
      </div>
    </section> */}

    <section className="pt-20 pb-10 md:pt-40 md:pt-20">
      <div className="container mx-auto text-center px-8">
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
      <p className="text-l text-gray-600 mx-auto w-full md:w-1/2">
        One simple cost for everything that drops as you scale. We are always aligned with your
        business model.
      </p>
      <Form />
    </section>
  </Layout>
);

// <script type="text/javascript">
// {`
// var _iub = _iub || [];
// _iub.csConfiguration = {"lang":"en","siteId":1815327,"countryDetection":true,"cookiePolicyId":53698920, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-top-center","acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","textColor":"black","backgroundColor":"white" }};
// `}
// </script>
// <script
// type="text/javascript"
// src="//cdn.iubenda.com/cs/iubenda_cs.js"
// charset="UTF-8"
// async
// ></script>
