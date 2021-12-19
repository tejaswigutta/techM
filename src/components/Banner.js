import careerlabslogo from "../Assets/careerlabslogo.png"
export default function Banner() {
  return (
      <div id="content" className="container">
        <div id="content-div-1">
          <h1>Get an Opportunity to be</h1>
          <div id="content-techM">
            <div id="content-techM-placed">
              <h1>placed in </h1>
            </div>
            <div id="content-techM-1"><h1>Tech Mahindra</h1></div>
          </div>
        </div>
        <div id="content-div-2">
          <div id="content-div-2-trained">
            <h1>Trained by</h1>
          </div>
          <div id="content-div-2-cl-img">
              <img src={careerlabslogo}></img>
          </div>
        </div>
        <div id="content-div-3">
          <div id="content-div-3-role">
            <p>
              <strong>Role: Associate Software Engineer</strong>
            </p>
          </div>
          <div id="content-div-3-desc">
            <li>Get training fee reimbursed by Tech Mahindra*</li>
            <li>Get money back from CareerLabs if you can't clear*</li>
            <li>Training Fee EMI starts at @ Rs.5999</li>
          </div>
        </div>
        <div id="content-div-4">
          <p>*Terms and Conditions Apply</p>
        </div>
      </div>
  );
}
