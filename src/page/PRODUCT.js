import React from "react";
import Stansmith from "./image/stansmith.jpg";
import Jordan from "./image/jordan.png";
function PRODUCT() {
  return (
    <>
      <section className="product">
        <h2>React State & Props</h2>
        <div className="product_list">
          <figure>
            <img src={Stansmith} alt="이미지"></img>
            <figcaption>
              ADIDAS STAN SMITH <br />
              Price: $120
            </figcaption>
          </figure>
          <figure>
            <img src={Jordan} alt="이미지"></img>
            <figcaption>
              AIR JORDAN <br />
              Price: $150
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default PRODUCT;
