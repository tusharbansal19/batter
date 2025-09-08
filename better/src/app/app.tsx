import React, { useState } from 'react';
import { Play, Star, Phone, ChevronRight } from 'lucide-react';

const BetterMortgageWebsite = () => {
  const [activeTestimonial, setActiveTestimonial] = useState('Paul');

  const testimonials = {
    Paul: {
      name: "Paul",
      title: "Better Mortgage for my vacation home in Colorado.",
      active: true
    },
    Amanda: {
      name: "Amanda", 
      title: "Amanda's experience with Better Mortgage",
      active: false
    },
    Tiara: {
      name: "Tiara",
      title: "Tiara's Better Mortgage journey", 
      active: false
    }
  };

  const NavBar = () => (
    <nav className="bg-green-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold">Better</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-green-200">Buy</a>
            <a href="#" className="hover:text-green-200">Refinance</a>
            <a href="#" className="hover:text-green-200">HELOC</a>
            <a href="#" className="hover:text-green-200">Rates</a>
            <a href="#" className="hover:text-green-200">Better+</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 border border-white rounded-full p-1" />
          <button className="hover:text-green-200">Sign in</button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="bg-green-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          The first<br />
          <span className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-powered
          </span>{' '}
          Mortgage
        </h1>
        
        <p className="text-xl mb-4 opacity-90">
          Our tech unlocks lower rates, higher chances of approval,
        </p>
        <p className="text-xl mb-8 opacity-90">
          and a lightning-fast process from approval to closing. Over $100 billion funded.
        </p>
        
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold mb-4 transition-colors">
          Start my pre-approval
        </button>
        
        <div className="flex items-center justify-center text-sm opacity-75">
          <span className="mr-2">⏱</span>
          3 min | No hard credit check
        </div>
      </div>
      
      {/* Phone mockups */}
      <div className="max-w-6xl mx-auto mt-16 relative">
        <div className="flex justify-center items-center space-x-8">
          {/* Main phone */}
          <div className="bg-gray-800 rounded-3xl p-6 w-80 relative">
            <div className="bg-green-700 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  ✓
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Congrats, you're pre-approved for a loan up to</h3>
              <div className="text-3xl font-bold text-green-400">$450,000</div>
            </div>
          </div>
          
          {/* Side cards */}
          <div className="hidden lg:block space-y-4">
            <div className="bg-gray-700 rounded-xl p-4 w-64">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 text-xs">
                  ✓
                </div>
                <span className="text-sm">You don't need perfect credit to qualify.</span>
              </div>
              <div className="text-2xl font-bold">580</div>
              <div className="text-xs opacity-75">FICO</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-4 w-64">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-3 h-3" />
                </div>
              </div>
              <div className="text-sm">Instant answers — anytime, anywhere with Betsy™ AI.</div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-4 w-64">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  ⏱
                </div>
              </div>
              <div className="text-sm">See your customized rate options in seconds.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TestimonialSection = () => (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Video placeholder */}
            <div className="bg-black rounded-xl relative overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute top-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Better</span>
                  <button className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">Subscribe</button>
                </div>
                <h3 className="text-sm font-semibold">Why I Loved Using Better Mortgage for My Vacation Home</h3>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                Better Mortgage for my vacation home in Colorado.
              </div>
            </div>
            
            {/* Testimonial buttons */}
            <div className="flex space-x-4 mt-6">
              {Object.entries(testimonials).map(([key, testimonial]) => (
                <button
                  key={key}
                  onClick={() => setActiveTestimonial(key)}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    activeTestimonial === key
                      ? 'border-green-600 text-green-600 bg-green-50'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {testimonial.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Find out why we're better.
            </h2>
            <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full font-semibold transition-colors mb-6">
              See all our stories
            </button>
            <div className="flex items-center text-sm text-gray-600">
              <Star className="w-5 h-5 text-green-600 mr-1" />
              <span className="mr-2">Trustpilot</span>
              <span className="mr-2">Excellent</span>
              <span>4.4 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* AI Mortgage Lending */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              How AI Mortgage Lending is Transforming the Home Loan Process
            </h3>
            <ChevronRight className="w-6 h-6 text-gray-400 mb-6" />
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src="/api/placeholder/400/240" 
                alt="Woman using laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* One Day Mortgage */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">One Day Mortgage¹</h3>
            <p className="text-gray-600 mb-4">
              Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹
            </p>
            <ChevronRight className="w-6 h-6 text-gray-400 mb-6" />
            <div className="bg-green-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-800">1</div>
              <div className="text-xl font-semibold text-green-800">One Day Mortgage</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Better HELOC */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Better HELOC</h3>
                <p className="text-gray-600 mb-4">
                  Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³
                </p>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Couple using laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Insurance */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Insurance</h3>
            <ChevronRight className="w-6 h-6 text-gray-400 mb-6" />
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src="/api/placeholder/400/240" 
                alt="Family together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const FooterSection = () => (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-2xl font-bold text-green-800 mb-4">Better</div>
          <p className="text-gray-600 max-w-md">
            Better is a family of companies serving all your homeownership needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Mortgage</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Real Estate</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Cover</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Shop, bundle, and save on insurance coverage for home, auto, life, and more.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Inspect</span></h4>
            <p className="text-sm text-gray-600 mb-6">
              Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
            </p>
            
            <h4 className="font-bold text-green-800 mb-4">Better <span className="text-gray-400">Settlement Services</span></h4>
            <p className="text-sm text-gray-600">
              Get transparent rates when you shop for title insurance all in one convenient place.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-800">Home affordability calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Mortgage calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Free mortgage calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Mortgage calculator with taxes</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Mortgage calculator with PMI</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Rent vs buy calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">HELOC payment calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">HELOC vs cash-out refinance calculator</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Buy a home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Sell a home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Get home inspection</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-800">About Us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Careers</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Media</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Partner With Us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Learning center</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">FAQs</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Investor Relations</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>hello@better.com</p>
              <p>415-523-8837</p>
              <p>FAQ</p>
              <p>Glossary</p>
            </div>
            
            <h4 className="font-semibold text-gray-800 mb-4 mt-8">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-600 hover:text-gray-800">NMLS Consumer Access</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Privacy Policy</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Terms of Use</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Disclosures & Licensing</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Affiliated Business</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800">Browser Disclaimer</a>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              ¹ Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
            </p>
            <p>
              ² Better Mortgage's One Day HELOC™ promotion offers customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.
            </p>
            <p>
              ³ Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value; their loan amount is less than $400,000; all required documents are uploaded to their Better Mortgage online account within 24 hours of application; closing is scheduled for the earliest available date and time; and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower's home value.
            </p>
          </div>
          
          <div className="mt-8 text-xs text-gray-500">
            <p>© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164405 provides real estate services; Better Cover, LLC sells insurance products; and Better Inspect, LLC provides home inspection services; and Better Settlement Services, LLC provides title insurance services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <TestimonialSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default BetterMortgageWebsite;