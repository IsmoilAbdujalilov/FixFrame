import { Link } from "react-router-dom";
import "./style.scss";
import {
  HeroImage4,
  ServicesImage1,
  ServicesImage2,
  ServicesImage3,
  ServicesImage4,
  ServicesImage5,
  ServicesImage6,
} from "assets/images/jpg";

const Services = () => {
  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage4})`,
  };

  type servicesDataTypes = {
    id: number;
    image: string;
    title: string;
  };

  const servicesData: servicesDataTypes[] = [
    {
      id: 1,
      image: ServicesImage1,
      title: "Inspection Services and Lawn Mainten...",
    },
    {
      id: 2,
      image: ServicesImage2,
      title: "Debris removal",
    },
    {
      id: 3,
      image: ServicesImage3,
      title: "Securing and Boarding",
    },
    {
      id: 4,
      image: ServicesImage4,
      title: "Property winterization",
    },
    {
      id: 5,
      image: ServicesImage5,
      title: "Maid Service (Cleaning)",
    },
    {
      id: 6,
      image: ServicesImage6,
      title: "Repairs and Damages",
    },
  ];

  return (
    <section className="services">
      <section style={backgroundStyle} className="services__background">
        <div className="container">
          <h1 className="services__background-title">Services We Provide</h1>
          <p className="services__background-text">
            We manage construction projects comprehensively, ensuring top-notch
            quality and timely delivery. Our property preservation services
            maintain and safeguard properties, and we excel in mold remediation
            for health and safety. In roofing, we handle repairs and
            installations, while our remodeling prowess transforms spaces to
            perfection. Our commitment to compliance drives efficient code
            violations resolution.
          </p>
        </div>
      </section>

      <div className="container">
        <ul className="services__cards">
          {servicesData.length > 0 &&
            servicesData.map((el: servicesDataTypes) => {
              return (
                <li className="services__card" key={el.id}>
                  <img
                    width={400}
                    height={350}
                    src={el.image}
                    className="services__card-image"
                    alt="Inspection Services and Lawn Mainten..."
                  />
                  <div className="services__content">
                    <h2 className="services__content-title">{el.title}</h2>
                    <hr className="services__content-horizontal-rule" />
                    <Link
                      to={`/pages/services/${el.id}`}
                      className="services__content-link"
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
