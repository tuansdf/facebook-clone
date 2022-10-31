import clsx from "clsx";

interface Props {
  width?: string;
}

export default function Divider({ width }: Props) {
  return (
    <div
      className={clsx("h-0.5 bg-gray-200", { "w-full": !width })}
      style={width ? { width } : undefined}
    ></div>
  );
}
