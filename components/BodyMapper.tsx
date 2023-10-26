import React from "react";
import body from "@/public/next.svg";
import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "@/typings";

const onMapClick = (area: AreaType, index: number) => {
  const tip = `click map${area.href || index + 1}`;
  console.log(tip);
  alert(tip);
};

const mapArea: any[] = [
  {
    left: "0%",
    top: "6%",
    height: "12%",
    width: "33%",
    style: { background: "rgba(255, 0, 0, 0.5)" },
    onMouseOver: () => console.log("map onMouseOver"),
  },
  {
    width: "53%",
    height: "12%",
    left: "0%",
    top: "36.37931034482759%",
    style: { background: "rgba(255, 0, 0, 0.5)" },
    render: (area: any, index: number) => (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 0, 0.5)",
        }}
      >
        can render map node
      </span>
    ),
    onMouseOver: () => console.log("map onMouseOver"),
  },
];

// in hooks
export default function BodyMapper() {
  const img =
    "https://cc-prod.scene7.com/is/image/CCProdAuthor/hero-svg?$pjpeg$&jpegSize=200&wid=900";

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={img}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [img]
  );

  return <div>{ImageMapComponent}</div>;
}
