import React, { useEffect } from 'react';
import {
  ArrowRight, ExternalLink, Code, Search, FileText, MapPin,
  ShoppingBag, TrendingUp, BarChart2, Calendar, Phone, CheckCircle2,
  User, Award, Target, Lightbulb
} from 'lucide-react';
import Section from '../components/Section';
import { HandUnderline, HandSparkle, HandSquiggle } from '../components/Decorations';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const SKILLS = [
  {
    title: "Technical SEO",
    description: "Crawlability, indexation, Core Web Vitals, site architecture",
    icon: Code,
    color: "blue"
  },
  {
    title: "On-Page SEO",
    description: "Intent-led optimization, internal linking, content structure",
    icon: Search,
    color: "emerald"
  },
  {
    title: "Content Strategy",
    description: "Pillar-cluster models, decision-stage content, copy that converts",
    icon: FileText,
    color: "purple"
  },
  {
    title: "Local SEO",
    description: "Location-based visibility, local intent optimization",
    icon: MapPin,
    color: "red"
  },
  {
    title: "eCommerce SEO",
    description: "Category-led SEO, duplication control, scalability",
    icon: ShoppingBag,
    color: "indigo"
  },
  {
    title: "CRO",
    description: "Improving engagement and conversions through UX and intent alignment",
    icon: TrendingUp,
    color: "cyan"
  },
  {
    title: "Analytics & Reporting",
    description: "GA4, Search Console, Looker Studio insights",
    icon: BarChart2,
    color: "orange"
  },
  {
    title: "SEO Audits",
    description: "Comprehensive technical and content analysis for growth opportunities",
    icon: CheckCircle2,
    color: "slate"
  }
];

const APPROACH = [
  {
    step: "01",
    title: "Audit & Discovery",
    description: "I begin with a comprehensive technical and content audit to uncover crawl issues, performance gaps, and high-impact opportunities.",
    icon: Target
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description: "Using real data, I build a 6–12 month SEO roadmap focused on high-intent keywords, content clustering, and scalable technical improvements.",
    icon: Lightbulb
  },
  {
    step: "03",
    title: "Execution",
    description: "Hands-on implementation of on-page SEO, content creation, internal linking, schema deployment, and performance optimization.",
    icon: Code
  },
  {
    step: "04",
    title: "Measure & Scale",
    description: "Continuous monitoring via GA4 and Google Search Console to refine strategy, scale what works, and maximize ROI.",
    icon: TrendingUp
  }
];

const TOOLS = [
  {
    category: "Analytics & Reporting",
    tools: "GA4 · Google Search Console · Looker Studio",
    icon: BarChart2,
    color: "blue"
  },
  {
    category: "SEO & Research",
    tools: "Ahrefs · SEMrush · Screaming Frog · SurferSEO",
    icon: Search,
    color: "emerald"
  },
  {
    category: "Platforms",
    tools: "WordPress · Shopify",
    icon: Code,
    color: "purple"
  }
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
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
            About Me
            <br/>
            <span className="relative inline-block text-blue-600">
              SEO Analyst & Strategist
              <HandUnderline className="absolute -bottom-2 left-0 w-full h-4 text-blue-400 opacity-80" delay="0.8s" />
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            I'm Shravan Chauhan, an SEO Analyst & Digital Marketing Strategist with 4+ years of hands-on experience helping businesses grow through technical precision, strategic content planning, and continuous optimization.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <Section className="relative">
        <HandSquiggle className="hidden lg:block absolute top-0 -left-12 h-64 w-16 text-slate-100" />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-slate-600 leading-relaxed">
            I specialize in decoding complex search algorithms and translating them into measurable business outcomes. From local service brands to large eCommerce platforms, I don't chase traffic for the sake of numbers—I focus on sustainable growth that impacts revenue and lead quality.
          </p>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What I Do Best</h2>
          <p className="text-xl text-slate-500">Core competencies and expertise areas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${skill.color}-50 group-hover:bg-${skill.color}-100 transition-colors`}>
                  <Icon className={`w-6 h-6 text-${skill.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/shravan-chauhan-3786a515a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
            Connect on LinkedIn <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* Approach Section */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">My Step-by-Step Approach</h2>
          <p className="text-xl text-slate-500">How I deliver results for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {APPROACH.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Tools Section */}
      <Section className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tools I Use Daily</h2>
          <p className="text-xl text-slate-500">My technical toolkit for delivering results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-${tool.color}-50 group-hover:bg-${tool.color}-100 transition-colors mx-auto`}>
                  <Icon className={`w-8 h-8 text-${tool.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{tool.category}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {tool.tools}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're looking for data-backed SEO that drives real business growth, let's connect.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/50"
          >
            Contact Me
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;