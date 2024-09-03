const FormInput = ({ title, setSomething, placeholder }) => {
  return (
    <div className="sell-block-input">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setSomething(e.target.value);
        }}
      />
    </div>
  );
};

export default FormInput;
