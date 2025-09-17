import {BallotIcon, Diversity3Icon, EventIcon, QuestionAnswerIcon, WorkIcon} from "./icon.logic.ts";
import {pollItem} from "../../data/poll.ts";
import {PollItem} from "../../components/Poll/PollItem.tsx";
import {jobsItem} from "../../data/jobs.ts";
import {JobItem} from "../../components/Job/JobItem.tsx";
import {eventsItems} from "../../data/events.ts";
import {EventItem} from "../../components/Event/EventItem.tsx";
import {MembersCard} from "../../components/Card/MembersCard.tsx";
import {membersItems} from "../../data/members.ts";
import {HomeCard} from "../../components/Card/HomeCard.tsx";


export default function Home() {
  const cards = [
    {
      icon: QuestionAnswerIcon,
      label: "الديوان",
      path: "discussion",
      content: (
        <div>
          <h1>الديوان</h1>
          <p>Discussion content goes here.</p>
        </div>
      ),
    },
    {
      icon: BallotIcon,
      label: "تصويت",
      path: "poll",
      content: pollItem
        .slice(0, 3)
        .map(({ question, totalAnswers, id }, index) => (
          <PollItem
            key={index}
            id={id}
            question={question}
            totalVotes={totalAnswers}
          />
        )),
    },
    {
      icon: WorkIcon,
      label: "فرص العمل",
      path: "jobs",
      content: jobsItem.map(({ logo, position, company }, index) => (
        <JobItem
          key={index}
          logo={logo}
          position={position}
          company={company}
          path={""}
        />
      )),
    },
    {
      icon: EventIcon,
      label: "فعالياتنا الجاي",
      path: "event",
      content: eventsItems.map(
        ({ name, image, location, registration, date }, index) => (
          <EventItem
            userNumber={25}
            key={index}
            name={name}
            location={location}
            image={image}
            date={date}
            registration={registration}
            id={"23"}
          />
        ),
      ),
    },
    {
      icon: Diversity3Icon,
      label: "مجموعتي",
      path: "group",
      content: <MembersCard members={membersItems} />,
    },
  ];
  return (
    <>
      <main style={{ padding: "10px" }}>
        {cards.map(({ label, path, content, icon }, index) => (
          <HomeCard key={index} path={path} label={label} Icon={icon}>
            {content}
          </HomeCard>
        ))}
      </main>
      <footer></footer>
    </>
  );
}
