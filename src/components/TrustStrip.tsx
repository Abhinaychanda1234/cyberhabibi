const partners = [
  "CrowdStrike", "Palo Alto", "Fortinet", "Splunk", "Microsoft",
  "AWS", "Google Cloud", "IBM Security", "Cisco", "SentinelOne",
  "Elastic", "Datadog",
];

const TrustStrip = () => {
  return (
    <section className="section-spacing border-y border-border overflow-hidden">
      <div className="container-enterprise mb-12">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Trusted by industry leaders worldwide
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex logo-scroll">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="text-muted-foreground/40 font-display font-bold text-xl whitespace-nowrap tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
