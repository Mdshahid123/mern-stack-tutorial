export default function SimpleForm(e) {
const form={}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
  });
}
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="w-full border p-2 rounded"

        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
//your approach can work  if you only need User fills form → Click Submit → Send data to server
//But if you want to do something else with the form data before sending it to the server, then you will need to use state to store the form data and update it as the user types
