const FaqSection = () => {
  return (
    <section className="bg-black py-16 px-4 border-b-[0.1px] border-gray-400">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-6 h-0.5 bg-yellow-500"></div>
          <span className="text-yellow-500 font-medium mx-3">FAQ</span>
          <div className="w-6 h-0.5 bg-yellow-500"></div>
        </div>

        <h2 className="text-white text-4xl font-bold italic text-center mb-12">
          FREQUENTLY ASKED
          <br />
          QUESTIONS
        </h2>

        {/* Accordion using HTML5 details/summary */}
        <div className="space-y-4">
          <details className="border border-gray-800 group">
            <summary className="flex justify-between items-center p-4 cursor-pointer text-white">
              Can I cancel my membership?
              <span className="text-xl">+</span>
            </summary>
            <div className="p-4 pt-0 text-gray-400">
              Yes, you can cancel your membership at any time. Please note that
              we require a 30-day notice for all cancellations. You can initiate
              the cancellation process by visiting the front desk or through
              your online account.
            </div>
          </details>

          <details className="border border-gray-800 group">
            <summary className="flex justify-between items-center p-4 cursor-pointer text-white">
              Can I freeze my membership?
              <span className="text-xl">+</span>
            </summary>
            <div className="p-4 pt-0 text-gray-400">
              Yes, you can freeze your membership for up to 3 months per year.
              There is a small monthly fee to maintain your account while
              frozen. Please contact our membership team to arrange this.
            </div>
          </details>

          <details className="border border-gray-800 group">
            <summary className="flex justify-between items-center p-4 cursor-pointer text-white">
              What is the class cancellation policy?
              <span className="text-xl">+</span>
            </summary>
            <div className="p-4 pt-0 text-gray-400">
              We ask that you cancel at least 6 hours before your scheduled
              class to avoid a late cancellation fee. You can cancel through our
              app, website, or by calling the gym directly.
            </div>
          </details>

          <details className="border border-gray-800 group">
            <summary className="flex justify-between items-center p-4 cursor-pointer text-white">
              What kinds of classes are right for me?
              <span className="text-xl">+</span>
            </summary>
            <div className="p-4 pt-0 text-gray-400">
              We offer a variety of classes for all fitness levels. If you're
              new, we recommend starting with our beginner-friendly classes or
              scheduling a consultation with one of our trainers who can help
              create a personalized plan based on your goals.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
