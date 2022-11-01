import { ComponentChildren, JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ComponentChildren;
}

export default function Link({ href, children, ...rest }: Props) {
  return (
    <a href={href} className="text-sm text-primary hover:underline" {...rest}>
      {children}
    </a>
  );
}
