import "./TabItem.css";

function TabItem({ label, active }) {
  return (
    <div className={`tab-item ${active ? "active" : ""}`}>
      <div className="placement-area" />
      <div className="bar" />
      <div className="label">{label}</div>
    </div>
  );
}

export default TabItem;
