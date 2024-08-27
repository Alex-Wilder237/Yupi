import React from "react";
import {Image} from "@nextui-org/react";

export default function ImageSkeleton({src,alt,styleClass}) {
  return (
    <Image
      className={styleClass}
      alt={alt}
      src={src}
    />
  );
}