import { MdStar } from "react-icons/md";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Digital Shopping Hub juction</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesqu. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu
        </p>
        <div>
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176k
            <span className="regular-16 sm:regular:15">Excellent Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
