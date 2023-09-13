const Title = ({ title, accent }) => {
  return (
    <h2 className="text-title-m md:text-title-t xl:text-title-d font-thin uppercase">
      {title} <span className="font-medium">{accent}</span>
    </h2>
  );
};

export default Title;
