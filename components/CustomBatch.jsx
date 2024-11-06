import { Badge, Button } from "@nextui-org/react";
// import { NotificationIcon } from "./NotificationIcon";
import { IoBagOutline } from "react-icons/io5";


export default function CustomBatch({ icon, notifiactionCount }) {
    return (
        <Badge className="text-sm bg-white border-none font-gelasio font-semibold" placement="bottom-left" content={notifiactionCount} shape="circle" >
            <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
                className="text-[#eeeeee]"
            >
                <IoBagOutline size={24} />
            </Button>
        </Badge>
    );
}