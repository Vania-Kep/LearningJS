import "./TabButton.css";

export default function TabButton({ isSelected, children, ...otherProps }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...otherProps}>
        {children}
      </button>
    </li>
  );
}
