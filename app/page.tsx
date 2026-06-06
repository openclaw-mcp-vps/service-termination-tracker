export default function Home() {
  const faqs = [
    {
      q: "Which vendors and services do you monitor?",
      a: "We monitor 200+ cloud providers and SaaS platforms including AWS, GCP, Azure, Cloudflare, Stripe, Twilio, and more — covering regional availability notices, deprecation announcements, and end-of-life alerts."
    },
    {
      q: "How quickly will I be notified of a termination?",
      a: "Alerts are delivered within minutes of detection. We poll RSS feeds and APIs every 5 minutes and run web scrapers hourly, so you get early warning before official announcements go wide."
    },
    {
      q: "Can I customize alerts for specific regions or services?",
      a: "Yes. You create monitoring rules by vendor, service, and region. Alerts route to email, Slack, or any webhook endpoint you configure — with severity filters so you only get what matters."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Vendor<br />
          <span className="text-[#58a6ff]">Service Termination</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Monitor cloud providers and SaaS tools for regional shutdowns and end-of-life notices.
          Get real-time alerts via email, Slack, or webhooks before your team is caught off guard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", title: "5-min polling", desc: "RSS feeds and APIs checked every 5 minutes" },
          { icon: "🌍", title: "200+ vendors", desc: "AWS, GCP, Azure, Stripe, Twilio and more" },
          { icon: "🔔", title: "Multi-channel", desc: "Email, Slack, and custom webhooks" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "200+ vendors monitored",
              "Unlimited monitoring rules",
              "Email, Slack & webhook alerts",
              "5-minute polling interval",
              "Regional filter support",
              "Alert history & audit log"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Service Termination Tracker. All rights reserved.
      </footer>
    </main>
  );
}
