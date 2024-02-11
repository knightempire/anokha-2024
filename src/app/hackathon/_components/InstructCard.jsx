import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function SimpleCard({title,description}) {
  return (
    <Card className="mt-26 w-100">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}