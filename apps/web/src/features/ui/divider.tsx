interface Props {
  width?: string;
}

export default function Divider({ width }: Props) {
  return (
    <div
      className="h-0.5 w-full bg-gray-200"
      style={width ? { maxWidth: width } : undefined}
    ></div>
  );
}
