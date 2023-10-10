"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import localFont from "next/font/local";
import { useState } from "react";
import AvatarList from "../userManagement/routes/eminent/AvatarList";
import { EminentInput } from "../userManagement/routes/FormInput";
import EminentAvatar from "../userManagement/routes/eminent/EminentAvatar";
import { Button } from "@material-tailwind/react";
import Input from "@/components/ui/Input";

const myFont = localFont({
  src: "../../../public/fonts/Satoshi-Variable.woff2",
});

export default function EditProfile() {
  const [avatar, setAvatar] = useState("abcdef");
  const [client, setClient] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAvatarClick = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  useState(() => {
    setClient(true);
  }, []);
  return (
    <div
      className="w-full rounded-[8px] p-[0.5px]"
      style={{
        background: "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
      }}
    >
      <Card className={"h-full w-full rounded-[8px] bg-transparent pb-[5px]"}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-transparent"
        >
          <div className=" flex flex-col justify-between items-center gap-8 pb-1 relative">
            <div>
              <Typography
                variant="h2"
                color="black"
                className={myFont.className}
              >
                Edit Profile
              </Typography>
              <Typography
                color="black"
                className={"mt-1 font-normal " + myFont.className}
              >
                Edit your profile information
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-5 items-center justify-center w-full">
          {client && <EminentAvatar avatar={avatar} setAvatar={setAvatar} />}
          <Input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            width={"60%"}
          />
          <Input
            placeholder="Second Name"
            type="text"
            value={lastName}
            width={"60%"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            className=" bg-primary-black w-[60%] flex flex-row  text-primary-white items-center justify-center text-[14px] font-bold rounded-full mt-3"
            href=""
            style={{
              textTransform: "none",
            }}
          >
            Update Profile
          </Button>

          {client && <AvatarList onAvatarClick={handleAvatarClick} />}
        </CardBody>
      </Card>
    </div>
  );
}
