import "./Filter.css";

type FilterProps = {
  value: string;
  onChange: (value: string) => void;
};

const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <input
      className="filter-input"
      type="text"
      placeholder="Search country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Filter;