import { Friend, Step } from "./types";

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

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getFormattedAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    return formatted
}

export const roundFloatToDecimals = (number: number, decimals: number) => {
    return parseFloat(number.toFixed(decimals))
}

export const isAllZeros = (list: number[]) => {
    for (let ind in list) {
        if (list[ind] !== 0) {
            return false
        }
    }
    return true
}

export const approxNumberToZero = (n: number) => (n < 0.15 && n > -0.15 ? 0 : n);

export const getTotal = (list: number[]) => {
    if (list.length === 0) return 0;
    return list.reduce((t, item) => (t += item));
};

export const getAverage = (list: number[]) => {
    if (list.length === 0) return 0;
    return getTotal(list) / list.length;
};

export const getContributionTotal = (friends: Friend[]) => {
    const amounts = friends.map((e) => e.contribution) ?? [];
    return getTotal(amounts);
};

export const getContributionAverage = (friends: Friend[]) => {
    const amounts = friends.map((e) => e.contribution) ?? [];
    return getAverage(amounts);
};

export const getMinMaxIndeces = (list: number[]) => {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < list.length; i++){
        if (list[i] < list[minIndex]) {
            minIndex = i
        }
        if (list[i] > list[maxIndex]) {
            maxIndex = i
        }
    }

    return {minIndex, maxIndex}
}

export const getSplitSteps = (friends: Friend[]): Step[] => {
    
    const average = getContributionAverage(friends);
    const steps: Step[] = [];

    let list = [...friends];
    let debtList = list.map((person) => roundFloatToDecimals(average - person.contribution, 2));

    while (!isAllZeros(debtList)) {
        const { minIndex, maxIndex } = getMinMaxIndeces(debtList)
       
        const minVal = debtList[minIndex];
        const maxVal = debtList[maxIndex];

        const sum = approxNumberToZero(minVal + maxVal)

        debtList[minIndex] = sum > 0 ? 0 : sum
        debtList[maxIndex] = sum > 0 ? sum : 0

        const amount = maxVal - debtList[maxIndex]
            
        steps.push({ index: steps.length + 1, from: friends[maxIndex], to: friends[minIndex], amount });
    }

    return steps;
};