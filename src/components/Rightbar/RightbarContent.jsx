import React from "react";
import { AvatarsList } from "./AvatarsList";
import { LatestPhotos } from "./LatestPhotos";
import { LatestConversations } from "./LatestConversations";

export const RightbarContent = () => {
  return (
    <>
      <AvatarsList />
      <LatestPhotos />
      <LatestConversations />
    </>
  );
};
