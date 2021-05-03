export default function FileInput({ htmlRef }) {
  return (
    <input
      type="file"
      name="file"
      id="file"
      required
      ref={htmlRef}
      className="h-0 w-0 opacity-0"
      tabIndex={-1}
      accept=".md"
    />
  );
}
