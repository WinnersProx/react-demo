import { useContext } from "react";

import { SnackBarContext } from "../components/SnackBarProvider";

const useSnackBars = () => useContext(SnackBarContext);

export default useSnackBars;
