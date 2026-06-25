const tools = [
  { title: "Kindle Previewer", desc: "See how your eBook will look before you publish it." },
  { title: "Kindle Kids' Book Creator", desc: "Turn your illustrated children's books into great-looking eBooks." },
  { title: "kindle direct publishing house Community", desc: "Join the conversation with new and accomplished kindle direct publishing house authors." },
  { title: "Kindle Create", desc: "Convert your manuscript into a beautifully formatted eBook." },
];

export default function BookWritingTools() {
  return (
    <section className="py-12 bg-[#f0f2f2]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded border border-[#d5d9d9]">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
              alt="Publishing tools"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest">Free tools</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">
              More free kindle direct publishing house tools to help publish your book
            </h2>
            <div className="space-y-4 pt-2">
              {tools.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#008296] shrink-0" />
                  <div>
                    <p className="text-[#131a22] font-semibold text-sm">{item.title}</p>
                    <p className="text-[#565959] text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
