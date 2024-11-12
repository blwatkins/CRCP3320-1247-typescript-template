import P5Lib from 'p5';

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        p5.createCanvas(500, 500);
    }

    p5.draw = (): void => {
        p5.background(0);
        p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    }
}

new P5Lib(sketch);
