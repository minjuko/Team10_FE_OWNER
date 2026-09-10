const AsideLayout = ({ children }) => {
  return (
    <aside className="flex-col flex-grow-0 flex-shrink-0 w-64 flex-4 xl:fixed">
      {children}
    </aside>
  );
};

export default AsideLayout;
