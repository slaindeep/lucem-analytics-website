// Define shape coordinates for transformations
const Shapes = {
    // Logo shape - ascending line graph similar to Lucem logo
    logo: function(width, height) {
        const points = [];
        const steps = 30;
        for(let i = 0; i < steps; i++) {
            points.push({
                x: (width * 0.3) + (width * 0.4 * (i / steps)),
                y: height * 0.6 - (height * 0.3 * (i / steps))
            });
        }
        return points;
    },

    // Bar chart visualization
    barChart: function(width, height) {
        const points = [];
        const bars = 5;
        const barWidth = width * 0.5 / bars;
        
        for(let i = 0; i < bars; i++) {
            const barHeight = Math.random() * height * 0.4 + height * 0.2;
            for(let j = 0; j < 10; j++) {
                points.push({
                    x: width * 0.25 + i * barWidth + barWidth * 0.5,
                    y: height * 0.7 - (barHeight * j / 10)
                });
            }
        }
        return points;
    },

    // Scatter plot
    scatterPlot: function(width, height) {
        const points = [];
        for(let i = 0; i < 30; i++) {
            points.push({
                x: width * 0.25 + Math.random() * width * 0.5,
                y: height * 0.25 + Math.random() * height * 0.5
            });
        }
        return points;
    },

    // Pie chart
    pieChart: function(width, height) {
        const points = [];
        const centerX = width * 0.5;
        const centerY = height * 0.5;
        const radius = Math.min(width, height) * 0.3;
        
        for(let angle = 0; angle < Math.PI * 2; angle += 0.2) {
            points.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius
            });
        }
        return points;
    }
};