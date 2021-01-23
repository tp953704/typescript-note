interface PersonalInfo1 {
    name: string;
    age: number;
}
interface SocialLinks {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    websites: ({
        name: string;
        url: string;
    })[];
}
interface UserAcc extends PersonalInfo1, SocialLinks {
    name: string;
    age: number;
}
interface PersonalInfo2 {
    name: string;
    age: number;
}
interface PersonalInfo2 {
    height: number;
}
interface addition {
    (input1: number, input2: number): number;
    (input1: number, input2: string): number;
    (input1: string, input2: number): number;
    (input1: string, input2: string): number;
}
declare const additionSafe: addition;
interface CreateElement {
    (tagName: 'p'): HTMLParagraphElement;
    (tagName: 'a'): HTMLAnchorElement;
    (tagName: 'button'): HTMLButtonElement;
    (tagName: 'input'): HTMLInputElement;
}
