import careerlabsPaper from "../Assets/careerlabsPaper.png"
import aboutImg from "../Assets/aboutImg.png"
export default function AboutCareerLabs() {
  return (
      <div className="aboutCareerLabs container">
        <h1>CareerLabs - The Brand Trusted by Students</h1>
        <div id="div-3-paper-text">
          <div id="div-3-text">
            <ul>
              <li>Founded by Mr.PN Santosh,Founding member of BYJU'S</li>
              <li>
                Official Partner with <b>AICTE</b> for NEAT 2.0 initiative
              </li>
              <li>
                Raised <b>$2.2 Million</b> from marquee investors
              </li>
              <li>
                Launched <b>Rs.2 Crore worth Scholarship</b> to students
              </li>
              <li>Works with Lakhs of students every year</li>
              <li>Helps students with Placement and Higher Studies</li>
              <li>
                CareerLabs has an understanding with Tech Mahindra for training
                and placement opportunity for select career tracks
              </li>
            </ul>
            <img src={aboutImg} alt="" />
            <div id="div-3-button">
              <a href="#content">
                <button>APPLY NOW</button>
              </a>
            </div>
          </div>
          <div id="div-3-paper">
            <img src={careerlabsPaper}></img>
          </div>
        </div>
      </div>
  );
}
