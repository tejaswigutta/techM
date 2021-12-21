import react from "react-dom";
import Submit from "./Submit";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import { useState } from "react";
import basicDetails from "../Assets/basicDetails.png"
import educationDetails from "../Assets/educationDetails.png"
function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    tenthTwelvethScore: "",
    BeBcaMcaScore: "",
    UgPgStream: "",
    educationGap: "",
  });

  function nextPage() {
    setPage(page + 1);
    if (page === 1) {
      console.log("submit");
      let tenthTwelvethScore = formData.tenthTwelvethScore;
      let BeBcaMcaScore = formData.BeBcaMcaScore;
      let UgPgStream = formData.UgPgStream;
      let educationGap = formData.educationGap;
      console.log(tenthTwelvethScore, BeBcaMcaScore, UgPgStream, educationGap);
      localStorage.setItem("formData", JSON.stringify(formData));
      if (
        tenthTwelvethScore === "yes" &&
        BeBcaMcaScore === "yes" &&
        UgPgStream === "yes" &&
        educationGap === "no"
      ) {
        localStorage.setItem("Program", "TechMahindra");
        console.log("techM");
      } else {
        console.log("clapp");
        localStorage.setItem("Program", "CLAPP");
      }
    }
  }

  function formBody() {
    if (page === 0) {
      console.log("kikiki");
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          nextPage={nextPage}
        />
      );
    } else if (page === 1)
      return (
        <AcademicInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          nextPage={nextPage}
        />
      );
    console.log(page);
  }

  return (
    <div className="App">
      {page==0 && <img class="form-progress-image" src={basicDetails}></img>}
      {page==1 && <img class="form-progress-image" src={educationDetails}></img>}
      {page < 2 && (
        <div>
          <div className="body">{formBody()}</div>
          {/* <div className="footer">
        <button onClick={prevPage} disabled={page==0}>BACK</button>
        <button onClick={nextPage}>{page==0?"NEXT":"SUBMIT"}</button>
      </div> */}
        </div>
      )}
      {page == 2 && <Submit />}
    </div>
  );
}

export default Form;
