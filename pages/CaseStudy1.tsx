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
    category: "Sports / Events / Government",
    title: "Filling the Arena – Dynamic Event SEO Strategy",
    client: "Red Baron Arena & Expo",
    url: "https://redbaronarena.com/",
    role: "SEO Strategist",
    industry: "Sports / Events / Government",
    timeline: "6 Months",
    tools: ["GA4", "Google Business Profile (GBP)", "Schema Validator", "Looker Studio"],
    businessContext: "Red Baron Arena is a premier facility in Marshall, MN, but its digital presence was static. The venue has two audiences: Families (looking for open skate/hockey) and Event Planners (booking the expo hall). The website treated them the same, causing confusion and high bounce rates.",
    challenge: "Google couldn't 'read' their event calendar, meaning users searching 'hockey games Marshall MN' saw generic homepages, not schedule dates.",
    strategy: "Focused on Entity-Based SEO and Calendar Schema. Structured Data First: Search engines struggle to crawl JS-based calendars. Implemented Event schema (schema.org/Event) for every individual game and open skate session. This forced Google to display dates/times directly in the SERP (Rich Snippets). Segmented User Journeys: Split the site architecture. Created dedicated landing pages for 'Expo Rental' (B2B intent) vs. 'Ice Rink' (Local intent) to stop keyword cannibalization. Local Dominance: Treat the Google Business Profile as a 'second homepage' by syncing event posts weekly.",
    execution: "Technical: Configured dynamic XML sitemaps to auto-ping Google whenever the facility calendar was updated. Content: Rewrote the 'Facility Booking' page to address specific planner pain points (capacity, AV specs, catering), moving away from generic copy. UX: Added a 'Today at the Arena' sticky bar on mobile, reducing clicks-to-info for parents.",
    results: "Rich Results: Achieved 100% coverage for Event Snippets in Google Search. Traffic: +45% increase in organic sessions to schedule pages. Engagement: 'Get Directions' clicks on Google Maps rose by 28%.",
    images: [
      "src/assets/redbaron 1.jpeg",
      "src/assets/redbaron 2.jpeg",
      "src/assets/redbaron 3.jpeg",
      "src/assets/redbaron 4.jpeg",
      "src/assets/redbaron 5.jpeg"
    ],
    metrics: [
      { label: "Organic Sessions", value: "+45%", trend: "up" },
      { label: "Get Directions Clicks", value: "+28%", trend: "up" },
      { label: "Event Snippets", value: "100%", trend: "up" }
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
                A comprehensive SEO strategy that transformed how a local venue appears in search results and connects with its dual audience.
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
            <p className="text-xl text-slate-500">How we tackled the challenge and delivered results</p>
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
            <p className="text-xl text-slate-500">The impact of our SEO strategy</p>
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