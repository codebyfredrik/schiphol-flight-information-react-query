export const departureStatus = [
  {
    statusCode: 'SCH',
    status: 'Flight Scheduled',
    description:
      'Indicates when a Flight (created by the aircraft operator) is scheduled to take place.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'DEL',
    status: 'Delayed',
    description:
      'The deviation between the expected time of departure and the scheduled time exceeds 10 minutes.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'WIL',
    status: 'Wait in lounge',
    description:
      'Is a flight state that indicates that the gate for a departing flight at the M pier or H pier is not available yet for boarding. Passengers need to wait in the lounge.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'GTO',
    status: 'Gate open',
    description: 'When the gate is opened/released by the handler.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'BRD',
    status: 'Boarding',
    description: 'The actual boarding of the passengers starts.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'GCL',
    status: 'Gate closing',
    description: 'The actual boarding of the passengers starts.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'GTD',
    status: 'Gate closed',
    description: 'The actual boarding of the passengers starts.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'DEP',
    status: 'Departed',
    description: 'Departing aircraft is taxiing to the runway.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'CNX',
    status: 'Cancelled',
    description: 'A scheduled flight that will not be operated.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'GCH',
    status: 'Gate change',
    description:
      'The gate of departure for a scheduled flight changes to another gate.',
    backgroundColor: '#262b2f',
  },
  {
    statusCode: 'TOM',
    status: 'Tomorrow',
    description:
      'When the date of an expected departure exceeds the initial date.',
    backgroundColor: '#262b2f',
  },
];
