import React, { useEffect } from 'react';
import {
  ArrowLeft, ExternalLink, Calendar, User, Building,
  TrendingUp, Target, Lightbulb, CheckCircle2, ArrowRight
} from 'lucide-react';
import Section from '../components/Section';
import { HandUnderline, HandSparkle, HandSquiggle } from '../components/Decorations';
import ScrollReveal from '../components/ScrollReveal';

interface CaseStudyDetailProps {
  onNavigate: (page: string) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const study = {
    category: "Industrial E-commerce / Logistics",
    title: "Scaling Revenue for a Heavy-Duty E-Commerce Brand",
    client: "Mytee Products",
    url: "https://www.myteeproducts.com/",
    role: "Digital Marketing Lead (Agency Side)",
    industry: "Industrial E-commerce / Logistics",
    timeline: "12 Months",
    tools: ["Magento", "Semrush", "Google Ads", "GA4", "BigQuery"],
    businessContext: "Mytee Products is a massive supplier of trucking equipment (tarps, cargo control).",
    challenge: "Had thousands of SKUs but suffered from 'Duplicate Content' issues because many products had similar descriptions. Relying heavily on paid ads was eating into margins. Needed Organic Search to drive sustainable revenue.",
    strategy: "Programmatic Content & Technical Cleanup. Canonicalization Strategy: With 1,000+ variations of 'Lumber Tarps' (different sizes/colors), Google was confused. Implemented strict canonical tags to point all variations to the main 'Category' pages to consolidate ranking power. Category Page Optimization: Treated Category Pages as Landing Pages. Added FAQ schema and 1,000+ words of helpful buying guides below the product grid to capture long-tail informational queries. CRO: Simplified the checkout flow for mobile users, as truck drivers often order from their phones on the road.",
    execution: "Automation: Used Python scripts to identify 'Thin Content' pages and automatically grouped them for consolidation. Schema: Implemented Product and AggregateRating schema to show 'Stars' and 'Price' in Google results, increasing CTR. Performance: Optimized Magento caching to reduce server response time (TTFB) by 40%.",
    results: "Revenue Growth: 192% increase in annual organic revenue. Traffic: 4 Million+ increase in organic impressions. Efficiency: 162% increase in organic conversion rate.",
    images: [
      "src/assets/ecommerce 1.jpeg",
      "src/assets/ecommerce 2.jpeg",
      "src/assets/ecommerce 3.jpeg",
      "src/assets/ecommerce 4.jpeg",
      "src/assets/ecommerce 5.jpeg",
    ],
    metrics: [
      { label: "Organic Revenue", value: "+192%", trend: "up" },
      { label: "Organic Impressions", value: "+4M+", trend: "up" },
      { label: "Conversion Rate", value: "+162%", trend: "up" }
    ]
  };

  const projectDetails = [
    {
      label: "Client",
      value: study.client,
      icon: Building,
      color: "blue"
    },
    {
      label: "Role",
      value: study.role,
      icon: User,
      color: "emerald"
    },
    {
      label: "Timeline",
      value: study.timeline,
      icon: Calendar,
      color: "purple"
    },
    {
      label: "Industry",
      value: study.industry,
      icon: Target,
      color: "orange"
    }
  ];

  const approach = [
    {
      title: "Business Context & Challenge",
      description: study.businessContext,
      challenge: study.challenge,
      icon: Lightbulb,
      color: "blue"
    },
    {
      title: "Strategy & Decision Logic",
      description: study.strategy,
      icon: Target,
      color: "emerald"
    },
    {
      title: "Execution Breakdown",
      description: study.execution,
      icon: CheckCircle2,
      color: "purple"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 -z-10 clip-path-slant"></div>
        <HandSparkle className="hidden lg:block absolute top-[25%] left-[10%] w-10 h-10 text-yellow-400 opacity-60" delay="0.5s" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const element = document.getElementById('work');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="text-center">
            <ScrollReveal direction="up">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-sm font-bold text-blue-600 uppercase tracking-wide mb-6">
                {study.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight relative">
                {study.title}
                <HandUnderline className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 text-blue-400 opacity-80" delay="0.8s" />
              </h1>

              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
                A comprehensive e-commerce SEO strategy that transformed organic search into a major revenue driver for an industrial equipment supplier.
              </p>

              <a href={study.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors group">
                Visit Website <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <Section className="relative">
        <HandSquiggle className="hidden lg:block absolute top-0 -left-12 h-64 w-16 text-slate-100" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectDetails.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-center h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${detail.color}-50 group-hover:bg-${detail.color}-100 transition-colors mx-auto`}>
                    <Icon className={`w-6 h-6 text-${detail.color}-600`} />
                  </div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">{detail.label}</div>
                  <div className="text-lg font-bold text-slate-900">{detail.value}</div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      {/* Approach Section */}
      <Section className="bg-slate-50">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Project Approach</h2>
            <p className="text-xl text-slate-500">How we scaled organic revenue through technical and content optimization</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {approach.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-${item.color}-50 group-hover:bg-${item.color}-100 transition-colors`}>
                      <Icon className={`w-7 h-7 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.challenge && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium mb-1">The Challenge:</p>
                      <p className="text-red-700">{item.challenge}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      {/* Tools Section */}
      <Section className="relative">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tools & Technologies</h2>
            <p className="text-xl text-slate-500">The technical toolkit that powered this project</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {study.tools.map((tool, idx) => (
            <ScrollReveal key={idx} direction="scale" delay={idx * 50}>
              <span className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors">
                {tool}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-slate-50">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Measurable Results</h2>
            <p className="text-xl text-slate-500">The impact of our programmatic SEO and technical optimization strategy</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg text-center">
              <p className="text-slate-600 leading-relaxed text-lg">
                {study.results}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {study.metrics.map((metric, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150 + 400}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-center h-full">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-100 transition-colors">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{metric.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Project Gallery */}
      <Section className="relative">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-slate-500">Visual insights into the project execution</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {study.images.map((img, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <img src={img} alt={`Project image ${idx + 1}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how data-driven SEO strategies can transform your organic growth and business outcomes.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/50"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default CaseStudyDetail;