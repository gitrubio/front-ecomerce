import {cn} from "@/lib/utils";
import { Button } from "./ui/button";

interface IconButtonProps {
  className?: string; 
  onClick?: () => void;
  icon: React.ReactElement;

}

export default function IconButton(props : Readonly<IconButtonProps>) {
  return (
    <Button onClick={props.onClick} 
    className={cn("p-2 rounded-full flex items-center bg-white shadow-md hover:scale-110 transition", props.className)}
    >
        {props.icon}
    </Button>
  )
}
