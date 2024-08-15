export interface MajorCredits {
    credits: number;
    brandMajor: void;
}

export interface MinorCredits {
    credits: number;
    brandMinor: void;
}

export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return {credits: subject1.credits + subject2.credits} as MajorCredits;
}

export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return {credits: subject1.credits + subject2.credits} as MinorCredits;
}

const subject3: MajorCredits = {credits: 3} as MajorCredits;
const example = sumMajorCredits(subject3, subject3);
console.log(example);
