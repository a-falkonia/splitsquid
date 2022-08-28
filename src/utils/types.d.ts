export interface Friend {
    id: number
    name: string,
    contribution: number
}

export interface Expense {
    amount: number,
    average: number
    steps: Step[]
}

export interface Step {
    index: number;
    from: Member;
    to: Member;
    amount: number;
}