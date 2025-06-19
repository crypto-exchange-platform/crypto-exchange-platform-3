import { Header } from "./Header";
import { useState } from "react";
import { SignupModal } from "./SIgnUpModal";
import { LoginModal } from "./LogInModal";
import { Hero } from "./Hero";
import { MarketTable } from "./MarketTable";
import { Footer } from "./Footer";
import { Testimonials } from "./Testimonials";
import { TradingView } from "./TradingViewWidget";
import { CtaSection } from "./CTA";
import { Features } from "./Features";

function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <div className="flex flex-col">
        <section>
          <Header
            onLogin={() => setModal("login")}
            onSignup={() => setModal("signup")}
          />
        </section>
        <section id="hero">
          {" "}
          <Hero />{" "}
        </section>
        <section id="hero">
          {" "}
          <MarketTable />{" "}
        </section>

        <section id="features">
          {" "}
          <Features />{" "}
        </section>

        <section id="trading">
          {" "}
          <TradingView />{" "}
        </section>

        <section id="testimonials">
          {" "}
          <Testimonials />{" "}
        </section>
        <section id="cta">
          {" "}
          <CtaSection onSignup={() => console.log("Signup modal open")} />{" "}
        </section>
        <section>
          {" "}
          <Footer />{" "}
        </section>
      </div>
    </>
  );
}

export default LandingPage;
