import dayjs from "dayjs";
import { DATE_FORMAT, TIME_FORMAT } from "../../utils/constants";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { Avatar } from "../avatar/avatar";
import { ICardContentProps } from "../../../@types/CardContent";

export const CardContent = (props: ICardContentProps) => {
  const { title, description, updatedAt, comments, authors } = props;
  const formattedUpdatedAt = dayjs(updatedAt).format(DATE_FORMAT);
  const time = dayjs(updatedAt).format(TIME_FORMAT);
  const numComments: number = comments?.length || 0;
  return (
    <div>
      <div className="flex flex-row justify-between p-2	">
        <div>
          <h2 className="font-medium leading-5 tracking-wide capitalize px-3 pt-2 pb-1">
            {title}
          </h2>
        </div>
        <div className="flex">
          <p className="text-sm text-right font-light leading-5 tracking-wide capitalize px-3 pt-1 pb-3">
            Updated At - {formattedUpdatedAt} <span>{time}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-base text-left font-normal leading-5 tracking-wide px-3 pt-1 line-clamp-5 overflow-hidden">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className="flex items-end">
          <div className="flex justify-start px-2 py-3">
            <div className="bg-blue-50 rounded-full w-12 h-9 px-2 py-1">
              <ModeCommentOutlinedIcon className="h-5 w-5" fontSize="small" />{" "}
              <span className=" align-bottom text-xs font-light leading-5 tracking-wide">
                {numComments}
              </span>
            </div>
          </div>
        </div>
        <div>
          {authors.map((author) => (
            <div
              className="flex justify-end items-center py-1 px-4"
              key={author?.id}
            >
              <p className="text-sm font-light leading-5 tracking-wide capitalize px-2 pt-2 pb-1">
                - {author.name}
              </p>
              <Avatar avatar={author.avatar} name={author.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
