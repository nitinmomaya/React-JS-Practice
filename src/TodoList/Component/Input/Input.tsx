interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<Props> = ({ handleChange, value }) => {
  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Add a Task"
      />
    </>
  );
};

export default Input;
