import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
 
export function SimpleCard() {
  return (
    <Card className="mt-10 sm:w-102 rounded-lg shadow-lg bg-white mx-6">
    <CardBody className="p-6">
        <div className="w-full h-full sm:mx-2">
            {/* <LiteYouTubeEmbed 
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
            /> */}
            <iframe
              width="560"
              height="250"
              src="https://www.youtube.com/embed/PhzlMQ8-GE4?si=y667CiUsTqjbGlGM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-[100%] mx-auto sm:px-1 md:px-3"
            ></iframe>
            <p className="text-lg text-center">What’s new in Material Design for the web (Chrome Dev Summit 2019)</p> 
        </div>
    </CardBody>
</Card>

  );
}