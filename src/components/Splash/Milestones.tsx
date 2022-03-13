import { FC } from "react";

interface MilestonesProps {
  progress: number;
}

const Milestones: FC<MilestonesProps> = ({ progress }) => {
  return (
    <div className="m-wrapper">
      <div className="m-progress" style={{ width: `${progress % 100}%` }}></div>
    </div>
  );
};

export default Milestones;
