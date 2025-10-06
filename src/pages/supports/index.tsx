import type {FC} from "hono/jsx";
import {Ja} from "./ja";
import {En} from "./en";

export const Supports: FC<{lang?: string}> = ({lang}) => {
  switch (lang) {
    case "ja":
      return <Ja/>;
    case "en":
      return <En/>;
    default:
      return <En/>;
  }
}