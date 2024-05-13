const ExtraTwo = () => {
  return (
    <div>
      <div className="bg-[#2980B9] text-white mt-5">
        <h1 className="text-center text-2xl font-semibold text-white my-6 pt-6">HOW WE WORK</h1>
        <h1 className="text-center text-xl font-semibold text-white">Our Repair Process</h1>
        <p className="text-center font-semibold text-white">
          Our repairing process for electronics is dynamic and can vary
          depending on the type of device and nature of the issue. Professional
          repair services prioritize precision, efficiency, and customer
          satisfaction to deliver effective solutions and extend the lifespan of
          electronic devices.
        </p>
        <div className="grid lg:md:grid-cols-3 gap-6">
          <div className="border-2 border-white rounded-xl p-4 m-4 ">
            <h1 className="text-xl font-semibold mb-1">Drop off Broken Device</h1>
            <p>
              By implementing a well-organized and customer-centric drop-off
              process, you can enhance customer satisfaction and streamline
              device repairs
            </p>
            <p>01.</p>
          </div>
          <div className="border-2 border-white rounded-xl p-4 m-4 ">
            <h1 className="text-xl font-semibold mb-1">Quick Device Repair</h1>
            <p>
              As a quick device repair service provider, I prioritize
              efficiency, quality, and customer satisfaction. My goal is to
              restore devices to optimal functionality promptly, ensuring that
              customers receive reliable repairs at competitive prices.
            </p>
            <p>02.</p>
          </div>
          <div className="border-2 border-white rounded-xl p-4 m-4 ">
            <h1 className="text-xl font-semibold mb-1">Pick Up Repaired Device</h1>
           
            <p>
              At [Your Repair Service Name], we prioritize customer convenience
              and satisfaction throughout the repair process, including device
              pickup.
            </p>
            <p>03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraTwo;
