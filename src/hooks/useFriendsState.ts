import { useEffect, useState } from "react";
import { Expense, Friend } from "../utils/types";
import { getContributionAverage, getContributionTotal, getSplitSteps, getTotal, getUniqueId } from "../utils/utils";


// Custom hook implementation
export const useFriendsState = (initialFriends: Friend[]) => {
    const [friends, setFriends] = useState<Friend[]>(initialFriends)
    const [friendCardOpen, setFriendCardOpen] = useState<number | null>()
    const [expenses, setExpenses] = useState<Expense | null>(null)


    useEffect(() => {

        const contributionList = friends.map((m) => m.contribution);
        if (friends.length > 1 && getTotal(contributionList) >= 1) {
            const res = {
                amount: getContributionTotal(friends),
                average: getContributionAverage(friends),
                steps: getSplitSteps(friends),
            }
            setExpenses(res)
        }
        else {
            setExpenses(null)
        }

    }, [friends])

    const addFriend = () => {
        const idList = friends.map((m) => m.id);
        const orderID = friends.length + 1
        const uniqueId = getUniqueId(idList);
        const newFriend = { id: uniqueId, name: `Person ${orderID}`, contribution: 0 };
        setFriends([...friends, newFriend]);
        setFriendCardOpen(newFriend.id);
    };

    const updateFriend = (id: number, name: string, contribution: number) => {
        const newFriends = friends.map((person) => ({
            ...person,
            name: person.id === id ? name : person.name,
            contribution: person.id === id ? contribution : person.contribution
        }))
        setFriends(newFriends)
        toggleFriendCardOpen(id);
    }

    const removeFriend = (id: number) => {
        const newFriends = friends.filter((person) => person.id !== id)
        setFriends(newFriends)
        toggleFriendCardOpen(id)
    }

    const toggleFriendCardOpen = (id: number) => {
        setFriendCardOpen(friendCardOpen === id ? null : id);
    };

    return {
        friends,
        friendCardOpen,
        toggleFriendCardOpen,
        addFriend,
        updateFriend,
        removeFriend,
        expenses
    }
}