import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
 
export function SimpleCard() {
  return (
    <Card className="mt-10 w-102 rounded-lg shadow-lg bg-white">
    <CardBody className="p-6">
        <div className="w-96 h-68">
            <LiteYouTubeEmbed 
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
            />
        </div>
    </CardBody>
</Card>

  );
}