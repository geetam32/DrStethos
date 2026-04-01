import React, { useEffect, useState } from 'react';
import DrStethosPlans from './components/DrStethosPlans';
import { 
  Stethoscope, 
  Hospital, 
  Activity, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Briefcase, 
  Star,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Menu,
} from 'lucide-react';

const BrandLogo = ({ size = 32, style }) => (
  <img 
    src="/logo.png" 
    alt="DrStethos Logo" 
    width={size} 
    height={size} 
    style={{ ...style, borderRadius: '8px', objectFit: 'contain' }} 
  />
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, left: 0, right: 0, height: '72px',
      display: 'flex', alignItems: 'center', zIndex: 1000,
      background: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.35rem', color: '#111', textDecoration: 'none' }}>
          <BrandLogo size={34} />
          DrStethos
        </a>

        {/* Pill Nav Links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '100px', padding: '6px 8px',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}>
          {[
            { label: 'For Doctors', href: '#professionals' },
            { label: 'For Employers', href: '#hospitals' },
            { label: 'About Us', href: '#about' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a key={link.label} href={link.href} style={{
              padding: '8px 18px', borderRadius: '100px', fontWeight: 500,
              fontSize: '0.9rem', color: '#166534', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Sign In */}
        <a href="#get-started" style={{
          padding: '10px 28px', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem',
          color: '#111', textDecoration: 'none', border: '1px solid #e5e7eb',
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
        }}>
          Sign In
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', overflow: 'hidden',
      fontFamily: "'Outfit', sans-serif",
    }}>
      {/* Full-bleed doctor background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/hero-doctor.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Left-side gradient overlay — fades from green/white into transparent */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(240,253,244,0.97) 0%, rgba(240,253,244,0.92) 30%, rgba(240,253,244,0.7) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)',
      }} />

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '20%', width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center',
        minHeight: '100vh', paddingTop: '72px',
      }}>
        <div style={{ maxWidth: '600px' }} className="animate-fade-up">
          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 800, color: '#111',
            letterSpacing: '-0.03em', lineHeight: 1.08,
            marginBottom: '24px',
          }}>
            Hire <span style={{ color: '#16A34A' }}>Verified Doctors</span>{' '}
            in Minutes, Not Weeks.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7,
            maxWidth: '480px', marginBottom: '40px', fontWeight: 400,
          }}>
            Connecting elite healthcare professionals with prestigious opportunities nationwide.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '0' }}>
            <a href="#get-started" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 36px', borderRadius: '100px', fontWeight: 700,
              fontSize: '1rem', background: '#16A34A', color: '#fff',
              textDecoration: 'none', border: 'none',
              boxShadow: '0 8px 24px rgba(22,163,74,0.35)',
              transition: 'all 0.3s ease',
            }}>
              Get Started <ChevronRight size={18} />
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 28px', borderRadius: '100px', fontWeight: 600,
              fontSize: '1rem', color: '#374151', textDecoration: 'none',
              background: 'transparent', border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '2px solid #d1d5db', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <ChevronRight size={16} color="#374151" />
              </div>
              How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar — Frosted Glass */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, width: '100%', maxWidth: '700px', padding: '0 32px',
      }}>
        <div className="animate-fade-up delay-300" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '20px', padding: '20px 40px',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          gap: '16px',
        }}>
          {[
            { value: '1,000+', label: 'Partner Hospitals' },
            { value: '98%', label: 'Placement Rate' },
            { value: 'Premium', label: 'Salaries Secured' },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.08)' }} />}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 800, fontSize: '1.3rem', color: '#111', margin: 0, letterSpacing: '-0.02em' }}>{stat.value}</p>
                <p style={{ fontWeight: 500, fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>{stat.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

/* Mini "How It Works" — 3 steps under hero */
const HeroSteps = () => {
  const steps = [
    { num: '01', icon: <Users size={28} color="#16A34A" />, title: 'Create Account', desc: 'Sign up as a hospital or doctor in under 2 minutes.' },
    { num: '02', icon: <Briefcase size={28} color="#16A34A" />, title: 'Post Job / Apply', desc: 'Hospitals post openings, doctors apply with one tap.' },
    { num: '03', icon: <CheckCircle2 size={28} color="#16A34A" />, title: 'Get Hired', desc: 'Interview, get matched, and start your new role.' },
  ];

  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #f3f4f6', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>How It Works</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', letterSpacing: '-0.02em', margin: 0 }}>Get started in 3 simple steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', position: 'relative' }}>
          {/* Connector lines */}
          <div style={{ position: 'absolute', top: '36px', left: 'calc(33.3% - 16px)', width: 'calc(33.3% + 32px)', height: '2px', background: 'linear-gradient(to right, #DCFCE7, #16A34A, #DCFCE7)', zIndex: 0 }} />

          {steps.map((step) => (
            <div key={step.num} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', position: 'relative', zIndex: 1,
            }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '20px',
                background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', border: '3px solid #fff',
                boxShadow: '0 4px 16px rgba(22,163,74,0.15)',
              }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.6, maxWidth: '260px', margin: '0 auto' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StackedCard = ({ children, style }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1, ...style }}>
    {/* Bottom Layer */}
    <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', bottom: '-16px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', zIndex: -2 }} />
    {/* Middle Layer */}
    <div style={{ position: 'absolute', top: '8px', left: '8px', right: '8px', bottom: '-8px', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', zIndex: -1 }} />
    {/* Top Layer */}
    <div style={{
      position: 'relative',
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderTop: '1px solid rgba(255,255,255,0.4)',
      borderLeft: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '24px',
      padding: '40px',
      height: '100%',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      zIndex: 1
    }}>
      {children}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" style={{
      padding: '100px 24px',
      background: 'linear-gradient(to bottom, #10b981 0%, #047857 40%, #064e3b 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '100px',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '24px'
          }}>
            About DrStethos
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: '#ffffff',
            fontWeight: 800,
            lineHeight: 1.3,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Bridging the gap between hospitals<br />and healthcare professionals
          </h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px', 
          alignItems: 'stretch' 
        }}>
          {/* Left Column - Tall Card */}
          <StackedCard>
            <Activity size={48} color="#6ee7b7" style={{ marginBottom: '24px' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Our Mission</h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              DrStethos is a dedicated medical recruitment platform designed to bridge the gap between hospitals and healthcare professionals. Our mission is to make hiring in the healthcare sector faster, simpler, and more reliable by bringing everything into one seamless digital experience.
            </p>
          </StackedCard>

          {/* Right Column - Two Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <StackedCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <Hospital size={40} color="#6ee7b7" />
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>For Hospitals</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                We provide hospitals with powerful tools to post jobs, manage applications, shortlist candidates, and schedule in-app interviews, ensuring a smooth and transparent hiring workflow.
              </p>
            </StackedCard>

            <StackedCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <Stethoscope size={40} color="#6ee7b7" />
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>For Doctors</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Doctors can explore verified job opportunities, view complete role details, and apply with just a tap. We make it easy to find your next career opportunity.
              </p>
            </StackedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  return (
    <section className="section" style={{ background: 'var(--primary-blue)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.4) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
      <div className="container relative z-10">
        <div className="grid grid-2" style={{ gap: '64px' }}>
          <div>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>Why Choose <br/>DrStethos?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '32px' }}>
              At DrStethos, we believe that healthcare deserves a recruitment system that is efficient, trustworthy, and built for real-world needs. Whether you're a hospital looking for skilled professionals or a doctor seeking your next opportunity, we're here to make the process effortless.
            </p>
            <div className="flex gap-8" style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '32px' }}>
              <div>
                <h3 style={{ color: 'var(--secondary-teal)', fontSize: '2.5rem' }}>5000+</h3>
                <p style={{ color: 'white' }}>Registered Doctors</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--secondary-teal)', fontSize: '2.5rem' }}>1000+</h3>
                <p style={{ color: 'white' }}>Verified Hospitals</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {[
              { title: 'Efficient', desc: 'Streamlined process that saves time for both hospitals and healthcare professionals', icon: <Clock /> },
              { title: 'Trustworthy', desc: 'All hospitals and doctors are verified, ensuring quality and reliability', icon: <ShieldCheck /> },
              { title: 'Real-World Ready', desc: 'Built for real-world needs with practical features that actually work', icon: <CheckCircle2 /> },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white' }}>
                <div className="flex gap-4 items-center mb-4">
                  <div style={{ color: 'var(--secondary-teal)' }}>{React.cloneElement(item.icon, { size: 32 })}</div>
                  <h3 style={{ color: 'white', margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: 1, title: 'Create Your Account', desc: 'Hospitals and doctors sign up with secure verification to ensure authenticity and trust.' },
    { num: 2, title: 'Hospitals Post Jobs', desc: 'Hospitals can create detailed job listings by specifying role, experience, location, salary range, and requirements.' },
    { num: 3, title: 'Doctors Discover Opportunities', desc: 'Doctors browse verified hospital openings, filter based on specialization, and view complete job details.' },
    { num: 4, title: 'Apply or Shortlist', desc: 'Doctors can apply instantly with one tap, while hospitals can manage applicants, shortlist candidates, or request more details.' },
    { num: 5, title: 'In-App Interviews', desc: 'Hospitals schedule interviews directly inside the platform, and doctors attend without switching apps.' },
    { num: 6, title: 'Track Progress', desc: 'Both doctors and hospitals can track applications, interview status, and job updates in real time.' }
  ];

  const StepCard = ({ step, animDelay }) => (
    <div className="step-card-anim" style={{ 
      width: 'calc(50% - 20px)',
      position: 'relative', display: 'flex', alignItems: 'center', 
      background: 'linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0.9))', 
      backdropFilter: 'blur(10px)', 
      borderRadius: '16px', 
      padding: '24px 24px 24px 44px', 
      marginLeft: '30px', 
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)', 
      minHeight: '130px',
      animationDelay: animDelay,
      border: '1px solid rgba(255,255,255,0.8)'
    }}>
       <div style={{ 
         position: 'absolute', left: '-30px', top: '50%', transform: 'translateY(-50%)',
         width: '60px', height: '60px', borderRadius: '50%', 
         background: '#10b981', color: 'white', 
         display: 'flex', alignItems: 'center', justifyContent: 'center', 
         fontSize: '2rem', fontWeight: 800, 
         boxShadow: '0 0 20px rgba(16,185,129,0.7), inset 0 0 10px rgba(255,255,255,0.3)',
         border: '2px solid rgba(255,255,255,0.4)',
         zIndex: 3
       }}>
         {step.num}
       </div>
       <div style={{ position: 'relative', zIndex: 2 }}>
         <h3 style={{ color: '#064e3b', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.01em' }}>{step.title}</h3>
         <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{step.desc}</p>
       </div>
    </div>
  );

  return (
    <section id="how-it-works" style={{ 
      background: 'linear-gradient(180deg, #e8f7f0 0%, #064e3b 40%, #022c22 100%)', 
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glowing waves to match screenshot */}
      <div style={{ position: 'absolute', top: '20%', left: '-20%', width: '60%', height: '60%', background: 'radial-gradient(ellipse, #10b981 0%, transparent 60%)', opacity: 0.15, filter: 'blur(60px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(ellipse, #10b981 0%, transparent 60%)', opacity: 0.2, filter: 'blur(60px)', zIndex: 0 }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ color: '#064e3b', fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            DrStethos Connected Journey<br/>How It Works
          </h2>
        </div>

        <div style={{ position: 'relative', padding: '0 40px' }}>
          {/* THE GLOWING S-CURVE */}
          <div className="s-curve-line" style={{
            position: 'absolute',
            top: '65px', 
            bottom: '65px',
            left: '40px', // Exact padding alignment
            right: '40px',
            zIndex: 1,
            filter: 'drop-shadow(0 0 10px #10b981)'
          }}>
             {/* 1->2 Horizontal */}
             <div className="h-line" style={{ top: 0, left: 0, width: '50%' }} />
             
             {/* 2->4 Vertical right drop (U-turn) */}
             <div style={{ position: 'absolute', top: 0, left: '50%', width: '20px', height: '50%', borderTop: '4px solid #10b981', borderRight: '4px solid #10b981', borderBottom: '4px solid #10b981', borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }} />
             
             {/* 4->3 Horizontal */}
             <div className="h-line" style={{ top: '50%', left: '20px', width: 'calc(50% - 20px)' }} />
             
             {/* 3->5 Vertical left drop (U-turn) */}
             <div style={{ position: 'absolute', top: '50%', left: 0, width: '20px', height: '50%', borderTop: '4px solid #10b981', borderLeft: '4px solid #10b981', borderBottom: '4px solid #10b981', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }} />
             
             {/* 5->6 Horizontal */}
             <div className="h-line" style={{ top: '100%', left: '20px', width: '50%' }} />
             
             {/* Glowing Dots pulsing in the negative gaps between cards */}
             <div className="glow-dot" style={{ top: '-5px', left: 'calc(50% - 7px)', animationDelay: '0s' }} />             
             <div className="glow-dot" style={{ top: '25%', left: 'calc(50% + 20px - 7px)', animationDelay: '0.6s' }} />
             <div className="glow-dot" style={{ top: 'calc(50% - 5px)', left: 'calc(50% - 7px)', animationDelay: '1.2s' }} />
             <div className="glow-dot" style={{ top: '75%', left: '-7px', animationDelay: '1.8s' }} />
             <div className="glow-dot" style={{ top: 'calc(100% - 5px)', left: 'calc(50% - 7px)', animationDelay: '2.4s' }} />
          </div>

          {/* CARDS */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {/* ROW 1: 1 -> 2 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
              <StepCard step={steps[0]} animDelay="0s" />
              <StepCard step={steps[1]} animDelay="0.5s" />
            </div>

            {/* ROW 2: 4 <- 3 (S-Curve chronological tracing: 2 drops into 3, crosses left to 4, drops into 5) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
              <StepCard step={steps[3]} animDelay="1.8s" /> {/* Step 4 on Left */}
              <StepCard step={steps[2]} animDelay="1.1s" /> {/* Step 3 on Right */}
            </div>

            {/* ROW 3: 5 -> 6 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
              <StepCard step={steps[4]} animDelay="2.5s" />
              <StepCard step={steps[5]} animDelay="3.1s" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .h-line {
          position: absolute;
          height: 4px;
          background: #10b981;
        }
        .v-curve {
          position: absolute;
        }
        .glow-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          border: 2px solid #10b981;
          box-shadow: 0 0 15px 5px rgba(16,185,129,0.8);
          animation: pulse-dot 1.5s infinite alternate;
        }
        @keyframes pulse-dot {
          0% { opacity: 0.3; transform: scale(0.8); box-shadow: 0 0 5px rgba(16,185,129,0.5); }
          100% { opacity: 1; transform: scale(1.3); box-shadow: 0 0 20px 8px rgba(16,185,129,0.9); }
        }
        @keyframes step-appear {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
        }
        .step-card-anim {
          opacity: 0;
          animation: step-appear 0.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

const RoleSection = ({ isReverse, title, subtitle, desc, items, imgIcon }) => {
  return (
    <section className="section">
      <div className="container grid grid-2" style={{ gap: '64px', direction: isReverse ? 'rtl' : 'ltr' }}>
        <div style={{ direction: 'ltr' }}>
          <div className="badge">{subtitle}</div>
          <h2>{title}</h2>
          <p style={{ marginBottom: '32px', fontSize: '1.125rem' }}>{desc}</p>
          
          <div className="grid" style={{ gap: '24px' }}>
            {items.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div style={{ color: 'var(--secondary-teal)', flexShrink: 0, marginTop: '4px' }}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px', fontSize: '1.125rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '1rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center" style={{ direction: 'ltr' }}>
          <div style={{ width: '100%', height: '500px', borderRadius: 'var(--radius-lg)', background: 'var(--gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(0, 180, 216, 0.1) 0%, rgba(255,255,255,0) 70%)' }}></div>
            {React.cloneElement(imgIcon, { size: 160, color: 'var(--primary-blue)', style: { zIndex: 1, opacity: 0.8 } })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing section is now in src/components/DrStethosPlans.tsx

const DownloadApp = () => {
  return (
    <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
      <div className="container grid grid-2 items-center" style={{ gap: '64px' }}>
        <div>
          <h2 style={{ color: 'white' }}>Download Our Mobile App</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '32px' }}>
            Take your medical career on the go. Manage shifts, respond to opportunities, and stay connected—anywhere, anytime.
          </p>
          <div className="flex gap-4 mb-4">
            <button className="btn" style={{ background: 'black', color: 'white', padding: '12px 24px', borderRadius: '8px' }}>
              <Smartphone size={24} /> App Store
            </button>
            <button className="btn" style={{ background: 'black', color: 'white', padding: '12px 24px', borderRadius: '8px' }}>
              <Smartphone size={24} /> Google Play
            </button>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Over 50,000+ downloads • 4.8★ rating</p>
        </div>
        <div className="flex justify-center relative">
          <div style={{ width: '300px', height: '600px', background: 'var(--bg-color)', borderRadius: '40px', border: '8px solid black', padding: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
              <div className="flex justify-between items-center" style={{ color: 'var(--text-dark)' }}>
                <BrandLogo size={28} color="var(--primary-blue)" />
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--border-light)' }}></div>
              </div>
              <h3 style={{ color: 'var(--text-dark)', fontSize: '1.25rem', margin: '8px 0' }}>Find Jobs</h3>
              <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '4px' }}>Senior Cardiologist</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '12px' }}>Apollo Hospitals • Full Time</p>
                <button style={{ width: '100%', padding: '8px', background: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '6px' }}>Apply Now</button>
              </div>
              <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '4px' }}>General Physician</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '12px' }}>City Care Clinic • Part Time</p>
                <button style={{ width: '100%', padding: '8px', background: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '6px' }}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <div className="badge">Get in Touch</div>
          <h2>Have questions? Send us a message <br/>and we'll respond as soon as possible.</h2>
        </div>
        
        <div className="grid grid-2" style={{ gap: '64px' }}>
          <div>
            <h3>Support Information</h3>
            <p style={{ marginBottom: '32px' }}>Reach out to us and we'll get back to you shortly.</p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="icon-box" style={{ width: '48px', height: '48px', margin: 0 }}><Mail size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Email Us</h4>
                  <p style={{ fontSize: '1rem' }}>stethosabisha@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="icon-box" style={{ width: '48px', height: '48px', margin: 0 }}><Phone size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Call Us</h4>
                  <p style={{ fontSize: '1rem' }}>+91 70753 55969</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="icon-box" style={{ width: '48px', height: '48px', margin: 0 }}><Clock size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Business Hours</h4>
                  <p style={{ fontSize: '1rem' }}>Monday - Friday: 9AM - 6PM EST</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="icon-box" style={{ width: '48px', height: '48px', margin: 0, flexShrink: 0 }}><MapPin size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '4px' }}>Office Location</h4>
                  <p style={{ fontSize: '1rem' }}>DRSTETHOS INNOVATIONS LLP, H NO 7-7-14, GARUVU VEEDI, WARD NO-12, ADJ, Bhimavaram, West Godavari, Andhra Pradesh, 534201</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card" style={{ background: 'var(--bg-color)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ marginBottom: '24px' }}>Send a Message</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Your Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Message</label>
                <textarea placeholder="Type your message here..." rows="4" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-light)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ background: 'var(--text-dark)', color: 'white', paddingTop: '80px', paddingBottom: '32px' }}>
      <div className="container" style={{ marginBottom: '64px' }}>
        <div className="grid grid-4" style={{ gap: '48px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div className="flex items-center gap-2" style={{ color: 'var(--secondary-teal)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '24px' }}>
              <BrandLogo size={40} color="var(--secondary-teal)" />
              DrStethos
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '24px' }}>
              Connecting doctors with hospitals seamlessly. Your trusted medical recruitment platform.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '24px' }}>Quick Links</h4>
            <ul className="flex flex-col gap-3" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#professionals" className="hover:text-white">For Doctors</a></li>
              <li><a href="#hospitals" className="hover:text-white">For Hospitals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '24px' }}>Resources</h4>
            <ul className="flex flex-col gap-3" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms for Hospitals</a></li>
              <li><a href="#" className="hover:text-white">Terms for Doctors</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '24px' }}>Contact Us</h4>
            <ul className="flex flex-col gap-4" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              <li className="flex gap-3">
                <MapPin size={16} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--secondary-teal)' }} />
                <span>DRSTETHOS INNOVATIONS LLP<br/>H NO 7-7-14, GARUVU VEEDI, WARD NO-12, ADJ, Bhimavaram, West Godavari, Andhra Pradesh, 534201</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--secondary-teal)' }} />
                <span>+91 70753 55969</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} style={{ flexShrink: 0, marginTop: '4px', color: 'var(--secondary-teal)' }} />
                <span>stethosabisha@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
        <div>© 2026 DrStethos. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms (Hospitals)</a>
          <a href="#">Terms (Doctors)</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '40px', // Large padding to frame the site beautifully
      backgroundColor: 'transparent', // Changed to transparent so video can show through
      fontFamily: "'Outfit', sans-serif",
      overflowX: 'hidden'
    }}>
      {/* 🚀 FULL PAGE VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.8 // Slightly faded so the UI stays readable
        }}
      >
        {/* User needs to paste their video as "bg-video.mp4" in the public folder */}
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Decorative abstract background blobs mimicking the reference */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(74,222,128,0.5) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%', right: '-5%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(22,163,74,0.15) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0 }} />

      {/* The main 'Glassy Window' container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255, 255, 255, 0.45)', // very translucent white
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderRadius: '32px',
        border: '3px solid rgba(255, 255, 255, 0.8)', // Thicker translucent white border
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.1)',
        minHeight: 'calc(100vh - 80px)', // 80px = padding top + bottom
        overflow: 'clip', // clip instead of hidden to prevent breaking position:sticky
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar />
        <Hero />
        <HeroSteps />
        <About />
        <WhyChoose />
        <HowItWorks />
        
        <div id="professionals">
          <RoleSection 
            isReverse={true}
            subtitle="For Medical Professionals"
            title="Take Control of Your Medical Career"
            desc="Whether you're seeking permanent positions, temporary shifts, or consulting opportunities—find your perfect fit with our intelligent matching system."
            items={[
              { title: 'Shift Discovery', desc: 'Browse available shifts that match your schedule and location preferences.' },
              { title: 'Flexible Hours', desc: 'Choose full-time, part-time, or per-diem opportunities based on your lifestyle.' },
              { title: 'Profile Credibility', desc: 'Verified badge system builds trust and credibility with healthcare facilities.' },
              { title: 'Easy Credential Upload', desc: 'Securely store and share your medical licenses and certifications digitally.' }
            ]}
            imgIcon={<Stethoscope />}
          />
        </div>

        <div id="hospitals">
          <RoleSection 
            isReverse={false}
            subtitle="For Healthcare Facilities"
            title="Streamline Your Staffing Process"
            desc="From emergency shift coverage to permanent hires—connect with qualified medical professionals instantly. Save time, reduce costs, and maintain optimal staffing levels."
            items={[
              { title: 'Hiring Efficiency', desc: 'Reduce time-to-hire with instant access to qualified, available medical professionals.' },
              { title: 'Verified Profiles', desc: 'All doctors are pre-screened with verified credentials and professional backgrounds.' },
              { title: 'Scheduling Tools', desc: 'Intuitive calendar system to post shifts and manage staffing requirements seamlessly.' },
              { title: 'Shift Management', desc: 'Track filled positions, pending applications, and staffing analytics in real-time.' }
            ]}
            imgIcon={<Hospital />}
          />
        </div>

        <DrStethosPlans />
        <DownloadApp />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
