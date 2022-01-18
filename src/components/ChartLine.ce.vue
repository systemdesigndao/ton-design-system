<script>
export default {
  name: 'ChartLine',
  data() {
    return {
        width: 100, 
        height: 100,
    }
  },
  methods: {
      generatePoints(nbOfPoints) {
        const pts = [];
        for (let i = 0; i <= nbOfPoints; i++) {
            pts.push({
            x: i * (this.width / nbOfPoints),
            y: Math.random() * this.height
        });
        }
        return pts;
      },
      plotPoints(ctx) {
        const pts = this.generatePoints(32);
        // first plot the stroke
        pts.forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.stroke();
        // now define the bottom of the filled area
        const maxY = this.height; //Math.max.apply(null, pts.map(pt=>pt.y));
        // draw the missing parts
        ctx.lineTo(pts[pts.length - 1].x, maxY); // bottom-right
        ctx.lineTo(pts[0].x, maxY); // bottom-left

        ctx.globalCompositeOperation = "destination-over"; // draw behind
        ctx.fill(); // will close the path for us
        ctx.globalCompositeOperation = "source-over"; // normal behavior
    }
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d');
    ctx.fillStyle = 'red';

    this.plotPoints(ctx);
  },
}
</script>

<template>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>