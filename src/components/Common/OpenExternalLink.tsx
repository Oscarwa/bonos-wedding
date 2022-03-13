import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Button } from "react-bootstrap";

interface OpenExternalLinkProps {
    url: string;
    dark?: boolean;
}

const OpenExternalLink: FC<OpenExternalLinkProps> = ({ url, dark = false }) => (
  <Button variant="link" className="p-1 ps-2 color-ivory">
    <a href={url} target="_blank" rel="noreferrer" className="color-normal">
      <FontAwesomeIcon icon={faUpRightFromSquare} color={dark ? '#2e312d' : 'ivory'}/>
    </a>
  </Button>
);

export default OpenExternalLink;