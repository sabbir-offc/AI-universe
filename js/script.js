const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const tools = data.data.tools;
  displayData(tools);
};

const displayData = (tools) => {
  const aiContainer = document.getElementById("ai-container");

  tools.forEach((tool) => {
    const aiCard = document.createElement("div");
    aiCard.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl p-6">
          <figure>
            <img
              src="${tool.image}"
              alt="AI"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Feature</h2>
            <ol class="list-decimal">
              <li>${tool.features[0]}</li>
              <li>${tool.features[1]}</li>
              <li>${tool.features[2]}</li>
              
            </ol>
            <hr />
            <h3 class="text-2xl text-[#111111] font-semibold">${tool.name}</h3>
            <div class="flex justify-between items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="inline"
                >
                  <path
                    d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                    stroke="#585858"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="text-[#585858] text-base inline">${tool.published_in}</p>
              </div>
              <div>
              <button onclick="handleShowDetails('${tool.id}')"> <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="bg-[#FEF7F7] rounded-full"
                >
                  <path
                    d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                    stroke="#EB5757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> </button>
                
              </div>
             </div>
           </div>
         </div>
     `;
    aiContainer.appendChild(aiCard);
  });
};
const handleShowDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const details = data.data;
  // console.log(details.accuracy);
  showDetails(details);
};
const showDetails = (details) => {
  const showDetailsContainer = document.getElementById("show-detail-container");
  
  const decimalValue = details?.accuracy?.score || "It's doesn't have any accuracy.";
  const percentageValue = (decimalValue * 100).toFixed(2) + "%";
  showDetailsContainer.innerHTML = `
          <div
            class="flex-1 bg-[#EB57570D] p-7 rounded-md border border-[#EB5757]"
          >
            <p class="text-2xl font-semibold text-[#111111]">
              ${details?.description}
            </p>
            <div class="grid grid-cols-3 place-items-center mx-auto">
              <div
                class="p-5 w-fit h-fit mx-2 text-center bg-white rounded-lg"
              >
                <h3
                  class="max-w-sm mx-auto text-center text-[#03A30A] text-base font-bold"
                >
                  ${details?.pricing[0]?.price}
                </h3>
              </div>
              <div
                class="p-5 w-fit h-fit mx-2 text-center bg-white rounded-lg"
              >
                <h3
                  class="max-w-sm mx-auto text-center text-[#F28927] text-base font-bold"
                >
                  ${details?.pricing[1]?.price}
                </h3>
              </div>
              <div
                class="p-5 w-fit h-fit mx-2 text-center bg-white rounded-lg"
              >
                <h3
                  class="max-w-sm mx-auto text-center text-[#EB5757] text-base font-bold"
                >
                  ${details?.pricing[2]?.price}
                </h3>
              </div>
            </div>
            <div class="flex justify-between mt-6">
              <div>
                <h3 class="text-2xl font-semibold">Features</h3>
                <ul class='mt-3 list-disc ml-4'>
                <li>${details?.features[1]?.feature_name}</li>
                <li>${details?.features[2]?.feature_name}</li>
                <li>${details?.features[3]?.feature_name}</li>
                </ul>
              </div>
              <div>
                <h3 class="text-2xl font-semibold">Integrations</h3>
                <ul class="mt-3 list-disc ml-4">
                <li>${details?.integrations[0]}</li>
                <li>${details?.integrations[1]}</li>
                <li>${details?.integrations[2]}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex-1 relative text-center border border-gray-300 p-4 rounded-lg">

            <p class="bg-[#EB5757] w-fit py-2 px-4 text-center rounded-lg absolute top-7 right-7 text-white">${percentageValue} 
            accuracy</p>
            <img src="${details?.image_link[0]}" alt="No Image for this" class="text-center mx-auto rounded-lg" />
            <h3 class="text-2xl font-semibold text-[#111111] my-5">
              ${details?.input_output_examples[0]?.input}
            </h3>
            <p class="text-[#585858] text-base">
              ${details?.input_output_examples[0]?.output}
            </p>
          </div>
  `;
  show_details_modal.showModal();
};
loadData();
