let currentEvent = [{}];
let charts = {};
let hidden = true;
const accessibilityConfig = {
  good: {
    elementsAreInterface: false,
    disableValidation: true,
    includeDataKeyNames: true,
    onChangeFunc: () => {
      monitorControllerNodes();
      cleanup()
      document.querySelector('data-table').classList.remove('hidden');
    }
  },
  bad: {
    elementsAreInterface: false,
    disableValidation: true,
    hideTextures: true,
    keyboardNavConfig: {
      disabled: true
    },
    hideDataTableButton: true,
    title: 'chart',
    executiveSummary: '.',
    onChangeFunc: () => {
      document.querySelectorAll('h3, h4, .vcl-region-label').forEach(h => {
        h.remove();
      });
      cleanup()
      document.querySelector('data-table').classList.add('hidden');
      monitorControllerNodes();
    }
  }
};
const monitorAllEvents = (element, limited) => {
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
    const isCapsLock = keyLiteral => {
      return keyLiteral === 'capslock' || keyLiteral === 'CapsLock' || keyLiteral === 'CAPSLOCK';
    };
    if (!limited && e.key && isValid(e.key) && (e.type === 'keyup' || (e.type === 'keydown' && isCapsLock(e.key)))) {
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
      currentEvent[0].count = currentEvent[0].rawCount;
      if (hidden) {
        hidden = false;
        document.getElementById('keyboard-log').classList.remove('hidden');
      }
      document.getElementById('keyboard-log').innerText = currentEvent[0].key;
      document.getElementById('count').innerText = ` x ${currentEvent[0].count}`;
    } else if (e.key && (e.type === 'keyup' || e.type === 'keydown')) {
      document.querySelectorAll(`.${keyMap[e.key]}`).forEach(target => {
        if (target) {
          target.classList[e.type === 'keyup' ? 'add' : 'remove']('hidden');
        }
      });
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

const monitorControllerNodes = () => {
  const nodes = document.getElementById('chart-area-line').querySelectorAll('div');
  nodes.forEach(node => {
    monitorAllEvents(node, true);
  });
};
props = {
  'line-chart': {
    mainTitle: 'Product AC is trending up, Product AB is tanking',
    subTitle:
      'Product AC initiated its launch with 12 clients and our internal marketing personnel cultivated 27 new acquisitions by the close of the calendar year. Product AB started with 42 clients and after a controversy in June, dropped to 4 by December.',
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
    accessibility: accessibilityConfig.good,
    data: [
      {
        clients: 12,
        date: 'Jan.',
        product: 'AC'
      },
      {
        clients: 13,
        date: 'Feb.',
        product: 'AC'
      },
      {
        clients: 15,
        date: 'Mar.',
        product: 'AC'
      },
      {
        clients: 14,
        date: 'Apr.',
        product: 'AC'
      },
      {
        clients: 14,
        date: 'May',
        product: 'AC'
      },
      {
        clients: 16,
        date: 'Jun.',
        product: 'AC'
      },
      {
        clients: 14,
        date: 'Jul.',
        product: 'AC'
      },
      {
        clients: 17,
        date: 'Aug.',
        product: 'AC'
      },
      {
        clients: 23,
        date: 'Sep.',
        product: 'AC'
      },
      {
        clients: 22,
        date: 'Oct.',
        product: 'AC'
      },
      {
        clients: 28,
        date: 'Nov.',
        product: 'AC'
      },
      {
        clients: 39,
        date: 'Dec.',
        product: 'AC'
      },
      {
        clients: 42,
        date: 'Jan.',
        product: 'AB'
      },
      {
        clients: 44,
        date: 'Feb.',
        product: 'AB'
      },
      {
        clients: 46,
        date: 'Mar.',
        product: 'AB'
      },
      {
        clients: 48,
        date: 'Apr.',
        product: 'AB'
      },
      {
        clients: 51,
        date: 'May',
        product: 'AB'
      },
      {
        clients: 50,
        date: 'Jun.',
        product: 'AB'
      },
      {
        clients: 37,
        date: 'Jul.',
        product: 'AB'
      },
      {
        clients: 24,
        date: 'Aug.',
        product: 'AB'
      },
      {
        clients: 17,
        date: 'Sep.',
        product: 'AB'
      },
      {
        clients: 11,
        date: 'Oct.',
        product: 'AB'
      },
      {
        clients: 6,
        date: 'Nov.',
        product: 'AB'
      },
      {
        clients: 4,
        date: 'Dec.',
        product: 'AB'
      }
    ]
  }
};

events = {
  'line-chart': {
    hoverEvent: d => {
      charts['line-chart'].hoverHighlight = d;
    },
    mouseOutEvent: () => {
      charts['line-chart'].hoverHighlight = '';
    }
  }
};
const chartConstructor = (chartTag, id) => {
  charts[chartTag] = document.getElementById(id);
  if (!charts[chartTag]) {
    charts[chartTag] = document.createElement(chartTag);
  }
  Object.keys(props[chartTag]).forEach(prop => {
    charts[chartTag][prop] = props[chartTag][prop];
  });
  Object.keys(events[chartTag]).forEach(event => {
    charts[chartTag].addEventListener(event, events[chartTag][event]);
  });
};
function toggleAccessibility(e) {
  charts['line-chart'].accessibility = accessibilityConfig[e.target.checked ? 'bad' : 'good'];
  charts['line-chart'].suppressEvents = e.target.checked;
  if (e.target.checked) {
    document.getElementById("static-image").setAttribute("alt","image")
  } else {
    document.getElementById("static-image").setAttribute("alt","Product AC is trending up, Product AB is tanking. Line chart with two lines, starting in Jan. and ending in Dec. Long description: Product AC initiated its launch with 12 clients and our internal marketing personnel cultivated 27 new acquisitions by the close of the calendar year. Product AB started with 42 clients and after a controversy in June, dropped to 4 by December.")
  }
}
function toggleVoiceOver(e) {
  if (e.target.checked) {
    document.getElementById('Control').classList.add('Alt');
    document.getElementById('Alt').classList.add('Control');
  } else {
    document.getElementById('Control').classList.remove('Alt');
    document.getElementById('Alt').classList.remove('Control');
  }
}
function toggleChart(e) {
  document.getElementById("alt-checkbox").disabled = !e.target.checked

  document.getElementById("static-chart").classList[e.target.checked ? 'add' : 'remove']("hidden")
  document.getElementById("static-chart")[e.target.checked ? 'setAttribute' : 'removeAttribute']("role", "presentation")

  document.getElementById("interactive-chart").classList[!e.target.checked ? 'add' : 'remove']("hidden")
  document.getElementById("interactive-chart")[!e.target.checked ? 'setAttribute' : 'removeAttribute']("role", "presentation")
}
function toggleAlt(e) {
  document.querySelectorAll('.screen-reader-info, .vcl-accessibility-instructions').forEach(d => d.classList[e.target.checked ? 'add' : 'remove']('sr-override'))
}

const cleanup = ()=> {
  document.getElementById("chart-instructions-line").querySelectorAll('p, h3, h4').forEach(p => p.classList[!p.innerText ? 'add' : 'remove']('hidden'));
  toggleAlt({target:{checked: document.getElementById('alt-checkbox').checked}})
}

document.getElementById('alt-checkbox').addEventListener('change', toggleAlt);
document.getElementById('chart-checkbox').addEventListener('change', toggleChart);
document.getElementById('voiceover-checkbox').addEventListener('change', toggleVoiceOver);
document.getElementById('accessibility-checkbox').addEventListener('change', toggleAccessibility);
chartConstructor('line-chart', props['line-chart'].uniqueID);
document.getElementById('line-insert').appendChild(charts['line-chart']);
if (navigator.platform.indexOf('Mac') === 0 || navigator.platform === 'iPhone') {
  document.getElementById('Alt').querySelector('kbd').innerText = 'Option';
}
monitorAllEvents(window);
console.log('Hi! Welcome to our testing environment. :)');
