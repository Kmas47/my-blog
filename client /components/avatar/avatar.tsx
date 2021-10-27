import Image from "next/image";

type IAvatarProps = {
    avatar: string;
    name: string;
}

export const Avatar = (props: IAvatarProps) => {
  const { avatar, name } = props;
  return (
    <div className="h-6 w-6 flex items-center justify-center py-1">
      <Image
        className="rounded-full"
        src={avatar}
        alt={name}
        width={24}
        height={24}
        objectFit="contain"
      />
    </div>
  );
};
