declare type PersonalInfo = {
    name: string;
    age: number;
};
declare let info: PersonalInfo;
declare type keyOfPersonalInfo = keyof PersonalInfo;
declare let keyOfInfo: keyOfPersonalInfo;
declare type AllOfTypePersonInfo = PersonalInfo[keyOfPersonalInfo];
declare let numOrString: AllOfTypePersonInfo;
declare type ExtendedPersonalInfo = {
    [key in keyof PersonalInfo]: PersonalInfo[key];
} & {
    email: string;
};
declare let Info1: ExtendedPersonalInfo;
declare type accountInfo = {
    password?: number;
    email: string;
    readonly name: string;
    interest?: string[];
};
declare let account: accountInfo;
declare enum Colors {
    red = 0,
    Blue = 1
}
declare let selectedColor: Colors;
declare const selectedColor1 = Colors.Blue;
declare enum Colors1 {
    red = 1,
    Blue = 2,
    Yellow = 3
}
declare enum ColorsCustom {
    red = 0,
    Blue = 2,
    Yellow = 5
}
declare const enum ColorsCustom1 {
    red = 0,
    Blue = 2,
    Yellow = 5
}
declare let ColorRed: ColorsCustom;
declare let ColorRed1: ColorsCustom1;
declare type Invalid = {
    [key: string]: string | boolean;
    readonly [key: number]: boolean;
};
declare let Obj1: Invalid;
