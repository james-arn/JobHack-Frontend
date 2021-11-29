import { useState } from "react";
import { jobModel } from "../../jobModel";
import { JobsComponent } from "../JobsComponent/JobsComponent";
import "./Find.css";

export const Find = () => {
  const [jobName, setJobName] = useState("");
  const [location, setLocation] = useState("");
  const [fetchedJobs, setFetchedJobs] = useState([]);

  const fetchURL = async () => {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=14758e80&app_key=b7bdf1e68baa9af01ec4a64dbfe8d2b3&where=${location}&what=${jobName}`
    );
    const response = await data.json();
    let fetchedJobsArray = [];

    for (let i = 0; i < response.results.length; i++) {
      const companyName = response.results[i].company.display_name;
      const jobTitle = response.results[i].title;
      const description = response.results[i].description;
      const salary = response.results[i].salary_min;

      const fetchedJob = new jobModel(
        jobTitle,
        companyName,
        description,
        salary
      );
      fetchedJobsArray.push(fetchedJob);
    }
    setFetchedJobs(fetchedJobsArray);
    setJobName("");
    setLocation("");
  };

  return (
    <div>
      <div className="search-criteria">
        <div className="find-col-1">
          <label className="job-name-label label">Job Name</label>
          <input
            classname="input"
            onChange={(e) => setJobName(e.target.value)}
          ></input>
        </div>
        <div className="find-col-2">
          <label className="job-location-label label">Location</label>
          <input
            classname="find-input"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <button className="job-search-button" onClick={fetchURL}>
          Search
        </button>
      </div>
      {fetchedJobs.length > 1 ? (
        <div style={{ display: "block" }}>
          <JobsComponent fetchedJobs={fetchedJobs} />
        </div>
      ) : (
        <div>Please search for jobs here..</div>
      )}
    </div>
  );
};
