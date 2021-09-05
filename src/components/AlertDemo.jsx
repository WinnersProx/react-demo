import useSnackBars from "../hooks/useSnackbar";

export function AlertDemo() {
  const { addAlert } = useSnackBars();

  return (
    <>
      <button onClick={() => addAlert("Holla bro why?")}>
        Add an alert here bro...
      </button>
    </>
  );
}
