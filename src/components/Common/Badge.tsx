import { FC } from "react";
import OpenExternalLink from "./OpenExternalLink";

interface BadgeProps {
    text: string;
    url?: string;
}
const Badge: FC<BadgeProps> = ({text, url}) => {
    return (
      <div className="badge rounded-pill bg-color-charcoal color-ivory m-2">
        <div className="d-flex align-items-center">
          {text}
          {url ? <OpenExternalLink url={url} /> : null}
        </div>
      </div>
    );
}

export default Badge;
