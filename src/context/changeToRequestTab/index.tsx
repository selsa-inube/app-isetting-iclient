import { useState, useMemo } from "react";
import { IChangeToRequestTabProvider } from "@ptypes/context/IChangeToRequestTabProvider";
import { ChangeToRequestTab } from "./changeToRequest";

const ChangeToRequestTabProvider = (props: IChangeToRequestTabProvider) => {
  const { children } = props;
  const [changeTab, setChangeTab] = useState<boolean>(false);

  const changeToRequestContainer = useMemo(
    () => ({
      changeTab,
      setChangeTab,
    }),
    [changeTab, setChangeTab],
  );

  return (
    <ChangeToRequestTab.Provider value={changeToRequestContainer}>
      {children}
    </ChangeToRequestTab.Provider>
  );
};

export { ChangeToRequestTabProvider };
