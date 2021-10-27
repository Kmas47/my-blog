export const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="max-w-screen-xl p-2">{children}</div>
    </div>
  );
};
