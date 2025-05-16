const SUBMIT_URL =
  "https://questions.greatfrontend.com/api/questions/contact-form";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.action !== SUBMIT_URL) {
      alert("Incorrect action!");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect method !");
      return;
    }

    try {
      const formdata = new FormData(form);
      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formdata.get("name"),
          email: formdata.get("email"),
          message: formdata.get("message"),
        }),
      });

      const data = await response.text();
      alert(data);
    } 
    
    catch (err) {
      alert("ERROR MESSAGE");
    }

  });
});
