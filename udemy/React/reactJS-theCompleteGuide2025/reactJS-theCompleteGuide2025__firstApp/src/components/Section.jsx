export default function Section({ title, children, ...otherProps }) {
  return (
    <section {...otherProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
