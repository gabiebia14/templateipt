
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In <span className="text-machinery-yellow">Touch</span></h2>
          <p className="text-machinery-gray max-w-2xl mx-auto">
            Have a question or need assistance? Contact our team and we'll be happy to help you with your machinery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-machinery-gray-light p-8 rounded-lg">
            <h3 className="mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-machinery-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-machinery-black">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-machinery-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-machinery-black">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-machinery-yellow/50"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 rounded w-full"
              >
                Send Message <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Contact Information</h3>
            <p className="text-machinery-gray mb-8">
              Our team is ready to assist you with any questions about our equipment, 
              services, or how we can help with your next project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-machinery-gray">
                    1234 Industrial Way, Construction City, CC 98765
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Phone className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-machinery-gray">
                    +1 800 123 4567<br />
                    +1 800 987 6543
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Mail className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-machinery-gray">
                    info@aspromachinery.com<br />
                    support@aspromachinery.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-machinery-yellow p-3 rounded-full">
                  <Clock className="h-6 w-6 text-machinery-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Business Hours</h4>
                  <p className="text-machinery-gray">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
