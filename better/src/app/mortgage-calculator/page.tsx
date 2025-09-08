"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.500);
  const [zipCode, setZipCode] = useState('250609');
  const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [utilities, setUtilities] = useState(0);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalMonthlyPayment = monthlyPayment + propertyTaxes + homeInsurance + hoaFees + utilities;

  // Update down payment when percentage changes
  useEffect(() => {
    const newDownPayment = (homePrice * downPaymentPercent) / 100;
    setDownPayment(newDownPayment);
  }, [homePrice, downPaymentPercent]);

  // Update percentage when down payment changes
  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const faqs = [
    { id: 1, question: "How do I calculate my mortgage payment?", answer: "Your mortgage payment is calculated using your loan amount, interest rate, and loan term." },
    { id: 2, question: "Are mortgages compounded monthly?", answer: "Yes, most mortgages compound monthly, meaning interest is calculated and added to your balance each month." },
    { id: 3, question: "What do closing costs typically cost?", answer: "Closing costs typically range from 2% to 5% of your home's purchase price." },
    { id: 4, question: "What is the 2% rule for mortgage payoff?", answer: "The 2% rule suggests that your monthly housing costs shouldn't exceed 2% of your home's value." }
  ];

  const testimonials = [
    {
      date: "05/12/2025",
      title: "Better offered the best rate",
      content: "Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better."
    }
  ];

  const calculatorTools = [
    {
      title: "Affordability calculator",
      description: "See how much home you can comfortably afford before you start shopping.",
      link: "Calculate my budget"
    },
    {
      title: "Rent vs. buy calculator", 
      description: "Wondering if it's time to buy? Compare the real costs side by side.",
      link: "Compare my costs"
    },
    {
      title: "HELOC payment calculator",
      description: "Know what getting cash from your home could cost before you decide.",
      link: "Estimate my payments"
    }
  ];

  const rateTools = [
    {
      title: "Mortgage rates",
      description: "Stay on top of rates so you can lock in the right one at the right time.",
      link: "See today's rates"
    },
    {
      title: "HELOC rates",
      description: "Compare the latest HELOC rates and understand your options.",
      link: "See today's rates" 
    },
    {
      title: "Refinance rates",
      description: "Check current refi rates to see if lowering your payment is within reach.",
      link: "See today's rates"
    }
  ];

  const articles = [
    {
      title: "How much equity do you need to refinance? Home owner guide",
      description: "How much equity do you need to refinance your mortgage? Understand equity requirements by loan type and...",
      link: "Read now"
    },
    {
      title: "What is home appreciation in real estate?",
      description: "Learn what home appreciation is, how it differs from home depreciation, and how it benefits homeowners. Includin...",
      link: "Read now"
    },
    {
      title: "Second mortgage vs. refinance: Your best option",
      description: "Weighing a second mortgage versus refinance? Learn the main differences, pros and cons, and how to choose the...",
      link: "Read now"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Estimate your monthly mortgage payments
          </h1>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* Home Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Home price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Down payment</label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="relative w-20">
                      <input
                        type="number"
                        value={Math.round(downPaymentPercent)}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        className="w-full px-3 py-3 border border-l-0 border-gray-300 rounded-r-md focus:ring-green-500 focus:border-green-500 text-center"
                      />
                      <span className="absolute right-3 top-3 text-gray-500">%</span>
                    </div>
                  </div>
                </div>

                {/* Length of Loan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length of loan</label>
                  <div className="relative">
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                    >
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                      <option value={30}>30 years</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest rate</label>
                  <div className="flex">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step="0.001"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500"
                    />
                    <div className="flex items-center px-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                      <span className="text-gray-500">%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ZIP Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min={0}
                  max={homePrice}
                  value={downPayment}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Payment Display */}
            <div className="lg:col-span-1">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-2">Monthly payment</div>
                <div className="text-4xl font-bold text-gray-900">
                  ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
                </div>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200">
                  Get pre-approved
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 lg:mb-0">Monthly payment breakdown</h2>
            <div className="text-2xl font-bold text-gray-900">
              ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="bg-green-600 h-12 rounded-full flex items-center justify-center text-white font-semibold">
              100%
            </div>
          </div>

          {/* Breakdown Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Principal & interest</span>
              </div>
              <span className="font-semibold">${Math.round(monthlyPayment)}</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Property taxes</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="number"
                  value={propertyTaxes}
                  onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Homeowners insurance</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">HOA fees</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Utilities</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">$0/mo</span>
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
              Copy estimate link
            </button>
          </div>
        </div>

        {/* Pre-approval Steps */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Simple steps to get pre-approved
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share a few details</h3>
              <p className="text-gray-600 text-sm">
                Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won't affect your credit score.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">See your homebuying budget</h3>
              <p className="text-gray-600 text-sm">
                In minutes, we'll show you exactly how much you can get pre-approved for—so you know your price range before you shop.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get your pre-approval letter</h3>
              <p className="text-gray-600 text-sm">
                Download your letter instantly and start touring homes with confidence (and a stronger offer in hand).
              </p>
            </div>
          </div>
        </div>

        {/* Homebuying Power CTA */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Check your homebuying power
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-200 mb-4">
            See what I qualify for
          </button>
          <p className="text-gray-600 text-sm">
            ...in as little as 3 minutes —<br />
            no credit impact
          </p>
        </div>

        {/* Calculator Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Mortgage Calculator with PMI & Taxes
          </h2>
          <p className="text-center text-gray-600 mb-6">
            A mortgage calculator for home loans can show your true monthly housing costs before you commit to a home loan.
          </p>
          
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              Home shoppers balance a lot of numbers: home prices, loan sizes, down payments, interest rates, property tax rates, mortgage insurance premiums, and so on.
            </p>
            <p>
              A mortgage payment calculator shows how these variables come together to shape a home's monthly payment.
            </p>
            <p>
              These tools are invaluable for comparing loan scenarios — and Better makes it easy by doing the heavy lifting for you. With access to an extensive network of investors, Better essentially "shops the market" on your behalf to find competitive rates, saving you the time and stress of lender-hunting. In fact, The Wall Street Journal named Better the Best Lender for Affordability in 2021.
            </p>
          </div>

          {/* Collapsible Sections */}
          <div className="mt-8 space-y-4">
            {[
              "How to find your payments with a mortgage calculator for home loans",
              "What you can do with this home payment calculator",
              "What does a mortgage payment include?",
              "Mortgage payment formula",
              "How to lower monthly mortgage payments",
              "Types of mortgage loans"
            ].map((title, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-4 px-0 text-left font-semibold text-gray-900 flex justify-between items-center hover:text-green-600"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  {title}
                  <ChevronRight className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-green-100 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1400+ customers</div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-600 mr-2">provide us 5 stars in</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">Trustpilot</span>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200">
                Tell us about your experience
              </button>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-2">05/12/2025</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Better offered the best rate
              </h3>
              <p className="text-gray-600 mb-4">
                Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                See in Trustpilot →
              </button>
              
              <div className="flex items-center mt-6 space-x-4">
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm text-gray-500">1/5</span>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Get Custom Quote CTA */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get your custom quote
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-200 mb-4">
            Get a personalized offer
          </button>
          <p className="text-gray-600 text-sm">
            ...in as little as 3 minutes —<br />
            no credit impact
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Calculator FAQs</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  className="w-full py-4 px-0 text-left font-semibold text-gray-900 flex justify-between items-center hover:text-green-600"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <ChevronRight className={`h-5 w-5 transition-transform ${expandedFaq === faq.id ? 'rotate-90' : ''}`} />
                </button>
                {expandedFaq === faq.id && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* More Resources */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More resources: Rates & Calculators
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {calculatorTools.map((tool, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  {tool.link} →
                </button>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rateTools.map((tool, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  {tool.link} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-100 rounded-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Related articles</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1/3</span>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  {article.link} →
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition duration-200">
              Visit our learning center
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Check your homebuying power
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-200 mb-4">
            See what I qualify for
          </button>
          <p className="text-gray-600 text-sm">
            ...in as little as 3 minutes —<br />
            no credit impact
          </p>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #059669;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default MortgageCalculator;