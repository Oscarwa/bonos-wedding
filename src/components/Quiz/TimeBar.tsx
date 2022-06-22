import { FC } from "react";
import './styles.scss';

interface TimeBarProps {
  progress: number;
  total: number;
}

const TimeBar: FC<TimeBarProps> = ({ progress, total }) => {

  return (
    <>
      <div className="gWrapper">
        <div
          className="gProgress"
          style={{ width: `calc(${(progress / total) * 110}% + 3vw)` }}
        ></div>
      </div>
      <div className="josefine fs-3 bold mt-2 d-flex justify-content-end">
        Time:
        <div
          className={`${
            progress < 3 && progress >= 0 ? "counter" : ""
          } ps-2 pe-4`}
        >
          {(progress + 1).toString().padStart(2, "0")}
        </div>
      </div>
    </>
  );
};

export default TimeBar;