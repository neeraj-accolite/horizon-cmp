jest.mock('@nextui-org/button', () => ({
  Button: ({ children, onPress }) => (
    <button onClick={onPress}>{children}</button>
  ),
}));
