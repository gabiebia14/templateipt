
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35b932afcf6d?q=80&w=2070&auto=format&fit=crop" 
              alt="Heavy machinery in operation" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-machinery-yellow text-machinery-black p-8 rounded-lg hidden md:block">
            <div className="text-5xl font-bold">30+</div>
            <div className="text-xl font-medium">Years of Experience</div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          <div className="inline-block px-4 py-2 bg-machinery-yellow/20 rounded-full text-machinery-yellow font-bold mb-4">
            ABOUT OUR COMPANY
          </div>
          <h2 className="mb-6">We Provide Quality <span className="text-machinery-yellow">Heavy Equipment</span> Solutions</h2>
          <p className="text-machinery-gray mb-6">
            With over 30 years of industry experience, ASPRO Machinery has established itself as 
            a leading provider of heavy machinery and equipment solutions for construction, mining, 
            and industrial applications worldwide.
          </p>
          <p className="text-machinery-gray mb-8">
            We pride ourselves on delivering high-quality equipment, exceptional customer service, 
            and innovative solutions tailored to meet the specific needs of our clients.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Quality Equipment</h4>
                <p className="text-machinery-gray">High-performance machinery for demanding projects.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Expert Team</h4>
                <p className="text-machinery-gray">Skilled professionals with years of industry experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">24/7 Support</h4>
                <p className="text-machinery-gray">Round-the-clock assistance for all your needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-machinery-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Competitive Pricing</h4>
                <p className="text-machinery-gray">Affordable solutions without compromising quality.</p>
              </div>
            </div>
          </div>

          <button className="btn-primary flex items-center gap-2 rounded">
            Learn More About Us <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
