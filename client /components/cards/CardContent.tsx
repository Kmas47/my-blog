import dayjs from "dayjs";
import { DATE_FORMAT, TIME_FORMAT } from "../../utils/constants";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const CardContent: React.FC = (props) => {
  const { title, description, createdAt, updatedAt, comments } = props;
  const formattedCreatedAt = dayjs(createdAt).format(DATE_FORMAT);
  const formattedUpdatedAt = dayjs(updatedAt).format(DATE_FORMAT);
  const time = dayjs(updatedAt).format(TIME_FORMAT);
  const numComments: number = comments?.length || 0;
  return (
    <div>
      <div className="flex flex-row justify-between	">
        <div>
          <h2 className="font-medium leading-5 tracking-wide capitalize px-3 pt-2 pb-1">
            {title}
          </h2>
        </div>
        <div className="flex">
          <p className="text-sm font-light leading-5 tracking-wide capitalize px-3 pt-2 pb-1">
            Created At - {formattedCreatedAt}
          </p>
        </div>
      </div>
      <div>
        <p className="text-base font-normal leading-5 tracking-wide px-3 pt-1 line-clamp-5 overflow-hidden">
          {description}
        </p>
      </div>
      <div className="flex justify-end pt-1">
        <p className="text-sm font-light leading-5 tracking-wide capitalize px-3 pt-1 pb-3">
          Updated At - {formattedUpdatedAt} <span>{time}</span>
        </p>
      </div>
      <div className="flex flex-row justify-end px-2 pb-3">
        <div className="bg-blue-50 rounded-full w-auto px-2 py-1">
          <ModeCommentOutlinedIcon />{" "}
          <span className=" align-bottom text-xs font-light leading-5 tracking-wide">
            {numComments}
          </span>
        </div>
      </div>
    </div>
  );
};
