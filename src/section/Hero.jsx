import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import hero2 from "../assets/hero2.jpg"

const hero = () => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div className="min-h-[90vh] py-20 px-4 md:px-12 lg:px-20 flex flex-col justify-center items-center gap-16" ref={ref}>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black">
            From secure data solutions to modern web platforms, we build innovative digital products{" "}
            <span className="text-[#f19509]">
              and services that empower businesses and individuals to grow in the digital era.
            </span>
          </h2>
          <img src={hero2} alt="Coach" className="rounded-xl shadow-lg w-full max-w-md"/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={83} duration={4} />}K+</h3>
            <p className="text-gray-600 mt-2">Downloads</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={2.5} duration={4} decimals={1}/>}K+</h3>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={4.6} duration={4} decimals={1}/>}</h3>
            <p className="text-gray-600 mt-2">User Rationg</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={2.2} duration={4} separator="," decimals={1}/>}K+</h3>
            <p className="text-gray-600 mt-2">Reviews</p>
          </div>
        </div>
      </div>
  )
}

export default hero