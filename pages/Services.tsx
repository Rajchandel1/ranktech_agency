import React, { useEffect } from 'react';
import { 
  Code, Smartphone, Search, FileText, MapPin, ShoppingBag, 
  TrendingUp, BarChart2, Calendar, Phone, CheckCircle2 
} from 'lucide-react';
import Section from '../components/Section';
import { HandUnderline, HandSparkle, HandSquiggle } from '../components/Decorations';

const SERVICES = [
  {
    title: "Web Development",
    description: "Custom, high-performance websites built with modern technologies like React, Next.js, and Tailwind CSS. We focus on speed, accessibility, and pixel-perfect design.",
    icon: Code,
    color: "blue"
  },
  {
    title: "App Development",
    description: "Scalable mobile applications for iOS and Android that deliver seamless user experiences. From MVP to full-scale enterprise solutions.",
    icon: Smartphone,
    color: "purple"
  },
  {
    title: "Technical SEO Audit",
    description: "Comprehensive analysis of crawlability, indexing, Core Web Vitals, and site architecture to uncover hidden growth blockers.",
    icon: Code,
    color: "emerald"
  },
  {
    title: "On-Page SEO Optimization",
    description: "Optimization of title tags, headings, internal linking, and content structure to maximize relevance for target keywords.",
    icon: Search,
    color: "amber"
  },
  {
    title: "Content Strategy & Copywriting",
    description: "Data-backed content roadmaps, pillar-cluster modeling, and high-quality copywriting that ranks and converts.",
    icon: FileText,
    color: "rose"
  },
  {
    title: "Local SEO & GMB",
    description: "Dominating local search results with Google Business Profile optimization, citation management, and local landing pages.",
    icon: MapPin,
    color: "red"
  },
  {
    title: "eCommerce SEO",
    description: "Specialized strategies for Shopify, Magento, and WooCommerce focusing on faceted navigation, product schema, and category optimization.",
    icon: ShoppingBag,
    color: "indigo"
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "User behavior analysis and A/B testing to turn more organic visitors into paying customers or leads.",
    icon: TrendingUp,
    color: "cyan"
  },
  {
    title: "Analytics & Reporting",
    description: "Custom GA4 setup, Looker Studio dashboards, and goal tracking to visualize ROI and campaign performance.",
    icon: BarChart2,
    color: "orange"
  },
  {
    title: "Monthly SEO Management",
    description: "End-to-end execution of SEO strategy including link building, content updates, and continuous technical monitoring.",
    icon: Calendar,
    color: "slate"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 -z-10 clip-path-slant"></div>
        <HandSparkle className="hidden lg:block absolute top-[25%] left-[10%] w-10 h-10 text-yellow-400 opacity-60" delay="0.5s" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
             Web Development, App Development <br/>
             <span className="relative inline-block text-blue-600">
               SEO & Digital Strategy
               <HandUnderline className="absolute -bottom-2 left-0 w-full h-4 text-blue-400 opacity-80" delay="0.8s" />
             </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             I provide end-to-end digital solutions tailored to your business goals, from technical foundations to content-led growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="relative">
        <HandSquiggle className="hidden lg:block absolute top-0 -left-12 h-64 w-16 text-slate-100" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SERVICES.map((service, idx) => {
             const Icon = service.icon;
             return (
               <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${service.color}-50 group-hover:bg-${service.color}-100 transition-colors`}>
                    <Icon className={`w-7 h-7 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
               </div>
             )
           })}
        </div>
      </Section>

      {/* Discovery Call CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Not sure where to start?</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
               Every website is unique. Let's schedule a 15-minute discovery call to identify your biggest growth opportunities.
            </p>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/50">
               Book a Free Discovery Call
               <Phone className="ml-2 w-5 h-5" />
            </a>
         </div>
      </section>
    </>
  );
};

export default Services;