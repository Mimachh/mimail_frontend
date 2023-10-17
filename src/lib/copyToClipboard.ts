import { errorToast } from "./toast/errorToast";
import { successToast } from "./toast/successToast";

export const onCopy = (data: string | undefined, t: (key: string) => string) => {
    if (data) {
      navigator.clipboard.writeText(data);
      successToast(t('common:something_when_wrong'));
    } else {
      errorToast("Error");
    }
  };