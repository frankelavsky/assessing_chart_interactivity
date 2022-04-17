props = {
  'line-chart': {
    mainTitle: 'Product AC is trending up, Product AB is tanking',
    subTitle:
      'Product AC initiated its launch with 12 clients and our internal marketing personnel cultivated 27 new acquisitions by the close of the calendar year. Product AB started with 42 clients and after a controversy in June, dropped to 4 by Decemeber.',
    valueAccessor: 'clients',
    ordinalAccessor: 'date',
    seriesAccessor: 'product',
    uniqueID: 'line',
    width: 795,
    height: 400,
    padding: { top: 20, bottom: 20, left: 40, right: 100 },
    margin: { top: 0, bottom: 40, left: 0, right: 0 },
    colors: ['#fefeff', '#ffffff'],
    yAxis: { label: '', visible: false, gridVisible: false },
    xAxis: { label: '', visible: true },
    showBaselineX: false,
    dataLabel: { visible: true, placement: 'auto' },
    animationConfig: { disabled: true },
    highestHeadingLevel: 'h1',
    legend: { visible: false },
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

document.getElementById('line-insert').appendChild(line);

console.log('Hi! Welcome to our testing environment. :)');

let currentEvent = [{}];
const monitorAllEvents = element => {
  const log = e => {
    const keyMap = {
      shift: 'Shift',
      Shift: 'Shift',
      SHIFT: 'Shift',
      control: 'Control',
      Control: 'Control',
      CONTROL: 'Control',
      alt: 'Alt',
      Alt: 'Alt',
      ALT: 'Alt',
      meta: 'Command',
      Meta: 'Command',
      META: 'Command'
    };
    const isValid = keyLiteral => {
      return !(
        keyLiteral === 'shift' ||
        keyLiteral === 'Shift' ||
        keyLiteral === 'SHIFT' ||
        keyLiteral === 'control' ||
        keyLiteral === 'Control' ||
        keyLiteral === 'CONTROL' ||
        keyLiteral === 'alt' ||
        keyLiteral === 'Alt' ||
        keyLiteral === 'ALT' ||
        keyLiteral === 'meta' ||
        keyLiteral === 'Meta' ||
        keyLiteral === 'META'
      );
    };
    if (e.key && e.type === 'keyup' && isValid(e.key)) {
      let key = e.key;
      if (key === ' ') {
        key = 'Spacebar';
      }
      if (currentEvent[0].key === key) {
        currentEvent[0].rawCount++;
      } else {
        currentEvent.pop();
        currentEvent.push({
          key,
          count: 1,
          rawCount: 1
        });
      }
      // if ((currentEvent[0].key === 'Spacebar' || currentEvent[0].key === 'tab' || currentEvent[0].key === 'TAB' || currentEvent[0].key === 'Tab') && !(currentEvent[0].rawCount % 2)) {
      //     console.log("hehe")
      //     currentEvent[0].count = currentEvent[0].rawCount/2
      // } else {
      currentEvent[0].count = currentEvent[0].rawCount;
      // }
      document.getElementById('keyboard-log').innerText = currentEvent[0].key;
      document.getElementById('count').innerText = ` x ${currentEvent[0].count}`;
    } else if (e.key && (e.type === 'keyup' || e.type === 'keydown')) {
      const target = document.getElementById(keyMap[e.key]);
      if (target) {
        target.classList[e.type === 'keyup' ? 'add' : 'remove']('hidden');
      }
    }
  };
  var events = [];

  for (var i in element) {
    if (i.startsWith('on')) events.push(i.substr(2));
  }
  events.forEach(function (eventName) {
    element.addEventListener(eventName, log);
  });
};
monitorAllEvents(window);
