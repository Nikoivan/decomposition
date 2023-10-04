import { PropsWithChildren } from "react";
import { ItemContentProps } from "./Content/Item-Content";
import ItemContent from "./Content/Item-Content";

export type FooterListItemProps = {
  elements: {
    title: string;
    content: ItemContentProps[];
  };
};

export default function FooterListItem({
  children,
  elements,
}: PropsWithChildren<FooterListItemProps>) {
  return (
    <li className="footer-list__item">
      {children}
      <h3 className="item__title">{elements.title}</h3>
      {elements.content.map((el, id) => (
        <ItemContent key={id} {...el} />
      ))}
    </li>
  );
}
