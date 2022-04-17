props = {
    'line-chart': {
        mainTitle: 'Product AC is trending up, Product AB is tanking',
        subTitle: 'Product AC initiated its launch with 12 clients and our internal marketing personnel cultivated 27 new acquisitions by the close of the calendar year. Product AB started with 42 clients and after a controversy in June, dropped to 4 by Decemeber.',
        valueAccessor: 'clients',
        ordinalAccessor: 'date',
        seriesAccessor: 'product',
        uniqueID: 'line',
        width: 795,
        height: 400,
        padding: { top: 20, bottom: 20, left: 40, right: 100},
        margin: { top: 0, bottom: 40, left: 0, right: 0},
        colors: ["#fefeff","#ffffff"],
        yAxis: { label: "", visible: false, gridVisible: false },
        xAxis: { label: "", visible: true },
        showBaselineX: false,
        dataLabel: { visible: true, placement: "auto" },
        animationConfig: { disabled: true },
        highestHeadingLevel: 'h1',
        legend: {visible: false},
        accessibility: {
            elementsAreInterface: false,
            disableValidation: true,
            hideStrokes: false
        },
        data: [
        {
            clients: 12,
            date: 'Jan',
            product: 'AC'
        },
        {
            clients: 13,
            date: 'Feb',
            product: 'AC'
        },
        {
            clients: 15,
            date: 'Mar',
            product: 'AC'
        },
        {
            clients: 14,
            date: 'Apr',
            product: 'AC'
        },
        {
            clients: 14,
            date: 'May',
            product: 'AC'
        },
        {
            clients: 16,
            date: 'Jun',
            product: 'AC'
        },
        {
            clients: 14,
            date: 'Jul',
            product: 'AC'
        },
        {
            clients: 17,
            date: 'Aug',
            product: 'AC'
        },
        {
            clients: 23,
            date: 'Sep',
            product: 'AC'
        },
        {
            clients: 22,
            date: 'Oct',
            product: 'AC'
        },
        {
            clients: 28,
            date: 'Nov',
            product: 'AC'
        },
        {
            clients: 39,
            date: 'Dec',
            product: 'AC'
        },
        {
            clients: 42,
            date: 'Jan',
            product: 'AB'
        },
        {
            clients: 44,
            date: 'Feb',
            product: 'AB'
        },
        {
            clients: 46,
            date: 'Mar',
            product: 'AB'
        },
        {
            clients: 48,
            date: 'Apr',
            product: 'AB'
        },
        {
            clients: 51,
            date: 'May',
            product: 'AB'
        },
        {
            clients: 50,
            date: 'Jun',
            product: 'AB'
        },
        {
            clients: 37,
            date: 'Jul',
            product: 'AB'
        },
        {
            clients: 24,
            date: 'Aug',
            product: 'AB'
        },
        {
            clients: 17,
            date: 'Sep',
            product: 'AB'
        },
        {
            clients: 11,
            date: 'Oct',
            product: 'AB'
        },
        {
            clients: 6,
            date: 'Nov',
            product: 'AB'
        },
        {
            clients: 4,
            date: 'Dec',
            product: 'AB'
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
