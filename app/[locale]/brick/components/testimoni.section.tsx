import Image from "next/image";
import { FunctionComponent } from "react";

interface TestimoniSctionProps {}

const TestimoniSction: FunctionComponent<TestimoniSctionProps> = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6">
          Testimonial
        </p>

        <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14">
          What People Say About Refractory bricks
        </h1>

        <div className="hidden xl:block xl:absolute top-0">
          <Image
            src="/image/testimoni-1.png"
            alt="Image"
            width={176}
            height={104}
          />
        </div>

        <div className="hidden xl:block xl:absolute top-32">
          <Image
            src="/image/testimoni-2.png"
            alt="Image"
            width={61}
            height={61}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-12 mb-10 md:mb-20">
          <div className="bg-gray rounded-lg mb-10 md:mb-0">
            <Image
              src="/image/testimoni-3.png"
              alt="Image"
              width={76}
              height={76}
              className="mx-8 my-8"
            />

            <div className="flex items-center gap-5 mx-8">
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
            </div>

            <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8">
              I recommend anyone to purchase refractory bricks from us. I
              received excellent customer service from the specialists who
              assisted me.
            </p>

            <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">
              Brooklyn Simmons
            </h3>
          </div>

          <div className="bg-gray rounded-lg">
            <Image
              src="/image/testimoni-4.png"
              alt="Image"
              width={76}
              height={76}
              className="mx-8 my-8"
            />

            <div className="flex items-center gap-5 mx-8">
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
              <i data-feather="star" className="text-yellow-500"></i>
            </div>

            <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8">
              We are the best supplier of refractory bricks. I received
              excellent customer service from our expert team.
            </p>

            <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">
              Ralph Edwards
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSction;
