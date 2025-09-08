"use client"
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Play } from 'lucide-react';

const AboutUsPage = () => {
  const timelineData = [
    {
      year: '2014',
      description: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
      side: 'left'
    },
    {
      year: '2015',
      description: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
      side: 'right'
    },
    {
      year: '2016',
      description: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
      side: 'left'
    },
    {
      year: '2017',
      description: "Better expands into the real estate market with Better Real Estate.",
      side: 'right'
    },
    {
      year: '2018',
      description: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
      side: 'left'
    },
    {
      year: '2019',
      description: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
      side: 'right'
    },
    {
      year: '2022',
      description: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
      side: 'left'
    },
    {
      year: '2023',
      description: "Better Mortgage launches One Day Mortgage. The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs.",
      side: 'right'
    }
  ];

  const additionalItems = [
    {
      description: "Better Mortgage launches the fully digital 3-day HELOC.",
      side: 'left'
    },
    {
      description: "Better Mortgage launches One Day Verified Approval Letter.",
      side: 'right'
    }
  ];

  const relatedPosts = [
    {
      title: "The LGBTQ+ homeownership story in numbers",
      description: "Homeownership and housing discrimination has harmed many...",
      link: "Read now →"
    },
    {
      title: "Vishal Garg, Founder and CEO of Better",
      description: "Better.com CEO Vishal Garg has been interested in tech and lending for...",
      link: "Read now →"
    },
    {
      title: "The Year of the Home: 2020 in Review",
      description: "In the socially distanced world of 2020, Better helped 88,100+ new clien...",
      link: "Read now →"
    },
    {
      title: "What is Better Mortgage?",
      description: "We launched Better Mortgage because the mortgage industry is...",
      link: "Read now →"
    },
    {
      title: "Why I Started Better Mortgage",
      description: "Most founders have a story they pitch when asked about what their compan...",
      link: "Read now →"
    },
    {
      title: "Finding Home: Dan and Louise",
      description: "They didn't think homeownership was in the cards. Now they're living a...",
      link: "Read now →"
    },
    {
      title: "Finding Home: Taisha",
      description: "A doctor and single parent, forced to downsize after divorce, navigates debt...",
      link: "Read now →"
    },
    {
      title: "How AI Mortgage Lending is Transforming the...",
      description: "Explore AI mortgage lending, its challenges, risk management, and how AI...",
      link: "Read now →"
    },
    {
      title: "Self-employed? Here's how to get a mortgage",
      description: "Here's what our underwriters take into consideration when...",
      link: "Read now →"
    }
  ];

  const backers = [
    { name: 'SoftBank', logo: 'SoftBank' },
    { name: 'ally', logo: 'ally' },
    { name: 'citi', logo: 'citi' },
    { name: 'Ping An Bank', logo: '平安银行' },
    { name: 'Goldman Sachs', logo: 'Goldman Sachs' },
    { name: 'KPCB', logo: 'KPCB' },
    { name: 'American Express', logo: 'AMERICAN EXPRESS' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      <div className="w-full bg-white">
      {/* Mission Statement Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-green-600 text-lg sm:text-xl font-semibold mb-8">
            Our mission
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </div>
      </div>

      {/* Status Quo Section */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                The status quo is broken
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 lg:mb-10">
                The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                Read Vishal's story
              </button>
            </div>

            {/* Right Video/Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                {/* Video thumbnail placeholder - black and white professional photo */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-600 flex items-center justify-center relative">
                  {/* Simulated black and white professional photo background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 opacity-90"></div>
                  
                  {/* Professional headshot silhouette */}
                  <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500"></div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="group bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 ml-1 group-hover:text-green-600 transition-colors duration-200" fill="currentColor" />
                    </button>
                  </div>
                  
                  {/* Subtle overlay pattern to simulate photo texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Hero Section */}
        <div className="bg-green-700 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              How we're changing things
            </h1>
            <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed">
              <p>
                Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.
              </p>
              <p>
                That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
              </p>
            </div>
          </div>
        </div>

      {/* Backed By Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
            Backed by
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {backers.map((backer, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <span className="text-gray-600 font-semibold text-sm sm:text-base text-center">
                  {backer.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">
            Company timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  {item.side === 'left' ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold z-10">
                        {item.year}
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold z-10">
                        {item.year}
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start">
                  <div className="absolute left-6 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm z-10">
                    {item.year}
                  </div>
                  <div className="ml-16 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional items without years */}
            {additionalItems.map((item, index) => (
              <div key={`additional-${index}`} className="relative mb-12 md:mb-16">
                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  {item.side === 'left' ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-gray-200 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-gray-200 p-6 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start">
                  <div className="ml-16 bg-gray-200 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Today section */}
            <div className="relative mb-12 md:mb-16">
              {/* Desktop layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold z-10">
                  Today
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Get started
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden flex items-start">
                <div className="absolute left-6 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm z-10">
                  Today
                </div>
                <div className="ml-16 bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
            Related posts
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                <a href="#" className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                  {post.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;