export type Status = 'ACCEPTED' | 'NOT_ACCEPTED' | 'MISSED' | 'LIVE' | undefined;

const ActivityLabel: React.FC<{ status: Status }> = ({ status }) => {
  if (!status || status === 'NOT_ACCEPTED') return null;

  const labelColors = {
    "ACCEPTED": "text-[#3E896C] bg-[#EFFAF3]",
    "MISSED": "text-[#8C2919] bg-[#FFF4F2]",
    "LIVE": "text-[#2A5989] bg-[#F1F9FF]",
  };

  const label = {
    "ACCEPTED": "Accepted",
    "MISSED": "Missed",
    "LIVE": "Live",
  }

  return (
    <span className={`text-xs h-[16px] px-1 rounded mr-3 ${labelColors[status]}`}>
      {label[status]}
    </span>
  );
};

export { ActivityLabel };