export default function TabButton({
  buttons,
  ButtonsContainer = "menu",
  children,
  ...otherProps
}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
