import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Uploaded by: Encore +, Nov 6, 2017
            1.19M Views·30.2K Likes
            Recipient of the Academy Award for"
            price={10}
            image="https://image.slidesharecdn.com/theoldmanandthesea-150405063826-conversion-gate01/95/the-old-man-and-the-sea-1-638.jpg?cb=1428216174"
            rating={5}
          />
          <Product
            title="This is the best car I have ever seen in the world"
            price={5000}
            image="https://i.ytimg.com/vi/7PXLPzcIydw/hqdefault.jpg"
            rating={5}
          />
          {/* <Product /> */}
        </div>
        <div className="home__row">
          <Product
            title="GC Fashion - Offering Embroidered Royskart Ladies Party Wear Saree at Rs 1580/piece in Bengaluru, Karnataka. Read about company. "
            price={500}
            image="https://5.imimg.com/data5/JD/OW/MY-43862582/ladies-party-wear-saree-500x500.jpg"
            rating={4}
          />
          <Product
            title="Customers who viewed eAirtec 81 cm (32 inches) HD Ready LED TV 32DJ (Black) (2020 Model) also viewed"
            price={350}
            image="https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SL1500_.jpg"
            rating={3}
          />
          <Product
            title="Customers who viewed Canon PowerShot SX420 Digital Camera w/ 42x Optical Zoom - Wi-Fi & NFC… also viewed"
            price={400}
            image="https://images-na.ssl-images-amazon.com/images/I/41kpkeoa2cL._AC_SX355_.jpg"
            rating={5}
          />
          {/* <Product />
          <Product /> */}
        </div>

        <div className="home__row">
          <Product
            title="Get your family’s laundry washed hassle-free with this freestanding Siemens extraKlasse washing machine. "
            price={500}
            image="https://07a4a3f115bff5e16e10-cd4f3e09ffbcc3a9c17353140ea0a299.ssl.cf3.rackcdn.com/images/products/WM14T481GB_278_278.jpg"
            rating={5}
          />
          <Product
            title="Perfect for smaller bedrooms
            The Jackson is a key inclusion of the Sleep Savers upholstery range at Forty Winks. "
            price={490}
            image="https://www.fortywinks.com.au/getmedia/f4614e1e-9b00-476b-bdcd-e28afa3d34db/jackson_bed_frame-front.jpg?width=1000"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
