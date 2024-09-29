declare module './data' {
  const data: Data; 
}

interface Data {
  [category: string]: {
    cities: string[]; 
    events: { [city: string]: string[] }; 
    dates: { [event: string]: Date[] }; 
  };
}

const data: Data = {
  Music: {
    cities: ['New York', 'Los Angeles'],
    events: {
      'New York': ['Concert A', 'Concert B'],
      'Los Angeles': ['Concert C', 'Concert D'],
    },
    dates: {
      'Concert A': [new Date('2024-10-01'), new Date('2024-10-02')],
      'Concert B': [new Date('2024-10-03'), new Date('2024-10-04')],
      'Concert C': [new Date('2024-10-05'), new Date('2024-10-06')],
      'Concert D': [new Date('2024-10-07'), new Date('2024-10-08')],
    },
  },
  Sports: {
    cities: ['Chicago', 'Miami'],
    events: {
      'Chicago': ['Game A', 'Game B'],
      'Miami': ['Game C', 'Game D'],
    },
    dates: {
      'Game A': [new Date('2024-11-01'), new Date('2024-11-02')],
      'Game B': [new Date('2024-11-03'), new Date('2024-11-04')],
      'Game C': [new Date('2024-11-05'), new Date('2024-11-06')],
      'Game D': [new Date('2024-11-07'), new Date('2024-11-08')],
    },
  },
  Arts: {
    cities: ['Paris', 'Rome'],
    events: {
      'Paris': ['Exhibition A', 'Exhibition B'],
      'Rome': ['Exhibition C', 'Exhibition D'],
    },
    dates: {
      'Exhibition A': [new Date('2024-12-01'), new Date('2024-12-02')],
      'Exhibition B': [new Date('2024-12-03'), new Date('2024-12-04')],
      'Exhibition C': [new Date('2024-12-05'), new Date('2024-12-06')],
      'Exhibition D': [new Date('2024-12-07'), new Date('2024-12-08')],
    },
  },
};

export default data;