/* eslint-disable prettier/prettier */

const Newsletter = () => {
  return (
    <section className="bg-accent-light xxs:p-8 xl:p-20 lg:p-14 2xs:p-12 p-6 3md:max-w-full max-w-md 3md:mx-0 mx-auto   round border-glow h-fit">
      <h2 className="xl:text-4xl lg:text-3xl text-2xl  font-syne font-bold text-gradient 3md:text-left text-center  mb-4">
        Subscribe to Our Newsletter
      </h2>

      <p className="paragraph-sm mb-8 text-white 3md:text-left text-center ">
        Stay updated with the latest property listings, market insights, and expert tips. Get
        valuable real estate knowledge delivered straight to your inbox.
      </p>

      <form className="flex flex-col sm:flex-row items-center justify-center sm:gap-2 gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full  flex-1 xl:px-8 px-6  xl:py-2.5 py-2  rounded-full "
          required
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
