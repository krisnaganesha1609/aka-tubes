import Form from "next/form";

export default function FindByCountryPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="my-32 items-center text-center">
        <h1 className="text-center text-yellow-600 text-2xl mb-10 font-[family-name:var(--font-geist-sans)]">
          Find By Country (Ex: Indonesia):{" "}
        </h1>
        <Form
          action={"/find-country/search"}
          type="POST"
          className="flex flex-col bg-yellow-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <input
            type="text"
            name="country"
            className="font-[family-name:var(--font-geist-sans)] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="border-4 border-black mt-5 text-black text-xl font-bold hover:border-green-500 hover:text-green-500 focus:outline-none focus:shadow-outline"
          >
            FIND!
          </button>
        </Form>
      </div>
    </div>
  );
}
