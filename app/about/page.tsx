function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        At our store, we believe great furniture does more than fill a room—it
        helps create a place you love coming home to. From stylish living room
        pieces and cozy bedroom essentials to practical office and dining
        furniture, we carefully select designs that combine comfort, quality,
        and timeless style. Whether you're furnishing a new home or refreshing
        your favorite space, we're here to help you find furniture that fits
        your lifestyle and makes every room feel complete.
      </p>
    </section>
  );
}
export default AboutPage;
