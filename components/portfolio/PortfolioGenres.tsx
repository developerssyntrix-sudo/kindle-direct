const genres = [
  "Business & Investing",
  "Children's Books",
  "Non-Fiction",
  "Literature & Fiction",
  "Mystery, Thriller & Suspense",
  "Science Fiction & Fantasy",
  "Teens & Young Adult",
  "Comics & Graphic Novels",
  "Biography",
  "Romance",
  "Short Stories",
  "...and more!",
];

export default function PortfolioGenres() {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/G/01/Prelogin/img_script_bg._SL1280_FMpng_.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-[#131a22] text-center mb-10">
          Publish multiple types of books
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">
          {genres.map((g) => (
            <p key={g} className="text-[#131a22] text-sm md:text-base font-normal">
              {g}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
