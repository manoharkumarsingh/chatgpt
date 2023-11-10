const fetchData = async (data: string) => {
  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Act as a cities details generator based on the given string in the following format: {city: 'Patna', 'state': 'state', 'country': 'country', 'latitude': latitude, 'longitude': longitude}",
      },
      {
        role: "user",
        content: data, // Pass the user input city name
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  const secretKey = "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";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + secretKey, // Corrected Authorization header
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const json = await response.json();
      let cityDetails = JSON.parse(json.choices[0]["message"]["content"]);
      return await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          cityDetails.latitude.split("°")[0] +
          "&lon=" +
          cityDetails.longitude.split("°")[0] +
          "&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e"
      )
        .then((res) => res.json())
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("API request failed with status: " + response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Example usage:
fetchData("Patna");

export default fetchData;

// const payload = {
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "system",
//       content:
//         'Act as a List of cities generator which start with geven string in following formate: [{city: "city", state :  "state ", country : "country ", Latitude:"Latitude" , Longitude:"Longitude"}]\n\nEx: \nme:"Ben"\nyou: [{City : "Bengaluru", State:"Karnataka", "Latitude":12.972442, "Longitude":77.580643}]',
//     },
//     {
//       role: "user",
//       content: data,
//     },
//   ],
// };
