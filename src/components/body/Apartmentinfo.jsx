import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ApartmentDetails.css";

const ApartmentDetails = () => {
  return (
    <div className="apartment">
      <div className="hosted">
        <div className="left-side">
          <h3>Entire rental unit in Lima, Peru</h3>
          <ul>
            <li>2 guests</li>
            <li>1 room</li>
            <li>1 bed</li>
            <li>1 bath</li>
          </ul>
          <div className="inline-star">
            <FontAwesomeIcon icon={faStar} />
            <h5>New</h5>
          </div>
          <hr />
          <HostInfo
            image="/w3.png"
            name="w3engineers Ltd"
            info={["Superhost", "7 years hosting"]}
          />
          <HostInfo
            image="/w3.png"
            name="Self check in"
            info={["Check yourself in the smartlock"]}
          />
          <HostInfo
            image="/w3.png"
            name="Samayun is superhero"
            info={["Superhost are experienced, highly rated host"]}
          />
        </div>

        <div className="right-side">
          <div class="containerApart">
            <h2>Add dates for prices</h2>
            <div class="date-picker">
              <div>
                CHECK-IN <br></br>Add date
              </div>
              <div>
                CHECKOUT <br></br>Add date
              </div>
            </div>
            <div class="guest-picker">
              <select>
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
              </select>
            </div>
            <button class="button">Check availability</button>
            <a href="/" class="link">
              Report this listing
            </a>
          </div>
        </div>
      </div>
      <div className="descript">
        <p>
          Some info has automatically translated. <a href="/">link text</a>
        </p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
            quae optio temporibus ad veniam accusantium nisi dignissimos
            voluptate nulla harum sed vitae dolores ullam ut odio esse a
            quibusdam doloribus illo delectus tenetur neque, libero fugit. Sequi
            itaque ea velit ex aliquam impedit, ullam quo commodi vitae
            inventore est esse. Voluptas amet explicabo, nam cumque error velit
            at hic earum facere, placeat ut asperiores, a obcaecati eveniet eos
            quos. Reprehenderit sed cupiditate repellendus enim dolorem ipsam
            officia ea magnam pariatur illum adipisci corporis exercitationem,
            porro quod corrupti vitae. Deleniti a vitae voluptate quasi cum
            repudiandae iste quidem, ipsam consequuntur.
          </p>
        </div>
        <p>
          <a href="/">See More</a>
        </p>
      </div>
    </div>
  );
};

const HostInfo = ({ image, name, info }) => {
  return (
    <div className="left-side-1">
      <div className="profile-img">
        <img src={image} alt="" />
      </div>
      <div className="profile-info">
        <div>
          <p className="emp">{name}</p>
        </div>
        <div>
          {Array.isArray(info) ? (
            <ul>
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{info}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
