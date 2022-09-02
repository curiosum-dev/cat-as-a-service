import "@testing-library/jest-dom";

jest.mock("antd", () => {
  const antd = jest.requireActual("antd");

  const Select = ({ children, onChange, placeholder }) => {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      >
        {children}
      </select>
    );
  };

  // eslint-disable-next-line react/display-name
  Select.Option = ({ children, ...otherProps }) => {
    return <option {...otherProps}>{children}</option>;
  };

  return {
    ...antd,
    Select,
  };
});
