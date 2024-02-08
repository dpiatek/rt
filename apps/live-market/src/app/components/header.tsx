const Header: React.FC<{ title: string, setCollapsed: () => void, collapsed: boolean }> = ({ title, setCollapsed, collapsed }) => {
  const label = collapsed ? 'Expand' : 'Collapse';

  return (
    <div className="h-[40px] flex items-center">
      <h2 className="font-bold text-xl leading-7">{title}</h2>
      <button className="m-0 p-0 ml-3 text-sm text-[#2971C7]" onClick={setCollapsed}>{label}</button>
    </div>
  );
};

export { Header };
