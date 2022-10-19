import { DisksButtonThumb } from "./DisksButton.styled";
import { Button } from "../../pages/Button/Button";

interface IDisksButtonPage {
  onHandlePlusBtnClick: () => void;
  onHandleMinusBtnClick: () => void;
  isDisabledButton: boolean;
}

export const DisksButtonPage = ({
  onHandlePlusBtnClick,
  onHandleMinusBtnClick,
  isDisabledButton,
}: IDisksButtonPage) => {
  return (
    <DisksButtonThumb>
      <Button
        variant={"primary"}
        onClick={onHandlePlusBtnClick}
        disabled={isDisabledButton}
        children={"+1 disk"}
      />
      <Button
        variant={"secondary"}
        onClick={onHandleMinusBtnClick}
        disabled={isDisabledButton}
        children={"-1 disk"}
      />
    </DisksButtonThumb>
  );
};
