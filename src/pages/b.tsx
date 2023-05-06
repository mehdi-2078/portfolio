const B = () => {
  return (
    <div className="w-[96%] mx-auto text-white pt-16">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row my-8">
        <div className="ml-0 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 right-[50%] border-[#FFC100] absolute h-full border"
                // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
              ></div>
              <div
                className="border-2-2 left-[50%] border-[#FFC100] absolute h-full border"
                // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
              ></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Pick your favourite event(s) and register in that event by filling the form
                    corresponding to that event. Its that easy :)
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Participate online. The links for your registered events will be sent to you via
                    email and whatsapp groups. Use those links and show your talent.
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    The ultimate genius will be revealed by our judging panel on 10th May, 2021 and
                    the resukts will be announced on the whatsapp groups and will be mailed to you.
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4">
                  <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                  <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                    Prize Distribution
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    The winners will be contacted by our team for their addresses and the winning
                    goodies will be sent at their addresses.
                  </p>
                </div>
              </div>
            </div>
            {/* <Image */}
            {/*  className="mx-auto -mt-36 md:-mt-36" */}
            {/*  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" */}
            {/*  alt="image" */}
            {/* /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default B;
