"use client";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";

export default function UnderConstruction(): JSX.Element {
  return (
    <main className="container">
      <div className="bg-gradient" />
      <div className="bg-noise" />
      <div className="floating-shape floating-1" />
      <div className="floating-shape floating-2" />
      <div className="floating-shape floating-3" />
      <AnimatedBackground />

      <div className="digits"><span>404</span></div>

      <section className="card" role="alert" aria-live="polite">
        <div className="card-inner">
          <div className="row" style={{ marginBottom: 12 }}>
            <span className="badge" aria-label="??? ???????">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 3l9 18H3L12 3z" fill="rgba(41,182,246,0.2)" stroke="#29b6f6" strokeWidth="1"/>
                <circle cx="12" cy="16" r="1.3" fill="#29b6f6"/>
                <rect x="11" y="8" width="2" height="6" rx="1" fill="#29b6f6"/>
              </svg>
              ??? ???????
            </span>
          </div>

          <h1 className="title">?????? ??? ??????? ??????</h1>
          <p className="subtitle">???? ?????? ?????? ???? ? ????? ??????? ??????.</p>

          <div className="actions" role="navigation" aria-label="????? ???????">
            <Link className="btn btn-primary" href="https://t.me/MohamedDzLa" target="_blank" rel="noopener noreferrer" aria-label="?????? ????">
              <TelegramIcon />
              ???? ???? ??? ??????
            </Link>
            <Link className="btn btn-ghost" href="https://t.me/RabieSuse" target="_blank" rel="noopener noreferrer" aria-label="?????? ????">
              <TelegramIcon />
              ???? ???? ??? ??????
            </Link>
          </div>

          <p className="footer-note">?? ??? ??? ???? ???? ??? ????? ???? ???? 404 ?????.</p>
        </div>
      </section>
    </main>
  );
}

function TelegramIcon(): JSX.Element {
  return (
    <svg className="telegram-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9.76 15.83l-.38 3.4c.54 0 .77-.23 1.05-.5l2.52-2.41 5.23 3.82c.96.53 1.63.25 1.89-.89l3.43-16.1v0c.3-1.39-.5-1.94-1.43-1.6L1.1 9.3C-.27 9.83-.26 10.64.84 11l4.91 1.53 11.4-7.18c.54-.33 1.04-.15.63.21" fill="#fff" opacity="0.92"/>
    </svg>
  );
}
