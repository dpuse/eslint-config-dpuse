// Code that breaks the DPUse rule settings, so each rule can be seen to fire.

export class Counter {
    count = 0;

    private add(amount: number): number {
        return this.count + amount;
    }

    increment(): number {
        this.count = this.add(1);
        return this.count;
    }
}

export function decode(bytes: Uint8Array): string {
    return new TextDecoder('utf8').decode(bytes);
}

export function unused(): void {
    const value = 1;
}
