import {Box, Container} from "@mui/material";

import {FC} from "react";
import {JobCard} from "../../components/Card/JobCard.tsx";
import {SummaryCard} from "../../components/Card/SummaryCard.tsx";
import {useGetAllJobs} from "../../api/job/getJobs.ts";


const JobsPage: FC = () => {
    const { data } = useGetAllJobs()
    console.log(data)
  const jobContent = [
    {
      id: "asfasdfasd",
      logo: "asdfasdf",
      positionName: "asfasdfasd",
      companyName: "DSAfsadf",
    },
    {
      id: "asfasdfasd",
      logo: "asdfasdf",
      positionName: "asfasdfasd",
      companyName: "DSAfsadf",
    },
    {
      id: "asfasdfasd",
      logo: "asdfasdf",
      positionName: "asfasdfasd",
      companyName: "DSAfsadf",
    },
    {
      id: "asfasdfasd",
      logo: "asdfasdf",
      positionName: "asfasdfasd",
      companyName: "DSAfsadf",
    },
  ];
  return (
    <Container>
      <SummaryCard title={"sdfasd"} subtitle={"sdfasdf"} />
      <Box>
        {jobContent.map(({ id, logo, positionName, companyName }, index) => (
          <JobCard
            key={index}
            id={id}
            logo={logo}
            positionName={positionName}
            companyName={companyName}
          />
        ))}
          -------
          {/*{data.map(({ id, logo, positionName, companyName }, index) => (*/}
          {/*    <JobCard*/}
          {/*        key={index}*/}
          {/*        id={id}*/}
          {/*        logo={logo}*/}
          {/*        positionName={positionName}*/}
          {/*        companyName={companyName}*/}
          {/*    />*/}
          {/*))}*/}
      </Box>
    </Container>
  );
};
export default JobsPage;
