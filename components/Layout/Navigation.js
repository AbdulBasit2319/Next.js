import Link from "next/link";
import Logo from "./logo";
import classes from "./Navigation.module.css";

export default function Naigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meet up</Link>
          </li>
          <li>
            <Link href='/new-meetup'>New Meet up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}