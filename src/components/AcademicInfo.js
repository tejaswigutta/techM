import { useEffect, useState } from "react";
export default function AcademicInfo({
  formData,
  setFormData,
  page,
  setPage,
  nextPage,
}) {
  function onChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    // console.log(event.target.value);
  }

  function onSubmit(e) {
    nextPage();
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <select onChange={onChange} name="tenthTwelvethScore" required>
          <option value="">Is your 10th, 12th/Diploma marks or CGPA*</option>
          <option value="yes">Greater than 60% or 6.4</option>
          <option value="no">Less than 60% or 6.4</option>
        </select>
      </div>
      <div>
        <select onChange={onChange} name="BeBcaMcaScore" required>
          <option value="">Is your BE or BCA/MCA marks or CGPA*</option>
          <option value="yes">Greater than 60% or 6.4</option>
          <option value="no">Less than 60% or 6.4</option>
        </select>
      </div>
      <div>
        <select onChange={onChange} name="UgPgStream" required>
          <option value="">Under/Post Graduation Stream*</option>
          <option value="yes">Electronics/ECE/EEE/EIE/EME</option>
          <option value="yes">
            Computer science/ IT /Information science{" "}
          </option>
          <option value="yes">BCA</option>
          <option value="yes">MCA</option>
          <option value="no">Others</option>
        </select>
      </div>
      <div>
        <select onChange={onChange} name="educationGap" required>
          <option value=""> Any year gap during your education ?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="form-submit">
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
  );
}
