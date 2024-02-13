import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard() {
  return (
    <Card className="mt-10 sm:w-200 md:mx-auto md:w-full rounded-lg shadow-lg bg-white mx-6">
    <CardBody className="p-6">
        <div className="w-full h-full sm:mx-2">
            <iframe
              width="102"
              height="280"
              src="https://www.youtube.com/embed/PhzlMQ8-GE4?si=y667CiUsTqjbGlGM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-[100%] mx-auto sm:px-1 md:px-3"
            ></iframe>
            <p className="text-lg text-center">Steps to register for the event</p> 
        </div>
    </CardBody>
</Card>

  );
}