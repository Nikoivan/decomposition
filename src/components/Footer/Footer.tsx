import FooterList from "./List/Footer-List";
import { FooterListProps } from "./List/Footer-List";

export default function Footer({ elements }: FooterListProps) {
  return (
    <footer className="footer">
      <FooterList elements={elements} />
    </footer>
  );
}
