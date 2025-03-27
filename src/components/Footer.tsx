const Footer = () => {
  return (
    <footer className="bg-black">
      {/* CTA Section */}
      <div className="flex flex-col md:flex-row gap-4  md:justify-between items-center max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold italic">
          <span className="text-yellow-500">BOOK A SESSION</span>
          <span className="text-white">
            {" "}
            AND START YOUR
            <br />7 DAY TRIAL TODAY!
          </span>
        </h2>

        <a
          href="#"
          className="border border-white text-white px-8 py-4 hover:bg-[#e7e1e1] hover:text-black"
        >
          GET STARTED
        </a>
      </div>

      {/* Footer Links */}
      <div className="border-t-[0.1px]  border-gray-900">
        <div className="flex gap-8 flex-col md:flex-row md:max-w-6xl mx-auto py-12 px-4">
          {/* Quick Links */}
          <div className="w-full flex flex-col gap-3 items-center md:w-1/4 pr-4 border-r-[0.1px]">
            <h3 className="text-white font-bold ">QUICK LINKS</h3>
            <div className="flex flex-col text-center space-y-3">
              <a href="#" className="text-gray-500">
                ABOUT US
              </a>
              <a href="#" className="text-gray-500">
                CONTACT
              </a>
              <a href="#" className="text-gray-500">
                BLOG
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="w-full flex flex-col items-center md:w-1/4 pr-4">
            <h3 className="text-white font-bold mb-6">SERVICES</h3>
            <div className="flex flex-col space-y-3 text-center">
              <a href="#" className="text-gray-500">
                CLASSES TRAINING
              </a>
              <a href="#" className="text-gray-500">
                GROUP TRAININGS
              </a>
              <a href="#" className="text-gray-500">
                MEMBERSHIP
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="w-full flex flex-col items-center md:w-1/4 pr-4">
            <h3 className="text-white font-bold mb-6">SOCIAL</h3>
            <div className="flex flex-col space-y-3 text-center">
              <a href="#" className="text-gray-500">
                FACEBOOK
              </a>
              <a href="#" className="text-gray-500">
                INSTAGRAM
              </a>
              <a href="#" className="text-gray-500">
                TWITTER
              </a>
              <a href="#" className="text-gray-500">
                YOUTUBE
              </a>
            </div>
          </div>

          {/* Template */}
          <div className="w-full flex flex-col items-center md:w-1/4">
            <h3 className="text-white font-bold mb-6">TEMPLATE</h3>
            <div className="flex flex-col space-y-3 text-center">
              <a href="#" className="text-gray-500">
                LICENSING
              </a>
              <a href="#" className="text-gray-500">
                STYLE GUIDE
              </a>
              <a href="#" className="text-gray-500">
                CHANGELOG
              </a>
              <a href="#" className="text-gray-500">
                ICONS BY ICONS8
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
