import FormTitle from "./FormTitle";
import FormInput from "./FormInput";

const FormDetails = ({ title, setSomething, placeholder }) => {
  return (
    <div className="block">
      <FormTitle title={title} />
      <FormInput
        title={title}
        setSomething={setSomething}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormDetails;
