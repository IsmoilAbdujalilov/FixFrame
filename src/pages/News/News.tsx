import "./style.scss";
import {
  HeroImage1,
  contactHouseImage1,
  contactHouseImage2,
  contactHouseImage3,
  contactHouseImage4,
} from "assets/images/jpg";

const News = () => {
  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage1})`,
  };

  return (
    <section className="news">
      <h1 className="visually-hidden">FixFrame news</h1>
      <div className="news__background" style={backgroundStyle}>
        <div className="container">
          <h2 className="news__background-title">
            Mold Remediation and Inspection Services
          </h2>
          <p className="news__background-text">
            At FixFrame Inc., we recognize the significance of a healthy living
            environment for you and your family. Mold can pose a hidden danger,
            lurking in corners and crawlspaces, undermining your home’s
            structure.
          </p>
        </div>
      </div>

      <div className="container">
        <ul className="news__houses">
          <li className="news__house">
            <img
              height={410}
              src={contactHouseImage1}
              alt="contact-house-image-1"
              className="news__house-image"
            />
          </li>
          <li className="news__house">
            <img
              height={410}
              src={contactHouseImage2}
              alt="news-house-image-2"
              className="news__house-image"
            />
          </li>
          <li className="news__house">
            <img
              height={410}
              src={contactHouseImage3}
              alt="news-house-image-3"
              className="news__house-image"
            />
          </li>
          <li className="news__house">
            <img
              height={410}
              src={contactHouseImage4}
              alt="news-house-image-4"
              className="news__house-image"
            />
          </li>
        </ul>
      </div>

      <div className="container">
        <ul className="news__questions">
          <li className="news__question">
            <h3 className="news__question-title">Our Expertise:</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  At FixFrame Inc., we've perfected the craft of mold
                  remediation. Our team of expert professionals blends
                  state-of-the-art technology with extensive experience to
                  provide thorough mold removal and prevention services. We
                  treat every project with the utmost seriousness, regardless of
                  its scale or complexity, and tackle each one with meticulous
                  attention and dedication.
                </p>
              </li>
            </ul>
          </li>
          <li className="news__question">
            <h3 className="news__question-title">Why Choose FixFrame?</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  Qualified Experts: Our technicians hold certifications from
                  top industry organizations, ensuring that your mold issue
                  receives the utmost professional attention.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  Cutting-edge Technology: We employ advanced equipment and
                  techniques for mold inspection, elimination, and prevention,
                  ensuring effective and long-lasting outcomes.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  Tailored Approaches: Each mold situation is distinct. We
                  customize our solutions to fit your exact requirements,
                  addressing the underlying cause rather than just the surface
                  issues.
                </p>
              </li>
            </ul>
          </li>
          <li className="news__question">
            <h3 className="news__question-title">Our Services:</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  Mold Assessment: Our specialists perform thorough assessments
                  to determine the type and scope of mold presence in your
                  premises.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  Mold Eradication: Employing state-of-the-art methods, we
                  securely and efficiently eliminate mold from your property,
                  preventing its recurrence.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  Preventive Actions: We enact preventive measures to deter mold
                  reappearance, safeguarding your residence and well-being for
                  the future.
                </p>
              </li>
            </ul>
          </li>
          <li className="news__question">
            <h3 className="news__question-title">Health and Safety:</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  At FixFrame, your health is our foremost concern. Mold can
                  lead to various health concerns, such as allergies and
                  respiratory issues. We adhere to strict safety measures to
                  safeguard both our crew and your household throughout the
                  remediation procedure. Our dedication to your well-being is
                  steadfast.
                </p>
              </li>
            </ul>
          </li>
          <li className="news__question">
            <h3 className="news__question-title">Service Areas:</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  FixFrame proudly serves homeowners and businesses throughout
                  Chicago and the surrounding regions. We're only a phone call
                  away, prepared to promptly address your mold-related
                  inquiries.
                </p>
              </li>
            </ul>
          </li>
          <li className="news__question">
            <h3 className="news__question-title">news Us:</h3>
            <ul className="news__answers">
              <li className="news__answer">
                <p className="news__answer-text">
                  Don't allow mold to jeopardize your home or health any
                  further. Reach out to Ninja Group Inc today to arrange an
                  inspection or discuss your mold removal requirements. Our
                  helpful team is ready to help you.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  If you think only untidy homes are susceptible to mold, you
                  might be mistaken. Whether it’s your residence or workplace,
                  mold can thrive anywhere. What’s more alarming? Often,
                  homeowners are unaware of mold presence in their homes.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  Unchecked mold growth can pose a health hazard. Left
                  untreated, mold can rapidly spread throughout your property,
                  causing structural damage and impacting its value.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  The longer mold is allowed to flourish, the more harm it can
                  cause.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  To prevent serious health risks, mold growth must be addressed
                  promptly.
                </p>
              </li>
              <li className="news__answer">
                <p className="news__answer-text">
                  We offer mold inspection and remediation services to ensure
                  your home is safe for you and your family. Our mold inspectors
                  meticulously examine your indoor spaces. We utilize advanced
                  technology to detect and assess mold, as well as identify the
                  underlying conditions promoting its growth. Additionally, we
                  provide mold remediation services to restore your home to a
                  healthy environment.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
