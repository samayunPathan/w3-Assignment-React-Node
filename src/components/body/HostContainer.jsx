import React from 'react';
import './HostContainer.css'; 
const HostContainer = ({host_information}) => {
  return (
    <div className="user-r">
      <h1>Meet your Host</h1>
      <div className="user-rating">
        <div className="host-card">
          <div className="host-card-1">
            <div className="host-card-1-1">
              <img src="/user-r.jpg" alt="Pranto Pathan" className="host-image" />
              <div className="host-info">
                <h2 className="host-name">{host_information}</h2>
                <span className="superhost-badge">Superhost</span>
              </div>
            </div>
            <div className="host-card-1-2">
              <div>310 Reviews</div>
              <div>4.92★ Rating</div>
              <div>7 Years hosting</div>
            </div>
          </div>
          <div className="host-card-2">
            <h3>Born in 80s</h3>
            <p>My work: Hospitality</p>
            <p>Hello world! I love traveling and welcoming guests to my country, Bangladesh...</p>
            <p><a href="/">see more</a></p>
          </div>
        </div>

        <div className="co-host-card">
          <h3>Fernando is a Superhost</h3>
          <div className="superhost-info">
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
          </div>
          <h3>Co-hosts</h3>
          <div className="co-hosts">
            <div className="co-host-images">
              <img src="/user-s.jpeg" alt="Percy" className="co-host-image" />
              <img src="/user-t.jpg" alt="Raul" className="co-host-image" />
            </div>
          </div>
          <h3>Host details</h3>
          <div className="host-details">
            <p>Response rate: 100%<br />Responds within an hour</p>
          </div>
          <button className="message-button">Message Host</button>
        </div>
      </div>
      <div class="things">
                <h3>Things to Know</h3>
                <div class="things-to">

                    <div class="col-1">
                        <h5>house rules</h5>
                        <p>checking after</p>
                        <p>checking before</p>
                        <p><a href="/">see more</a></p>
                    </div>
                    <div class="col-2">
                        <h5>house rules</h5>
                        <p>checking after</p>
                        <p>checking before</p>
                        <p><a href="/">see more</a></p>
                    </div>
                    <div class="col-3">
                        <h5>house rules</h5>
                        <p>checking after</p>
                        <p>checking before</p>
                        <p><a href="/">see more</a></p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default HostContainer;
