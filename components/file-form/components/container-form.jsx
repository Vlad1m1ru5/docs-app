export default function ContainerForm({ onSubmit, children }) {
  return (
    <form
      action=""
      className="flex flex-col space-y-2 p-4 rounded bg-white"
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
