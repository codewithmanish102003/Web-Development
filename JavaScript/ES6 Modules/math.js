// math.js
export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return pi * this.radius * this.radius;
    }
}
