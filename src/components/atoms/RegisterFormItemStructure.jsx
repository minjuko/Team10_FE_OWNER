const RegisterFormItemStructure = ({ label, besideLabel, children }) => {
  return (
    <div className="grid-2">
      <div className="flex-between">
        <label className="text-gray-700">{label}</label>
        {besideLabel}
      </div>
      {children}
    </div>
  );
};

export default RegisterFormItemStructure;
