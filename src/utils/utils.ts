const emojis = ['🐳', '🐠', '🦈', '🦐', '🐢', '🐙', '🐟', '🐧', '🐚', '🦞', '🦆'];

export const getEmojiById = (id: number) => {

    if (id >= 0 && id < emojis.length) {
        return emojis[id]
    }

    return '🦑'
}

export const getUniqueId = (idList: number[]) => {
    let allIds = emojis.map((_, index) => index)
    let availableIds = allIds.filter((id) => !idList.includes(id))
    let index = getRandomInt(0, availableIds.length - 1);
    return availableIds[index];
}

export const getFormattedAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    return formatted
    
}
function getRandomInt(min:number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}