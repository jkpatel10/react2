import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
  return (
    <div className="w-full p-4">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="rounded-lg w-full"
            src="https://cococart.in/cdn/shop/files/cc_offer_bundle-WEB_banner.jpg?v=1754905090&width=2000"
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="rounded-lg w-full"
            src="https://cococart.in/cdn/shop/files/web_banner_4.jpg?v=1746188294&width=2000"
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="rounded-lg w-full"
            src="https://cococart.in/cdn/shop/files/Lindt_Banner_1800X800_4649b623-85b8-4fd4-b026-fc859477d7ee.jpg?v=1746530851&width=2000"
            alt=""
          />
        </Carousel.Item>

         <Carousel.Item>
          <img
            className="rounded-lg w-full"
            src="https://cococart.in/cdn/shop/files/Lindt_Kunafa_web_banner.jpg?v=1756458053&width=2000"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
