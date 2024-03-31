import banner from "../assets/undraw_fashion_blogging_re_fhi5.svg";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
      <Banner
        banner={banner}
        heading={"Develop your skills without diligence"}
        subheading={
          " A good example of a paragraph contains a topic sentence, details" +
          "and a conclusion. There are many different kinds of animals that" +
          "live in China.v"
        }
        btn1={"Get Started"}
        btn2={"Discount"}
      />
    </div>
  );
};
export default Home;
