export const getCards = async (setCards) => {
    try {
        const response = await fetch("https://greet.bg/wp-json/wc/store/products?page=1");
        const data = await response.json();

        setCards(data);
    } catch (error) {
        console.log(error);
    }
}