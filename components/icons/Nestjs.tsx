import Image from "next/image";
const nestjsIcon = "/nestjs.png";

interface NestjsIconProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> { }

export default function Nestjs({ className, ...props }: NestjsIconProps) {
  return (
    <Image
      width={24}
      height={24}
      className={className}
      src={nestjsIcon}
      alt="nestjs"
      {...props}
    />
  );
}
