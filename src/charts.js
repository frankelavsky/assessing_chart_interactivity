props = {
    'line-chart': {
        mainTitle: 'Product A is trending up this year',
        subTitle: '(An example line chart that can be navigated with a keyboard and screen reader!)',
        valueAccessor: 'value',
        ordinalAccessor: 'date',
        seriesAccessor: 'category',
        uniqueID: 'line',
        padding: { top: 20, bottom: 20, left: 40, right: 80},
        margin: { top: 0, bottom: 40, left: 0, right: 0},
        colors: ["#fefeff"],
        yAxis: { label: "", visible: false, gridVisible: false },
        xAxis: { label: "", visible: true },
        showBaselineX: false,
        dataLabel: { visible: true, placement: "auto" },
        animationConfig: { disabled: true },
        highestHeadingLevel: 'h1',
        legend: {visible: false},
        accessibility: {
            elementDescriptionAccessor: "Note",
            longDescription:
              "This line chart is trending upwards.",
            executiveSummary:
              "We started the year with a value of 12, but now our product value has more than tripled, to 39 total.",
            elementsAreInterface: false,
            disableValidation: true,
            hideStrokes: false
        },
        data: [
        {
            value: 12,
            date: 'Jan',
            category: 'Product A'
        },
        {
            value: 13,
            date: 'Feb',
            category: 'Product A'
        },
        {
            value: 15,
            date: 'Mar',
            category: 'Product A'
        },
        {
            value: 14,
            date: 'Apr',
            category: 'Product A'
        },
        {
            value: 14,
            date: 'May',
            category: 'Product A'
        },
        {
            value: 18,
            date: 'Jun',
            category: 'Product A'
        },
        {
            value: 17,
            date: 'Jul',
            category: 'Product A'
        },
        {
            value: 19,
            date: 'Aug',
            category: 'Product A'
        },
        {
            value: 24,
            date: 'Sep',
            category: 'Product A'
        },
        {
            value: 23,
            date: 'Oct',
            category: 'Product A'
        },
        {
            value: 29,
            date: 'Nov',
            category: 'Product A'
        },
        {
            value: 39,
            date: 'Dec',
            category: 'Product A'
        }
        ]
  }
};

const chartConstructor = (chartTag, id) => {
  let chart = document.getElementById(id);
  if (!chart) {
    chart = document.createElement(chartTag);
  }
  Object.keys(props[chartTag]).forEach(prop => {
    chart[prop] = props[chartTag][prop];
  });
  return chart;
};
const line = chartConstructor('line-chart', props['line-chart'].uniqueID);

document.getElementById("line-insert").appendChild(line)

console.log('hi', line);
