import Image from "next/image";
import { FunctionComponent } from "react";

interface BookSectionProps {}

const BookSection: FunctionComponent<BookSectionProps> = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl xl:relative">
        <div className="bg-green-800 flex flex-col lg:flex-row items-center justify-evenly py-14 px-8 rounded-3xl">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Talk to us to discuss
            </h1>

            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Don&apos;t worry, we&apos;re here to help. You
              can fill in the form on the right to schedule a meeting with
              us—completely free.
            </p>
          </div>

          <div className="right-0">
            <Image src="/image/book.png" alt="Image" width={638} height={689} />
          </div>

          <div className="bg-white xl:relative px-6 py-3 rounded-3xl">
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Book a meeting
              </h3>
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Date"
                className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />

              <div className="inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="calendar"></i>
              </div>
            </div>

            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Virtual Meeting"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />

              <div className="inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="chevron-down"></i>
              </div>
            </div>

            <div className="py-3">
              <button className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
