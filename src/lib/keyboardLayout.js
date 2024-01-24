

const layout = [
    {
      label: "abc",
      layers: [
        {
          style: ".digit { background: blue; color: white }",
          rows: [
            [{label: 'Math', width: 2, class: 'digit', command: ['switchMode', 'math']},
            {label: 'Text', width: 2, class: 'digit', command: ['switchMode', 'text']},
            {label: '\\', class: 'digit', command: ['switchMode', 'latex']},
          ],
            '1234567890'.split('').map(ch => `[${ch}]`),
            'qwertyuiop'.split('').map(ch => ({key: ch, shift: ch.toUpperCase()})),
            'asdfghjkl'.split('').map(ch => ({key: ch, shift: ch.toUpperCase()})),
            ['[shift]', 'zxcvbnm'.split('').map(ch => ({key: ch, shift: ch.toUpperCase()})), '[backspace]'].flat(1),
            [
             {label: ' ', width: 2}, ',','.',
             
             '[return]'],
          ],
          
        },
      ],
    },
  ];

  export default layout