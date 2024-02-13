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
              src="https://www.youtube.com/embed/L2vS_050c-M?si=h2wAEa83j0EPbIgY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-[95%] mx-auto"
            ></iframe>
            <p className="text-lg">What’s new in Material Design for the web (Chrome Dev Summit 2019)</p> 
        </div>
    </CardBody>
</Card>

  );
}