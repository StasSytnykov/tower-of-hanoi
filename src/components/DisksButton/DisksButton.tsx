import { DisksButtonThumb } from "./DisksButton.styled";
import { Button } from "../Button/Button";

interface Props {
  onHandlePlusBtnClick: () => void;
  onHandleMinusBtnClick: () => void;
  isDisabledButton: boolean;
}

export const DisksButton = ({
  onHandlePlusBtnClick,
  onHandleMinusBtnClick,
  isDisabledButton,
}: Props) => {
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
