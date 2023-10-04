import { PropsWithChildren } from "react";
import { FooterListItemProps } from "../Item/Footer-List-Item";
import FooterListItem from "../Item/Footer-List-Item";

import "./Footer-List.css";

export type FooterListProps = {
  elements: PropsWithChildren<FooterListItemProps[]>;
};

export default function FooterList({ elements }: FooterListProps) {
  return (
    <ul className="footer__list">
      {elements.map((el, idx) => (
        <FooterListItem key={idx} {...el} />
      ))}
    </ul>
  );
}
