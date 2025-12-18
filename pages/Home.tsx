import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Search, BarChart2, Zap, 
  Layers, Globe, TrendingUp, Users, Cpu, Code,
  CheckCircle2, Mail, MapPin, ArrowUpRight, Activity,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Section from '../components/Section';
import { WorkChart } from '../components/Charts';
import { GoogleLogo, MetaLogo, InstagramLogo, LinkedInLogo } from '../components/BrandIcons';
import { HandUnderline, HandArrowCurved, HandCircle, HandSparkle, HandSquiggle, HandArrowLoop } from '../components/Decorations';
import type { CaseStudy, WorkHistory, Service, BlogPost } from '../types';

// --- DATA CONSTANTS ---

const STATS = [
  { label: "Years Experience", value: "4+" },
  { label: "Conversion Uplift", value: "+80%" },
  { label: "Organic Traffic Growth", value: "+70%" },
  { label: "SEO Audits Delivered", value: "1000+" },
];

const METHODOLOGY: Service[] = [
  {
    title: "Technical SEO Audits",
    description: "A deep-dive analysis of crawlability, indexation, Core Web Vitals, and site architecture to identify and remove hidden performance bottlenecks that limit organic growth.",
    icon: Code
  },
  {
    title: "On-Page SEO Optimization",
    description: "Strategic optimization of title tags, headings, internal linking, and content structure to improve keyword relevance, search visibility, and user engagement.",
    icon: Search
  },
  {
    title: "Content Strategy & Copywriting",
    description: "Data-driven content roadmaps using pillar-cluster models, search intent mapping, and high-quality copy that ranks, engages, and converts.",
    icon: Layers
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "Sports / Events / Government",
    title: "Filling the Arena – Dynamic Event SEO Strategy",
    description: "Red Baron Arena's digital presence was static, confusing two audiences. Implemented Event schema for calendar visibility, segmented user journeys, and local dominance.",
    metrics: [
      { label: "Organic Sessions", value: "+45%", trend: "up" },
      { label: "Get Directions Clicks", value: "+28%", trend: "up" },
      { label: "Event Snippets", value: "100%", trend: "up" }
    ],
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
      "https://picsum.photos/800/600?random=10",
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/800/600?random=12",
      "https://picsum.photos/800/600?random=13"
    ]
  },
  {
    category: "IT Services / Software Development",
    title: "From Generic Traffic to High-Value Tech Leads",
    description: "BluePixel is a custom software shop in Ahmedabad. Pivoted from volume SEO to solution-based SEO, targeting niche technical pain points.",
    metrics: [
      { label: "Form Submissions", value: "+65%", trend: "up" },
      { label: "Rankings", value: "Top 3", trend: "up" },
      { label: "Time on Page", value: "1:15 → 2:45", trend: "up" }
    ],
    client: "BluePixel Technologies",
    url: "https://www.bluepixeltech.com/",
    role: "Senior SEO Executive",
    industry: "IT Services / Software Development",
    timeline: "8 Months",
    tools: ["Ahrefs", "Screaming Frog", "LinkedIn Insights", "ChatGPT (Content Strategy)"],
    businessContext: "BluePixel is a custom software shop in Ahmedabad. The 'Web Development' keyword market is saturated.",
    challenge: "Ranking for 'Software Company' brought in spam leads and students, not clients. They had great case studies but hidden in silo, disconnected from service pages.",
    strategy: "Pivoted from 'Volume SEO' to 'Solution-Based SEO.' Verticalization: Instead of fighting for 'App Developer,' targeted niche technical pain points: 'BLE Beacon App Development' and 'IoT Firmware Integration.' Proof of Competence: Restructured Service Pages to follow 'Problem -> Solution -> Proof' framework. Embedded relevant case study metrics directly into service descriptions to boost E-E-A-T. Technical Audit: Site had heavy JS bloat. Implemented lazy loading for portfolio images to fix LCP issues affecting mobile rankings.",
    execution: "Content: Published 'Comparison Guides' (e.g., Native vs. Cross-Platform for IoT) to capture decision-stage traffic. Internal Linking: Built 'Hub & Spoke' model where 'Mobile App' parent page linked down to specific 'BLE/IoT' child pages, passing authority. Conversion: Swapped generic 'Contact Us' forms for 'Request a Technical Consultation' forms, increasing perceived value.",
    results: "Lead Quality: +65% increase in form submissions for 'IoT/BLE' services. Rankings: Hit Top 3 for 'Bluetooth App Development Company' (High commercial intent). User Behavior: Average Time on Page increased from 1:15 to 2:45 due to better content structure.",
    images: [
      "https://picsum.photos/800/600?random=20",
      "https://picsum.photos/800/600?random=21",
      "https://picsum.photos/800/600?random=22",
      "https://picsum.photos/800/600?random=23"
    ]
  },
  {
    category: "Industrial E-commerce / Logistics",
    title: "Scaling Revenue for a Heavy-Duty E-Commerce Brand",
    description: "Mytee Products supplier of trucking equipment. Addressed duplicate content issues, implemented canonicalization, optimized category pages.",
    metrics: [
      { label: "Organic Revenue", value: "+192%", trend: "up" },
      { label: "Organic Impressions", value: "+4M+", trend: "up" },
      { label: "Conversion Rate", value: "+162%", trend: "up" }
    ],
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
      "https://picsum.photos/800/600?random=30",
      "https://picsum.photos/800/600?random=31",
      "https://picsum.photos/800/600?random=32",
      "https://picsum.photos/800/600?random=33"
    ]
  }
];

