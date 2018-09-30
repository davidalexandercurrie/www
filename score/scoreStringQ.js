var mouseSwitch = 0;
var counter = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  counter++;
  if (counter % 10 == 0) {

    if (mouseIsPressed) {
      mouseSwitch = 1;
    } else {
      mouseSwitch = 0;
    }

    if (mouseSwitch == 0) {
      background(255);

      strokeWeight(2);
      fill(255, 255, 255, 0);
      //GRID lines
      for (var i = 0; i <= 800; i = i + 80) {
        line(0, i, 800, i);
      }

      for (var i = 0; i <= 800; i = i + 80) {
        line(i, 0, i, 800);
      }
      // NOTE HEADS AND GLISS MARKS
      for (var i = 0; i < 8; i = i + 1) {
        for (var j = 0; j < 8; j = j + 1) {
          var f1 = random(0, 80) + (j * 80) + 80;
          var f1y = random(0, 80) + 80 + (i * 80);

          var f2 = random(0, 80) + (j * 80) + 80;
          var f2y = random(0, 80) + 80 + (i * 80);

          var cx = random(f1, f2);
          var cy = random(f1y, f2y);

          var cx0 = random(f1, cx);
          var cy0 = random(f1y, cy);

          var cx1 = random(f1, f2);
          var cy1 = random(f1y, f2y);

          var cx2 = random(cx, f2);
          var cy2 = random(cy, f2y);

          var cx3 = random(cx2, f2);
          var cy3 = random(cy2, f2y);

          var cx4 = random(cx3, f2);
          var cy4 = random(cy3, f2y);

          stroke(10, 255, 10);
          ellipse(f1, f1y, 8, 8);
          ellipse(f2, f2y, 8, 8);
          var c = random(0, 510);
          var red = 255;
          var green = 0;

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(f1, f1y, cx0, cy0, cx0, cy0, cx, cy);

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(cx, cy, cx2, cy2, cx2, cy2, f2, f2y);
        }
        for (var j = 0; j < 8; j = j + 1) {
          var f1 = random(0, 80) + (j * 80) + 80;
          var f1y = random(0, 80) + 80 + (i * 80);

          var f2 = random(0, 80) + (j * 80) + 80;
          var f2y = random(0, 80) + 80 + (i * 80);

          var cx = random(f1, f2);
          var cy = random(f1y, f2y);

          var cx0 = random(f1, cx);
          var cy0 = random(f1y, cy);

          var cx1 = random(f1, f2);
          var cy1 = random(f1y, f2y);

          var cx2 = random(cx, f2);
          var cy2 = random(cy, f2y);

          var cx3 = random(cx2, f2);
          var cy3 = random(cy2, f2y);

          var cx4 = random(cx3, f2);
          var cy4 = random(cy3, f2y);

          stroke(10, 10, 255);
          ellipse(f1, f1y, 8, 8);
          ellipse(f2, f2y, 8, 8);
          var c = random(0, 510);
          var red = 255;
          var green = 0;

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(f1, f1y, cx0, cy0, cx0, cy0, cx, cy);

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(cx, cy, cx2, cy2, cx2, cy2, f2, f2y);
        }
        for (var j = 0; j < 8; j = j + 1) {
          var f1 = random(0, 80) + (j * 80) + 80;
          var f1y = random(0, 80) + 80 + (i * 80);

          var f2 = random(0, 80) + (j * 80) + 80;
          var f2y = random(0, 80) + 80 + (i * 80);

          var cx = random(f1, f2);
          var cy = random(f1y, f2y);

          var cx0 = random(f1, cx);
          var cy0 = random(f1y, cy);

          var cx1 = random(f1, f2);
          var cy1 = random(f1y, f2y);

          var cx2 = random(cx, f2);
          var cy2 = random(cy, f2y);

          var cx3 = random(cx2, f2);
          var cy3 = random(cy2, f2y);

          var cx4 = random(cx3, f2);
          var cy4 = random(cy3, f2y);

          stroke(255, 10, 10);
          ellipse(f1, f1y, 8, 8);
          ellipse(f2, f2y, 8, 8);
          var c = random(0, 510);
          var red = 255;
          var green = 0;

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(f1, f1y, cx0, cy0, cx0, cy0, cx, cy);

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(cx, cy, cx2, cy2, cx2, cy2, f2, f2y);
        }
        for (var j = 0; j < 8; j = j + 1) {
          var f1 = random(0, 80) + (j * 80) + 80;
          var f1y = random(0, 80) + 80 + (i * 80);

          var f2 = random(0, 80) + (j * 80) + 80;
          var f2y = random(0, 80) + 80 + (i * 80);

          var cx = random(f1, f2);
          var cy = random(f1y, f2y);

          var cx0 = random(f1, cx);
          var cy0 = random(f1y, cy);

          var cx1 = random(f1, f2);
          var cy1 = random(f1y, f2y);

          var cx2 = random(cx, f2);
          var cy2 = random(cy, f2y);

          var cx3 = random(cx2, f2);
          var cy3 = random(cy2, f2y);

          var cx4 = random(cx3, f2);
          var cy4 = random(cy3, f2y);

          stroke(255, 255, 10);
          ellipse(f1, f1y, 8, 8);
          ellipse(f2, f2y, 8, 8);
          var c = random(0, 510);
          var red = 255;
          var green = 0;

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(f1, f1y, cx0, cy0, cx0, cy0, cx, cy);

          c = random(0, 510);

          if (c <= 255) {
            red = 255;
            green = c;
          }
          if (c > 255) {
            green = 255;
            red = 510 - c;
          }
          stroke(0, green, red);
          bezier(cx, cy, cx2, cy2, cx2, cy2, f2, f2y);
        }
      }

      // STAVES LEFT
      stroke(0);
      strokeWeight(1);
      for (var j = 0; j < 8; j = j + 1) {
        translate(0, 80);
        for (var i = 0; i < 5; i = i + 1) {
          line(0, 25 + (i * 10), 80, 25 + (i * 10));
        }
        line(28, 0, 28, 80);
        line(36, 0, 36, 80);
        line(44, 0, 44, 80);
        line(52, 0, 52, 80);

        line(20, 8, 60, 8);
        line(24, 27, 56, 27);

        line(24, 27, 28, 80);
        line(56, 27, 52, 80);

        line(20, 8, 16, 22);
        line(60, 8, 64, 22);
      }

      translate(160, 80);
      translate(0, -640);
      // STAVES TOP
      for (var j = 0; j < 8; j = j + 1) {
        translate(0, -80);

        if (j == 0) {
          rotate(PI / 2);
        }

        for (var i = 0; i < 5; i = i + 1) {

          line(0, 25 + (i * 10), 80, 25 + (i * 10));
        }

        line(28, 0, 28, 80);
        line(36, 0, 36, 80);
        line(44, 0, 44, 80);
        line(52, 0, 52, 80);

        line(20, 8, 60, 8);
        line(24, 27, 56, 27);

        line(24, 27, 28, 80);
        line(56, 27, 52, 80);

        line(20, 8, 16, 22);
        line(60, 8, 64, 22);
      }


      translate(160, 0);
      //STAVES RIGHT
      for (var j = 0; j < 8; j = j + 1) {
        translate(0, -80);

        if (j == 0) {
          rotate(PI / 2);
        }

        for (var i = 0; i < 5; i = i + 1) {

          line(0, 25 + (i * 10), 80, 25 + (i * 10));
        }

        line(28, 0, 28, 80);
        line(36, 0, 36, 80);
        line(44, 0, 44, 80);
        line(52, 0, 52, 80);

        line(20, 8, 60, 8);
        line(24, 27, 56, 27);

        line(24, 27, 28, 80);
        line(56, 27, 52, 80);

        line(20, 8, 16, 22);
        line(60, 8, 64, 22);
      }

      translate(160, 0);
      //STAVES BOTTOM
      for (var j = 0; j < 8; j = j + 1) {
        translate(0, -80);

        if (j == 0) {
          rotate(PI / 2);
        }

        for (var i = 0; i < 5; i = i + 1) {

          line(0, 25 + (i * 10), 80, 25 + (i * 10));
        }

        line(28, 0, 28, 80);
        line(36, 0, 36, 80);
        line(44, 0, 44, 80);
        line(52, 0, 52, 80);

        line(20, 8, 60, 8);
        line(24, 27, 56, 27);

        line(24, 27, 28, 80);
        line(56, 27, 52, 80);

        line(20, 8, 16, 22);
        line(60, 8, 64, 22);
      }
      //save("diagonal.tif");
    }
  }
}