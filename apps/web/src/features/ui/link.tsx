import { ComponentChildren } from "preact";

interface Props {
  href: string;
  children: ComponentChildren;
}

export default function Link({ href, children }: Props) {
  return (
    <a href={href} className="text-sm text-primary hover:underline">
      {children}
    </a>
  );
}
