import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
    <li>
        <Link href="/index-2">Home</Link>
      </li>
      <li>
        <Link href="/about">Chi Siamo</Link>
      </li>
      <li>
        <Link href="/products">Prodotti</Link>
      </li>
      <li>
        <Link href="/contact">Contatti</Link>
      </li>
      <li>
        <Link href="/faqs">Scopri di Piu</Link>
      </li>
    </ul>
    </nav>
  );
};
export default MobileHeader;
