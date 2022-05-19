type Props = {
  title: string;
};

const Title: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <h2 className="text-2xl border-b-4 py-2 font-ibm font-semibold text-gray-600">
      {title}
    </h2>
  );
};

export default Title;
