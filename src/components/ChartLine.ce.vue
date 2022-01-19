<template>
    <svg viewBox="0 0 150 150" class="chart">
      <polyline
        fill="url('#myGradient')"
        stroke="#0074d9"
        stroke-width="2"
        points="
          00,120
          20,60
          40,80
          60,20
          80,80
          100,100,
          120,120,
          140,10
        "
      />
    </svg>
</template>

<style>
.chart {
  background: white;
  width: 100%;
  height: 100px;
  border-left: 1px dotted #555;
  border-bottom: 1px dotted #555;
  padding: 20px 20px 20px 0;
}
</style>