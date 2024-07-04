import "./style.scss";
import { useRef } from "react";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  CarouselIcon1,
  CarouselIcon2,
  Media1,
  Media2,
  Media3,
} from "assets/images/svg";
import {
  HeroImage2,
  NewsImage2,
  NewsImage3,
  NewsImage4,
  NewsImage5,
} from "assets/images/jpg";

const News = () => {
  const navigate = useNavigate();

  const arrowLeftBtnRef = useRef<HTMLButtonElement | null>(null);
  const arrowRightBtnRef = useRef<HTMLButtonElement | null>(null);
  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage2})`,
  };

  const navigateNewsViewPost = () => navigate("/pages/news/1");

  return (
    <section className="news">
      <div className="news__background" style={backgroundStyle}>
        <div className="container">
          <h2 className="news__background-title">News</h2>
          <p className="news__background-text">
            Credibly reintermediate backend ideas for cross-platform models.
            Continually reintermediate integrated processes through technically
            sound intellectual capital. Holistically foster superior
            methodologies without market-driven best practices.
          </p>
        </div>
      </div>

      <div className="container">
        <ul className="news__cards">
          <li className="news__card">
            <div className="news-carousel">
              <Swiper
                loop
                autoplay={{
                  delay: 2500,
                }}
                modules={[Navigation, Autoplay]}
                className="news-carousel__list"
                navigation={{
                  nextEl: ".news-buttons__btn--right",
                  prevEl: ".news-buttons__btn--left",
                }}
              >
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage2}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage3}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage4}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage5}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <div className="news-buttons">
                  <Button
                    type="button"
                    buttonRef={arrowLeftBtnRef}
                    className="news-buttons__btn news-buttons__btn--left"
                  >
                    <img
                      alt="icon"
                      width={32}
                      height={32}
                      src={CarouselIcon1}
                      className="news-buttons__btn-image"
                    />
                  </Button>
                  <Button
                    type="button"
                    buttonRef={arrowRightBtnRef}
                    className="news-buttons__btn news-buttons__btn--right"
                  >
                    <img
                      alt="icon"
                      width={32}
                      height={32}
                      src={CarouselIcon2}
                      className="news-buttons__btn-image"
                    />
                  </Button>
                </div>
              </Swiper>
            </div>

            <hr className="news__card-horizontal-rule" />

            <div className="news__content">
              <h3 className="news__content-title">
                Transforming Spaces:Experts in Retail and Residential
                Construction Services bu FixFrame Inc.
              </h3>

              <p className="news__content-text">
                Creating an inviting ambiance and an captivating design can
                continually draw devoted customers to your business. From the
                outward appearance to the internal intricacies, every facet of a
                retail establishment mirrors your brand and plays a crucial role
                in advancing your business growth. Understanding the
                significance of your business in the future is essential for
                retail development...
              </p>
            </div>

            <footer className="news-footer">
              <ul className="news-footer__medias">
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media1}
                      alt="FixFrame instagram"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media2}
                      alt="FixFrame facebook"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media3}
                      alt="FixFrame twitter"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
              </ul>

              <Button
                type="button"
                className="news-footer-btn"
                onClick={navigateNewsViewPost}
              >
                Continue reading
              </Button>
            </footer>
          </li>
          <li className="news__card">
            <div className="news-carousel">
              <Swiper
                loop
                autoplay={{
                  delay: 2500,
                }}
                modules={[Navigation, Autoplay]}
                className="news-carousel__list"
                navigation={{
                  nextEl: ".news-buttons__btn--right",
                  prevEl: ".news-buttons__btn--left",
                }}
              >
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage2}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage3}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage4}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="news-carousel__item">
                  <img
                    height={520}
                    src={NewsImage5}
                    alt="news-image-5"
                    className="news-carousel__item-image"
                  />
                </SwiperSlide>
                <div className="news-buttons">
                  <Button
                    type="button"
                    buttonRef={arrowLeftBtnRef}
                    className="news-buttons__btn news-buttons__btn--left"
                  >
                    <img
                      alt="icon"
                      width={32}
                      height={32}
                      src={CarouselIcon1}
                      className="news-buttons__btn-image"
                    />
                  </Button>
                  <Button
                    type="button"
                    buttonRef={arrowRightBtnRef}
                    className="news-buttons__btn news-buttons__btn--right"
                  >
                    <img
                      alt="icon"
                      width={32}
                      height={32}
                      src={CarouselIcon2}
                      className="news-buttons__btn-image"
                    />
                  </Button>
                </div>
              </Swiper>
            </div>

            <hr className="news__card-horizontal-rule" />

            <div className="news__content">
              <h3 className="news__content-title">
                Transforming Spaces:Experts in Retail and Residential
                Construction Services bu FixFrame Inc.
              </h3>

              <p className="news__content-text">
                Creating an inviting ambiance and an captivating design can
                continually draw devoted customers to your business. From the
                outward appearance to the internal intricacies, every facet of a
                retail establishment mirrors your brand and plays a crucial role
                in advancing your business growth. Understanding the
                significance of your business in the future is essential for
                retail development...
              </p>
            </div>

            <footer className="news-footer">
              <ul className="news-footer__medias">
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media1}
                      alt="FixFrame instagram"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media2}
                      alt="FixFrame facebook"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
                <li className="news-footer__media">
                  <a className="news-footer-link" target="_blank" href="#">
                    <img
                      width={32}
                      height={32}
                      src={Media3}
                      alt="FixFrame twitter"
                      className="news-footer__media-image"
                    />
                  </a>
                </li>
              </ul>

              <Button
                type="button"
                className="news-footer-btn"
                onClick={navigateNewsViewPost}
              >
                Continue reading
              </Button>
            </footer>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
