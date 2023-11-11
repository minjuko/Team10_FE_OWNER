const AsideLayout = ({ children }) => {
  return (
    <aside className="fixed flex-col flex-grow-0 flex-shrink-0 flex-4">
      {children}
    </aside>
  );
};

export default AsideLayout;
