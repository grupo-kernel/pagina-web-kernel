export function newsCard({ id, title, date, image, excerpt }) {
  const nwCard = `

    <article class="bg-white rounded-2xl overflow-hidden shadow-sm 
    hover:shadow-md transition duration-300 cursor-pointer 
    border border-gray-100 flex flex-col h-full">

      <div class="h-44 overflow-hidden rounded-t-2xl">
        <img src="${image}" alt="${title}" class="w-full h-full object-cover"/>
      </div>

      <div class="p-3 space-y-3 flex flex-col flex-1">
        <span class="text-sm text-gray-500">
          ${date}
        </span>

        <h3 class="text-lg font-bold text-gray-800">
          ${title}
        </h3>

        <p class="text-sm text-gray-600 leading-relaxed">
          ${excerpt}
        </p>

        <button data-news-btn="${id}"
          class="mt-auto self-start lg:text-base font-medium text-blue-600 
          hover:text-blue-700 transition underline-offset-4 hover:underline">
          Más detalles
        </button>

      </div>
    </article>
    
    `;
  return nwCard;
}