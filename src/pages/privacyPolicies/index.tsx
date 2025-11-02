import type {FC} from "hono/jsx";
import {Ja} from "./ja";
import {En} from "./en";
import {Bindings} from "../../index";

type PrivacyPoliciesProps = {
  env: Bindings,
  lang?: string | null,
}

export const PrivacyPolicies: FC<PrivacyPoliciesProps> = ({env, lang}) => {
  switch (lang) {
    case "ja":
      return <Ja contactEmail={env.CONTACT_EMAIL}/>;
    case "en":
      return <En contactEmail={env.CONTACT_EMAIL}/>;
    default:
      return <En contactEmail={env.CONTACT_EMAIL}/>;
  }
}
