import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JobList from './JobList';
import JobDetail from './JobDetail';
import NotFoundPage from './NotFound';
import GetJobInfo from './API';

export const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false)
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJobList() {
      setLoading(true);
      try {
        const response = await GetJobInfo();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobList();
  }, []);

  const findJob = id => {
    try {
      const Job = data?.find(job => job.id === id);
      setJob(Job);
      setLoading(true);
      console.log('loader', loading);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log('job', Job);

  // console.log('job', Job);

  const leftDays = createdAt => {
    const date = createdAt;
    let currentDate = Date.parse(new Date());
    let days = (currentDate - Date.parse(date)) / 86400000; //86400000 - ms в дне
    return Math.round(days);
  };

  const jobPicture = pictures => {
    const picture = Math.floor(Math.random() * pictures.length);
    return pictures[picture];
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <JobList
              data={data}
              loading={loading}
              jobPicture={jobPicture}
              leftDays={leftDays}
              findJob={findJob}
            />
          }
        />
        <Route
          path="/detail"
          element={
            <JobDetail job={job} loading={loading} leftDays={leftDays} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
