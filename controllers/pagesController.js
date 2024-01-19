import { notion } from '../models/Client.js';

// метод поиска контента в пространстве по названию
async function searchContent(title) {
    try {
        const response = await notion.search({
            query: title,
            filter: {
                value: "page",
                property: "object"
            },
        });

        const pageId = response.results[0]?.id;

        if (pageId) {
            console.log('Page ID: ', pageId);
            return pageId;
        } else {
            console.log('Страница не найдена');
        }
    } catch (err) {
        console.log(err);
    }
}


// метод получения списка дочерних блоков
async function getBlocks(pageId) {
    try {
        const response = await notion.blocks.children.list({
            block_id: 'afbb12bc-e9ea-4210-ad77-bb0543f8b45d',
            page_size: 50
        });
        console.log('Содержимое блока:-----\t', response);
    } catch (err) {
        console.log(err);
    }
}


// метод получения id страницы
async function getPage() {
    try {
        const response = await notion.pages.retrieve({
            page_id: '2e899772-9219-427c-bc58-751242ffa266',
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

export { getPage };
export { searchContent };
export { getBlocks }