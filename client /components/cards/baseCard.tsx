export const Card: React.FC = ({ children }): JSX.Element => {
  const handleClick = () => {
    /* we can pass the slug or unique blog-id or post for redirection to that specific blog post here */
    window.open("", "_self");
  };
  return (
    <div className="group bg-white shadow-md rounded hover:shadow-lg transform hover:-translate-y-1 ">
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};
