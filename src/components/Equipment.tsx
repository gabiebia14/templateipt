
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Sample equipment data
const equipmentData = [
  {
    id: 1,
    name: "Excavator XC-340",
    category: "excavators",
    image: "https://images.unsplash.com/photo-1603584915335-fb3104d33eeb?q=80&w=2069&auto=format&fit=crop",
    description: "High-performance excavator for heavy-duty construction projects."
  },
  {
    id: 2,
    name: "Bulldozer BD-1000",
    category: "bulldozers",
    image: "https://images.unsplash.com/photo-1573733185815-c1f81f3dfcf8?q=80&w=2070&auto=format&fit=crop",
    description: "Powerful bulldozer designed for earthmoving operations."
  },
  {
    id: 3,
    name: "Wheel Loader WL-500",
    category: "loaders",
    image: "https://images.unsplash.com/photo-1567527259232-3954b27aa2c4?q=80&w=2070&auto=format&fit=crop",
    description: "Efficient wheel loader for material handling and loading."
  },
  {
    id: 4,
    name: "Crane CR-2000",
    category: "cranes",
    image: "https://images.unsplash.com/photo-1481081224709-48e2a1a111d1?q=80&w=2069&auto=format&fit=crop",
    description: "High-capacity crane for lifting heavy construction materials."
  },
  {
    id: 5,
    name: "Forklift FL-200",
    category: "forklifts",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1932&auto=format&fit=crop",
    description: "Versatile forklift for warehouse and construction operations."
  },
  {
    id: 6,
    name: "Dump Truck DT-800",
    category: "trucks",
    image: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?q=80&w=2070&auto=format&fit=crop",
    description: "Heavy-duty dump truck for transporting construction materials."
  }
];

// Categories
const categories = [
  { id: "all", name: "All Equipment" },
  { id: "excavators", name: "Excavators" },
  { id: "bulldozers", name: "Bulldozers" },
  { id: "loaders", name: "Loaders" },
  { id: "cranes", name: "Cranes" },
  { id: "forklifts", name: "Forklifts" },
  { id: "trucks", name: "Trucks" },
];

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEquipment = activeCategory === "all" 
    ? equipmentData 
    : equipmentData.filter(item => item.category === activeCategory);

  return (
    <section className="section-padding bg-machinery-gray-light" id="equipment">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our <span className="text-machinery-yellow">Equipment</span></h2>
          <p className="text-machinery-gray max-w-3xl mx-auto">
            Explore our wide range of high-quality heavy machinery and equipment designed 
            for construction, mining, and industrial applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-machinery-yellow text-machinery-black"
                  : "bg-white text-machinery-gray hover:bg-machinery-yellow/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-machinery-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-primary rounded">View Details</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-machinery-gray mb-4">{item.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-machinery-black font-bold hover:text-machinery-yellow transition-colors duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary rounded-full">
            View All Equipment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
