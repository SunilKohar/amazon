import React from "react";
import "./AdFour.css";

const AdFour = () => {
  return (
    <div className="Ad_Four_main">
      <div className="Ad_Four_header">Offers on travel tickets</div>
      <div className="Ad_Four_body">
        <img
          className="image1"
          src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/APAYMOVIE/travelQC/Flight_186x116._SY116_CB618818544_.jpg"
        />
        <div className="imageText">Get up to ₹2000 off on flights</div>
      </div>

      <div className="Ad_Four_body">
        <img
          className="image1"
          src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/APAYMOVIE/travelQC/Train_186x116._SY116_CB618818544_.jpg"
        />
        <div className="imageText">
          Zero payment gateway fees on train tickets
        </div>

        <div className="Ad_Four_body">
          <img
            className="image1"
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/APAYMOVIE/travelQC/Bus_186x116._SY116_CB618818544_.jpg"
          />
          <div className="imageText">Guaranteed rewards on bus tickets</div>
        </div>

        <div className="Ad_Four_body">
          <img
            className="image1"
            src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/G/31/APAYMOVIE/travelQC/Accessory_186x116._SY116_CB618818544_.jpg"
          />
          <div className="imageText">Products for your travel needs</div>
        </div>
      </div>
      <div className="Ad_Four_footer">See More</div>
    </div>
  );
};

export default AdFour;
