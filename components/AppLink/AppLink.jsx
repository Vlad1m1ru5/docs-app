import Link from "next/link";

export default function AppLink({ href, children, ...anchorProps }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...anchorProps}>{children}</a>
    </Link>
  );
}
