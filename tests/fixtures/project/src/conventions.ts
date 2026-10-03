// Code that relies on the DPUse rule overrides, so it must lint clean.

export class Counter {
    count = 0;

    increment(): number {
        this.count = this.add(1);
        return this.count;
    }

    private add(amount: number): number {
        return this.count + amount;
    }
}

export function decode(bytes: Uint8Array): string {
    return new TextDecoder('utf-8').decode(bytes);
}

export function emptyValue(): null {
    return null;
}

export function lookup(table: Record<string, number>, key: string): number | undefined {
    return table[key];
}

export function withoutId(record: { id: string; name: string }): { name: string } {
    const { id: _id, ...rest } = record;
    return rest;
}
