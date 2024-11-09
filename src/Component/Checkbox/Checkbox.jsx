 /* eslint-disable react/prop-types */
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