const STACK = [
  "Google Search Console", "GA4", "Google Tag Manager", "Screaming Frog", "Semrush", "Ahref", "Spyfu", "Hotsuite", "Bright Local", "N8N", "SEO Automation Workflow", "Google Ads & Meta Ads", "Programmatic Ads", "Hot Jar", "Microsoft Clearity", "CRO"
];

const WORK_HISTORY: WorkHistory[] = [
  {
    company: "Olbuz Pvt Ltd",
    role: "SEO Specialist",
    description: "Led a comprehensive technical SEO overhaul focusing on Core Web Vitals and crawl efficiency for a high-traffic domain.",
    metrics: [
      { label: "Traffic Growth", value: "+25%" },
      { label: "Page Speed", value: "+22%" },
      { label: "Issues Fixed", value: "100%" }
    ],
    tags: ["Technical SEO", "Core Web Vitals", "Looker Studio", "Schema Markup"],
    chartType: 'bar',
    chartKeys: ['value'],
    chartData: [
      { name: 'Q1', value: 2000 },
      { name: 'Q2', value: 3500 },
      { name: 'Q3', value: 5800 },
      { name: 'Q4', value: 7500 },
    ]
  },
  {
    company: "E2M Solutions",
    role: "SEO Analyst",
    description: "Executed a strategic content gap analysis and technical cleanup, resulting in significant engagement uplifts.",
    metrics: [
      { label: "Organic Sessions", value: "+25%" },
      { label: "Tech Issues", value: "120+" },
      { label: "Engagement", value: "+18%" }
    ],
    tags: ["Semrush", "Screaming Frog", "Content Strategy", "GSC"],
    chartType: 'area',
    chartKeys: ['value'],
    chartData: [
      { name: 'Jan', value: 800 },
      { name: 'Feb', value: 1200 },
      { name: 'Mar', value: 1800 },
      { name: 'Apr', value: 1600 },
      { name: 'May', value: 2400 },
    ]
  },
  {
    company: "Blupixel Technologies",
    role: "Digital Marketing Executive",
    description: "Integrated SEO with intent-based PPC strategies to maximize conversion rates for key service pages.",
    metrics: [
      { label: "Conversions", value: "+35%" },
      { label: "CTR", value: "+12%" },
      { label: "ROAS", value: "3.5x" }
    ],
    tags: ["PPC", "CRO", "Intent Mapping", "Google Ads"],
    chartType: 'bar',
    chartKeys: ['value'],
    chartData: [
      { name: 'Month 1', value: 15 },
      { name: 'Month 2', value: 22 },
      { name: 'Month 3', value: 28 },
      { name: 'Month 4', value: 35 },
    ]
  }
];

