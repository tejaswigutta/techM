import industrycollaboration from "../Assets/industrycollaboration.png";
import checkcircle from "../Assets/check_circle.png";
export default function NowOrNever() {
  return (
      <div className="nowornever">
      <h1>Now or Never, Act Now!</h1>
    <div className="div-6 container">
      <div id="div-6-text-1">
        <div id="terms-and-conditions">
          <h3>Terms & Conditions</h3>
          <li>
            Conditional Offer Letter to be provided to students subject to
            meeting the eligibility criteria, clearing the initial evaluation
            test provided by tech Mahindra and post submission of undertaking
          </li>
          <li>
            Final offer subject to successful completion of training and final
            assessment by Tech Mahindra
          </li>
        </div>
        <div id="early-enrollment-offer">
          <h3>Early Enrollment Offer</h3>
          <li>
            Get in touch with our counsellors for more information.{" "}
            <a href="#content">Apply Now</a>
          </li>
        </div>
        <div id="money-back">
          <h3>Money Back Guarantee by Careerlabs</h3>
          <li>Terms & Conditions apply</li>
        </div>
      </div>
      <div id="div-6-text-2">
        <div>
          <img src={industrycollaboration}></img>
        </div>
        <div>CareerLabs Industry</div>
        <div>Collaboration Program</div>
        <div>
          <div className="div-6-text-2-1">
            <div>
              <img src={checkcircle}></img>
            </div>
            <div>Easy Financing option available</div>
          </div>
          <div className="div-6-text-2-1">
            <div>
              <img src={checkcircle}></img>
            </div>
            <div>Early Enrolment Offer</div>
          </div>
          <div className="div-6-text-2-1">
            <div>
              <img src={checkcircle}></img>
            </div>
            <div>Money Back Guarantee</div>
          </div>
        </div>
        <div className="price">
          <p>Rs. 70,000</p>
          <p>All Inclusive</p>
        </div>
        <div id="div-6-button">
              <a href="#content">
                <button>APPLY NOW</button>
              </a>
            </div>
      </div>
    </div>
    </div>
  );
}
