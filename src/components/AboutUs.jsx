
import Button from "./Button";

function AboutUs(){
  

  return (
    <section className="flex flex-col md:flex justify-center ">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold my-2">About Us</h1>
          <p className="text-center text-xl font-serif font-thin mx-2">
            Welcome to Learn X, where we are reshaping the future of education.
            Founded in 2020, we have been at the forefront of educational
            innovation, serving over 1 million learners across 50 countries.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center mt-5 font-bold text-3xl">Our Vision</h1>
          <p className="text-xl text-center font-thin font-serif mx-4">We are here to help every get familiar with the web and how you can build product for it and also
            earned a money
          </p>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <h2 className="text-center font-bold mt-6 text-3xl ">Our Statistics</h2>
            </div>
            <div className="flex flex-col gap-4  md:flex-row md:gap-[200px] mt-5">
              <div className="flex flex-col flex-1  text-center">
                <h3 className="font-bold text-2xl ">1M+</h3>
                <p className="text-xl font-thin">Learners</p>
              </div>
              <div className="flex flex-col text-center flex-1">
                <h3 className="font-bold text-2xl ">50+</h3>
                <p className="font-thin text-xl">Countries</p>
              </div>
              <div className="flex flex-col text-center flex-1">
                <h3 className="font-bold text-2xl">100+</h3>
                <p className="font-thin text-xl">Courses</p>
              </div>
            </div>  
          </div>
        </div>

        <div className="flex flex-col mt-10 text-center items-center">
          <h2 className="text-3xl font-bold font-mono ">Join Our Learning Community</h2>
          <p className="text-xl font-thin mx-2">Experience the future of education today!</p>
          <Button name="Get Started" classname='text-white bg-black px-4 py-2  rounded-md mt-2 ' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
