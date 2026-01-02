import Image from "next/image";
const tanstackQueryIcon = "/tanstack.png";

interface TanstackQueryIconProps
    extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> { }

export default function TanstackQuery({ className, ...props }: TanstackQueryIconProps) {
    return (
        <Image
            width={24}
            height={24}
            className={className}
            src={tanstackQueryIcon}
            alt="tanstack-query"
            {...props}
        />
    );
}
