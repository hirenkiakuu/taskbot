
async function getDataBases() {
    try {
        const response = await notion.databases.query({
            database_id: 'be6b6e525aac4244891369f9cf891672'
        });
        console.log('Список баз данных: ', response.results);
    } catch(err) {
        console.log(err);
    }
}

export default getDataBases

