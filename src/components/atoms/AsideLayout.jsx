const AsideLayout = ({ children }) => {
  return (
    <aside className="flex flex-col flex-grow-0 flex-shrink-0 gap-4">
      {children}
    </aside>
  );
};

export default AsideLayout;
