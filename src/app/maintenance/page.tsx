export default function MaintenancePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@600;700;800&display=swap');

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
          width: 100%;
        }

        .maintenance-root {
          min-height: 100vh;
          width: 100%;
          background: #07090f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* Animated background orbs */
        .maintenance-root::before {
          content: '';
          position: fixed;
          top: -20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(196, 148, 36, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: floatOrb1 8s ease-in-out infinite;
        }

        .maintenance-root::after {
          content: '';
          position: fixed;
          bottom: -20%;
          right: -10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(196, 148, 36, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: floatOrb2 10s ease-in-out infinite;
        }

        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 60px) scale(1.1); }
        }

        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -40px) scale(1.05); }
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(196, 148, 36, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 148, 36, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .card {
          position: relative;
          z-index: 10;
          max-width: 680px;
          width: 90%;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(196, 148, 36, 0.2);
          border-radius: 28px;
          padding: 60px 56px;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(196, 148, 36, 0.1) inset,
            0 40px 80px rgba(0,0,0,0.6),
            0 0 120px rgba(196, 148, 36, 0.05);
          animation: cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          margin: 0 auto 36px;
          position: relative;
        }

        .icon-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(196, 148, 36, 0.3);
          animation: ringPulse 3s ease-in-out infinite;
        }

        .icon-ring-2 {
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          border: 1px solid rgba(196, 148, 36, 0.12);
          animation: ringPulse 3s ease-in-out infinite 0.5s;
        }

        @keyframes ringPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.06); }
        }

        .icon-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          position: relative;
          z-index: 2;
          animation: iconFloat 4s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(196, 148, 36, 0.4));
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(196, 148, 36, 0.12);
          border: 1px solid rgba(196, 148, 36, 0.35);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 24px;
          animation: cardEntrance 0.8s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background: #f59e0b;
          border-radius: 50%;
          animation: dotBlink 1.5s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.8);
        }

        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .badge-text {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #f59e0b;
        }

        .title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          animation: cardEntrance 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .title span {
          background: linear-gradient(135deg, #f59e0b, #c4941f, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 40px;
          font-weight: 400;
          animation: cardEntrance 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          margin: 0 auto 40px;
          animation: cardEntrance 0.8s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .alert-box {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.04) 100%);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 16px;
          padding: 20px 24px;
          margin-bottom: 36px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-align: left;
          animation: cardEntrance 0.8s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .alert-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .alert-content {}

        .alert-title {
          font-size: 13px;
          font-weight: 700;
          color: #f87171;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .alert-text {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }

        .contact-section {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 24px;
          animation: cardEntrance 0.8s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .contact-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 14px;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f59e0b;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .contact-link:hover {
          color: #fbbf24;
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }

        .footer-note {
          margin-top: 40px;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          animation: cardEntrance 0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .company-name {
          color: rgba(196, 148, 36, 0.6);
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .card {
            padding: 44px 28px;
          }
        }
      `}</style>

      <div className="maintenance-root">
        <div className="grid-bg" />

        <div className="card">
          {/* Animated Icon */}
          <div className="icon-wrapper">
            <div className="icon-ring" />
            <div className="icon-ring-2" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/maintenance.png"
              alt="Maintenance"
              className="icon-img"
            />
          </div>

          {/* Status Badge */}
          <div className="badge">
            <div className="badge-dot" />
            <span className="badge-text">Temporarily Offline</span>
          </div>

          {/* Title */}
          <h1 className="title">
            Website Under<br />
            <span>Maintenance</span>
          </h1>

          {/* Description */}
          <p className="description">
            We apologize for the inconvenience. Our website is currently
            unavailable while we resolve a payment issue with our hosting provider.
          </p>

          <div className="divider" />

          {/* Alert Box */}
          <div className="alert-box">
            <span className="alert-icon">⚠️</span>
            <div className="alert-content">
              <div className="alert-title">Service Interruption — Charges Due</div>
              <div className="alert-text">
                Our website is temporarily down due to outstanding hosting &amp; maintenance
                charges. We are actively working to resolve this and restore full
                service as quickly as possible. Thank you for your patience.
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <div className="contact-label">For urgent inquiries, reach us at</div>
            <a href="mailto:info@hbt-enterprises.com" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@hbt-enterprises.com
            </a>
          </div>

          {/* Footer note */}
          <p className="footer-note">
            &copy; {new Date().getFullYear()} <span className="company-name">HBT Enterprises</span> &mdash; We&apos;ll be back shortly.
          </p>
        </div>
      </div>
    </>
  );
}
