import eligibilityimg from "../Assets/eligibilityimg.png"
export default function Eligibility() {
  return (
      <div className="div-4-text-img container">
        <div id="div-4-img">
         <img src={eligibilityimg}></img>
        </div>
        <div id="div-4-text">
          <h1>Check your Eligibility For Qualification Test</h1>
          <div class="eligibility-points">
            <li>
              Minimum of 60% / First Class or equivalent in SSC,Graduate
              (BE/B.Tech)/Post-Graduate(MCA)
            </li>
            <li>
              Minimum of 60% (equivalent) or above in HSC & Diploma (incase
              done)
            </li>
            <li>
              Not more than 1 year gap since SSC and that too not after joining
              a course Means,no loss of academic year after joining a course
            </li>
            <li>
              Computer Science,Computer Engineering, Electronics &
              Telecommunication, Electronics, Communication, MCA and M.Sc
              Computer Science, IT
            </li>
            <div id="div-4-button">
              <a href="#content">
                <button>APPLY NOW</button>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
