const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", (e) => {
    e.preventDefault();

    const homeId = e.currentTarget.dataset.id;

    async function myfetch() {
      try {
        const response = await fetch(`/favourite/${homeId}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let fullData = "";
        while (true) {
          const { done, value } = await reader.read();
          fullData += decoder.decode(value);
          if (done) 
            {
              break;
            }

        }

        console.log("Full Response:", fullData);

      } catch (error) {
        console.error("Error:", error);
      }
    }

    myfetch();
  });
});