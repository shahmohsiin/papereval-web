import React from 'react';
import { Shield, Search, CheckCircle2, ChevronRight, Play } from 'lucide-react';

export default function LandingPage() {
  return (
    <div>
      {/* Premium Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Grade papers <br />
                with <span className="gradient-text">AI Precision</span>
              </h1>
              <p>
                PaperEval is your smart companion for evaluating answer papers. We don't just score — our advanced AI models provide step-by-step analysis to help students learn and teachers validate.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#" className="btn">
                  <Play size={20} fill="currentColor" />
                  Get it on Google Play
                </a>
                <a href="#features" className="btn btn-outline" style={{ color: 'white' }}>
                  Explore Features
                  <ChevronRight size={20} />
                </a>
              </div>
              
              <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.8 }}>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 500, color: '#A5B4FC' }}>✦ Next-Generation AI Grading Platform</p>
              </div>
            </div>
            
            <div className="hero-image-container">
              <div className="hero-glow"></div>
              <img 
                src="/hero_illustration.png" 
                alt="AI evaluating a paper" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section id="features" className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Why choose <span className="gradient-text">PaperEval?</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Built with cutting-edge LLMs and Computer Vision to deliver the most accurate grading experience available.
          </p>
        </div>

        <div className="features-grid">
          <div className="card">
            <div className="card-icon">
              <Search size={28} color="#A5B4FC" />
            </div>
            <h2>Smart OCR & Evaluation</h2>
            <p>Simply scan your answer sheets. Our advanced pipeline extracts handwritten text and math symbols with near-perfect fidelity.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <CheckCircle2 size={28} color="#86EFAC" />
            </div>
            <h2>Step-by-Step Analysis</h2>
            <p>Don't just see the final score. Understand exactly where mistakes were made with detailed feedback on every single step.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Shield size={28} color="#F9A8D4" />
            </div>
            <h2>Secure & Private</h2>
            <p>Your data is encrypted and securely stored. We prioritize your privacy above everything else, following strict compliance standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
