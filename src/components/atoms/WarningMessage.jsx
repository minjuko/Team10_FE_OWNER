const WarningMessage = ({ children }) => {
  return (
    <small className="text-red-500" role="alert">
      {children}
    </small>
  );
};

export default WarningMessage;
