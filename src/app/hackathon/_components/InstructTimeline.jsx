import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const instr = [
    "Login or register to Anokha." , 
      "Click to register for the event.",
      "Register for Intel Developer Cloud and copy-paste the Cloud ID into the forms.",
      "Repeat the process for all team members.",
      "The team leader must for enter each team member's Anokha registered email and Intel Developer Cloud ID.",
      "After filling in team details, submit the solution presentation.",
      "Click the Submit button."
    
]

export function TimelineWithIcon() {
  return (
    <div className="sm:w-[95%] md:w-[70%] mx-auto mt-6 bg-white p-5 rounded-xl bg-opacity-70 relative md:px-[60px]">
      <Timeline>
        {instr.map((val, id)=>(
            <TimelineItem key={id} className="my-3">
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 px-4">{id+1}</TimelineIcon>
              <Typography variant="h5">
                {val}
              </Typography>
            </TimelineHeader>
            {/* <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it this way, it took me
                  twenty five years to get these plants, twenty five years of blood sweat and tears, and
                  I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                  luv.
                </Typography>
              </TimelineBody> */}
          </TimelineItem>
        ))}
        
      </Timeline>
    </div>
  );
}
