import Image from "next/image";
const prismaIcon = "/nestjs.png";

interface PrismaIconProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {}

export default function Prisma({ className, ...props }: PrismaIconProps) {
  return (
    <Image
      width={24}
      height={24}
      className={className}
      src={prismaIcon}
      alt="Prisma"
      {...props}
    />
  );
}