const BLOGS: BlogPost[] = [
  {
    title: "Agentic AI Workflows for SEO",
    excerpt: "Automating content briefs without losing the human touch using n8n and LLMs.",
    date: "Oct 12, 2023",
    category: "Automation",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Recovering from HCU Update",
    excerpt: "Recovered 60% of lost traffic by focusing on E-E-A-T and entity mapping.",
    date: "Sep 28, 2023",
    category: "Case Study",
    image: "https://picsum.photos/600/400?random=2"
  }
];

const BRANDS = [
  { name: "GlobalTech", icon: Globe },
  { name: "CoreOS", icon: Layers },
  { name: "Frequencii", icon: Zap },
  { name: "Kintsugi", icon: Users },
  { name: "Lumina", icon: Activity },
  { name: "Velos", icon: Cpu }
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "BluePixel Technologies — IT Services & Software Development",
      engagement: "B2B SEO, Lead Quality Optimization, Technical SEO",
      quote: "Shravan helped us shift our SEO focus from generic traffic to high-intent, solution-driven searches that aligned with our core services. His structured approach to service page optimization, internal linking, and technical SEO resulted in noticeably better lead quality. He understands B2B SEO from both a technical and business perspective.",
      author: "Delivery Manager, BluePixel Technologies"
    },
    {
      company: "DIT Interactive Pvt. Ltd. — Digital Marketing Agency",
      engagement: "SEO Execution & Website Optimization",
      quote: "Shravan consistently delivered strong SEO fundamentals across on-page optimization and site structure improvements. He worked closely with design and development teams to ensure SEO was properly implemented during website updates. His execution was reliable, detail-oriented, and aligned with long-term organic growth goals.",
      author: "SEO Manager, DIT Interactive Pvt. Ltd."
    },
    {
      company: "Startup Founder — B2B SaaS (India)",
      engagement: "SEO Strategy & Analytics Setup",
      quote: "What stood out about Shravan was his clarity. He didn't promise shortcuts — instead, he explained what would drive long-term growth. His SEO strategy and analytics setup gave us visibility into what was actually working, which helped us make better business decisions.",
      author: "Founder, B2B SaaS Startup"
    },
    {
      company: "Small Business Owner — Local Services",
      engagement: "Local SEO & Lead Generation",
      quote: "Before working with Shravan, we were getting traffic but very few real inquiries. He fixed our local SEO setup, improved page structure, and focused on intent-based keywords. The quality of leads improved noticeably within a few months.",
      author: "Owner, Local Service Business"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-slate-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-slate-600" />
      </button>

      {/* Testimonials Container */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 min-h-[400px] flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="font-bold text-slate-900 text-lg md:text-xl">{testimonial.company}</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-4">{testimonial.engagement}</div>
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-slate-500 font-medium text-sm md:text-base">— {testimonial.author}</cite>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-slate-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Carousel State
  const [brandIndex, setBrandIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandIndex((prev) => (prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Duplicate brands for seamless loop visual
  const displayBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <>
      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Book Your Free Consultation</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-slate-600 mb-6">Let's discuss your SEO goals and how I can help you achieve measurable results.</p>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="c75a45aa-5064-4e9e-977c-4fc6c5f854f8" />
              <input type="hidden" name="subject" value="New Consultation Request - Rank&Tech" />
              <input type="hidden" name="from_name" value="Rank&Tech Consultation Form" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" name="first_name" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="shravan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" name="last_name" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="chauhan" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="abc@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input type="text" name="company" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
                <input type="url" name="website" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://yourwebsite.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Challenges</label>
                <textarea name="challenges" rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Tell me about your current SEO challenges..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Goals</label>
                <textarea name="goals" rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="What are your main objectives?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative hero-gradient min-h-[90vh] flex flex-col justify-center">
        {/* Hand Drawn Decorations - Hero */}
        <HandSparkle className="hidden lg:block absolute top-[20%] left-[20%] w-12 h-12 text-yellow-400 opacity-60 z-0" delay="0.5s" />
        <HandSparkle className="hidden lg:block absolute bottom-[20%] right-[10%] w-8 h-8 text-blue-400 opacity-60 z-0" delay="1s" />

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-blue-200/30 via-indigo-200/30 to-purple-200/30 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>
        
        {/* Floating Ecosystem Elements (Absolute around center) */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden md:block">
           {/* Top Left: Meta */}
           <div className="absolute top-[25%] left-[10%] lg:left-[15%] animate-float z-20">
              <div className="relative">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <MetaLogo className="w-8 h-8 text-blue-600" />
                 </div>
                 <svg className="absolute top-1/2 left-full w-24 h-24 -z-10 text-slate-200 opacity-60" style={{transform: 'translateY(-50%)'}}>
                    <path d="M0,50 Q60,50 100,100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
              </div>
           </div>

           {/* Top Right: Instagram */}
           <div className="absolute top-[25%] right-[10%] lg:right-[15%] animate-float-delayed z-20">
               <div className="relative">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <InstagramLogo className="w-8 h-8" />
                 </div>
                 <svg className="absolute top-1/2 right-full w-24 h-24 -z-10 text-slate-200 opacity-60" style={{transform: 'translateY(-50%)'}}>
                    <path d="M100,50 Q40,50 0,100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
               </div>
           </div>

           {/* Bottom Left: LinkedIn */}
           <div className="absolute bottom-[30%] left-[15%] lg:left-[20%] animate-float-delayed z-20">
               <div className="relative">
                 <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <LinkedInLogo className="w-7 h-7" />
                 </div>
                 <svg className="absolute bottom-full left-full w-16 h-16 -z-10 text-slate-200 opacity-60">
                    <path d="M0,100 L50,0" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
               </div>
           </div>

           {/* Bottom Right: Analytics */}
           <div className="absolute bottom-[25%] right-[15%] lg:right-[20%] animate-float z-20">
               <div className="relative">
                 <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-amber-500">
                    <BarChart2 className="w-7 h-7" />
                 </div>
                 <svg className="absolute bottom-full right-full w-16 h-16 -z-10 text-slate-200 opacity-60">
                    <path d="M100,100 L50,0" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
               </div>
           </div>
        </div>

        <div className="text-center max-w-5xl mx-auto px-4 relative z-10">
          
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            4+ Years of Proven SEO Results
          </div>
          
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1] animate-fade-in-up relative">
            Data-Driven SEO &<br />
            Digital Strategy
            <span className="inline-flex items-center align-middle mx-1.5 relative top-1 bg-white p-1 rounded-full shadow-sm border border-slate-100">
               <GoogleLogo className="w-9 h-9 md:w-12 md:h-12" />
            </span> 
            <span className="text-blue-600 relative inline-block">
               That Delivers
               <HandUnderline className="absolute -bottom-2 left-0 w-full h-4 text-blue-400 opacity-80" delay="0.8s" />
            </span>
          </h1>
          

          <p className="text-base md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            I'm Shravan Chauhan, an SEO Analyst & Digital Marketing Strategist with 4+ years of experience helping brands improve search visibility, boost conversions, and scale organic traffic sustainably.
          </p>

       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
  
  {/* 1. Add this WRAPPER DIV with 'relative' */}
  <div className="relative">
    
    {/* 2. Adjust Arrow Position */}
    {/* -left-24: Moves it ~6rem to the left of the button (adjust this to get closer/further) */}
    {/* top-0: Aligns it with the top of the button */}
    <HandArrowCurved 
      className="hidden md:block absolute -left-24 -top-20 w-24 h-20 text-slate-800 opacity-60 rotate-50" 
      delay="1.2s" 
    />
    
    <button 
      onClick={() => setShowForm(true)} 
      className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-200/50 transform hover:-translate-y-1 flex items-center group relative z-10"
    >
      Book a Consultation 
      <span className="ml-2 bg-blue-500 rounded-full p-1 group-hover:translate-x-1 transition-transform">
        <ArrowUpRight size={14} />
      </span>
    </button>
    
  </div>
</div>

          {/* Mobile-only scattered logos for visual interest if screens are small */}
          {/* <div className="md:hidden flex justify-center gap-6 opacity-80 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <MetaLogo className="w-8 h-8 text-blue-600" />
             <InstagramLogo className="w-8 h-8" />
             <LinkedInLogo className="w-8 h-8" />
             <BarChart2 className="w-8 h-8 text-amber-500" />
          </div> */}
        </div>

        {/* Trusted By Carousel - Discrete Snap Effect */}
        <div className="pt-10 border-t border-slate-100 max-w-6xl mx-auto w-full overflow-hidden">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 mb-6 md:mb-0">
             <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap md:mr-8">Trusted by global brands</span>
             
             {/* Slider Window */}
             <div className="flex-1 w-full overflow-hidden relative mask-linear-fade">
                <div 
                  className="flex items-center gap-12 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${brandIndex * 150}px)` }} // Moving by 150px steps (approx item width)
                >
                  {displayBrands.map((brand, idx) => (
                    <div key={idx} className="flex-shrink-0 flex items-center space-x-2 text-lg font-bold text-slate-400 grayscale hover:grayscale-0 hover:text-slate-600 transition-colors duration-300 w-[150px]">
                      <brand.icon className="h-5 w-5 flex-shrink-0" />
                      <span>{brand.name}</span>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Methodology Section (Redesigned) */}
      <Section id="features" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Decoration */}
            <HandSquiggle className="absolute -left-12 top-0 h-48 w-12 text-blue-100 -z-10 hidden lg:block" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              How I <span className="text-blue-600">Drive Growth</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-lg">
              My approach combines technical precision with strategic content execution to deliver sustainable, search-led business growth — not vanity traffic.
            </p>

            <div className="space-y-6 md:space-y-8 mb-8 md:mb-10 relative">
               {/* Vertical connection line could go here */}
              {METHODOLOGY.map((item, idx) => (
                <div key={idx} className="flex gap-3 md:gap-4 group relative">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 z-10">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* UPDATED LINK to /services */}
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual (Floating Stats Cards) */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full bg-slate-50/50 rounded-2xl md:rounded-[3rem] p-4 md:p-6 lg:p-8 border border-slate-100 flex items-center justify-center overflow-hidden order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-bl-[50px] md:rounded-bl-[100px] -z-10"></div>

            {/* Decorative Orbs - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="hidden md:block absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>

            <div className="flex gap-4 md:gap-6 lg:gap-8 w-full max-w-xs md:max-w-md lg:max-w-lg relative z-10 p-2 md:p-4">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-1/2">
                    {/* Card 1: 4+ Years Experience */}
                    <div className="bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 transform transition-transform hover:scale-105">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">4+</div>
                        <div className="text-xs md:text-sm font-medium text-slate-500">Years Experience</div>
                    </div>

                    {/* Card 3: +80% Conversion Uplift */}
                    <div className="bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 transform transition-transform hover:scale-105 relative">
                         {/* Sparkle Decoration - Hidden on mobile */}
                         <HandSparkle className="hidden md:block absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                            <Zap className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                        </div>
                         <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">+80%</div>
                         <div className="text-xs md:text-sm font-medium text-slate-500">Conversion Uplift</div>
                    </div>
                </div>

                {/* Column 2 (Offset) */}
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-1/2 mt-6 md:mt-8 lg:mt-12">
                    {/* Card 2: +70% Organic Traffic Growth */}
                    <div className="bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 transform transition-transform hover:scale-105">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                            <BarChart2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">+70%</div>
                        <div className="text-xs md:text-sm font-medium text-slate-500">Organic Traffic Growth</div>
                    </div>

                    {/* Card 4: 1000+ SEO Audits Delivered */}
                    <div className="bg-white p-3 md:p-4 lg:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 transform transition-transform hover:scale-105">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                        </div>
                         <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">1000+</div>
                         <div className="text-xs md:text-sm font-medium text-slate-500">SEO Audits Delivered</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Business Growth Section */}
      <Section className="text-center relative">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
          Statistic
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20">
          See Your <br /> <span className="text-blue-600 relative inline-block">
             Business Growth
             {/* Updated Arrow to point towards the card */}
             <HandArrowCurved className="absolute -bottom-10 -right-20 w-24 h-24 text-blue-300 hidden md:block rotate-90" />
          </span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
           {/* Center Big Card */}
           <div className="relative z-10 bg-white rounded-[2.5rem] p-4 shadow-xl shadow-blue-900/5 border border-slate-100 mx-auto max-w-md transform hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-slate-50 rounded-[2rem] p-8 relative">
                 <HandCircle className="absolute inset-0 w-full h-full text-blue-200 opacity-50 scale-110" />
                 <div className="text-6xl font-bold text-blue-600 mb-2 relative z-10">↑98%</div>
                 <div className="text-sm font-medium text-slate-500 uppercase tracking-wide relative z-10">Increments in business conversions</div>
              </div>
           </div>

           {/* Left Stat */}
           <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 mt-8 md:mt-0">
             <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-slate-50 w-full md:w-64">
                <div className="text-3xl font-bold text-slate-900 mb-1">$200+</div>
                <div className="text-xs text-slate-500">Our users average spending</div>
             </div>
           </div>

           {/* Right CTA */}
           <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 mt-8 md:mt-0">
             <div className="bg-blue-600 rounded-[2rem] p-6 shadow-lg shadow-blue-500/30 text-white w-full md:w-64 cursor-pointer hover:bg-blue-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">↑50%</div>
                  <ArrowUpRight className="opacity-80" />
                </div>
                <div className="text-xs text-blue-100 mt-1 text-left">Effective in growth in business</div>
             </div>
           </div>
        </div>
      </Section>

      {/* Featured Case Studies Section */}
      <Section id="work" light>
        <div className="mb-16">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Case Studies</h2>
             <p className="text-lg text-slate-500">Real results from real campaigns.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
                <div key={index} onClick={() => onNavigate(`casestudy${index + 1}`)} className="flex flex-col bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group cursor-pointer">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-blue-600 uppercase tracking-wide mb-4">
                        {study.category}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {study.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                        {study.description}
                        </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, idx) => (
                        <div key={idx}>
                        <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                        <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">{metric.label}</div>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Tech Stack & Tools Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Context */}
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Stack <span className="text-blue-500">&</span> Tools</h2>
                 <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                   My toolkit combines enterprise-grade platforms with custom automation workflows to deliver faster insights, scalable execution, and measurable growth.
                 </p>

                 <div className="space-y-6">
                    {/* Strategy Block */}
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                          <BarChart2 className="text-blue-400 w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Data-Driven Strategy</h3>
                          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">Transforming complex analytics into clear, actionable growth plans using performance data, user behavior insights, and search intelligence.</p>
                       </div>
                    </div>

                    {/* AI Block */}
                    <div className="flex gap-5 group">
                       <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                          <Cpu className="text-purple-400 w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">AI & Automation Integration</h3>
                          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">Designing automated SEO workflows with n8n and LLMs to streamline audits, reporting, and content operations at scale.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Column: The Stack */}
              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
                 <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                       {STACK.map((tool, idx) => (
                          <div key={idx} className="flex items-center justify-center text-center px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-800 hover:border-blue-500/30 hover:text-white hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 cursor-default group">
                             <span className="group-hover:scale-105 transition-transform">{tool}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Selected Work Details Section */}
      <Section id="experience" className="bg-slate-50 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
             Projects Statistics
             <HandUnderline className="absolute -bottom-1 left-0 w-full h-3 text-blue-500 opacity-60" />
          </h2>
          <p className="text-xl text-slate-500">Proven results driven by data and strategy.</p>
        </div>

        <div className="space-y-32">
          {WORK_HISTORY.map((job, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Left Info */}
                <div className="flex-1 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
                      <span className="w-8 h-[2px] bg-blue-600"></span>
                      {job.company}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{job.role}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">{job.description}</p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8 border-y border-slate-200 py-6">
                      {job.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{m.value}</div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{m.label}</div>
                          </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                      ))}
                    </div>
                </div>

                {/* Right Chart */}
                <div className="flex-1 w-full order-1 lg:order-2">
                    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                      <div className="flex justify-between items-center mb-8">
                          <div className="flex items-center gap-2 text-slate-900 font-bold">
                            <BarChart2 className="w-5 h-5 text-blue-500" />
                            Performance Visualization
                          </div>
                      </div>
                      <div className="h-[250px] w-full">
                          <WorkChart 
                            data={job.chartData} 
                            type={job.chartType} 
                            dataKey="value" 
                            color={index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#10b981'} 
                          />
                      </div>
                    </div>
                </div>
              </div>
          ))}
        </div>
      </Section>

      {/* Client Testimonials Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-500">What clients say about working with me</p>
          </div>

          <TestimonialsCarousel />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white pt-0 md:pt-0">
         <div className="bg-slate-900 rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-16 overflow-hidden relative shadow-2xl shadow-slate-200">
            {/* Background decoration - Hidden on mobile to prevent layout issues */}
            <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24">

               {/* Text Side */}
               <div className="flex flex-col justify-center relative order-2 lg:order-1">
                  <HandArrowCurved className="hidden xl:block absolute -top-12 left-10 w-24 h-24 text-slate-600 opacity-30 rotate-180" />

                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Ready to scale <br/> your <span className="text-blue-500">organic growth?</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-10 leading-relaxed">
                    I'm currently accepting new projects. Whether you need a technical audit, a content roadmap, or full-stack SEO management, let's talk numbers.
                  </p>

                  <div className="space-y-6 md:space-y-8">
                     <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                           <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                        </div>
                        <div className="relative min-w-0 flex-1">
                           <HandArrowCurved className="hidden xl:block absolute -left-16 top-2 w-12 h-12 text-blue-500 opacity-60 scale-x-[-1]" />
                           <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">Email Me</div>
                           <a href="mailto:shravan.chauhan0009@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-blue-400 transition-colors break-words">shravan.chauhan0009@gmail.com</a>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                           <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                           <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">Based In</div>
                           <div className="text-lg md:text-xl font-bold text-white">Ahmedabad, India</div>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                           <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                           </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                           <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">Connect</div>
                           <a href="https://www.linkedin.com/in/shravan-chauhan-3786a515a/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-white hover:text-blue-400 transition-colors break-words">LinkedIn Profile</a>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form Side */}
               <div className="bg-white p-6 md:p-8 rounded-2xl lg:rounded-3xl shadow-xl order-1 lg:order-2">
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 md:space-y-5">
                     <input type="hidden" name="access_key" value="c75a45aa-5064-4e9e-977c-4fc6c5f854f8" />
                     <input type="hidden" name="subject" value="New Contact Form Submission - Rank&Tech" />
                     <input type="hidden" name="from_name" value="Rank&Tech Contact Form" />

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-slate-900">Name</label>
                           <input type="text" name="name" placeholder="shravan chauhan" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-slate-900">Company</label>
                           <input type="text" name="company" placeholder="Acme Inc." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Email Address</label>
                        <input type="email" name="email" placeholder="abc@company.com" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" />
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Project Details</label>
                        <textarea name="message" rows={4} placeholder="Tell me about your goals..." required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 resize-none"></textarea>
                     </div>

                     <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
                        Send Message
                     </button>
                  </form>
               </div>

            </div>
         </div>
      </Section>

      
    </>
  );
};

export default Home;