import styled from "styled-components";

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label,
  input {
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
  }
  label {
    color: #000;
    font-size: 13px;
    font-weight: 300;
  }
  .input-group,
  input {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    min-width: 200px;
    height: 48px;
    outline: none;
    border-style: none;
    border-radius: 7px;
    background: #f5f5f5;
    color: #2e2c2c;
    font-size: 20px;
    font-weight: 400;
  }
  input{
    width: 90%;
  }
  .input-group {
    width: 100%;
    padding: 9px 18px;
    justify-content: space-between;
  }
`;

export const InputField = ({
  labelText,
  name,
  inputType,
  isDisable,
  value,
}) => {
  return (
    <InputStyled>
      <label for={name}>{labelText}</label>
      <div className="input-group">
        {inputType === "email" && <>@</>}
        <input
          type={inputType}
          id={name}
          name={name}
          disabled={isDisable}
          value={value}
        />
      </div>
    </InputStyled>
  );
};
InputField.defaultProps = {
  disabled: "false",
};
