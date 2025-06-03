export default function Page() {
    async function submitForm(formData){
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        };
        console.log("formFields", formFields);
        console.log("Send this to the backend");
        return formFields;
    }
    return(
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-black text-2xl font-bold text-center mb-6">This is the contact page</h1>
            <form action={submitForm} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
                    <input id="email" type="email" name="email" required className="text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700"></label>
                    <textarea name="message" id="message" rows={4} required className="text-black border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-600 rounded-md p-3">Save</button>
            </form>
        </main>
    )
}